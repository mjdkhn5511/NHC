export interface InquirySubmission {
  fullName: string;
  email: string;
  callingCode: string;
  phone: string;
  country: string;
  treatment: string;
  preferredCity: string;
  message: string;
  file?: File | null;
}

export interface InquiryResult {
  success: boolean;
  ticketId: string;
  savedToSupabase: boolean;
  error?: string;
}

/**
 * Submits patient consultation lead to Supabase (and archives locally for redundancy).
 */
export async function submitPatientInquiry(data: InquirySubmission): Promise<InquiryResult> {
  const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `NHC-${new Date().getFullYear()}-${randomTicketNum}`;

  let reportFileUrl: string | null = null;
  let reportFileName: string | null = data.file ? data.file.name : null;
  let savedToSupabase = false;

  // Dynamically load Supabase only when user submits form (keeps initial bundle small & fast)
  const { supabase, isSupabaseConfigured } = await import("../lib/supabase");

  // 1. If Supabase is connected, attempt cloud upload & database write
  if (isSupabaseConfigured() && supabase) {
    try {
      // Step A: Upload report file if attached
      if (data.file) {
        const safeName = data.file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filePath = `${ticketId}/${Date.now()}_${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from("medical-reports")
          .upload(filePath, data.file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (!uploadError) {
          const { data: publicData } = supabase.storage
            .from("medical-reports")
            .getPublicUrl(filePath);
          reportFileUrl = publicData?.publicUrl || null;
        } else {
          console.warn("Medical report upload to Supabase Storage notice:", uploadError.message);
        }
      }

      // Step B: Insert row in patient_inquiries table
      const { error: insertError } = await supabase
        .from("patient_inquiries")
        .insert([
          {
            ticket_id: ticketId,
            full_name: data.fullName,
            email: data.email,
            calling_code: data.callingCode,
            phone: data.phone,
            country: data.country,
            treatment: data.treatment,
            preferred_city: data.preferredCity,
            message: data.message ? data.message.trim() : "",
            report_file_url: reportFileUrl,
            report_file_name: reportFileName,
            status: "new",
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        console.error("Supabase patient_inquiries insert error:", insertError);
      } else {
        savedToSupabase = true;
      }
    } catch (supabaseErr) {
      console.warn("Supabase connection exception:", supabaseErr);
    }
  }

  // 2. Always store local fallback archive so no inquiry is ever lost
  try {
    const localBackup = {
      ticketId,
      ...data,
      file: undefined,
      fileName: reportFileName,
      reportFileUrl,
      savedToSupabase,
      submittedAt: new Date().toISOString(),
    };
    const stored = JSON.parse(localStorage.getItem("nhc_patient_inquiries") || "[]");
    stored.push(localBackup);
    localStorage.setItem("nhc_patient_inquiries", JSON.stringify(stored));
  } catch (err) {
    console.warn("LocalStorage backup write error:", err);
  }

  return {
    success: true,
    ticketId,
    savedToSupabase,
  };
}

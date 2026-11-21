import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, UploadCloud, FileText, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { treatmentsData } from "../data/treatmentsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { submitPatientInquiry } from "../services/inquiryService";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedTreatment } from "../utils/localizedData";

interface EnquiryFormData {
  fullName: string;
  email: string;
  country: string;
  callingCode: string;
  phone: string;
  treatment: string;
  preferredCity: string;
  message: string;
  consent: boolean;
  honeypot: string; // Spam protection
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  phone?: string;
  treatment?: string;
  message?: string;
  consent?: string;
  file?: string;
}

const commonCountryCodes = [
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "United States / Canada", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
];

export const EnquiryForm: React.FC<{
  preselectedTreatment?: string;
  onSuccessClose?: () => void;
  compact?: boolean;
}> = ({ preselectedTreatment, onSuccessClose, compact = false }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    email: "",
    country: "United Arab Emirates",
    callingCode: "+971",
    phone: "",
    treatment: preselectedTreatment || "",
    preferredCity: "Delhi NCR (Any Premier Hospital)",
    message: "",
    consent: true,
    honeypot: ""
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    ticketId: string;
    submittedAt: string;
  } | null>(null);

  const { currentLang, t, isRTL } = useLanguage();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Please provide your full legal name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Patient country of residence is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.treatment) {
      newErrors.treatment = "Please select a medical treatment category";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to medical coordination data handling";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 15MB limit
      if (file.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: "File exceeds 15MB limit. Please compress or send via WhatsApp." }));
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn("Spam bot detected.");
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitPatientInquiry({
        fullName: formData.fullName,
        email: formData.email,
        callingCode: formData.callingCode,
        phone: formData.phone,
        country: formData.country,
        treatment: formData.treatment,
        preferredCity: formData.preferredCity,
        message: formData.message,
        file: selectedFile,
      });

      setSubmissionSuccess({
        ticketId: result.ticketId,
        submittedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      });
    } catch {
      setErrors({ message: "Network connection error. Please try again or message us on WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppForward = () => {
    if (!submissionSuccess) return;
    const notesText = formData.message.trim() ? formData.message : "None provided";
    const msg = `*New Medical Inquiry - Ticket #${submissionSuccess.ticketId}*\n*Name:* ${formData.fullName}\n*Country:* ${formData.country}\n*Phone:* ${formData.callingCode} ${formData.phone}\n*Treatment:* ${formData.treatment}\n*Notes:* ${notesText}`;
    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // SUCCESS STATE
  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-teal-100 shadow-xl">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full mb-2">
          Inquiry Successfully Logged
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Thank You, {formData.fullName}!
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
          Your medical assistance enquiry has been registered under Reference ID:
        </p>

        <div className="my-4 py-3 px-4 bg-teal-50 border border-teal-200 rounded-xl max-w-xs mx-auto">
          <span className="text-xs text-teal-700 block font-medium">Inquiry Reference Number</span>
          <span className="text-lg font-black text-[#08221E] tracking-wider">
            {submissionSuccess.ticketId}
          </span>
        </div>

        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          An NHC medical travel coordinator will review your clinical requirements and contact you via{" "}
          <strong>{formData.email}</strong> or WhatsApp (<strong>{formData.callingCode} {formData.phone}</strong>) within 24 hours.
        </p>

        {/* Accelerated WhatsApp Hand-off */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleWhatsAppForward}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Fast-Track on WhatsApp Now
          </button>
          {onSuccessClose && (
            <button
              onClick={onSuccessClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`} noValidate>
      {/* Hidden honeypot for anti-spam */}
      <input
        type="text"
        name="website_nhc_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Full Name */}
      <div>
        <label htmlFor="enquiry-fullName" className="block text-xs font-semibold text-slate-700 mb-1">
          {t("form.fullName", "Name")} <span className="text-red-500">*</span>
        </label>
        <input
          id="enquiry-fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder={t("form.fullNamePlaceholder", "Enter your full name")}
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.fullName
              ? "border-red-400 focus:ring-red-200"
              : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
          }`}
          required
        />
        {errors.fullName && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Email & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="enquiry-email" className="block text-xs font-semibold text-slate-700 mb-1">
            {t("form.email", "Email")} <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("form.emailPlaceholder", "your.email@example.com")}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
            }`}
            required
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-country" className="block text-xs font-semibold text-slate-700 mb-1">
            {t("form.country", "Country")} <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-country"
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder={t("form.countryPlaceholder", "e.g. UAE, Oman, Uzbekistan")}
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
              if (errors.country) setErrors({ ...errors, country: undefined });
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.country
                ? "border-red-400 focus:ring-red-200"
                : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
            }`}
            required
          />
          {errors.country && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.country}
            </p>
          )}
        </div>
      </div>

      {/* Phone with Country Code Selector */}
      <div>
        <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-slate-700 mb-1">
          {t("form.phone", "Number")} <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <label htmlFor="enquiry-callingCode" id="enquiry-callingCode-label" className="sr-only">
            {t("form.callingCode", "Country Calling Code")}
          </label>
          <select
            id="enquiry-callingCode"
            name="callingCode"
            aria-label="Country Calling Code"
            aria-labelledby="enquiry-callingCode-label"
            value={formData.callingCode}
            onChange={(e) => setFormData({ ...formData, callingCode: e.target.value })}
            className="w-32 px-2 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-100 shrink-0"
          >
            {commonCountryCodes.map((item) => (
              <option key={item.code + item.country} value={item.code}>
                {item.flag} {item.code} ({item.country})
              </option>
            ))}
          </select>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t("form.phonePlaceholder", "Mobile / WhatsApp number")}
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            className={`flex-1 px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-400 focus:ring-red-200"
                : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
            }`}
            required
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Treatment Dropdown */}
      <div>
        <label htmlFor="enquiry-treatment" className="block text-xs font-semibold text-slate-700 mb-1">
          {t("form.treatment", "Treatment Required")} <span className="text-red-500">*</span>
        </label>
        <select
          id="enquiry-treatment"
          name="treatment"
          value={formData.treatment}
          onChange={(e) => {
            setFormData({ ...formData, treatment: e.target.value });
            if (errors.treatment) setErrors({ ...errors, treatment: undefined });
          }}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.treatment
              ? "border-red-400 focus:ring-red-200"
              : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
          }`}
          required
        >
          <option value="">{t("form.selectSpecialty", "-- Select Specialty --")}</option>
          {treatmentsData.map((tItem) => {
            const locT = getLocalizedTreatment(tItem, currentLang);
            return (
              <option key={tItem.id} value={tItem.title}>
                {locT.title}
              </option>
            );
          })}
          <option value="Other Medical Condition">{t("form.otherCondition", "Other Medical Condition")}</option>
        </select>
        {errors.treatment && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.treatment}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="enquiry-message" className="block text-xs font-semibold text-slate-700 mb-1">
          {t("form.message", "Medical Concerns & Clinical History")} <span className="text-slate-600 font-normal">{t("form.messageOptional", "(Optional)")}</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder={t("form.messagePlaceholder", "Briefly describe patient's diagnosis or specific treatment requested...")}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.message
              ? "border-red-400 focus:ring-red-200"
              : "border-slate-300 focus:border-teal-500 focus:ring-teal-100"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>

      {/* Optional Medical Report Attachment */}
      <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
        <div className="text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
          <span>{t("form.attachReports", "Attach Diagnostic Reports (Optional)")}</span>
          <span className="text-[11px] font-normal text-slate-600">{t("form.attachMaxInfo", "PDF, JPG, PNG, ZIP (Max 15MB)")}</span>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="enquiry-medicalReports" className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors shadow-sm">
            <UploadCloud className="w-4 h-4 text-teal-700" />
            <span>{selectedFile ? t("form.replaceFile", "Replace File") : t("form.chooseFile", "Choose File")}</span>
            <input
              id="enquiry-medicalReports"
              name="medicalReports"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.zip"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {selectedFile ? (
            <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium truncate">
              <FileText className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span className="truncate">{selectedFile.name}</span>
              <span className="text-slate-600">({(selectedFile.size / 1024 / 1024).toFixed(1)} MB)</span>
            </div>
          ) : (
            <span className="text-xs text-slate-600 italic">{t("form.noFileSelected", "No file selected yet")}</span>
          )}
        </div>
        {errors.file && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.file}
          </p>
        )}
      </div>

      {/* Privacy & Medical Consent */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="nhc-consent"
          checked={formData.consent}
          onChange={(e) => {
            setFormData({ ...formData, consent: e.target.checked });
            if (errors.consent) setErrors({ ...errors, consent: undefined });
          }}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-500"
        />
        <label htmlFor="nhc-consent" className="text-[11.5px] text-slate-600 leading-snug">
          {t("form.consentText", "I consent to NadwaHealthcare sharing my submitted medical records securely with accredited hospital partner specialists in India solely for the purpose of obtaining treatment estimates and medical opinions.")}
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
        </p>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:bg-slate-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-teal-600/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-teal-200"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              {t("form.submitting", "Submitting Your Inquiry...")}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {t("form.submit", "Send Consultation Request")}
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600 pt-1">
        <ShieldCheck className="w-4 h-4 text-teal-700" />
        <span>100% Confidential • Zero NHC Coordination Fee • Response within 24 Hours</span>
      </div>
    </form>
  );
};

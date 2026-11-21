// Central Site Configuration for NadwaHealthcare (NHC)
// Medical Tourism & International Patient Care Services

export interface SiteConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  emergencyDesk: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    regionFocus: string;
  };
  officeHours: string;
  workingDays: string;
  languagesSupported: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
  meta: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "NadwaHealthcare",
  shortName: "NHC",
  tagline: "World-Class Medical Treatment in India for International Patients",
  subTagline: "Your trusted medical travel companion for premier hospital selection, doctor coordination, and personalized care across Delhi NCR and India.",
  phone: "+919648578320",
  phoneDisplay: "+91 96485 78320",
  whatsappNumber: "919648578320", // Configurable WhatsApp Business number
  whatsappDisplay: "+91 96485 78320",
  email: "info@nadwahealthcare.com",
  emergencyDesk: "+91 96485 78320",
  address: {
    street: "Level 4, Jasola District Centre, Shaheen Bagh",
    city: "New Delhi",
    state: "Delhi NCR",
    country: "India",
    postalCode: "110025",
    regionFocus: "Delhi NCR (New Delhi, Gurugram, Noida, Faridabad)",
  },
  officeHours: "24/7 International Patient Desk",
  workingDays: "Monday to Sunday (All 365 Days)",
  languagesSupported: ["English", "Arabic (العربية)", "French (Français)", "Russian (Русский)", "Hindi (हिन्दी)"],
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61595963652378",
    instagram: "https://www.instagram.com/nadwahealthcare/",
    linkedin: "https://linkedin.com/company/nadwahealthcare",
    youtube: "https://youtube.com/@nadwahealthcare",
  },
  meta: {
    siteUrl: "https://www.nadwahealthcare.com",
    defaultTitle: "Medical Tourism in India | NadwaHealthcare (NHC)",
    defaultDescription: "Explore medical treatment options in India with NadwaHealthcare. Get assistance with hospital selection, doctor coordination, treatment estimates and international patient services.",
  },
};

export const getWhatsAppUrl = (message?: string): string => {
  const defaultMsg = encodeURIComponent(
    "Hello NadwaHealthcare, I am seeking medical treatment in India. Please guide me through hospital and doctor options."
  );
  const text = message ? encodeURIComponent(message) : defaultMsg;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};

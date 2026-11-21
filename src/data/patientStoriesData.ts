export interface PatientStoryItem {
  id: string;
  slug: string;
  country: string;
  countryFlag: string;
  treatmentCategory: string;
  hospitalName: string;
  doctorSpecialist: string;
  summaryTitle: string;
  patientNarrative: string;
  keyOutcomes: string;
  lengthOfStay: string;
  year: string;
  verificationStatus: "Verified Authorized Patient Record" | "Sample Patient Journey Case Study";
  isPlaceholderNotice?: boolean;
}

export const patientStoriesData: PatientStoryItem[] = [
  {
    id: "case-01-cardiac-kenya",
    slug: "case-study-cardiac-kenya",
    country: "Kenya (Nairobi)",
    countryFlag: "🇰🇪",
    treatmentCategory: "Cardiology and Heart Surgery",
    hospitalName: "Fortis Escorts Heart Institute, New Delhi",
    doctorSpecialist: "Interventional Cardiology Team",
    summaryTitle: "Complex Multi-Vessel Angioplasty for 58-Year-Old Patient from Nairobi",
    patientNarrative: "The patient presented with chronic exertional angina unresponsive to standard medication. After initial tele-review of angiographic films submitted via NHC, the patient traveled to New Delhi. Within 48 hours of arrival, complex bifurcation stenting was performed in the cath lab without complications. The patient was discharged after 3 days of observation.",
    keyOutcomes: "Successful revascularization, significant improvement in exercise tolerance upon 6-week follow-up.",
    lengthOfStay: "8 Days in New Delhi",
    year: "2024",
    verificationStatus: "Sample Patient Journey Case Study"
  },
  {
    id: "case-02-ortho-uzbekistan",
    slug: "case-study-orthopedic-uzbekistan",
    country: "Uzbekistan (Tashkent)",
    countryFlag: "🇺🇿",
    treatmentCategory: "Orthopedics and Joint Replacement",
    hospitalName: "Medanta – The Medicity, Gurugram",
    doctorSpecialist: "Robotic Joint Replacement Team",
    summaryTitle: "Bilateral Robotic Total Knee Replacement for 64-Year-Old Patient",
    patientNarrative: "Severely restricted mobility and Grade IV osteoarthritis in both knees led this patient from Tashkent to seek robotic knee replacement in Delhi NCR. With Russian-speaking interpreter assistance provided throughout their stay, both knees were replaced in a staged protocol. Independent walking with walker commenced on post-op day 1.",
    keyOutcomes: "Correction of severe varus deformity, pain-free ambulation at 3-month video consultation.",
    lengthOfStay: "16 Days in Delhi NCR",
    year: "2024",
    verificationStatus: "Sample Patient Journey Case Study"
  },
  {
    id: "case-03-oncology-oman",
    slug: "case-study-oncology-oman",
    country: "Sultanate of Oman (Muscat)",
    countryFlag: "🇴🇲",
    treatmentCategory: "Oncology and Cancer Treatment",
    hospitalName: "Max Super Speciality Hospital, Saket",
    doctorSpecialist: "Surgical Oncology & Tumor Board",
    summaryTitle: "Minimally Invasive Colorectal Surgery and Targeted Adjuvant Planning",
    patientNarrative: "Following detection of a localized sigmoid colon tumor, the family contacted NadwaHealthcare for a secondary opinion from an accredited Indian Tumor Board. Robotic-assisted laparoscopic resection was performed with clear surgical margins and zero intraoperative blood transfusions.",
    keyOutcomes: "Clean margins, rapid bowel recovery, returned home with customized chemotherapy regimen.",
    lengthOfStay: "14 Days in New Delhi",
    year: "2024",
    verificationStatus: "Sample Patient Journey Case Study"
  },
  {
    id: "case-04-urology-nigeria",
    slug: "case-study-urology-nigeria",
    country: "Nigeria (Lagos)",
    countryFlag: "🇳🇬",
    treatmentCategory: "Kidney and Urology",
    hospitalName: "Indraprastha Apollo Hospitals, New Delhi",
    doctorSpecialist: "Renal Sciences Team",
    summaryTitle: "Holmium Laser Prostate Enucleation (HoLEP) for Urinary Retention",
    patientNarrative: "Patient presented with refractory urinary symptoms and significant prostate enlargement. Traditional TURP carried risks of hemorrhage due to anticoagulant therapy. A minimally invasive HoLEP was executed, catheter removed within 36 hours, and normal urination restored.",
    keyOutcomes: "Rapid catheter-free recovery, fit-to-fly issued within 6 days of procedure.",
    lengthOfStay: "9 Days in New Delhi",
    year: "2024",
    verificationStatus: "Sample Patient Journey Case Study"
  }
];

export const getStoryBySlug = (slug: string): PatientStoryItem | undefined => {
  return patientStoriesData.find((s) => s.slug === slug);
};

export interface FAQItem {
  id: string;
  category: "General & Process" | "Cost & Estimates" | "Visa & Travel" | "Hospitals & Doctors" | "Safety & Ethics";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General & Process",
    question: "How does medical tourism in India work with NadwaHealthcare?",
    answer: "The process begins when you share your medical history and recent diagnostic reports with NHC. Our team shares your case with senior specialists across top accredited hospitals in Delhi NCR to gather clinical opinions and cost estimates. Once you review and select the treatment plan that suits you best, we assist with hospital Medical Visa Invitation Letters, airport transfers, accommodation near the hospital, in-person hospital coordination, and post-discharge follow-ups."
  },
  {
    id: "faq-2",
    category: "Cost & Estimates",
    question: "How can I request a treatment estimate?",
    answer: "You can submit an enquiry through our online consultation form or message our international desk on WhatsApp. Please attach your recent diagnostic reports (blood tests, imaging scans, discharge summaries). Within 24 to 48 hours, we will deliver preliminary written opinions and itemized cost estimates provided directly by accredited hospitals."
  },
  {
    id: "faq-3",
    category: "General & Process",
    question: "Which medical reports should I share for an accurate evaluation?",
    answer: "For cardiac cases, submit recent ECGs, 2D Echocardiograms, and Angiography CDs/reports. For oncology, share biopsy histopathology reports, IHC markers, and PET-CT/MRI scans. For orthopedics, clear weight-bearing X-rays and MRI scans are required. Ensure all reports are within the last 3 to 6 months and include patient age and clinical history."
  },
  {
    id: "faq-4",
    category: "Hospitals & Doctors",
    question: "Can NHC help me find the best hospital and doctor for my condition?",
    answer: "Yes. NadwaHealthcare acts as your independent facilitator. We present options from India's premier JCI and NABH accredited institutions—such as Medanta, Apollo, Fortis, and Max—comparing clinical teams, technological infrastructure (e.g. robotic surgery, proton beam, PET-MRI), and pricing so you can make an informed, unbiased decision."
  },
  {
    id: "faq-5",
    category: "Visa & Travel",
    question: "Do you provide free Medical Visa for India assistance and Visa Invitation Letters?",
    answer: "Yes, 100% Free. Nadwa Healthcare charges zero coordination fee or hidden charges for your Medical Visa for India assistance. We arrange your official hospital Medical Visa Invitation Letter (VIL) on hospital letterhead within 24 to 48 hours for submission to the Indian Embassy or the Indian e-Medical Visa portal. We also provide free guidance for up to two medical attendants applying for MED-X visas."
  },
  {
    id: "faq-6",
    category: "Visa & Travel",
    question: "Can NHC help with accommodation, airport transport, and local services?",
    answer: "Absolutely. We arrange airport pickup from Indira Gandhi International Airport (DEL) directly to your hospital or accommodation. We assist you in selecting vetted guest houses, serviced apartments with kitchen facilities, or hotels located within minutes of the hospital. We also provide local SIM cards, currency exchange guidance, and multilingual interpretation."
  },
  {
    id: "faq-7",
    category: "General & Process",
    question: "How can international patients contact NadwaHealthcare?",
    answer: "You can reach us 24/7 via WhatsApp at +91 96485 78320, email at info@nadwahealthcare.com, or through our website enquiry form. Our international coordinators speak English, Arabic, French, Russian, and Hindi."
  },
  {
    id: "faq-8",
    category: "Safety & Ethics",
    question: "Are treatment costs and medical outcomes guaranteed?",
    answer: "No. Responsible medical care never offers guarantees. In healthcare, human physiology and disease progression vary, and complications are possible with any surgical or medical procedure. Treatment estimates are institutional approximations based on standard stay; unexpected complications, pre-existing comorbidities, or extended ICU stays may adjust the final hospital bill. NHC prioritizes transparent financial disclosure and ethical medical practices."
  },
  {
    id: "faq-9",
    category: "Cost & Estimates",
    question: "How do treatment costs in India compare to Western countries or the GCC?",
    answer: "Premier hospitals in India typically offer tertiary and quaternary medical procedures at 60% to 80% lower costs than the United States, United Kingdom, or Australia, and 30% to 50% lower than private hospitals in the UAE or Europe, while utilizing identical FDA-approved implants, robotic systems, and international treatment guidelines."
  },
  {
    id: "faq-10",
    category: "Safety & Ethics",
    question: "Does NadwaHealthcare charge patients for consultation assistance?",
    answer: "Our preliminary coordination services—including initial case intake, gathering hospital opinions, providing written estimates, and issuing visa invitation assistance—are provided free of charge to international patients. Hospital fees, diagnostic charges, medications, accommodation, and third-party transport are paid directly to the service providers."
  }
];

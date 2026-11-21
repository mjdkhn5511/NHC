export interface ServiceJourneyStep {
  step: number;
  title: string;
  category: "Pre-Arrival" | "Arrival & Hospitalization" | "Post-Treatment";
  providerType: "Direct NHC Service" | "Hospital / Third-Party Coordinated";
  shortDesc: string;
  detailedProcess: string[];
  note?: string;
}

export const servicesJourneyData: ServiceJourneyStep[] = [
  {
    step: 1,
    title: "Initial Enquiry & Case Intake",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "Our dedicated international patient case manager receives your case, reviews preliminary clinical history, and establishes a direct communication channel.",
    detailedProcess: [
      "Assignment of a personal multilingual case coordinator",
      "Confidential intake of medical history and current symptoms",
      "Clear explanation of the medical travel process and timeline expectations"
    ]
  },
  {
    step: 2,
    title: "Medical Report Collection & Curation",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "We assist in collating, organizing, and formatting your diagnostic records (imaging DICOMs, pathology slides, blood panels) for medical review.",
    detailedProcess: [
      "Secure digital upload of scans, MRI/CT reports, and biopsy records",
      "Translation of non-English records into standardized clinical summaries",
      "Verification that diagnostic files meet clinical review standards"
    ]
  },
  {
    step: 3,
    title: "Multi-Hospital Doctor Opinion Coordination",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "We present your case simultaneously to leading accredited hospital teams and senior specialists across Delhi NCR for verified clinical opinions.",
    detailedProcess: [
      "Review by senior consultants at Apollo, Medanta, Fortis, and Max",
      "Collation of written treatment plans and diagnostic pathways",
      "Arrangement of preliminary video teleconsultations when requested"
    ]
  },
  {
    step: 4,
    title: "Treatment Estimate & Budget Assistance",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "Receive transparent, comprehensive itemized cost estimates directly from hospitals so you can compare options with zero hidden fees.",
    detailedProcess: [
      "Official institutional estimates covering hospital stay and surgeon fees",
      "Estimated cost ranges for implants, investigations, and medications",
      "Guidance on wire transfers, international credit cards, and payment protocols"
    ]
  },
  {
    step: 5,
    title: "100% Free Medical Visa for India (M-Visa) & Invitation Letter Assistance",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "We provide 100% free coordination of official hospital Medical Visa Invitation Letters (VIL) required by Indian Embassies and the Indian e-Visa immigration portal with zero service fees.",
    detailedProcess: [
      "100% Free expedited issuance of formal Hospital Medical Visa Invitation Letters (VIL)",
      "Zero-cost documentation guidance for patient (M-Visa) and up to two medical attendants (MED-X Visa)",
      "Assistance with official Indian e-Medical Visa portal filing and FRRO guidelines"
    ],
    note: "Hospital Visa Invitation Letter (VIL) coordination is completely free. Final visa entry clearance is subject to the sole sovereign discretion of the Government of India."
  },
  {
    step: 6,
    title: "Travel & Flight Coordination Assistance",
    category: "Pre-Arrival",
    providerType: "Direct NHC Service",
    shortDesc: "Guidance on booking appropriate flight schedules, airport wheelchair assistance, and airline medical clearance for non-ambulatory patients.",
    detailedProcess: [
      "Advising on optimal flight itineraries into New Delhi (DEL)",
      "Coordinating airline MEDIF (Medical Information for Fitness to Fly) forms",
      "Planning optimal travel dates to align with doctor availability"
    ]
  },
  {
    step: 7,
    title: "Airport Pickup & Transit Coordination",
    category: "Arrival & Hospitalization",
    providerType: "Hospital / Third-Party Coordinated",
    shortDesc: "Warm welcome at Indira Gandhi International Airport (DEL) with dedicated car or emergency ambulance transfer directly to the hospital or hotel.",
    detailedProcess: [
      "Terminal gate reception by NHC representative or hospital transport officer",
      "Wheelchair or stretcher support for restricted mobility patients",
      "Private, air-conditioned vehicle or advanced life support ambulance transfer"
    ],
    note: "Transport services are executed via licensed hospital fleets or verified executive transport providers."
  },
  {
    step: 8,
    title: "Accommodation Assistance near the Hospital",
    category: "Arrival & Hospitalization",
    providerType: "Hospital / Third-Party Coordinated",
    shortDesc: "Curated guest house, serviced apartment, or hotel options within walking or short driving distance of your treatment center.",
    detailedProcess: [
      "Vetted hygienic accommodation options fitting your budget and dietary habits",
      "Kitchenette facilities for cooking preferred home meals",
      "Assistance with local SIM cards, groceries, and neighborhood navigation"
    ],
    note: "Accommodations are provided by third-party hospitality partners; NHC assists with selection, rates, and quality vetting."
  },
  {
    step: 9,
    title: "Hospital Admission & Dedicated Patient Buddy",
    category: "Arrival & Hospitalization",
    providerType: "Direct NHC Service",
    shortDesc: "An NHC care companion accompanies you to the hospital to fast-track paperwork, bypass waiting lines, and navigate admission.",
    detailedProcess: [
      "Expedited registration at the International Patient Services lounge",
      "Coordination of initial OPD consults and pre-admission diagnostic tests",
      "Bedside visits during your stay to address comfort and communication needs"
    ]
  },
  {
    step: 10,
    title: "Language & Interpreter Support",
    category: "Arrival & Hospitalization",
    providerType: "Direct NHC Service",
    shortDesc: "Native language translation assistance to ensure flawless communication between you, your family, and the clinical team.",
    detailedProcess: [
      "In-person and digital translation in Arabic, French, Russian, and English",
      "Accurate translation of doctor rounds, instructions, and discharge summaries",
      "Daily check-ins to ensure your family's questions are addressed"
    ]
  },
  {
    step: 11,
    title: "Post-Discharge Follow-Up & Teleconsultation",
    category: "Post-Treatment",
    providerType: "Direct NHC Service",
    shortDesc: "Continuous care continuity after you return home, with coordinated teleconsultations and digital delivery of follow-up reports.",
    detailedProcess: [
      "Issuance of fit-to-fly certificates and all translated discharge papers",
      "Assistance with home-bound medication supplies and pharmacy receipts",
      "Scheduled follow-up video conferences with your operating surgeon",
      "Coordination with your local treating doctor in your home country"
    ]
  }
];

export const scopeBreakdown = {
  directNHC: [
    "Personal International Case Management (24/7 dedicated contact)",
    "Independent multi-hospital and doctor coordination across Delhi NCR",
    "Medical opinion collection and comparative treatment reviews",
    "Visa invitation letter coordination with hospital authorities",
    "Personal bedside check-ins and hospital navigation buddy",
    "Language interpretation facilitation (Arabic, Russian, French)",
    "Post-travel teleconsultation scheduling and record continuity"
  ],
  thirdPartyOrInstitutional: [
    "Medical treatment, surgery, anesthesia, and clinical care (provided exclusively by accredited hospitals and licensed doctors)",
    "Visa approval and entry clearance (decided exclusively by Indian immigration authorities)",
    "Aviation carriage and specialized in-flight medical escort (provided by commercial or air ambulance carriers)",
    "Hotel, guest house, and apartment tenancy (provided by independent hospitality operators)",
    "Airport ground transport vehicles (provided by licensed fleet partners or hospital ambulances)"
  ]
};

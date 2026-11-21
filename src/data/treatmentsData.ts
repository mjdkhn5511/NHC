export interface TreatmentStep {
  step: number;
  title: string;
  description: string;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  image: string;
  overview: string;
  conditionsTreated: string[];
  treatmentOptions: string[];
  treatmentPathway: TreatmentStep[];
  whyIndia: string[];
  recommendedStay: string;
  recoveryTimeline: string;
  hospitalIds: string[];
  doctorIds: string[];
  faqs: TreatmentFAQ[];
}

export const treatmentsData: TreatmentItem[] = [
  {
    id: "cardiology",
    slug: "cardiology",
    title: "Cardiology and Heart Surgery",
    shortDesc: "Comprehensive cardiac care including minimally invasive bypass (CABG), valve replacement, pediatric cardiac surgery, and TAVR.",
    badge: "High Demand",
    image: "/images/cardiology-heart.webp",
    overview: "India's premier cardiac centers are globally acclaimed for executing complex open-heart procedures, robotic-assisted revascularizations, and transcatheter structural heart interventions. NadwaHealthcare assists international patients in consulting with leading cardiothoracic teams equipped with modern hybrid operating suites.",
    conditionsTreated: [
      "Coronary Artery Disease (CAD)",
      "Valvular Heart Disorders (Aortic/Mitral Stenosis)",
      "Congenital Heart Defects (ASD, VSD, Tetralogy of Fallot)",
      "Heart Failure & Cardiomyopathy",
      "Cardiac Arrhythmias & Electrophysiological Disorders",
      "Thoracic & Abdominal Aortic Aneurysms"
    ],
    treatmentOptions: [
      "Coronary Artery Bypass Grafting (Beating-Heart & Robotic CABG)",
      "Transcatheter Aortic Valve Replacement (TAVR / TAVI)",
      "Minimally Invasive Valve Repair & Replacement",
      "Pediatric Cardiac Surgery & Septal Defect Closures",
      "Pacemaker, CRT-D & ICD Implantations",
      "Coronary Angioplasty & Complex Stenting"
    ],
    treatmentPathway: [
      { step: 1, title: "Report Review & Virtual Panel", description: "Submission of angiography, echocardiograms, and cardiology history for assessment by multi-disciplinary heart teams." },
      { step: 2, title: "Pre-Travel Clearance & Plan", description: "Issuing formal opinion, provisional length of stay, and visa medical invitation from the hospital." },
      { step: 3, title: "Admission & In-Person Diagnostics", description: "Arrival in Delhi NCR, in-depth cardiac cath lab or echo re-evaluation, and anesthetic clearance." },
      { step: 4, title: "Procedure & ICU Care", description: "Execution of surgical intervention followed by dedicated cardiothoracic critical care monitoring." },
      { step: 5, title: "Cardiac Rehab & Fit-to-Fly", description: "Early mobilization, medication stabilization, and formal fit-to-fly clearance certificate before departure." }
    ],
    whyIndia: [
      "Extensive clinical experience in high-volume cardiac surgery centers",
      "Advanced hybrid cardiac cath labs and robotic Da Vinci systems",
      "Availability of internationally trained cardiothoracic surgeons",
      "Substantial cost advantage compared to Western and Gulf countries"
    ],
    recommendedStay: "10 to 16 Days depending on surgical complexity",
    recoveryTimeline: "Initial recovery 2-3 weeks; full sternal healing 8-12 weeks",
    hospitalIds: ["apollo-delhi", "fortis-escorts", "medanta-gurugram", "max-saket"],
    doctorIds: ["dr-ashok-seth", "dr-naresh-trehan", "dr-yk-mishra", "dr-balram-airan"],
    faqs: [
      {
        question: "How long before traveling should I send my cardiac angiography films?",
        answer: "We recommend sending DICOM files or video CDs of your coronary angiogram along with current echo reports at least 5-7 days before your anticipated travel so senior surgeons can provide a verified preliminary opinion."
      },
      {
        question: "When is a patient safe to fly after open heart surgery?",
        answer: "Typically, cardiologists issue fit-to-fly clearance between 10 to 14 days post-procedure, provided chest X-rays, blood parameters, and cardiac output remain completely stable."
      }
    ]
  },
  {
    id: "cancer-treatment",
    slug: "cancer-treatment",
    title: "Oncology and Cancer Treatment",
    shortDesc: "Integrated multi-disciplinary oncology featuring precision radiation (CyberKnife, Proton Beam), immunotherapy, targeted therapies, and surgical resections.",
    badge: "Specialized Care",
    image: "/images/oncology-cancer.webp",
    overview: "Modern cancer therapy demands a comprehensive Tumor Board approach. India's designated comprehensive cancer centers combine surgical oncology, medical oncology, precision radiotherapy, and hematology under one roof to customize protocols according to tumor genomic profiling.",
    conditionsTreated: [
      "Gastrointestinal & Colorectal Cancers",
      "Breast & Gynecological Cancers",
      "Head, Neck & Thyroid Malignancies",
      "Lung & Thoracic Cancers",
      "Urological & Prostate Cancers",
      "Hematological Malignancies (Leukemia, Lymphoma, Multiple Myeloma)"
    ],
    treatmentOptions: [
      "Precision Radiation Therapy (Proton Beam, CyberKnife, TrueBeam STx)",
      "Organ-Preserving Robotic Surgical Oncology",
      "Systemic Chemotherapy & Targeted Molecular Therapy",
      "Checkpoint Inhibitor Immunotherapy",
      "Hyperthermic Intraperitoneal Chemotherapy (HIPEC)",
      "Autologous & Allogeneic Bone Marrow Transplants"
    ],
    treatmentPathway: [
      { step: 1, title: "Histopathology & PET-CT Review", description: "Sharing biopsy blocks, IHC markers, and PET-CT imaging for cross-examination by dedicated oncologists." },
      { step: 2, title: "Tumor Board Staging Review", description: "Multi-disciplinary tumor board defines line-of-treatment (surgery vs neoadjuvant therapy)." },
      { step: 3, title: "Hospital Workup & Staging", description: "Repeat molecular marker testing if necessary, staging validation, and port placement." },
      { step: 4, title: "Therapy / Surgical Resection", description: "Commencement of targeted radiotherapy, chemotherapy cycles, or robotic-assisted resection." },
      { step: 5, title: "Maintenance Protocol & Monitoring", description: "Guidance on subsequent cycles, transferrable therapy notes for home physicians, and follow-up." }
    ],
    whyIndia: [
      "Equipped with world-class Proton Beam Therapy and sub-millimeter CyberKnife technology",
      "Multidisciplinary tumor boards following NCCN and ESMO international clinical protocols",
      "Access to latest targeted molecular cancer pharmaceuticals at standardized pricing",
      "Dedicated international oncology wards with infection-controlled nursing"
    ],
    recommendedStay: "2 to 3 weeks for surgical oncology; 4-8 weeks for multicycle radiation protocols",
    recoveryTimeline: "Varies based on stage and modality",
    hospitalIds: ["sanar-gurugram", "medanta-gurugram", "apollo-delhi", "max-saket", "fortis-fmri"],
    doctorIds: ["dr-vinod-raina", "dr-ashok-vaid", "dr-harit-chaturvedi", "dr-gaurav-kharya"],
    faqs: [
      {
        question: "Can I bring my biopsy glass slides or tissue blocks to India?",
        answer: "Yes, bringing paraffin-embedded tissue blocks or glass slides is strongly recommended so Indian pathology reference labs can perform secondary verification and specialized IHC/genetic testing."
      },
      {
        question: "Can chemotherapy be continued in my home country after surgery in India?",
        answer: "Yes, our partner oncologists provide structured chemotherapy transfer protocols with drug formulas and scheduling that your local doctor can administer seamlessly."
      }
    ]
  },
  {
    id: "orthopedics",
    slug: "orthopedics",
    title: "Orthopedics and Joint Replacement",
    shortDesc: "Robotic total knee and hip replacements, complex revision arthroplasties, arthroscopic sports medicine, and spinal stabilization.",
    badge: "Rapid Recovery",
    image: "/images/orthopedics-joint.webp",
    overview: "Orthopedic excellence centers in Delhi NCR utilize AI-navigated robotic arms (Mako, Rosa) for joint replacements, ensuring microscopic millimeter accuracy, reduced tissue trauma, faster ambulation, and longer implant longevity.",
    conditionsTreated: [
      "Severe Osteoarthritis of the Knee & Hip",
      "Avascular Necrosis (AVN) of the Femoral Head",
      "Failed Previous Joint Replacements Requiring Revision",
      "Ligamentous Knee Injuries (ACL, PCL, Meniscal Tears)",
      "Rotator Cuff Tears & Shoulder Instability",
      "Spinal Spondylolisthesis & Herniated Lumbar Discs"
    ],
    treatmentOptions: [
      "Robotic-Arm Assisted Total Knee Arthroplasty (TKA)",
      "Minimally Invasive Total Hip Replacement (Direct Anterior Approach)",
      "Bilateral Simultaneous Knee Replacement",
      "Complex Revision Hip & Knee Joint Surgery",
      "Shoulder Resurfacing & Reverse Shoulder Replacement",
      "Arthroscopic Cartilage Repair & Ligament Reconstruction"
    ],
    treatmentPathway: [
      { step: 1, title: "Weight-bearing X-Rays & MRI Review", description: "Orthopedic evaluation of alignment angles, bone stock, and joint space narrowing." },
      { step: 2, title: "Implant Selection & Planning", description: "Discussion of FDA-approved implant options (ceramic, oxinium, high-flex) and surgical plan." },
      { step: 3, title: "Computerized CT Navigation & Surgery", description: "Pre-operative 3D modeling and robotic-assisted surgical joint replacement." },
      { step: 4, title: "Same-Day / Next-Day Mobilization", description: "Supervised physiotherapy and weight-bearing exercises in the hospital ward." },
      { step: 5, title: "Independent Walking & Travel Clearance", description: "Stair-climbing training, stitch removal, and certified fitness-to-fly documentation." }
    ],
    whyIndia: [
      "Sub-millimeter robotic precision yielding quicker recovery and less post-op discomfort",
      "US FDA and CE certified imported hip and knee prosthetics from leading manufacturers",
      "Dedicated inpatient physiotherapy and rehabilitation departments",
      "High patient satisfaction across international orthopedic recipients"
    ],
    recommendedStay: "10 to 14 Days (Bilateral may require 14-18 days)",
    recoveryTimeline: "Assisted walking on Day 1; independent mobility by Week 3-4",
    hospitalIds: ["medanta-gurugram", "apollo-delhi", "fortis-fmri", "manipal-delhi"],
    doctorIds: ["dr-ashok-rajgopal", "dr-sks-marya", "dr-subhash-jangid", "dr-ips-oberoi"],
    faqs: [
      {
        question: "Can both knees be replaced at the same time?",
        answer: "Simultaneous bilateral knee replacement can be safely performed for eligible patients with satisfactory cardiac and pulmonary reserve, saving time and recovery duration."
      },
      {
        question: "What brand of implants are utilized?",
        answer: "Hospitals utilize internationally accredited, FDA-approved implants such as Stryker, Zimmer Biomet, DePuy Synthes, and Smith & Nephew."
      }
    ]
  },
  {
    id: "neurosurgery",
    slug: "neurosurgery",
    title: "Neurosurgery and Spine Surgery",
    shortDesc: "Microscopic brain tumor excision, endoscopic skull-base surgery, minimally invasive spine surgery (MISS), and deep brain stimulation.",
    badge: "Advanced Tech",
    image: "/images/neuro-spine.webp",
    overview: "Neurosurgical units in India combine intraoperative MRI (iMRI), neuronavigation suites, and high-resolution neuro-endoscopes to treat cranial pathologies and complex spinal compressions with utmost neural preservation.",
    conditionsTreated: [
      "Brain Tumors (Gliomas, Meningiomas, Pituitary Adenomas)",
      "Cerebral Aneurysms & Arteriovenous Malformations (AVMs)",
      "Lumbar & Cervical Disc Herniations & Spinal Stenosis",
      "Hydrocephalus & Arachnoid Cysts",
      "Trigeminal Neuralgia & Hemifacial Spasm",
      "Pediatric Craniosynostosis & Spinal Dysraphism"
    ],
    treatmentOptions: [
      "Awake Craniotomy with Intraoperative Neuro-Monitoring",
      "Minimally Invasive Spine Surgery (Keyhole Discectomy & Decompression)",
      "Endoscopic Endonasal Pituitary Tumor Removal",
      "Deep Brain Stimulation (DBS) for Movement Disorders",
      "Endovascular Coiling & Flow Diverter Placement for Aneurysms",
      "Complex Multi-level Spinal Fusion & Deformity Correction"
    ],
    treatmentPathway: [
      { step: 1, title: "MRI Brain/Spine DICOM Assessment", description: "Review of high-resolution contrast neuro-imaging by senior neurosurgeons." },
      { step: 2, title: "Surgical Strategy & Risk Mapping", description: "Formulation of neuro-navigation parameters and neurological prognosis." },
      { step: 3, title: "Admission & Pre-Operative Mapping", description: "3D tractography, neurological baseline exam, and pre-anesthetic optimization." },
      { step: 4, title: "Microsurgical Intervention", description: "Precision resection utilizing intraoperative neuromonitoring (IONM)." },
      { step: 5, title: "Neuro-Rehab & Air Travel Clearance", description: "Inpatient neurological rehab, wound assessment, and cabin pressure safety clearance." }
    ],
    whyIndia: [
      "Equipped with 3T Intraoperative MRI and stereotactic neuronavigation suites",
      "Expertise in awake craniotomies to protect speech and motor faculties",
      "Extensive experience in minimally invasive keyhole spinal decompression",
      "Internationally recognized neuro-anesthesia and neuro-critical care units"
    ],
    recommendedStay: "12 to 20 Days depending on cranial or spinal condition",
    recoveryTimeline: "Initial recovery in 2-4 weeks; full recovery 6-12 weeks",
    hospitalIds: ["sanar-gurugram", "medanta-gurugram", "apollo-delhi", "max-saket", "fortis-fmri"],
    doctorIds: ["dr-rana-patir", "dr-sandeep-vaishya", "dr-aditya-gupta"],
    faqs: [
      {
        question: "How long after brain surgery can I fly back home?",
        answer: "Due to cabin pressure and intracranial air resorption, patients are usually evaluated between 14 to 21 days post-craniotomy with a follow-up CT scan before travel clearance is approved."
      }
    ]
  },
  {
    id: "neurology",
    slug: "neurology",
    title: "Neurology",
    shortDesc: "Specialized clinical diagnosis and management for stroke, epilepsy, Parkinson's disease, neuromuscular conditions, and multiple sclerosis.",
    badge: "Medical Management",
    image: "/images/neurology-brain.webp",
    overview: "Neurology centers provide cutting-edge diagnostic electrophysiology, 24-hour video EEG telemetry, genetic testing, and individualized neurological rehabilitation programs for chronic and progressive nervous system disorders.",
    conditionsTreated: [
      "Refractory Epilepsy & Seizure Syndromes",
      "Parkinson’s Disease & Atypical Parkinsonism",
      "Acute & Chronic Stroke Management",
      "Multiple Sclerosis (MS) & Neuromyelitis Optica",
      "Myasthenia Gravis & Peripheral Neuropathies",
      "Dementia & Memory Disorders"
    ],
    treatmentOptions: [
      "Long-term Video EEG Monitoring & Epilepsy Workup",
      "Specialized Botulinum Toxin Injection for Dystonia & Spasticity",
      "Immunomodulatory Therapy & Plasmapheresis",
      "Comprehensive Neuro-Rehabilitation (Physical, Speech, Occupational)",
      "Neurogenetic Testing & Precision Medical Management",
      "Programming and optimization for Deep Brain Stimulators"
    ],
    treatmentPathway: [
      { step: 1, title: "Clinical History & Video Evaluation", description: "Sharing comprehensive symptom logs, previous EEGs, and medication lists." },
      { step: 2, title: "Comprehensive Diagnostic Battery", description: "High-resolution 3T MRI, electrophysiology, and metabolic/autoimmune panels." },
      { step: 3, title: "Tailored Protocol Optimization", description: "Regimen adjustment, drug titration, or targeted interventional therapies." },
      { step: 4, title: "Functional Therapy Program", description: "Intensive multidisciplinary neuro-rehabilitation sessions." },
      { step: 5, title: "Long-term Monitoring Plan", description: "Provision of long-term prescription protocol and remote teleconsultation schedule." }
    ],
    whyIndia: [
      "Advanced neurodiagnostic facilities including video EEG and autonomic testing labs",
      "Dedicated stroke units and specialized neurological rehabilitation facilities",
      "Multidisciplinary team approach involving neurologists, neuropsychologists, and physiatrists",
      "Affordable access to specialized immunotherapies and biologics"
    ],
    recommendedStay: "7 to 14 Days for evaluation and protocol stabilization",
    recoveryTimeline: "Progressive monitoring through regular follow-up consultations",
    hospitalIds: ["sanar-gurugram", "medanta-gurugram", "apollo-delhi", "max-saket"],
    doctorIds: ["dr-rana-patir"],
    faqs: [
      {
        question: "Can I get long-term neurological medications to take home?",
        answer: "Yes, hospitals provide authorized export prescriptions and stamped customs letters allowing you to legally carry up to 3 to 6 months of verified medication."
      }
    ]
  },
  {
    id: "kidney-urology",
    slug: "kidney-urology",
    title: "Kidney and Urology",
    shortDesc: "Endourology, laser prostate vaporization, renal transplantation assistance, laparoscopic nephrectomy, and stone management.",
    badge: "Renal Care",
    image: "/images/kidney-urology.webp",
    overview: "India's nephrology and urology centers offer world-class hemodialysis, HoLEP laser prostate surgery, robotic renal surgeries, and legally compliant kidney transplantation for eligible international patients with related donors.",
    conditionsTreated: [
      "End-Stage Renal Disease (ESRD) & Chronic Kidney Disease",
      "Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)",
      "Complex Kidney, Ureteral & Bladder Calculi (Stones)",
      "Renal Cell Carcinoma & Bladder Malignancies",
      "Urethral Strictures & Pelvi-Ureteric Junction (PUJ) Obstruction",
      "Female Urinary Incontinence & Pelvic Floor Disorders"
    ],
    treatmentOptions: [
      "Robotic-Assisted Partial & Radical Nephrectomy",
      "Holmium Laser Enucleation of the Prostate (HoLEP / ThuLEP)",
      "Retrograde Intrarenal Surgery (RIRS) & Flexible Ureteroscopy",
      "Living-Related Kidney Transplantation (Subject to strict legal approval)",
      "High-Flux Hemodialysis & Peritoneal Dialysis Training",
      "Reconstructive Urethroplasty & Pyeloplasty"
    ],
    treatmentPathway: [
      { step: 1, title: "Renal Panel & Sonography Review", description: "Assessing creatinine clearance, eGFR, urine protein, and radiological films." },
      { step: 2, title: "Legal & Clinical Guidance", description: "For transplant candidates, comprehensive documentation of immediate family relationship is verified in accordance with Indian legal regulations (THOA Act)." },
      { step: 3, title: "Admission & Advanced Workup", description: "Cross-match testing, DTPA renal scans, or endoscopic planning." },
      { step: 4, title: "Intervention / Surgical Procedure", description: "Laser vaporization, stone clearance, or donor-recipient laparoscopic surgery." },
      { step: 5, title: "Immunosuppression & Discharge", description: "Post-op creatinine monitoring, immunosuppressant titration, and clearance." }
    ],
    whyIndia: [
      "Pioneering centers in laparoscopic donor nephrectomy ensuring minimal donor discomfort",
      "Advanced 100W Holmium and Thulium fiber laser systems for bloodless stone and prostate care",
      "Transparent adherence to legal transplantation frameworks for authorized related donors",
      "Extensive pediatric urology and reconstructive expertise"
    ],
    recommendedStay: "7 to 10 Days for urological procedures; 4 to 6 weeks for organ transplant candidates",
    recoveryTimeline: "3 to 5 days for laser urology; 4 to 8 weeks for complex renal surgery",
    hospitalIds: ["sanar-gurugram", "apollo-delhi", "medanta-gurugram", "fortis-fmri", "max-saket"],
    doctorIds: ["dr-rajesh-ahlawat", "dr-anant-kumar", "dr-dinesh-khullar", "dr-sanjay-gogoi"],
    faqs: [
      {
        question: "Can an international patient receive a kidney transplant in India?",
        answer: "Yes, under the Indian Transplantation of Human Organs Act (THOA), international patients may undergo kidney transplantation ONLY with a direct living related donor (parent, spouse, child, or sibling). Commercial organ donation or non-related donor transplants are strictly prohibited by law."
      }
    ]
  },
  {
    id: "liver-gastroenterology",
    slug: "liver-gastroenterology",
    title: "Liver and Gastroenterology",
    shortDesc: "Advanced therapeutic endoscopy, ERCP, management of liver cirrhosis, inflammatory bowel disease (IBD), and pancreatic disorders.",
    badge: "GI Excellence",
    image: "/images/liver-gastroenterology.webp",
    overview: "Comprehensive hepatology and gastroenterology institutes offer 24/7 GI bleed management, SpyGlass cholangioscopy, endoscopic ultrasound (EUS), and intensive care management for decompensated liver cirrhosis.",
    conditionsTreated: [
      "Liver Cirrhosis & Portal Hypertension",
      "Chronic Hepatitis B and C Infections",
      "Acute & Chronic Pancreatitis",
      "Ulcerative Colitis & Crohn’s Disease",
      "Biliary Strictures & Choledocholithiasis (Common Bile Duct Stones)",
      "Gastrointestinal Bleeding & Esophageal Varices"
    ],
    treatmentOptions: [
      "Therapeutic Endoscopic Retrograde Cholangiopancreatography (ERCP)",
      "SpyGlass Direct Visualization Cholangioscopy",
      "Endoscopic Ultrasound (EUS) Guided Fine Needle Biopsy & Drainage",
      "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
      "Endoscopic Mucosal Resection (EMR) for early GI lesions",
      "Comprehensive Medical Cirrhosis Reversal & Stabilization Protocol"
    ],
    treatmentPathway: [
      { step: 1, title: "Liver Panel & Scan Review", description: "Review of Fibroscan, liver function tests, viral markers, and contrast CT/MRI abdomen." },
      { step: 2, title: "Diagnostic Strategy", description: "Hepatologist formulates endoscopy or interventional radiology roadmap." },
      { step: 3, title: "Advanced Endoscopic Intervention", description: "Execution of therapeutic ERCP or stenting under monitored anesthesia care." },
      { step: 4, title: "Stabilization & Medication Review", description: "Nutritional optimization, ascites management, and liver parenchymal support." },
      { step: 5, title: "Discharge & Travel Clearance", description: "Dietary plan, travel clearance certificate, and post-travel digital consultations." }
    ],
    whyIndia: [
      "Dedicated Institute of Liver & Biliary Sciences and specialized quaternary liver institutes",
      "Third-space endoscopy and SpyGlass technologies readily available",
      "Internationally recognized hepatologists with decades of global clinical leadership",
      "Affordable specialized biologics and nutritional therapeutic protocols"
    ],
    recommendedStay: "7 to 12 Days for diagnostic and endoscopic management",
    recoveryTimeline: "Quick recovery within 2-5 days for endoscopic procedures",
    hospitalIds: ["sanar-gurugram", "medanta-gurugram", "apollo-delhi", "max-saket", "fortis-fmri"],
    doctorIds: ["dr-randhir-sud", "dr-subhash-gupta", "dr-arvinder-soin"],
    faqs: [
      {
        question: "Is therapeutic ERCP an inpatient or outpatient procedure?",
        answer: "While ERCP is minimally invasive without surgical incisions, international patients are typically observed overnight in the hospital to ensure zero post-procedure pancreatitis or bile leak."
      }
    ]
  },
  {
    id: "liver-transplant",
    slug: "liver-transplant",
    title: "Liver Transplant",
    shortDesc: "World's highest-volume living-donor liver transplantation (LDLT) programs for adult and pediatric liver failure with dedicated ICU care.",
    badge: "World Leader",
    image: "/images/liver-transplant.webp",
    overview: "India is globally recognized as the foremost destination for Living Donor Liver Transplantation (LDLT). Top centers in Delhi NCR have performed thousands of successful liver transplants with success rates comparable to premier Western institutions.",
    conditionsTreated: [
      "End-Stage Liver Disease (Decompensated Cirrhosis)",
      "Hepatocellular Carcinoma (HCC) within Transplant Criteria",
      "Acute Liver Failure",
      "Biliary Atresia in Pediatric Patients",
      "Cryptogenic & Alcoholic Cirrhosis",
      "Metabolic Liver Diseases (Wilson's Disease, Glycogen Storage Diseases)"
    ],
    treatmentOptions: [
      "Living Donor Liver Transplantation (Right Lobe / Left Lobe Graft)",
      "Pediatric Living Donor Liver Transplantation",
      "ABO-Incompatible (Blood-Group Mismatch) Liver Transplantation",
      "Dual-Lobe Liver Transplantation for Complex Recipients",
      "Monitored Donor Safety Protocol with Minimally Invasive Donor Hepatectomy"
    ],
    treatmentPathway: [
      { step: 1, title: "Recipient & Donor Assessment", description: "Review of MELD score, CT volumetry, and blood grouping of both patient and living related donor." },
      { step: 2, title: "Pre-Travel Legal Documentation Guidance", description: "Assisting family in preparing certified relationship documents (embassy attestation, family tree)." },
      { step: 3, title: "In-Hospital Triple Phase Evaluation", description: "Multi-organ fitness workup of donor to ensure 100% donor safety." },
      { step: 4, title: "State Authorization Committee Clearance", description: "Formal interview and approval by the Government-constituted Transplant Authorization Committee." },
      { step: 5, title: "Transplant & Post-Op Isolation", description: "Simultaneous dual-team donor and recipient surgery, followed by HEPA-filtered cleanroom recovery." }
    ],
    whyIndia: [
      "World-record volume in Living Donor Liver Transplants with exceptional clinical outcomes",
      "Uncompromising donor safety protocol with zero compromise on donor health",
      "State-of-the-art liver transplant ICUs with dedicated HEPA laminar airflow filtration",
      "Significantly more accessible treatment package compared to Europe or the USA"
    ],
    recommendedStay: "6 to 8 Weeks for recipient; 3 to 4 weeks for living donor",
    recoveryTimeline: "Donor recovers in 3-4 weeks (liver regenerates in 6-8 weeks); recipient recovers in 8-12 weeks",
    hospitalIds: ["sanar-gurugram", "medanta-gurugram", "apollo-delhi", "max-saket"],
    doctorIds: ["dr-arvinder-soin", "dr-subhash-gupta"],
    faqs: [
      {
        question: "Who can be a liver donor for an international patient in India?",
        answer: "Under the legal framework of India's THOA Act, a liver donor must be a healthy, adult close relative (spouse, parent, adult child, or sibling) between 18 and 50 years of age with compatible anatomy, matching or compatible blood group, and healthy liver parenchyma."
      },
      {
        question: "Does the donor's liver regenerate after donation?",
        answer: "Yes, the human liver has remarkable regenerative capacity. Within 6 to 8 weeks after surgery, the remaining portion of the donor's liver regenerates back to nearly its original functional volume."
      }
    ]
  },
  {
    id: "ivf-fertility",
    slug: "ivf-fertility",
    title: "IVF and Fertility Treatment",
    shortDesc: "Advanced reproductive technology (ART), ICSI, pre-implantation genetic diagnosis (PGD/PGS), and personalized fertility solutions.",
    badge: "Reproductive Care",
    image: "/images/ivf-fertility.webp",
    overview: "India's fertility clinics adhere to international embryology standards with Class 10,000 clean air labs, laser-assisted hatching, and comprehensive reproductive counseling for couples seeking to build their family.",
    conditionsTreated: [
      "Unexplained Infertility & Advanced Maternal Age",
      "Tubal Factor Obstruction or Pelvic Adhesions",
      "Severe Male Factor Infertility (Azoospermia, Oligospermia)",
      "Recurrent Implantation Failure & Recurrent Miscarriages",
      "Polycystic Ovarian Syndrome (PCOS) & Endometriosis",
      "Genetic Carrier Screening Requirements"
    ],
    treatmentOptions: [
      "In Vitro Fertilization (IVF) & Intracytoplasmic Sperm Injection (ICSI)",
      "Pre-Implantation Genetic Testing for Aneuploidies (PGT-A / PGT-M)",
      "Laser-Assisted Embryo Hatching",
      "Testicular Sperm Aspiration / Extraction (TESA / Micro-TESE)",
      "Blastocyst Culture & Vitrification Cryopreservation",
      "Hysteroscopic Correction of Uterine Septum or Polyps"
    ],
    treatmentPathway: [
      { step: 1, title: "Hormonal & Semen Profile Review", description: "Review of AMH levels, Day 2-3 FSH/LH, antral follicle count, and semen analysis." },
      { step: 2, title: "Synchronized Stimulation Schedule", description: "Pre-arrival stimulation protocol to minimize required stay in India." },
      { step: 3, title: "Follicular Monitoring & Oocyte Retrieval", description: "Ultrasound-guided egg retrieval under mild sedation and ICSI fertilization." },
      { step: 4, title: "Embryo Culture & Genetic Testing", description: "Culturing to Day 5 blastocyst stage and PGT biopsy if indicated." },
      { step: 5, title: "Embryo Transfer & Pregnancy Test", description: "Painless ultrasound-guided embryo transfer and post-transfer hormonal support." }
    ],
    whyIndia: [
      "High clinical pregnancy benchmarks through advanced embryology laboratories",
      "Use of benchtop incubators and time-lapse embryo imaging systems",
      "Comprehensive genetic testing to identify chromosomal abnormalities before transfer",
      "Compassionate, respectful, and transparent international patient support"
    ],
    recommendedStay: "18 to 22 Days for full cycle; or 10 days if initial stimulation done at home",
    recoveryTimeline: "Normal daily activities can be resumed immediately after embryo transfer",
    hospitalIds: ["apollo-delhi", "fortis-fmri", "max-saket"],
    doctorIds: ["dr-abha-majumdar", "dr-kaberi-banerjee"],
    faqs: [
      {
        question: "Can I start the hormone injections in my home country before traveling?",
        answer: "Yes, our partner fertility specialists can provide a remote ovarian stimulation protocol with your local gynecologist, allowing you to arrive in India just 2-3 days before the scheduled egg retrieval."
      }
    ]
  },
  {
    id: "cosmetic-surgery",
    slug: "cosmetic-surgery",
    title: "Cosmetic and Plastic Surgery",
    shortDesc: "Aesthetic and reconstructive procedures including rhinoplasty, liposuction, mommy makeovers, facial contouring, and burn reconstruction.",
    badge: "Aesthetic Care",
    image: "/images/cosmetic-surgery.webp",
    overview: "Board-certified plastic surgeons in India combine art and surgical precision to deliver natural, harmonious aesthetic outcomes in internationally accredited hospital environments equipped for total patient safety.",
    conditionsTreated: [
      "Facial Aging & Sagging Skin",
      "Nasal Asymmetry & Breathing Difficulties (Septorhinoplasty)",
      "Stubborn Body Fat Deposits Resistant to Exercise",
      "Post-Bariatric or Post-Pregnancy Abdominal Skin Laxity",
      "Breast Asymmetry, Micromastia, or Gigantomastia",
      "Post-Traumatic Scars & Burn Deformities"
    ],
    treatmentOptions: [
      "High-Definition VASER Liposuction & Body Contouring",
      "Tummy Tuck (Abdominoplasty) with Diastasis Recti Repair",
      "Open & Preservation Rhinoplasty",
      "Breast Augmentation (Implants / Fat Transfer) & Breast Reduction",
      "Full Facial Rejuvenation (Deep Plane Facelift, Blepharoplasty, Neck Lift)",
      "Hair Restoration & Direct FUE Hair Transplantation"
    ],
    treatmentPathway: [
      { step: 1, title: "Aesthetic Photos & Goal Clarification", description: "Sharing multi-angle photographs and discussing achievable expectations." },
      { step: 2, title: "Surgeon Consultation & Simulation", description: "Virtual meeting with board-certified plastic surgeon to agree on surgical approach." },
      { step: 3, title: "Pre-Operative Clearance & Surgery", description: "Comprehensive lab workup, surgical markings, and procedure in sterile hospital OT." },
      { step: 4, title: "Recovery & Compression Garments", description: "Inpatient observation, lymphatic drainage therapy, and compression fitting." },
      { step: 5, title: "Final Review & Fit-to-Fly", description: "Suture removal, post-op photography, and clearance for flight travel." }
    ],
    whyIndia: [
      "Surgeries performed inside full-service accredited hospitals with ICU backup, not standalone strip-mall clinics",
      "Board-certified plastic surgeons with international training and aesthetic fellowships",
      "Use of authentic FDA-approved cohesive gel breast implants (Mentor, Motiva)",
      "Significant privacy and discreet recuperation options"
    ],
    recommendedStay: "8 to 14 Days depending on procedures involved",
    recoveryTimeline: "Initial recovery in 1-2 weeks; full refinement over 3-6 months",
    hospitalIds: ["apollo-delhi", "max-saket", "medanta-gurugram", "artemis-gurugram"],
    doctorIds: ["dr-sunil-choudhary", "dr-lokesh-kumar"],
    faqs: [
      {
        question: "Why should cosmetic surgery be performed in a hospital rather than a clinic?",
        answer: "Performing cosmetic surgery in a multispecialty hospital guarantees immediate access to board-certified anesthesiologists, advanced monitoring, and emergency ICU facilities, maximizing patient safety."
      }
    ]
  },
  {
    id: "general-surgery",
    slug: "general-surgery",
    title: "General and Laparoscopic Surgery",
    shortDesc: "Minimally invasive laparoscopic and robotic abdominal surgeries for hernias, gallstones, appendicitis, and bariatric weight loss.",
    badge: "Keyhole Surgery",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=900&q=80",
    overview: "Advanced laparoscopic and robotic surgical divisions excel in performing complex abdominal wall reconstructions, single-incision laparoscopic surgeries (SILS), and metabolic bariatric interventions with minimal scarring.",
    conditionsTreated: [
      "Symptomatic Gallstones & Cholecystitis",
      "Inguinal, Umbilical, Incisional & Ventral Hernias",
      "Morbid Obesity & Metabolic Syndrome (Type 2 Diabetes)",
      "Appendicitis & Peritoneal Pathologies",
      "Gastroesophageal Reflux Disease (GERD & Hiatal Hernia)",
      "Benign Thyroid Nodules & Soft Tissue Lipomas"
    ],
    treatmentOptions: [
      "Laparoscopic Cholecystectomy (Gallbladder Removal)",
      "Robotic TEP & TAPP Inguinal Hernia Repair with 3D Mesh",
      "Bariatric Surgery (Laparoscopic Sleeve Gastrectomy & Gastric Bypass)",
      "Laparoscopic Nissen Fundoplication for Severe Acid Reflux",
      "Single-Port Laparoscopic Appendectomy",
      "Robotic Abdominal Wall Reconstruction (eTEP / TAR)"
    ],
    treatmentPathway: [
      { step: 1, title: "Ultrasound & Clinical Summary", description: "Review of abdominal ultrasound, endoscopy notes, and metabolic profile." },
      { step: 2, title: "Surgical Plan & Estimate", description: "Provision of transparent package estimates covering hospital stay and surgeon fees." },
      { step: 3, title: "Laparoscopic / Robotic Procedure", description: "Keyhole surgery with minimal tissue disruption and minimal blood loss." },
      { step: 4, title: "Early Ambulation & Oral Feeding", description: "Most patients walk within 6 hours and resume liquids on the same evening." },
      { step: 5, title: "Discharge & Travel Clearance", description: "Dressings checked, stitchless wound care, and fit-to-fly certificate." }
    ],
    whyIndia: [
      "Extensive adoption of 4K ultra-high-definition laparoscopic stacks and Da Vinci surgical robots",
      "High volume of complex recurrent hernia repairs utilizing advanced synthetic and biological meshes",
      "Short hospital stays reducing overall medical travel expenses",
      "Dedicated bariatric nutritionists and follow-up coordinators"
    ],
    recommendedStay: "5 to 8 Days for routine laparoscopic surgeries; 8 to 10 days for bariatric procedures",
    recoveryTimeline: "Desk work possible within 7-10 days; heavy lifting restricted for 4 weeks",
    hospitalIds: ["medanta-gurugram", "apollo-delhi", "max-saket", "manipal-delhi"],
    doctorIds: ["dr-pradeep-chowbey"],
    faqs: [
      {
        question: "How small are the incisions in laparoscopic hernia or gallbladder surgery?",
        answer: "Laparoscopic incisions are typically between 5mm to 10mm (less than half an inch), resulting in minimal discomfort, virtually invisible scars, and rapid healing."
      }
    ]
  },
  {
    id: "dental-treatment",
    slug: "dental-treatment",
    title: "Dental Treatment and Maxillofacial Surgery",
    shortDesc: "Full-mouth dental rehabilitation, All-on-4 / All-on-6 dental implants, smile design, and orthognathic corrective jaw surgery.",
    badge: "Smile Care",
    image: "/images/dental-treatment.webp",
    overview: "Equipped with in-house CAD/CAM milling, 3D Cone Beam Computed Tomography (CBCT), and certified implantology systems (Nobel Biocare, Straumann), premier dental hospitals deliver same-day teeth and smile transformations.",
    conditionsTreated: [
      "Complete or Severe Tooth Loss (Edentulism)",
      "Severe Periodontitis & Bone Resorption",
      "Skeletal Jaw Discrepancies (Prognathism, Retrognathism)",
      "Severely Discolored, Misaligned, or Fractured Teeth",
      "Impacted Wisdom Teeth & Maxillofacial Pathologies",
      "Temporomandibular Joint (TMJ) Pain Syndromes"
    ],
    treatmentOptions: [
      "All-on-4 & All-on-6 Immediate Loading Dental Implants",
      "Basal & Zygomatic Implants for Severe Bone Deficiency",
      "CAD/CAM Digital Smile Design with Porcelain Zirconia Veneers",
      "Full Mouth Digital Rehabilitation with Crowns & Bridges",
      "Orthognathic Corrective Jaw Surgery (Bimaxillary Osteotomy)",
      "Painless Laser Root Canal Treatment (Single-Sitting RCT)"
    ],
    treatmentPathway: [
      { step: 1, title: "Panoramic OPG / CBCT Scan Review", description: "Evaluation of bone height, density, and nerve canals via digital dental imaging." },
      { step: 2, title: "Virtual Smile & Implant Simulation", description: "3D treatment plan shared with exact timeline and prosthetic material choices." },
      { step: 3, title: "Surgical Phase & Temporary Fixed Bridge", description: "Painless implant placement under sedation with immediate provisional loading." },
      { step: 4, title: "Digital Impression & Lab Milling", description: "Precision CAD/CAM milling of permanent zirconia crowns." },
      { step: 5, title: "Final Delivery & Occlusal Verification", description: "Permanent fixation of prosthetic teeth, bite adjustment, and travel release." }
    ],
    whyIndia: [
      "Use of internationally renowned Swiss and Swedish implant systems (Straumann, Nobel Biocare)",
      "Equipped with modern 3D CBCT digital diagnostics and laser dentistry",
      "Cost savings of 60% to 75% compared to Western Europe, the US, and Australia",
      "Convenient combination of clinical excellence and cultural hospitality"
    ],
    recommendedStay: "7 to 10 Days for immediate loading implants or cosmetic smile makeovers",
    recoveryTimeline: "Normal diet resumes within a few days; implant osseointegration matures over 3-6 months",
    hospitalIds: ["apollo-delhi", "medanta-gurugram", "max-saket"],
    doctorIds: ["dr-anurag-ahuja"],
    faqs: [
      {
        question: "Can dental implants be placed if I have bone loss in my jaw?",
        answer: "Yes, modern techniques such as bone grafting, sinus lifts, and advanced zygomatic or basal implants allow secure tooth restoration even in cases of severe jaw bone atrophy."
      }
    ]
  }
];

export const getTreatmentBySlug = (slug: string): TreatmentItem | undefined => {
  return treatmentsData.find((t) => t.slug === slug);
};

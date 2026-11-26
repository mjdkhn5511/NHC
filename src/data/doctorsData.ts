export interface DoctorHighlight {
  number: string;
  text: string;
}

export interface DoctorFAQ {
  question: string;
  answer: string;
}

export interface DoctorItem {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  designation: string;
  hospitalName: string;
  hospitalSlug: string;
  city: "New Delhi" | "Gurugram" | "Noida" | "Faridabad";
  qualifications: string;
  experienceYears: string;
  image: string;
  bio: string;
  expertise: string[];
  awardsAndAchievements: string[];
  memberships: string[];
  featured: boolean;
  highlights?: DoctorHighlight[];
  faqs?: DoctorFAQ[];
}

export const doctorsData: DoctorItem[] = [
  {
    id: "dr-naresh-trehan",
    slug: "dr-naresh-trehan",
    name: "Dr. Naresh Trehan",
    specialty: "Cardiology and Heart Surgery",
    designation: "Chairman & Managing Director, Chief Cardiothoracic Surgeon",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MD, Diplomat American Board of Cardiothoracic Surgery, FACS",
    experienceYears: "50+ Years",
    image: "/images/doctors/dr-naresh-trehan.webp",
    bio: "Dr. Naresh Trehan is a globally renowned cardiothoracic surgeon, founder of Medanta – The Medicity, and former personal surgeon to the President of India. He trained and practiced at New York University Medical Center before returning to India to spearhead modern open-heart surgery.",
    expertise: [
      "Minimally Invasive Beating-Heart Bypass Surgery (CABG)",
      "Robotic-Assisted Cardiac Revascularization",
      "Complex Aortic Aneurysm Repair",
      "Total Arterial Myocardial Revascularization",
      "Cardiothoracic Critical Care Optimization"
    ],
    awardsAndAchievements: [
      "Padma Bhushan & Padma Shri recipient from the President of India",
      "Dr. B. C. Roy National Award",
      "Past President of the International Society for Minimally Invasive Cardiac Surgery (ISMICS)"
    ],
    memberships: [
      "American College of Surgeons (FACS)",
      "Society of Thoracic Surgeons (STS, USA)",
      "International Society for Minimally Invasive Cardiac Surgery"
    ],
    featured: true
  },
  {
    id: "dr-ashok-seth",
    slug: "dr-ashok-seth",
    name: "Dr. Ashok Seth",
    specialty: "Cardiology and Heart Surgery",
    designation: "Chairman, Fortis Escorts Heart Institute",
    hospitalName: "Fortis Escorts Heart Institute (FEHI)",
    hospitalSlug: "fortis-escorts-heart-institute",
    city: "New Delhi",
    qualifications: "MBBS, MD, FRCP (London, Edinburgh, Ireland), FACC, FSCAI",
    experienceYears: "40+ Years",
    image: "/images/doctors/Dr-Ashok-Seth.webp",
    bio: "Dr. Ashok Seth is one of the most respected interventional cardiologists worldwide. He has pioneered numerous transcatheter techniques in the Asia-Pacific region, including Directional Atherectomy, Drug-Eluting Stents, and TAVR.",
    expertise: [
      "Transcatheter Aortic Valve Replacement (TAVR / TAVI)",
      "Percutaneous Coronary Intervention (PCI) & Complex Stenting",
      "Chronic Total Occlusion (CTO) Recanalization",
      "Bioabsorbable Vascular Scaffolds (BVS)",
      "Left Main Coronary Artery Interventions"
    ],
    awardsAndAchievements: [
      "Padma Bhushan & Padma Shri awarded by the Government of India",
      "Over 50,000 angiograms and 20,000 angioplasties conducted",
      "Global educator and live operator at TCT and EuroPCR congresses"
    ],
    memberships: [
      "Fellow of Royal College of Physicians (London, Edinburgh, Ireland)",
      "Fellow of American College of Cardiology (FACC)",
      "Society for Cardiovascular Angiography and Interventions (FSCAI)"
    ],
    featured: true
  },
  {
    id: "dr-arvinder-soin",
    slug: "dr-arvinder-soin",
    name: "Dr. Arvinder Singh Soin",
    specialty: "Liver Transplant",
    designation: "Chairman, Medanta Liver Transplant and Regenerative Medicine",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MS (AIIMS), FRCS (Glasgow), FRCS (Edinburgh)",
    experienceYears: "35+ Years",
    image: "/images/doctors/dr-arvinder-singh-soin.webp",
    bio: "Dr. Arvinder Singh Soin is internationally recognized for establishing living donor liver transplantation in India. Over three decades, he and his team have performed thousands of successful liver transplants with a 95% success rate, treating patients from over 50 countries.",
    expertise: [
      "Living Donor Liver Transplantation (Adult & Pediatric)",
      "ABO-Incompatible (Blood Group Mismatched) Liver Transplants",
      "Liver Resections for Hepatocellular Carcinoma (HCC)",
      "Biliary Reconstruction & Complex Biliary Atresia Surgery",
      "Post-Transplant Critical Care Management"
    ],
    awardsAndAchievements: [
      "Padma Shri awarded by the President of India",
      "Dr. B. C. Roy National Award for Liver Transplantation",
      "Over 3,500 successful liver transplant surgeries led"
    ],
    memberships: [
      "International Liver Transplantation Society (ILTS)",
      "Association of Surgeons of Great Britain and Ireland",
      "Fellow of Royal Colleges of Surgeons (Edinburgh and Glasgow)"
    ],
    featured: true
  },
  {
    id: "dr-subhash-gupta",
    slug: "dr-subhash-gupta",
    name: "Dr. Subhash Gupta",
    specialty: "Liver and Gastroenterology",
    designation: "Chairman, Centre for Liver and Biliary Sciences",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS, MS (AIIMS), FRCS (Glasgow), FRCS (Edinburgh)",
    experienceYears: "35+ Years",
    image: "/images/doctors/subash-gupta.webp",
    bio: "Dr. Subhash Gupta is a legendary pioneer of hepatobiliary and liver transplant surgery. He was instrumental in building North India's foremost high-volume liver transplant programs at Sir Ganga Ram Hospital, Apollo, and Max Healthcare.",
    expertise: [
      "Living Donor Liver Transplantation",
      "Acute Liver Failure Rescue Interventions",
      "Complex Hepatectomy for Liver Malignancies",
      "Pancreaticoduodenectomy (Whipple Procedure)",
      "Pediatric Living Related Liver Surgery"
    ],
    awardsAndAchievements: [
      "Dr. B. C. Roy National Award",
      "Honorary Professor of Surgery in multiple international institutions",
      "Pioneered protocol-based living-donor safety benchmarks in India"
    ],
    memberships: [
      "International Hepato-Pancreato-Biliary Association (IHPBA)",
      "Royal College of Physicians and Surgeons of Glasgow"
    ],
    featured: true
  },
  {
    id: "dr-ashok-rajgopal",
    slug: "dr-ashok-rajgopal",
    name: "Dr. Ashok Rajgopal",
    specialty: "Orthopedics and Joint Replacement",
    designation: "Group Chairman – Institute of Musculoskeletal Disorders and Orthopaedics",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS (AFMC), MS Orthopaedics (AIIMS), MCh Orthopaedics (UK), FRCS (Edinburgh), FIMSA",
    experienceYears: "40+ Years",
    image: "/images/doctors/Dr-Ashok-Rajgopal.webp",
    bio: "Innovation is a word that is immediately associated with Dr. Ashok Rajgopal. An orthopedic surgeon of international repute, he has several firsts to his credit. He performed the first bilateral total knee replacement surgery, the first minimally invasive joint replacement surgery in India, the first virtual total knee replacement using patient-specific instrumentation, and was the first surgeon to use gender-specific knees in India. A prolific surgeon, he has to his credit, more than 39,000 total knee replacement surgeries and over 60,000 arthroscopic surgeries for sports injuries. A designer surgeon, he was on the design team of the Persona knee system developed by Zimmer. He is also the designer of the instruments used in minimally invasive total knee replacement which are currently used by surgeons worldwide. His enduring passion for practicing and advancing medical and surgical sciences has seen him win a number of prestigious awards including the Padma Shri and Dr. B.C. Roy Award.",
    highlights: [
      {
        number: "01",
        text: "Over 39,000+ Total Knee Replacement surgeries & 60,000+ Arthroscopic surgeries performed."
      },
      {
        number: "02",
        text: "First in India to perform bilateral and minimally invasive (MIS) total knee replacement surgery, and virtual TKR with patient-specific instrumentation."
      },
      {
        number: "03",
        text: "Co-designer of the Zimmer Persona Knee System and developer of patented MIS total knee replacement instruments used worldwide."
      }
    ],
    expertise: [
      "Knee Replacement Surgery",
      "Joint Replacement Surgery",
      "Arthroscopic Ligament Surgeries",
      "Arthroplasty Surgeries",
      "Hip Surgery",
      "Robotic Surgeries"
    ],
    awardsAndAchievements: [
      "Padma Shri awarded by the President of India (2014)",
      "Dr. B.C. Roy National Award (2014)",
      "Lifetime Achievement Award, Asia Pacific Arthroplasty Society (APAS)",
      "Pioneered Bilateral MIS Total Knee Replacement & Virtual Patient-Specific TKR in India"
    ],
    memberships: [
      "Royal College of Surgeons of Edinburgh (FRCS)",
      "International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS)",
      "Fellow of the International Medical Sciences Academy (FIMSA)",
      "Indian Orthopaedic Association (IOA)"
    ],
    faqs: [
      {
        question: "What are Dr. Ashok Rajgopal's OPD consultation fees and appointment process at Medanta Gurugram?",
        answer: "An in-person OPD consultation with Dr. Ashok Rajgopal at Medanta – The Medicity (Sector 38, Gurugram) typically ranges from INR 2,000 to INR 3,000 (approx. USD $25 – $40). International and outstation patients can secure a priority OPD appointment, free pre-travel case review, and formal treatment estimates by contacting Nadwa Healthcare at +91 96485 78320 or info@nadwahealthcare.com. Nadwa Healthcare coordinates appointment scheduling directly with Medanta's surgical department at zero facilitation fee."
      },
      {
        question: "What is the cost of Total Knee Replacement surgery by Dr. Ashok Rajgopal at Medanta?",
        answer: "A Unilateral (Single Knee) Total Knee Replacement under Dr. Ashok Rajgopal at Medanta – The Medicity generally starts from INR 2,50,000 to INR 3,50,000 (USD $3,000 – $4,200). A Bilateral (Both Knees) Total Knee Replacement package ranges between INR 4,50,000 and INR 6,50,000 (USD $5,500 – $7,800), depending on whether conventional, minimally invasive (MIS), or robotic Zimmer Persona knee systems are selected. Standard packages include surgeon fees, 4-5 days hospital admission, pre-anesthetic testing, routine surgical consumables, and initial physical rehabilitation."
      },
      {
        question: "How can international patients get a medical visa invitation letter for treatment under Dr. Ashok Rajgopal?",
        answer: "International patients traveling to Medanta – The Medicity for joint replacement under Dr. Ashok Rajgopal can obtain an official Visa Invitation Letter (VIL) within 24 to 48 hours through Nadwa Healthcare. Simply submit copies of the patient's and accompanying attendant's valid passports along with recent knee X-rays and medical records via WhatsApp (+91 96485 78320) or email (info@nadwahealthcare.com). Nadwa Healthcare issues the official hospital invitation letter free of charge to facilitate rapid Indian e-Medical Visa processing."
      }
    ],
    featured: true
  },
  {
    id: "dr-rana-patir",
    slug: "dr-rana-patir",
    name: "Dr. Rana Patir",
    specialty: "Neurosurgery and Spine Surgery",
    designation: "Chairman, Department of Neurosurgery",
    hospitalName: "Fortis Memorial Research Institute (FMRI)",
    hospitalSlug: "fortis-memorial-research-institute",
    city: "Gurugram",
    qualifications: "MBBS, MS (General Surgery), M.Ch (Neurosurgery, AIIMS)",
    experienceYears: "32+ Years",
    image: "/images/doctors/dr-rana-patir.webp",
    bio: "Dr. Rana Patir is an eminent neurosurgeon with over three decades of clinical mastery in brain tumor surgery, skull base resections, and minimally invasive spine surgeries, having conducted more than 10,000 neurosurgical procedures.",
    expertise: [
      "Microscopic Skull Base & Brain Tumor Resection",
      "Minimally Invasive Spine Surgery (Keyhole Discectomy)",
      "Awake Craniotomy with Motor Tract Mapping",
      "Cerebrovascular Aneurysm Clipping",
      "Pediatric Neurosurgery & Craniosynostosis"
    ],
    awardsAndAchievements: [
      "Trained at AIIMS and prestigious European neurosurgical centers",
      "Conducted over 10,000 neurosurgical procedures with exceptional safety record"
    ],
    memberships: [
      "Neurological Society of India (NSI)",
      "Congress of Neurological Surgeons (CNS, USA)",
      "Skull Base Surgery Society of India"
    ],
    featured: true
  },
  {
    id: "dr-vinod-raina",
    slug: "dr-vinod-raina",
    name: "Dr. Vinod Raina",
    specialty: "Oncology and Cancer Treatment",
    designation: "Chairman, Medical Oncology & Hematology",
    hospitalName: "Fortis Memorial Research Institute (FMRI)",
    hospitalSlug: "fortis-memorial-research-institute",
    city: "Gurugram",
    qualifications: "MBBS, MD (Medicine), MRCP (UK), FRCP (Edinburgh)",
    experienceYears: "40+ Years",
    image: "/images/doctors/dr-vinode-raina.webp",
    bio: "Dr. Vinod Raina is North India's foremost medical oncologist, former Professor & Head of Medical Oncology at AIIMS New Delhi. He performed India's first high-dose chemotherapy with peripheral blood stem cell transplant.",
    expertise: [
      "Autologous & Allogeneic Bone Marrow Transplantation",
      "Precision Medical Oncology & Immunotherapy",
      "Targeted Therapy for Lung, Breast, and GI Cancers",
      "Hematological Malignancies (Lymphoma, Myeloma)",
      "Cancer Genomics & Clinical Trials"
    ],
    awardsAndAchievements: [
      "Conducted over 600 stem cell transplants",
      "Former Head of Medical Oncology at AIIMS New Delhi",
      "Pioneer in high-dose chemotherapy protocols in India"
    ],
    memberships: [
      "American Society of Clinical Oncology (ASCO)",
      "European Society for Medical Oncology (ESMO)",
      "Association of Physicians of India"
    ],
    featured: true
  },
  {
    id: "dr-ashok-vaid",
    slug: "dr-ashok-kumar-vaid",
    name: "Dr. Ashok Kumar Vaid",
    specialty: "Oncology and Cancer Treatment",
    designation: "Chairman, Medical and Pediatric Oncology, Hematology & BMT",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MD (Internal Medicine), DM (Medical Oncology)",
    experienceYears: "38+ Years",
    image: "/images/doctors/Dr-Ashok-Kumar-Vaid.webp",
    bio: "Dr. Ashok Kumar Vaid has the unique distinction of having performed the first 25 bone marrow transplants in the private healthcare sector in North India. He heads one of the largest medical oncology divisions in the country.",
    expertise: [
      "Bone Marrow & Stem Cell Transplantation",
      "Precision Targeted Cancer Therapy",
      "Chemotherapy & Molecular Oncology",
      "Pediatric Hematological Malignancies",
      "Immune Checkpoint Inhibitor Protocols"
    ],
    awardsAndAchievements: [
      "Padma Shri awarded by the President of India",
      "Pioneer of private sector Bone Marrow Transplantation in North India",
      "Over 40 published papers in leading peer-reviewed oncology journals"
    ],
    memberships: [
      "American Society of Clinical Oncology (ASCO)",
      "European Society for Medical Oncology (ESMO)",
      "Indian Society of Medical and Paediatric Oncology"
    ],
    featured: true
  },
  {
    id: "dr-harit-chaturvedi",
    slug: "dr-harit-chaturvedi",
    name: "Dr. Harit Chaturvedi",
    specialty: "Oncology and Cancer Treatment",
    designation: "Chairman, Max Institute of Cancer Care",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS, MS (General Surgery), M.Ch (Surgical Oncology)",
    experienceYears: "35+ Years",
    image: "/images/doctors/Harit_Chaturvedi.webp",
    bio: "Dr. Harit Chaturvedi is a surgical oncologist of international standing, leading over 100 oncologists across Max Healthcare centers. He has performed thousands of complex cancer resections with organ preservation techniques.",
    expertise: [
      "Robotic & Advanced Surgical Oncology",
      "Thoracic & Lung Cancer Resection",
      "Gastrointestinal & Colorectal Oncology",
      "Head and Neck Cancer Surgery",
      "Multidisciplinary Tumor Board Direction"
    ],
    awardsAndAchievements: [
      "Past President of Indian Association of Surgical Oncology (IASO)",
      "Pioneered protocol-based cancer tumor boards in North India"
    ],
    memberships: [
      "Indian Association of Surgical Oncology (IASO)",
      "Association of Surgeons of India (ASI)",
      "Society of Surgical Oncology (SSO, USA)"
    ],
    featured: false
  },
  {
    id: "dr-rajesh-ahlawat",
    slug: "dr-rajesh-ahlawat",
    name: "Dr. Rajesh Kumar Ahlawat",
    specialty: "Kidney and Urology",
    designation: "Group Chairman, Kidney and Urology Institute",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MS (General Surgery), MNAMS, M.Ch (Urology)",
    experienceYears: "42+ Years",
    image: "/images/doctors/rajesh-ahlawat.webp",
    bio: "Dr. Rajesh Ahlawat is a global pioneer in minimally invasive and robotic urology. He co-developed the Robotic Kidney Transplantation technique with regional hypothermia, now adopted by medical centers across the world.",
    expertise: [
      "Robotic Kidney Transplantation with Hypothermia",
      "Robotic Partial & Radical Nephrectomy",
      "Robotic Prostatectomy & Bladder Reconstruction",
      "Endourology & Complex Stone Removal",
      "Pelvic Laparoscopic Reconstructive Surgery"
    ],
    awardsAndAchievements: [
      "Dr. B. C. Roy National Award",
      "Co-innovator of Robotic Kidney Transplantation protocol",
      "Pioneered endourology and laparoscopic donor nephrectomy programs in India"
    ],
    memberships: [
      "American Urological Association (AUA)",
      "Endourological Society (International)",
      "Urological Society of India (USI)"
    ],
    featured: true
  },
  {
    id: "dr-anant-kumar",
    slug: "dr-anant-kumar",
    name: "Dr. Anant Kumar",
    specialty: "Kidney and Urology",
    designation: "Chairman, Urology, Renal Transplant & Robotics",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS, MS (Surgery), M.Ch (Urology), DNB (Urology), FACS",
    experienceYears: "38+ Years",
    image: "/images/doctors/dr-anant-kumar.webp",
    bio: "Dr. Anant Kumar is one of India's foremost urologists and kidney transplant surgeons. He has performed over 3,500 kidney transplants and over 500 robotic surgeries, with extensive experience in laparoscopic donor nephrectomies.",
    expertise: [
      "Robotic & Laparoscopic Kidney Transplantation",
      "Robotic Urological Oncology (Prostate & Bladder)",
      "Laser Prostatectomy (HoLEP)",
      "Urethral Stricture Reconstruction",
      "Renovascular Hypertension Interventions"
    ],
    awardsAndAchievements: [
      "Over 3,500 kidney transplants completed",
      "Fellow of American College of Surgeons (FACS)",
      "Former Director of Urology & Renal Transplantation at Fortis & Apollo"
    ],
    memberships: [
      "American Urological Association (AUA)",
      "British Association of Urological Surgeons (BAUS)",
      "International Transplant Society"
    ],
    featured: false
  },
  {
    id: "dr-yk-mishra",
    slug: "dr-yk-mishra",
    name: "Dr. Y. K. Mishra",
    specialty: "Cardiology and Heart Surgery",
    designation: "Chief of Heart Surgery & Head of Cardiac Sciences",
    hospitalName: "Manipal Hospital, Dwarka",
    hospitalSlug: "manipal-hospital-dwarka",
    city: "New Delhi",
    qualifications: "MBBS, MS, Ph.D. (Cardiovascular Surgery), FAMS",
    experienceYears: "40+ Years",
    image: "/images/doctors/dr-y-k-mishra.webp",
    bio: "Dr. Y. K. Mishra is an internationally celebrated heart surgeon with more than 15,000 open heart surgeries to his credit. He is globally recognized for robotic-assisted cardiac surgery and port-access minimally invasive cardiac procedures.",
    expertise: [
      "Minimally Invasive Cardiac Surgery (MICS)",
      "Robotic Heart Surgery",
      "Complex Mitral & Aortic Valve Repairs",
      "Coronary Artery Bypass Grafting (Beating Heart)",
      "Ventricular Assist Devices (LVAD)"
    ],
    awardsAndAchievements: [
      "Past President of Indian Association of Cardiovascular and Thoracic Surgeons (IACTS)",
      "Conducted over 15,000 cardiac operations",
      "Pioneer in Port-Access cardiac surgery in North India"
    ],
    memberships: [
      "International Society for Minimally Invasive Cardiac Surgery (ISMICS)",
      "Society of Thoracic Surgeons (STS, USA)",
      "Indian Association of Cardiovascular and Thoracic Surgeons"
    ],
    featured: false
  },
  {
    id: "dr-balram-airan",
    slug: "dr-balram-airan",
    name: "Dr. Balram Airan",
    specialty: "Cardiology and Heart Surgery",
    designation: "Senior Consultant & Former Dean, Chief of CTVS (AIIMS)",
    hospitalName: "Indraprastha Apollo Hospitals",
    hospitalSlug: "indraprastha-apollo-hospitals",
    city: "New Delhi",
    qualifications: "MBBS, MS, M.Ch (CTVS, AIIMS), FAMS",
    experienceYears: "42+ Years",
    image: "/images/doctors/dr-balram-airan.webp",
    bio: "Dr. Balram Airan was Professor and Head of Cardiothoracic and Vascular Surgery (CTVS) and Dean at AIIMS, New Delhi. He performed India's first successful pediatric heart transplant and is an icon of cardiac surgery.",
    expertise: [
      "Pediatric Cardiac Surgery & Congenital Anomalies",
      "Adult Heart Transplantation",
      "Complex Aortic Aneurysms and Dissections",
      "Valve Repair and Reconstruction",
      "Reoperative Cardiac Surgery"
    ],
    awardsAndAchievements: [
      "Performed India's first successful pediatric heart transplant",
      "Former Dean & Chief of CTVS at AIIMS New Delhi",
      "National Dr. B. C. Roy Award"
    ],
    memberships: [
      "Indian Association of Cardiovascular and Thoracic Surgeons",
      "International Society for Heart and Lung Transplantation (ISHLT)"
    ],
    featured: false
  },
  {
    id: "dr-sks-marya",
    slug: "dr-sks-marya",
    name: "Dr. S. K. S. Marya",
    specialty: "Orthopedics and Joint Replacement",
    designation: "Chairman, Bone and Joint Institute",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MS (Ortho), M.Ch (Liverpool), FRCS (England), FRCS (Glasgow)",
    experienceYears: "40+ Years",
    image: "/images/doctors/dr-s-k-s-marya.webp",
    bio: "Dr. S. K. S. Marya has conducted more than 18,000 joint replacement surgeries. He has served as President of the Indian Orthopaedic Association and the International Congress of Joint Reconstruction (ICJR).",
    expertise: [
      "Bilateral Simultaneous Total Knee Replacement",
      "Surface Replacement & Direct Anterior Hip Replacement",
      "Complex Revision Arthroplasty",
      "Computer Navigated Joint Surgery",
      "Unicompartmental Knee Arthroplasty"
    ],
    awardsAndAchievements: [
      "Past President of Indian Orthopaedic Association (IOA)",
      "Conducted over 18,000 joint replacement surgeries",
      "Fellow of Royal Colleges of Surgeons (England, Edinburgh, Glasgow)"
    ],
    memberships: [
      "International Congress for Joint Reconstruction (ICJR)",
      "British Orthopaedic Association (BOA)",
      "Indian Orthopaedic Association"
    ],
    featured: false
  },
  {
    id: "dr-subhash-jangid",
    slug: "dr-subhash-jangid",
    name: "Dr. Subhash Jangid",
    specialty: "Orthopedics and Joint Replacement",
    designation: "Director & Head, Bone & Joint Institute",
    hospitalName: "Fortis Memorial Research Institute (FMRI)",
    hospitalSlug: "fortis-memorial-research-institute",
    city: "Gurugram",
    qualifications: "MBBS, MS (Ortho, AIIMS), DNB, M.Ch (Ortho)",
    experienceYears: "24+ Years",
    image: "/images/doctors/Dr-Subhash-jangid.webp",
    bio: "Dr. Subhash Jangid trained at AIIMS New Delhi and specializes in robotic joint replacement surgery. He was among the pioneers to introduce NAVIO and MAKO robotic joint replacement protocols in Delhi NCR.",
    expertise: [
      "Robotic-Arm Total Knee Arthroplasty",
      "Minimally Invasive Hip Replacement",
      "Revision Knee & Hip Surgery",
      "Sports Arthroscopy & Meniscal Reconstruction",
      "Complex Periarticular Trauma"
    ],
    awardsAndAchievements: [
      "Over 10,000 joint replacements performed",
      "Pioneer of Robotic Knee Replacement in Gurugram",
      "Best Paper Award at Indian Orthopaedic Association Conference"
    ],
    memberships: [
      "Indian Orthopaedic Association (IOA)",
      "Delhi Orthopaedic Association (DOA)",
      "International Society of Arthroscopy and Knee Surgery"
    ],
    featured: false
  },
  {
    id: "dr-ips-oberoi",
    slug: "dr-ips-oberoi",
    name: "Dr. I. P. S. Oberoi",
    specialty: "Orthopedics and Joint Replacement",
    designation: "Chairman, Orthopedics and Joint Replacement",
    hospitalName: "Artemis Hospital",
    hospitalSlug: "artemis-hospital-gurugram",
    city: "Gurugram",
    qualifications: "MBBS, MS (Ortho), M.Ch (Ortho, Germany)",
    experienceYears: "30+ Years",
    image: "/images/doctors/ips-oberoi.webp",
    bio: "Dr. I. P. S. Oberoi is an acclaimed orthopedic and joint replacement surgeon with training in Germany, the USA, and the UK. He has performed over 7,000 joint replacements with navigation assistance.",
    expertise: [
      "Primary & Revision Hip and Knee Replacements",
      "Arthroscopic Knee & Shoulder Reconstruction",
      "Multi-Ligament Reconstruction",
      "Computer Navigated Joint Realignment",
      "Pelvic Trauma and Deformity Correction"
    ],
    awardsAndAchievements: [
      "Over 7,000 joint replacement operations",
      "Member of faculty for international AO trauma and arthroplasty courses"
    ],
    memberships: [
      "American Association of Orthopaedic Surgeons (AAOS)",
      "Indian Arthroscopy Society",
      "Asia Pacific Orthopaedic Association"
    ],
    featured: false
  },
  {
    id: "dr-sandeep-vaishya",
    slug: "dr-sandeep-vaishya",
    name: "Dr. Sandeep Vaishya",
    specialty: "Neurosurgery and Spine Surgery",
    designation: "Executive Director, Neurosurgery",
    hospitalName: "Fortis Memorial Research Institute (FMRI)",
    hospitalSlug: "fortis-memorial-research-institute",
    city: "Gurugram",
    qualifications: "MBBS, MS, M.Ch (Neurosurgery, AIIMS), Herbert Krause Medal",
    experienceYears: "30+ Years",
    image: "/images/doctors/dr-sandeep-vaishya.webp",
    bio: "Dr. Sandeep Vaishya is a premier neurosurgeon in India, specializing in minimally invasive brain and spine surgeries, skull base tumors, and brachial plexus surgeries. He trained at AIIMS and the Mayo Clinic, USA.",
    expertise: [
      "Gamma Knife & CyberKnife Radiosurgery",
      "Brachial Plexus and Peripheral Nerve Surgery",
      "Minimally Invasive Spine Surgery (MISS)",
      "Microvascular Decompression for Trigeminal Neuralgia",
      "Intracranial Aneurysm and AVM Surgeries"
    ],
    awardsAndAchievements: [
      "Herbert Krause Medal for excellence in Neuro-Oncology",
      "World-recognized authority in Brachial Plexus injury reconstruction",
      "Over 12,000 neurosurgical procedures completed"
    ],
    memberships: [
      "Neurological Society of India (NSI)",
      "Congress of Neurological Surgeons (USA)",
      "World Federation of Neurosurgical Societies (WFNS)"
    ],
    featured: false
  },
  {
    id: "dr-aditya-gupta",
    slug: "dr-aditya-gupta",
    name: "Dr. Aditya Gupta",
    specialty: "Neurosurgery and Spine Surgery",
    designation: "Director, Neurosurgery & Cyberknife Centre",
    hospitalName: "Artemis Hospital",
    hospitalSlug: "artemis-hospital-gurugram",
    city: "Gurugram",
    qualifications: "MBBS, M.Ch (Neurosurgery, AIIMS), Sir Dorabji Tata Award",
    experienceYears: "26+ Years",
    image: "/images/doctors/Dr-Aditya-Gupta.webp",
    bio: "Dr. Aditya Gupta is an accomplished neurosurgeon trained at AIIMS New Delhi and the University of Amsterdam. He has special expertise in stereotactic radiosurgery (CyberKnife), Deep Brain Stimulation (DBS), and brain tumor surgery.",
    expertise: [
      "CyberKnife Robotic Radiosurgery",
      "Deep Brain Stimulation (DBS) for Parkinson's",
      "Epilepsy Surgery and Vagal Nerve Stimulation",
      "Acoustic Neuroma and Skull Base Surgery",
      "Endoscopic Pituitary Surgery"
    ],
    awardsAndAchievements: [
      "Sir Dorabji Tata Award for Best Neurosurgeon at AIIMS",
      "Pioneer of Deep Brain Stimulation and Cyberknife in North India",
      "Co-investigator in international neurological clinical trials"
    ],
    memberships: [
      "Congress of Neurological Surgeons (CNS, USA)",
      "Neurological Society of India",
      "International Stereotactic Radiosurgery Society (ISRS)"
    ],
    featured: false
  },
  {
    id: "dr-randhir-sud",
    slug: "dr-randhir-sud",
    name: "Dr. Randhir Sud",
    specialty: "Liver and Gastroenterology",
    designation: "Chairman, Institute of Digestive & Hepatobiliary Sciences",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MD (Medicine, AIIMS), DM (Gastroenterology, AIIMS), FAMS",
    experienceYears: "40+ Years",
    image: "/images/doctors/Dr-Randhir-Sud.webp",
    bio: "Dr. Randhir Sud is a pioneer of therapeutic gastrointestinal endoscopy in India. He was awarded the prestigious Padma Shri by the Government of India for establishing advanced interventional endoscopy in North India.",
    expertise: [
      "Therapeutic ERCP & SpyGlass Cholangioscopy",
      "Endoscopic Ultrasound (EUS) and Stenting",
      "Endoscopic Submucosal Dissection (ESD / EMR)",
      "Management of Chronic Liver Disease & Cirrhosis",
      "GI Bleeding and Variceal Banding"
    ],
    awardsAndAchievements: [
      "Padma Shri awarded by the President of India",
      "Master Endoscopist Award by the Society of Gastrointestinal Endoscopy of India",
      "Over 40 years of pioneering contributions to GI endoscopy"
    ],
    memberships: [
      "American Society for Gastrointestinal Endoscopy (ASGE)",
      "Indian Society of Gastroenterology (ISG)",
      "World Endoscopy Organization"
    ],
    featured: false
  },
  {
    id: "dr-sunil-choudhary",
    slug: "dr-sunil-choudhary",
    name: "Dr. Sunil Choudhary",
    specialty: "Cosmetic and Plastic Surgery",
    designation: "Principal Director & Chief of Plastic Surgery",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS, MS, FRCSEd (Plastic Surgery, UK)",
    experienceYears: "30+ Years",
    image: "/images/doctors/dr-sunil-choudhary.webp",
    bio: "Dr. Sunil Choudhary trained in the United Kingdom, holding full GMC specialist registration in plastic surgery. He is known globally for facial aesthetic surgery, complex rhinoplasties, and post-mastectomy breast reconstructions.",
    expertise: [
      "Deep Plane Facelift & Neck Lift Rejuvenation",
      "High-Definition Body Contouring & VASER Liposuction",
      "Preservation Rhinoplasty & Septorhinoplasty",
      "Breast Augmentation & Dual-Plane Mastopexy",
      "Microvascular Reconstructive Surgery"
    ],
    awardsAndAchievements: [
      "Fellow of Royal College of Surgeons of Edinburgh (FRCSEd)",
      "Pioneer of advanced microvascular aesthetic surgery in Delhi NCR"
    ],
    memberships: [
      "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
      "International Society of Aesthetic Plastic Surgery (ISAPS)",
      "Association of Plastic Surgeons of India (APSI)"
    ],
    featured: false
  },
  {
    id: "dr-lokesh-kumar",
    slug: "dr-lokesh-kumar",
    name: "Dr. Lokesh Kumar",
    specialty: "Cosmetic and Plastic Surgery",
    designation: "Director & HOD, Plastic, Cosmetic and Reconstructive Surgery",
    hospitalName: "Indraprastha Apollo Hospitals",
    hospitalSlug: "indraprastha-apollo-hospitals",
    city: "New Delhi",
    qualifications: "MBBS, MS, M.Ch (Plastic Surgery, PGI Chandigarh)",
    experienceYears: "32+ Years",
    image: "/images/doctors/Dr-Lokesh-Kumar.webp",
    bio: "Dr. Lokesh Kumar is one of the most senior plastic surgeons in North India. He trained extensively in the UK and USA, and has served as President of the Association of Plastic Surgeons of India.",
    expertise: [
      "Aesthetic Body Sculpting & Abdominoplasty",
      "Cosmetic Rhinoplasty & Facial Contouring",
      "Aesthetic Breast Reconstruction & Reduction",
      "Fat Grafting & Non-Surgical Rejuvenation",
      "Post-Bariatric Body Lift Surgery"
    ],
    awardsAndAchievements: [
      "Past President of Association of Plastic Surgeons of India (APSI)",
      "International Scholar of American Society of Plastic Surgeons (ASPS)"
    ],
    memberships: [
      "American Society of Plastic Surgeons (ASPS)",
      "International Society of Aesthetic Plastic Surgery (ISAPS)",
      "British Association of Plastic Surgeons"
    ],
    featured: false
  },
  {
    id: "dr-abha-majumdar",
    slug: "dr-abha-majumdar",
    name: "Dr. Abha Majumdar",
    specialty: "IVF and Fertility",
    designation: "Director & Head, Centre of IVF and Human Reproduction",
    hospitalName: "Indraprastha Apollo Hospitals",
    hospitalSlug: "indraprastha-apollo-hospitals",
    city: "New Delhi",
    qualifications: "MBBS, MS (Obstetrics & Gynecology), FICS, FICOG",
    experienceYears: "40+ Years",
    image: "/images/doctors/dr-abha-majumdar.webp",
    bio: "Dr. Abha Majumdar is an eminent fertility pioneer in India. She led the team that delivered North India's first IVF baby in the private sector and has assisted over 25,000 international and domestic couples in their parenting journey.",
    expertise: [
      "In Vitro Fertilization (IVF) & ICSI",
      "Pre-Implantation Genetic Diagnosis (PGD / PGS)",
      "Management of Recurrent Implantation Failure",
      "Advanced Reproductive Endoscopy & Hysteroscopy",
      "Fertility Preservation for Oncology Patients"
    ],
    awardsAndAchievements: [
      "Delivered North India's first private-sector IVF baby",
      "Over 25,000 successful reproductive cycles guided",
      "Lifetime Achievement Award in Reproductive Medicine"
    ],
    memberships: [
      "European Society of Human Reproduction and Embryology (ESHRE)",
      "American Society for Reproductive Medicine (ASRM)",
      "Indian Society for Assisted Reproduction (ISAR)"
    ],
    featured: false
  },
  {
    id: "dr-kaberi-banerjee",
    slug: "dr-kaberi-banerjee",
    name: "Dr. Kaberi Banerjee",
    specialty: "IVF and Fertility",
    designation: "Clinical Director & Senior Fertility Specialist",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS (AIIMS), MD (Obstetrics & Gynae, AIIMS), MRCOG (London)",
    experienceYears: "26+ Years",
    image: "/images/doctors/dr-kaberi.webp",
    bio: "Dr. Kaberi Banerjee trained at AIIMS New Delhi and Guy’s & St Thomas’ Hospital in London. She specializes in handling challenging IVF cases with low ovarian reserve and recurrent miscarriages.",
    expertise: [
      "Individualized Ovarian Stimulation Protocols",
      "Blastocyst Culture and Cryopreservation",
      "Micro-TESE and Severe Male Factor Infertility",
      "Donor Oocyte / Embryo Coordination",
      "Endometriosis-Associated Infertility"
    ],
    awardsAndAchievements: [
      "Member of Royal College of Obstetricians and Gynaecologists (MRCOG, London)",
      "Over 12,000 successful IVF deliveries led",
      "National Healthcare Leadership Award"
    ],
    memberships: [
      "Royal College of Obstetricians and Gynaecologists (UK)",
      "National Academy of Medical Sciences (NAMS)",
      "Indian Fertility Society (IFS)"
    ],
    featured: false
  },
  {
    id: "dr-gaurav-kharya",
    slug: "dr-gaurav-kharya",
    name: "Dr. Gaurav Kharya",
    specialty: "Oncology and Cancer Treatment",
    designation: "Clinical Lead & Head, Pediatric Hemato-Oncology & BMT",
    hospitalName: "Indraprastha Apollo Hospitals",
    hospitalSlug: "indraprastha-apollo-hospitals",
    city: "New Delhi",
    qualifications: "MBBS, DCH, DNB (Pediatrics), Fellowship Pediatric Hemato-Oncology (UK)",
    experienceYears: "20+ Years",
    image: "/images/doctors/Dr-Gaurav-Kharya.webp",
    bio: "Dr. Gaurav Kharya is a world-renowned specialist in Pediatric Bone Marrow Transplantation. He trained at Newcastle upon Tyne, UK, and performed India's first half-matched (haploidentical) bone marrow transplant for Severe Combined Immunodeficiency (SCID).",
    expertise: [
      "Haploidentical (Half-Matched) Bone Marrow Transplant",
      "Stem Cell Transplant for Thalassemia & Sickle Cell Disease",
      "Treatment for Primary Immunodeficiency Syndromes",
      "Pediatric Leukemia and Lymphoma Protocols",
      "CAR-T Cell Therapy Coordination"
    ],
    awardsAndAchievements: [
      "Conducted over 800 successful pediatric stem cell transplants",
      "Performed India's first haplo-BMT for SCID in an infant",
      "International speaker on non-malignant pediatric BMT"
    ],
    memberships: [
      "European Society for Blood and Marrow Transplantation (EBMT)",
      "International BMT Registry (CIBMTR)",
      "Pediatric Hemato-Oncology Chapter of IAP"
    ],
    featured: false
  },
  {
    id: "dr-dharma-choudhary",
    slug: "dr-dharma-choudhary",
    name: "Dr. Dharma Choudhary",
    specialty: "Oncology and Cancer Treatment",
    designation: "Senior Director & HOD, Bone Marrow Transplant & Hematology",
    hospitalName: "Medanta – The Medicity",
    hospitalSlug: "medanta-the-medicity",
    city: "Gurugram",
    qualifications: "MBBS, MD (Medicine), DM (Clinical Hematology, AIIMS), BMT Fellowship (Canada)",
    experienceYears: "26+ Years",
    image: "/images/doctors/Dr-Dharma-Choudhary.webp",
    bio: "Dr. Dharma Choudhary is North India's premier adult hematologist and bone marrow transplant surgeon. He trained at AIIMS and the British Columbia Cancer Agency in Vancouver, Canada, having led over 1,500 bone marrow transplants.",
    expertise: [
      "Allogeneic & Autologous Bone Marrow Transplantation",
      "Stem Cell Transplants for Aplastic Anemia & Thalassemia",
      "Treatment of Acute Myeloid Leukemia (AML) & Multiple Myeloma",
      "Graft Versus Host Disease (GVHD) Management",
      "Matched Unrelated Donor (MUD) Transplants"
    ],
    awardsAndAchievements: [
      "Over 1,500 successful bone marrow transplants led",
      "Trained at British Columbia Cancer Agency, Vancouver, Canada",
      "Healthcare Excellence Award for BMT in North India"
    ],
    memberships: [
      "American Society of Hematology (ASH)",
      "European Hematology Association (EHA)",
      "Indian Society of Hematology and Blood Transfusion"
    ],
    featured: false
  },
  {
    id: "dr-dinesh-khullar",
    slug: "dr-dinesh-khullar",
    name: "Dr. Dinesh Khullar",
    specialty: "Kidney and Urology",
    designation: "Chairman, Nephrology & Renal Transplant Medicine",
    hospitalName: "Max Super Speciality Hospital, Saket",
    hospitalSlug: "max-super-speciality-hospital-saket",
    city: "New Delhi",
    qualifications: "MBBS, MD (Medicine, PGI Chandigarh), DM (Nephrology, PGI), FISN",
    experienceYears: "34+ Years",
    image: "/images/doctors/Dr-Dinesh-Khullar.webp",
    bio: "Dr. Dinesh Khullar is an eminent nephrologist with over 34 years of experience. He trained at the Postgraduate Institute of Medical Education and Research (PGIMER) Chandigarh and has overseen thousands of kidney transplants.",
    expertise: [
      "High-Risk & ABO-Incompatible Kidney Transplantation",
      "Post-Transplant Immunosuppressive Management",
      "Chronic Kidney Disease Retardation Protocols",
      "Diabetic Nephropathy & Glomerular Diseases",
      "Continuous Renal Replacement Therapy (CRRT)"
    ],
    awardsAndAchievements: [
      "Fellow of International Society of Nephrology (FISN)",
      "Pioneer in establishing continuous ambulatory peritoneal dialysis in North India"
    ],
    memberships: [
      "International Society of Nephrology (ISN)",
      "The Transplantation Society (TTS)",
      "Indian Society of Nephrology"
    ],
    featured: false
  },
  {
    id: "dr-sanjay-gogoi",
    slug: "dr-sanjay-gogoi",
    name: "Dr. Sanjay Gogoi",
    specialty: "Kidney and Urology",
    designation: "Head of Department, Urology & Renal Transplantation",
    hospitalName: "Manipal Hospital, Dwarka",
    hospitalSlug: "manipal-hospital-dwarka",
    city: "New Delhi",
    qualifications: "MBBS, MS, M.Ch (Urology, AIIMS), DNB, MNAMS",
    experienceYears: "28+ Years",
    image: "/images/doctors/Dr-Sanjay-Gogoi.webp",
    bio: "Dr. Sanjay Gogoi is an expert in robotic urology, renal transplantation, and pediatric reconstructive urology. He trained at AIIMS New Delhi and has conducted over 1,000 renal transplants.",
    expertise: [
      "Robotic-Assisted Kidney Transplantation",
      "Pediatric Renal Transplantation",
      "Reconstructive Urology & Urethral Strictures",
      "Robotic Prostatectomy & Partial Nephrectomy",
      "Laparoscopic Donor Nephrectomy"
    ],
    awardsAndAchievements: [
      "Over 1,000 renal transplants performed",
      "Pioneer in pediatric robotic renal transplantation"
    ],
    memberships: [
      "Urological Society of India (USI)",
      "American Urological Association (AUA)",
      "Indian Society of Organ Transplantation (ISOT)"
    ],
    featured: false
  }
];

export const getDoctorBySlug = (slug: string): DoctorItem | undefined => {
  return doctorsData.find((d) => d.slug === slug);
};

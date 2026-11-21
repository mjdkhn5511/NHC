export interface HospitalItem {
  id: string;
  slug: string;
  name: string;
  city: "New Delhi" | "Gurugram" | "Noida" | "Faridabad";
  locationDetail: string;
  hospitalType: "Quaternary Care Multi-Speciality" | "Super-Speciality Cardiac Institute" | "Multi-Speciality Research Hospital";
  bedCapacity: string;
  accreditation: string[];
  image: string;
  shortDesc: string;
  fullOverview: string;
  specialties: string[];
  internationalFacilities: string[];
  keyHighlights: string[];
  distanceFromAirport: string;
  featured: boolean;
}

export const hospitalsData: HospitalItem[] = [
  {
    id: "sanar-gurugram",
    slug: "sanar-international-hospital",
    name: "Sanar International Hospitals",
    city: "Gurugram",
    locationDetail: "Golf Course Road, Sector 53, Gurugram, Delhi NCR 122002",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "130+ Beds (35 ICU Beds)",
    accreditation: ["NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/sanar-international-hospital.webp",
    shortDesc: "A premier quaternary care super-speciality hospital on Golf Course Road, Gurugram, specialized in complex liver and kidney transplants, bone marrow transplants, neurosciences, and advanced oncology.",
    fullOverview: "Sanar International Hospitals is an advanced quaternary care hospital situated at Golf Course Road, Gurugram (Delhi NCR). Founded by prominent healthcare leadership with a vision to deliver personalized, world-class medical treatments, Sanar brings together elite clinicians, cutting-edge surgical infrastructure, laminar airflow modular operating suites, and a dedicated Bone Marrow Transplant unit. The hospital is globally favored by international patients from the Middle East (UAE, Saudi Arabia, Oman), CIS nations (Uzbekistan, Kazakhstan), and Africa for high-complexity organ transplants, neuro-spine surgeries, and targeted cancer treatments with dedicated concierge care.",
    specialties: [
      "Liver Transplant and Hepatobiliary Surgery",
      "Kidney and Urology (Renal Transplants)",
      "Bone Marrow Transplant and Hemato-Oncology",
      "Oncology and Cancer Institute",
      "Neurosurgery and Spine Surgery",
      "Cardiology and Heart Surgery",
      "Orthopedics and Robotic Joint Replacement",
      "Gastroenterology and GI Surgery"
    ],
    internationalFacilities: [
      "Dedicated International Patient Care Lounge & Executive Desk",
      "Multilingual Interpreters (Arabic, Russian, French, Uzbek)",
      "Free Indian Medical Visa Invitation Letter & FRRO Assistance",
      "Complimentary Airport Transfers (Indira Gandhi International Airport)",
      "Tailored International Dietary Services (Halal & Continental)",
      "Concierge Assistance for Patient & Attendant Lodging on Golf Course Road"
    ],
    keyHighlights: [
      "State-of-the-art Quaternary Center with dedicated Bone Marrow and Organ Transplant ICUs",
      "Ultra-modern modular operation theaters with laminar airflow and infection control",
      "Strategically situated on Golf Course Road, Gurugram — approx. 20 mins from Delhi International Airport",
      "Renowned for high success rates in adult and pediatric liver and kidney transplantations",
      "End-to-end transparent package pricing for international medical travelers"
    ],
    distanceFromAirport: "Approx. 18 km from Indira Gandhi International Airport (DEL) (approx. 20-25 mins via expressway)",
    featured: true
  },
  {
    id: "medanta-gurugram",
    slug: "medanta-the-medicity",
    name: "Medanta – The Medicity",
    city: "Gurugram",
    locationDetail: "Sector 38, Gurugram, Delhi NCR",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "1,250+ Beds",
    accreditation: ["JCI Accredited", "NABH Certified", "NABL Accredited Labs"],
    image: "/images/hospitals/medanta-the-medicity.webp",
    shortDesc: "One of India's largest multi-super specialty institutes founded by renowned cardiac surgeon Dr. Naresh Trehan, housing world-class institutes for heart, liver transplant, neurosciences, and robotic oncology.",
    fullOverview: "Medanta – The Medicity is a sprawling 43-acre medical campus in Gurugram, Delhi NCR. The institute brings together high-end healthcare infrastructure, robotic surgical consoles, CyberKnife radiosurgery, and leading medical minds under one roof. Designed to serve international patients seamlessly, Medanta has dedicated lounges, international food courts, and multilingual coordinators.",
    specialties: [
      "Cardiology and Heart Surgery",
      "Liver Transplant and Hepatobiliary Surgery",
      "Neurosurgery and Spine Surgery",
      "Oncology and Cancer Institute",
      "Orthopedics and Robotic Joint Replacement",
      "Kidney and Urology"
    ],
    internationalFacilities: [
      "Dedicated International Patient Lounge with Private Check-in",
      "On-site Currency Exchange & International SIM Cards",
      "Multilingual Translators (Arabic, French, Russian)",
      "Dietary Kitchens with Halal & International Menus",
      "Airport Transfer Coordination Desk",
      "Private VIP Suite Rooms for Patient & Family"
    ],
    keyHighlights: [
      "Home to the world-renowned Liver Transplant Institute headed by Dr. Arvinder Soin",
      "Pioneered robotic beating-heart cardiac surgeries in Delhi NCR",
      "Equipped with Brain Suite, CyberKnife VSI, and Da Vinci Xi Robotic Systems",
      "Direct highway connectivity to Indira Gandhi International Airport (approx. 20-25 mins)"
    ],
    distanceFromAirport: "Approx. 18 km from Indira Gandhi International Airport (DEL)",
    featured: true
  },
  {
    id: "apollo-delhi",
    slug: "indraprastha-apollo-hospitals",
    name: "Indraprastha Apollo Hospitals",
    city: "New Delhi",
    locationDetail: "Sarita Vihar, Delhi Mathura Road, New Delhi",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "710+ Beds",
    accreditation: ["JCI Accredited (First in India, 2005)", "NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/indraprastha-apollo-hospitals.webp",
    shortDesc: "The flagship institution of Apollo Hospitals Group and the first hospital in India to receive prestigious Joint Commission International (JCI) accreditation.",
    fullOverview: "Indraprastha Apollo Hospitals in New Delhi is a pioneer of modern healthcare in India. Spanning over 15 acres, it provides comprehensive tertiary and quaternary care across more than 50 specialties. Apollo is internationally celebrated for historic achievements in pediatric liver transplantation, multi-organ transplants, and complex structural heart interventions.",
    specialties: [
      "Organ Transplants (Liver, Kidney, Bone Marrow)",
      "Cardiology & Cardiothoracic Surgery",
      "Oncology & Proton Therapy Coordination",
      "Neurosurgery & Spine Center",
      "Orthopedics & Joint Replacement",
      "Cosmetic & Plastic Surgery",
      "Pediatrics & Pediatric Cardiac Surgery"
    ],
    internationalFacilities: [
      "Expansive Apollo International Patient Services Wing",
      "Dedicated Guest Relations & Embassy Liaison Desk",
      "Prayer Rooms for Multi-faith International Guests",
      "Specialized Medical Visa Extension Support Desk",
      "Complimentary Wi-Fi & International TV Channels",
      "Customized Dietary Meal Planning"
    ],
    keyHighlights: [
      "First hospital in India to achieve JCI accreditation (continuously re-accredited)",
      "Over 35,000 successful organ transplants completed across the Apollo network",
      "Dedicated specialized Pediatric Intensive Care (PICU) and Neonatal ICU (NICU)",
      "Centrally situated near South Delhi medical hubs and Jasola District Centre"
    ],
    distanceFromAirport: "Approx. 22 km from Indira Gandhi International Airport (DEL)",
    featured: true
  },
  {
    id: "fortis-fmri",
    slug: "fortis-memorial-research-institute",
    name: "Fortis Memorial Research Institute (FMRI)",
    city: "Gurugram",
    locationDetail: "Sector 44, Opposite HUDA City Centre, Gurugram, Delhi NCR",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "1,000 Beds Potential (300+ Operational)",
    accreditation: ["JCI Accredited", "NABH Certified", "NABL Certified"],
    image: "/images/hospitals/fortis-memorial-research-institute.webp",
    shortDesc: "Recognized as 'The Next Generation Hospital', FMRI is an elite multi-super-speciality destination with advanced stem cell, neurosciences, and robotic cancer programs.",
    fullOverview: "Fortis Memorial Research Institute (FMRI) in Gurugram is an internationally acclaimed quaternary healthcare destination. With an open, light-filled architectural design, FMRI integrates world-renowned clinicians, comprehensive robotic surgical technology, and exceptional international patient concierge services.",
    specialties: [
      "Robotic Oncology & Hematology",
      "Neurosciences & Complex Spine Surgery",
      "Robotic Joint Replacement & Sports Injuries",
      "Cardiac Sciences & Vascular Interventions",
      "Renal Sciences & Urology",
      "IVF and Reproductive Medicine"
    ],
    internationalFacilities: [
      "Executive International Patient Lounge with Refreshments",
      "Dedicated Personal Patient Buddy throughout Hospitalization",
      "Seamless Medical Opinion & Teleconsultation Suites",
      "Arrangement for Long-stay Serviced Apartments Nearby",
      "Language Support in Arabic, Russian, and French"
    ],
    keyHighlights: [
      "Equipped with Two Modular Brain Suites and Biplane Cath Labs",
      "Renowned Bone Marrow Transplant and CAR-T Cell Therapy Unit",
      "Conveniently positioned adjacent to luxury hotels and shopping amenities in Gurugram"
    ],
    distanceFromAirport: "Approx. 16 km from Indira Gandhi International Airport (DEL)",
    featured: true
  },
  {
    id: "max-saket",
    slug: "max-super-speciality-hospital-saket",
    name: "Max Super Speciality Hospital, Saket",
    city: "New Delhi",
    locationDetail: "1, 2, Press Enclave Road, Saket, New Delhi",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "530+ Beds",
    accreditation: ["JCI Accredited", "NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/max-super-speciality.webp",
    shortDesc: "A premier healthcare destination in South Delhi, recognized for excellence in neurosciences, cardiac care, oncology, bariatric surgery, and metabolic medicine.",
    fullOverview: "Max Super Speciality Hospital in Saket is one of North India’s leading medical institutions. With state-of-the-art diagnostic facilities including 3.0 Tesla digital broadband MRI, 256-slice Brilliance iCT scanner, and TrueBeam STx radiosurgery, Max Saket delivers compassionate clinical care.",
    specialties: [
      "Cardiac Sciences & Electrophysiology",
      "Cancer Care (Max Institute of Cancer Care)",
      "Neurosciences (Brain & Spine)",
      "Bariatric & Metabolic Laparoscopic Surgery",
      "Orthopedics & Joint Reconstruction",
      "Aesthetic & Reconstructive Surgery"
    ],
    internationalFacilities: [
      "Dedicated International Patient Desk and Waiting Room",
      "Priority OPD appointments and diagnostic queue management",
      "Foreign currency exchange and telecommunication support",
      "Tailored international culinary choices during room stay"
    ],
    keyHighlights: [
      "First facility in India with Novalis Tx and TrueBeam STx linear accelerators",
      "High volume of complex international keyhole bariatric and thoracic cases",
      "Centrally located in South Delhi near historical and retail landmarks"
    ],
    distanceFromAirport: "Approx. 14 km from Indira Gandhi International Airport (DEL)",
    featured: true
  },
  {
    id: "artemis-gurugram",
    slug: "artemis-hospital-gurugram",
    name: "Artemis Hospital",
    city: "Gurugram",
    locationDetail: "Sector 51, Gurugram, Delhi NCR",
    hospitalType: "Multi-Speciality Research Hospital",
    bedCapacity: "400+ Beds",
    accreditation: ["JCI Accredited", "NABH Certified"],
    image: "/images/hospitals/artemis-hospital.webp",
    shortDesc: "The first JCI and NABH accredited hospital in Gurugram, noted for patient safety standards, cardiac electrophysiology, and pediatric oncology.",
    fullOverview: "Established in 2007, Artemis Hospital is a modern multi-specialty institution built to international design benchmarks. It offers top-tier clinicians, paperless electronic medical systems, and comprehensive international patient packages.",
    specialties: [
      "Cardiology & Interventional Radiology",
      "Surgical, Medical & Radiation Oncology",
      "Orthopedics & Sports Medicine",
      "Plastic, Aesthetic & Reconstructive Surgery",
      "Nephrology & Urology"
    ],
    internationalFacilities: [
      "International Patient Lounge with Business Center",
      "Complimentary Local SIM card and Travel Sim Guidance",
      "Dedicated International Patient Coordinator",
      "Special dietary menu preparation for Middle Eastern and African cuisines"
    ],
    keyHighlights: [
      "First hospital in Gurugram to achieve prestigious JCI accreditation",
      "Equipped with 3T MRI, 64-slice Dual Source CT, and high-end cath labs",
      "Proximity to peaceful residential serviced apartments in Gurugram"
    ],
    distanceFromAirport: "Approx. 20 km from Indira Gandhi International Airport (DEL)",
    featured: false
  },
  {
    id: "manipal-delhi",
    slug: "manipal-hospital-dwarka",
    name: "Manipal Hospital, Dwarka",
    city: "New Delhi",
    locationDetail: "Sector 6, Dwarka, New Delhi",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "380 Beds",
    accreditation: ["NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/manipal-hospital-dwarka.webp",
    shortDesc: "A contemporary quaternary care super-specialty hospital located just 10 minutes from Delhi International Airport, offering seamless transit care.",
    fullOverview: "Manipal Hospital Dwarka brings decades of Manipal Healthcare Group heritage to Delhi NCR. Featuring cutting-edge digital integration, automated pneumatic tube systems, and specialized ICUs, it represents an ideal option for international travelers wanting quick airport access.",
    specialties: [
      "Cancer Care & Organ Specific Tumor Boards",
      "Cardiac Sciences & Vascular Surgery",
      "Renal Sciences & Dialysis",
      "Orthopedics & Joint Replacements",
      "Gastroenterology & Hepatobiliary Sciences"
    ],
    internationalFacilities: [
      "Instant Airport Proximity (10 minutes transit time)",
      "Dedicated International Helpdesk & Pre-Admission Lounge",
      "Fast-track diagnostic investigations and consultations",
      "Multilingual translation support"
    ],
    keyHighlights: [
      "Closest premier multi-specialty hospital to Indira Gandhi International Airport",
      "State-of-the-art robotic surgery programs and advanced 128-slice CT scans",
      "Zero-traffic access via Delhi Airport Metro and expressways"
    ],
    distanceFromAirport: "Approx. 9 km from Indira Gandhi International Airport (DEL) (10 mins)",
    featured: false
  },
  {
    id: "fortis-escorts",
    slug: "fortis-escorts-heart-institute",
    name: "Fortis Escorts Heart Institute (FEHI)",
    city: "New Delhi",
    locationDetail: "Okhla Road, New Delhi",
    hospitalType: "Super-Speciality Cardiac Institute",
    bedCapacity: "310+ Beds",
    accreditation: ["JCI Accredited", "NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/fortis-escorts-heart-institute.webp",
    shortDesc: "One of the world's most acclaimed dedicated heart institutes, renowned for pioneering adult and pediatric cardiac surgery and TAVR procedures.",
    fullOverview: "Fortis Escorts Heart Institute (FEHI) in New Delhi has set global benchmarks in cardiac care for over three decades. Headed by legendary interventional cardiologist Dr. Ashok Seth, FEHI has conducted tens of thousands of complex angiographies, angioplasties, and bypass surgeries.",
    specialties: [
      "Interventional Cardiology & Complex Stenting",
      "Adult Cardiothoracic & Vascular Surgery (CTVS)",
      "Pediatric Cardiology & Congenital Heart Surgery",
      "Heart Failure, LVAD & Heart Transplant Evaluation",
      "Electrophysiology & Arrhythmia Management"
    ],
    internationalFacilities: [
      "Dedicated Escorts International Heart Clinic",
      "Direct Physician-to-Physician Medical Report Review",
      "Round-the-clock International Cardiac Emergency Desk",
      "Customized Arab and African patient accommodation assistance"
    ],
    keyHighlights: [
      "Global pioneer in Transcatheter Aortic Valve Replacement (TAVR)",
      "Internationally recognized faculty with hundreds of published surgical papers",
      "Ranked among Asia’s leading single-specialty cardiovascular hospitals"
    ],
    distanceFromAirport: "Approx. 21 km from Indira Gandhi International Airport (DEL)",
    featured: false
  },
  {
    id: "jaypee-noida",
    slug: "jaypee-hospital-noida",
    name: "Jaypee Hospital",
    city: "Noida",
    locationDetail: "Sector 128, Noida-Greater Noida Expressway, Noida, Delhi NCR",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "504 Beds (Planned 1200)",
    accreditation: ["NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/jaypee-hospital.webp",
    shortDesc: "A sprawling 25-acre green medical campus on the Noida Expressway, known for solid organ transplantation, advanced robotic surgery, and affordable care.",
    fullOverview: "Jaypee Hospital is Noida’s flagship healthcare destination. Designed with environmental sustainability and spacious healing spaces, it provides high-quality organ transplant programs and cancer surgeries with competitive, transparent pricing.",
    specialties: [
      "Liver & Kidney Transplantation",
      "Cardiac Sciences & Vascular Surgery",
      "Institute of Oncology & Bone Marrow Transplant",
      "Orthopedics & Spine Surgery",
      "Neurosciences & Stroke Management"
    ],
    internationalFacilities: [
      "International Patient Guest House on Campus",
      "Dedicated Airport Pickup and Drop Shuttles",
      "Language Interpreters for Arabic and Russian",
      "Hassle-free FRRO Registration Assistance"
    ],
    keyHighlights: [
      "25-acre pollution-free green campus conducive to peaceful recovery",
      "Highly affordable treatment packages for solid organ transplantations",
      "Seamless expressway access connecting Delhi, Noida, and Greater Noida"
    ],
    distanceFromAirport: "Approx. 35 km from Indira Gandhi International Airport (DEL)",
    featured: false
  },
  {
    id: "amrita-faridabad",
    slug: "amrita-hospital-faridabad",
    name: "Amrita Hospital",
    city: "Faridabad",
    locationDetail: "Sector 88, Faridabad, Delhi NCR",
    hospitalType: "Quaternary Care Multi-Speciality",
    bedCapacity: "2,600 Beds (Planned 2600, operational 500+)",
    accreditation: ["NABH Certified", "NABL Accredited"],
    image: "/images/hospitals/amrita-hospital.webp",
    shortDesc: "India’s largest private super-specialty hospital, featuring 81 specialties, a robotic laboratory, and 64 state-of-the-art modular operating rooms.",
    fullOverview: "Inaugurated in Faridabad (Delhi NCR), Amrita Hospital is a monumental healthcare endeavor spanning 130 acres. It features 64 modular operation theatres, smart digital patient monitoring, and an entire wing dedicated to maternal and child super-specialties.",
    specialties: [
      "Mother & Child Super Specialities",
      "Pediatric Cardiac Surgery & Cardiology",
      "Neurosciences & Complex Spine Surgery",
      "Robotic Oncology & Surgical Resection",
      "Gastroenterology & Solid Organ Transplants"
    ],
    internationalFacilities: [
      "Full-Floor International Patient Complex",
      "Guest Housing & Hotel Accommodation inside the Campus",
      "Multi-Cuisine Food Courts and Dietary Services",
      "Dedicated Concierge and Visa Liaison"
    ],
    keyHighlights: [
      "Massive infrastructure with cutting-edge medical simulation centers",
      "Unmatched focus on pediatric high-risk surgeries and congenital anomalies",
      "Expansive healing environment designed with highest hygiene and green standards"
    ],
    distanceFromAirport: "Approx. 40 km from Indira Gandhi International Airport (DEL)",
    featured: false
  }
];

export const getHospitalBySlug = (slug: string): HospitalItem | undefined => {
  return hospitalsData.find((h) => h.slug === slug);
};

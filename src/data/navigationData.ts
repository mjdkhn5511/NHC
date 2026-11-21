export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Hospitals",
    href: "/hospitals",
    children: [
      { label: "All Delhi NCR Hospitals", href: "/hospitals", desc: "Browse leading JCI & NABH accredited hospitals" },
      { label: "Sanar International Hospitals", href: "/hospitals/sanar-international-hospital", desc: "Quaternary care & transplants, Gurugram" },
      { label: "Medanta – The Medicity", href: "/hospitals/medanta-the-medicity", desc: "Gurugram multi-speciality institute" },
      { label: "Indraprastha Apollo", href: "/hospitals/indraprastha-apollo-hospitals", desc: "First JCI hospital in New Delhi" },
      { label: "Fortis Memorial (FMRI)", href: "/hospitals/fortis-memorial-research-institute", desc: "Next-gen quaternary care in Gurugram" },
      { label: "Max Super Speciality Saket", href: "/hospitals/max-super-speciality-hospital-saket", desc: "South Delhi oncology & cardiac center" },
      { label: "Fortis Escorts Heart", href: "/hospitals/fortis-escorts-heart-institute", desc: "Asia's leading cardiac institute" },
    ]
  },
  {
    label: "Doctors",
    href: "/doctors",
    children: [
      { label: "Find a Specialist", href: "/doctors", desc: "50+ renowned senior consultants" },
      { label: "Dr. Naresh Trehan", href: "/doctors/dr-naresh-trehan", desc: "Cardiothoracic Surgery" },
      { label: "Dr. Ashok Seth", href: "/doctors/dr-ashok-seth", desc: "Interventional Cardiology" },
      { label: "Dr. Arvinder Soin", href: "/doctors/dr-arvinder-soin", desc: "Liver Transplantation" },
      { label: "Dr. Ashok Rajgopal", href: "/doctors/dr-ashok-rajgopal", desc: "Robotic Joint Replacement" },
    ]
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "All 12 Specialties", href: "/treatments", desc: "Overview of all surgical & medical treatments" },
      { label: "Cardiology & Heart Surgery", href: "/treatments/cardiology", desc: "Bypass (CABG), valve replacement & TAVR" },
      { label: "Oncology & Cancer", href: "/treatments/cancer-treatment", desc: "Robotic oncology, CyberKnife & Proton beam" },
      { label: "Orthopedics & Joint Replacement", href: "/treatments/orthopedics", desc: "Robotic knee & hip arthroplasty" },
      { label: "Liver Transplant", href: "/treatments/liver-transplant", desc: "Living-donor liver transplantation" },
      { label: "Neurosurgery & Spine", href: "/treatments/neurosurgery", desc: "Brain tumors & minimally invasive spine" },
      { label: "Kidney & Urology", href: "/treatments/kidney-urology", desc: "HoLEP laser, renal transplant & RIRS" },
      { label: "IVF & Fertility", href: "/treatments/ivf-fertility", desc: "Advanced ART, ICSI & blastocyst culture" }
    ]
  },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" }
];

export const footerQuickLinks = [
  { label: "Medical Travel Blogs & Guides", href: "/blog" },
  { label: "Hospitals in Delhi NCR", href: "/hospitals" },
  { label: "Leading Medical Specialists", href: "/doctors" },
  { label: "Treatment Specialties", href: "/treatments" },
  { label: "Patient Journey & Services", href: "/services" },
  { label: "International Patient Stories", href: "/patient-stories" },
  { label: "About NadwaHealthcare", href: "/about" },
  { label: "Frequently Asked Questions", href: "/faqs" },
  { label: "Contact & Assistance", href: "/contact" }
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" }
];

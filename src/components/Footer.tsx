import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone, ShieldAlert, ArrowUpRight, HeartHandshake } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { legalLinks } from "../data/navigationData";
import { useLanguage } from "../context/LanguageContext";
import { SocialLinks } from "./SocialLinks";

const FOOTER_HOSPITALS: Record<string, Record<string, string>> = {
  "Medanta – The Medicity": {
    ar: "مستشفى ميدانتا – ذا ميديستي",
    fr: "Medanta – The Medicity",
    ru: "Меданта – Зе Медисити",
  },
  "Indraprastha Apollo Hospitals": {
    ar: "مستشفيات إندرابراستا أبولو",
    fr: "Hôpitaux Indraprastha Apollo",
    ru: "Клиники Индрапрастха Аполло",
  },
  "Fortis Memorial Research Institute": {
    ar: "معهد فورتيس للبحوث التذكاري (FMRI)",
    fr: "Institut de Recherche Mémorial Fortis",
    ru: "Мемориальный исследовательский институт Фортис",
  },
  "Max Super Speciality Hospital, Saket": {
    ar: "مستشفى ماكس التخصصي، ساكيت",
    fr: "Hôpital Max Super Spécialité, Saket",
    ru: "Клиника Макс Супер Спешиалити, Сакет",
  },
  "Fortis Escorts Heart Institute": {
    ar: "معهد فورتيس إسكورتس للقلب",
    fr: "Institut Cardiaque Fortis Escorts",
    ru: "Институт кардиологии Фортис Эскортс",
  },
  "Jaypee Hospital, Noida": {
    ar: "مستشفى جاي بي، نويدا",
    fr: "Hôpital Jaypee, Noida",
    ru: "Клиника Джейпи, Нойда",
  },
};

const getFooterHospitalName = (name: string, lang: string) => FOOTER_HOSPITALS[name]?.[lang] || name;

export const Footer: React.FC = () => {
  const { t, localizeUrl, currentLang, isRTL } = useLanguage();
  return (
    <footer className="bg-[#061B18] text-slate-300 border-t border-teal-950 content-auto">
      {/* Top Pre-Footer Banner */}
      <div className="bg-[#0a2c26] border-b border-teal-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <HeartHandshake className="w-5 h-5 text-teal-400" />
              {t("footer.urgentTitle", "Need an Urgent Second Medical Opinion?")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {t("footer.urgentDesc", "Send your recent diagnostic reports via WhatsApp or email for a free review by Delhi NCR super-specialists within 24 hours.")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hello NHC, I would like to request an urgent medical review.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-700/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              {t("footer.whatsappDesk", "WhatsApp International Desk")}
            </a>
            <Link
              to={localizeUrl("/contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-600/40 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>{t("footer.contactCoordinators", "Contact Hospital Coordinators")}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? "-scale-x-100" : ""}`} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />

            {/* Global Coverage Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/90 border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Serving International Patients Worldwide</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t("footer.brandDesc", "NadwaHealthcare (NHC) is a premier medical tourism facilitator guiding international patients to accredited hospitals and world-renowned specialists across Delhi NCR, India.")}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  New Delhi, Delhi NCR, India (Level 4, Jasola District Centre, Shaheen Bagh, 110001)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{t("nav.desk", "24/7 Helpline:")}</span>
                <a href={`tel:${siteConfig.phone}`} dir="ltr" className="hover:text-teal-400 transition-colors font-semibold">
                  <bdi dir="ltr">+91 96485 78320</bdi>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Email: <a href="mailto:info@nadwahealthcare.com" className="hover:text-teal-400 transition-colors">info@nadwahealthcare.com</a></span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider">{t("footer.languagesLabel", "Languages:")}</span>
              <span className="text-xs text-slate-300">English, العربية, Français, Русский</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider block mb-2">
                {currentLang === "ar" ? "تابعنا على وسائل التواصل:" : currentLang === "fr" ? "Suivez-nous :" : currentLang === "ru" ? "Мы в соцсетях:" : "Follow Us:"}
              </span>
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">{t("footer.quickLinks", "Quick Navigation")}</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to={localizeUrl("/")} className="hover:text-teal-300 transition-colors">{t("nav.home", "Home")}</Link></li>
              <li><Link to={localizeUrl("/treatments")} className="hover:text-teal-300 transition-colors">{t("nav.treatments", "Treatments")}</Link></li>
              <li><Link to={localizeUrl("/hospitals")} className="hover:text-teal-300 transition-colors">{t("nav.hospitals", "Hospitals")}</Link></li>
              <li><Link to={localizeUrl("/doctors")} className="hover:text-teal-300 transition-colors">{t("nav.doctors", "Doctors")}</Link></li>
              <li><Link to={localizeUrl("/services")} className="hover:text-teal-300 transition-colors">{t("nav.services", "Services")}</Link></li>
              <li><Link to={localizeUrl("/faqs")} className="hover:text-teal-300 transition-colors">{t("nav.faqs", "FAQs")}</Link></li>
              <li><Link to={localizeUrl("/blog")} className="hover:text-teal-300 transition-colors">{t("nav.blogs", "Blog")}</Link></li>
              <li><Link to={localizeUrl("/contact")} className="hover:text-teal-300 transition-colors">{t("nav.contact", "Contact")}</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">{t("footer.specialtiesTitle", "Key Specialties")}</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to={localizeUrl("/treatments/cardiology")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "أمراض وجراحة القلب" : currentLang === "fr" ? "Cardiologie et chirurgie cardiaque" : currentLang === "ru" ? "Кардиология и хирургия сердца" : "Cardiology & Heart Surgery"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/cancer-treatment")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "علاج الأورام والسرطان" : currentLang === "fr" ? "Oncologie et soins du cancer" : currentLang === "ru" ? "Онкология и лечение рака" : "Oncology & Cancer Care"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/orthopedics")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "جراحة العظام واستبدال المفاصل" : currentLang === "fr" ? "Orthopédie et prothèses" : currentLang === "ru" ? "Ортопедия и замена суставов" : "Robotic Knee & Hip Surgery"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/liver-transplant")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "زراعة الكبد من متبرع حي" : currentLang === "fr" ? "Greffe de foie donneur vivant" : currentLang === "ru" ? "Трансплантация печени" : "Living Donor Liver Transplant"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/neurosurgery")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "جراحة المخ والأعصاب والعمود الفقري" : currentLang === "fr" ? "Neurochirurgie et rachis" : currentLang === "ru" ? "Нейрохирургия и позвоночник" : "Neurosurgery & Spine"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/kidney-urology")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "الكلى وجراحة المسالك بالليزر" : currentLang === "fr" ? "Urologie laser et greffe rénale" : currentLang === "ru" ? "Трансплантация почки и урология" : "Kidney & Laser Urology"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments/ivf-fertility")} className="hover:text-teal-300 transition-colors">
                  {currentLang === "ar" ? "أطفال الأنابيب وعلاج العقم" : currentLang === "fr" ? "FIV et médecine de la reproduction" : currentLang === "ru" ? "ЭКО и репродуктивная медицина" : "IVF & Reproductive Medicine"}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/treatments")} className="text-teal-400 hover:underline font-medium">
                  {t("footer.viewAllSpecialties", "View All 12 Specialties →")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Delhi NCR Hospitals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">{t("footer.hospitalsTitle", "Delhi NCR Hospitals")}</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to={localizeUrl("/hospitals/medanta-the-medicity")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Medanta – The Medicity", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals/indraprastha-apollo-hospitals")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Indraprastha Apollo Hospitals", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals/fortis-memorial-research-institute")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Fortis Memorial Research Institute", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals/max-super-speciality-hospital-saket")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Max Super Speciality Hospital, Saket", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals/fortis-escorts-heart-institute")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Fortis Escorts Heart Institute", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals/jaypee-hospital-noida")} className="hover:text-teal-300 transition-colors">
                  {getFooterHospitalName("Jaypee Hospital, Noida", currentLang)}
                </Link>
              </li>
              <li>
                <Link to={localizeUrl("/hospitals")} className="text-teal-400 hover:underline font-medium">
                  {t("footer.viewAllHospitals", "View All Hospital Partners →")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Medical Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-teal-950/40 border border-teal-900/50 flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-teal-300">{t("footer.disclaimerBold", "Important Medical Disclaimer:")}</strong>{" "}
            {t("footer.disclaimerText", "NadwaHealthcare (NHC) is an independent international medical travel facilitator and patient concierge coordinator. NHC does not provide medical treatment, diagnoses, surgical procedures, or individual medical advice. All healthcare services, diagnoses, surgery, and clinical care are rendered solely by licensed doctors, surgeons, and accredited hospitals in India. Treatment estimates are non-binding institutional approximations.")}{" "}
            <Link to={localizeUrl("/medical-disclaimer")} className="text-teal-400 underline hover:text-teal-300">
              {t("footer.completeDisclaimer", "complete Medical Disclaimer")}
            </Link>{" "}
            {currentLang === "ar" ? "و" : currentLang === "fr" ? "et" : currentLang === "ru" ? "и" : "and"}{" "}
            <Link to={localizeUrl("/terms-and-conditions")} className="text-teal-400 underline hover:text-teal-300">
              {t("footer.termsOfService", "Terms of Service")}
            </Link>.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-teal-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} NadwaHealthcare (NHC). {t("footer.rights", "All Rights Reserved.")} Delhi NCR, India.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                to={localizeUrl(item.href)}
                className="hover:text-teal-300 transition-colors text-slate-300 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

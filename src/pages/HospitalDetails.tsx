import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Plane, 
  CheckCircle2, 
  ArrowLeft, 
  MessageSquare, 
  Globe2,
  Stethoscope
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { QuickConsultationForm } from "../components/QuickConsultationForm";
import { getHospitalBySlug, hospitalsData } from "../data/hospitalsData";
import { doctorsData } from "../data/doctorsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedHospital, getLocalizedHospitalName, getLocalizedDoctor } from "../utils/localizedData";

interface HospitalDetailsProps {
  onOpenConsultation: (hospitalName?: string) => void;
}

export const HospitalDetails: React.FC<HospitalDetailsProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const hospital = getHospitalBySlug(slug || "");

  if (!hospital) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">
          {currentLang === "ar" ? "لم يتم العثور على المستشفى" : currentLang === "fr" ? "Hôpital introuvable" : currentLang === "ru" ? "Госпиталь не найден" : "Hospital Profile Not Found"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {currentLang === "ar" ? "تعذر العثور على سجل هذا المستشفى." : currentLang === "fr" ? "Le dossier de cet hôpital est introuvable." : currentLang === "ru" ? "Запрошенная запись о клинике не найдена." : "The requested hospital record could not be found."}
        </p>
        <Link
          to={localizeUrl("/hospitals")}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-bold text-xs"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          {t("hospitalsPage.badge", "Hospital Directory")}
        </Link>
      </div>
    );
  }

  const localizedHospital = getLocalizedHospital(hospital, currentLang);
  const otherHospitals = hospitalsData.filter((h) => h.id !== hospital.id).slice(0, 3);
  const associatedDoctors = doctorsData.filter(
    (d) => d.hospitalSlug === hospital.slug || d.hospitalName.toLowerCase().includes(hospital.name.split("–")[0].trim().toLowerCase())
  );

  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": hospital.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hospital.locationDetail,
      "addressLocality": hospital.city,
      "addressRegion": "Delhi NCR",
      "addressCountry": "India"
    },
    "medicalSpecialty": hospital.specialties,
    "description": localizedHospital.shortDesc,
    "url": currentLang === "en" ? `https://www.nadwahealthcare.com/hospitals/${hospital.slug}` : `https://www.nadwahealthcare.com/${currentLang}/hospitals/${hospital.slug}`,
    "image": hospital.image.startsWith("http") ? hospital.image : `https://www.nadwahealthcare.com${hospital.image}`
  };

  const localizedCanonicalUrl = currentLang === "en"
    ? `https://www.nadwahealthcare.com/hospitals/${hospital.slug}`
    : `https://www.nadwahealthcare.com/${currentLang}/hospitals/${hospital.slug}`;

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${hospital.name} - ${localizedHospital.city} | Nadwa Healthcare`}
        description={`${hospital.name} in ${hospital.locationDetail}. Accreditations: ${hospital.accreditation.join(", ")}. Bed capacity: ${localizedHospital.bedCapacity}.`}
        canonicalUrl={localizedCanonicalUrl}
        schemaData={hospitalSchema}
        ogImage={hospital.image.startsWith("http") ? hospital.image : `https://www.nadwahealthcare.com${hospital.image}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-10 lg:py-14 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: t("nav.hospitals", "Hospitals"), href: "/hospitals" },
              { label: getLocalizedHospitalName(hospital.name, currentLang) }
            ]}
          />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white">
                  {localizedHospital.city} {t("hospitalDetails.hubSuffix", "Hub")}
                </span>
                <span className="text-xs text-teal-300 font-semibold bg-teal-900/60 px-3 py-1 rounded-full border border-teal-800">
                  {hospital.hospitalType}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {getLocalizedHospitalName(hospital.name, currentLang)}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{hospital.locationDetail}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation(hospital.name)}
                className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25 transition-all"
              >
                {t("hospitalDetails.requestAssistance", "Request Hospital Assistance")}
              </button>
              <a
                href={getWhatsAppUrl(`Hello NHC, I would like to inquire about admission and doctor consultation at ${hospital.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                {t("footer.whatsappDesk", "WhatsApp Desk")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-96 relative">
                <img
                  src={hospital.image}
                  alt={getLocalizedHospitalName(hospital.name, currentLang)}
                  width={800}
                  height={450}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  style={{ aspectRatio: "16 / 9" }}
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#08221E]/90 p-3 rounded-2xl flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Building2 className="w-4 h-4 text-teal-400" />
                    {t("hospitalDetails.capacity", "Capacity:")} {localizedHospital.bedCapacity}
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-300">
                    <Plane className="w-4 h-4" />
                    {localizedHospital.distanceFromAirport}
                  </span>
                </div>
              </div>

              {/* Accreditations Verified */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {currentLang === "ar" ? "معايير الجودة والاعتماد الدولي المعتمدة" : currentLang === "fr" ? "Normes d'accréditation et de qualité vérifiées" : currentLang === "ru" ? "Стандарты качества и международная аккредитация" : "Verified Quality & Accreditation Standards"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hospital.accreditation.map((acc, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-300 text-xs font-bold text-emerald-800 shadow-sm"
                    >
                      ✓ {acc}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-emerald-800/80 leading-relaxed">
                  {currentLang === "ar" ? "تؤكد هذه الاعتمادات الالتزام الصارم بمعايير مكافحة العدوى، وسلامة الجراحة، وأعلى بروتوكولات الرعاية السريرية العالمية." : currentLang === "fr" ? "Ces accréditations garantissent le strict respect des normes internationales de contrôle des infections et de sécurité chirurgicale." : currentLang === "ru" ? "Аккредитации подтверждают строгое соблюдение международных стандартов инфекционного контроля и хирургической безопасности." : "These accreditations signify rigorous adherence to international infection control, surgical safety benchmarks, and clinical governance."}
                </p>
              </div>

              {/* Full Overview */}
              <div className="content-auto">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {t("hospitalDetails.overviewTitle", "Hospital Overview & Medical Excellence")}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {localizedHospital.shortDesc || hospital.fullOverview}
                </p>
              </div>

              {/* Key Clinical Specialties */}
              <div className="content-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("hospitalDetails.specialtiesTitle", "Centers of Clinical Excellence")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hospital.specialties.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated International Patient Facilities */}
              <div className="content-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-teal-600" />
                  {t("hospitalDetails.internationalTitle", "International Patient Amenities")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hospital.internationalFacilities.map((fac, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-500 mt-1 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technological Highlights */}
              <div className="content-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("hospitalDetails.highlightsTitle", "Infrastructure & Surgical Highlights")}
                </h3>
                <ul className="space-y-2.5">
                  {hospital.keyHighlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-600"
                    >
                      <span className="text-teal-600 font-bold">✦</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Department Leads & Key Specialists at this Hospital */}
              {associatedDoctors.length > 0 && (
                <div className="content-auto pt-4 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                    <span>
                      {currentLang === "ar"
                        ? `كبار الأطباء والاستشاريين في ${getLocalizedHospitalName(hospital.name, currentLang)}`
                        : currentLang === "fr"
                        ? `Chefs de département et spécialistes à ${getLocalizedHospitalName(hospital.name, currentLang)}`
                        : currentLang === "ru"
                        ? `Ведущие врачи и руководители отделений в ${getLocalizedHospitalName(hospital.name, currentLang)}`
                        : `Key Specialists & Department Chairs at ${hospital.name}`}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {associatedDoctors.map((doc) => {
                      const locD = getLocalizedDoctor(doc, currentLang);
                      return (
                        <Link
                          key={doc.id}
                          to={localizeUrl(`/doctors/${doc.slug}`)}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500 transition-colors flex items-center gap-3.5 group"
                        >
                          <img
                            src={doc.image}
                            alt={doc.name}
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            style={{ width: "48px", height: "48px", aspectRatio: "1 / 1" }}
                            className="w-12 h-12 rounded-xl object-cover shrink-0 aspect-square"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                              {doc.name}
                            </h4>
                            <span className="text-[11px] text-teal-700 font-medium block truncate">
                              {locD.designation}
                            </span>
                            <span className="text-[10px] text-slate-500 block">
                              {doc.experienceYears} • {locD.specialty}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Inquiry Card */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-4">
                <QuickConsultationForm
                  relatedType="hospital"
                  pageContextName={hospital.name}
                  formTitle={currentLang === "ar" ? `استشر الأطباء في ${getLocalizedHospitalName(hospital.name, currentLang)}` : currentLang === "fr" ? `Consulter à ${getLocalizedHospitalName(hospital.name, currentLang)}` : currentLang === "ru" ? `Лечение в клинике ${getLocalizedHospitalName(hospital.name, currentLang)}` : `Consult at ${hospital.name}`}
                />

                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-2.5 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>{t("hospitalsPage.cityLabel", "City Location:")}</span>
                    <strong className="text-slate-800">{localizedHospital.city}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("hospitalDetails.airportDistance", "Airport Transit:")}</span>
                    <strong className="text-slate-800">{localizedHospital.distanceFromAirport.split("from")[0]}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{currentLang === "ar" ? "سرعة الرد:" : currentLang === "fr" ? "Délai de réponse :" : currentLang === "ru" ? "Время ответа :" : "Response Time:"}</span>
                    <strong className="text-emerald-700 font-bold">
                      {currentLang === "ar" ? "خلال 24 ساعة" : currentLang === "fr" ? "Sous 24h" : currentLang === "ru" ? "В течение 24ч" : "Within 24 Hours"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Recommended Hospitals */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {t("hospitalDetails.otherTitle", "Other Premier Delhi NCR Hospitals")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherHospitals.map((h) => {
                const locH = getLocalizedHospital(h, currentLang);
                return (
                  <div key={h.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 transition-colors">
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{locH.city}</span>
                    <Link to={localizeUrl(`/hospitals/${h.slug}`)} className="block text-sm font-bold text-slate-900 hover:text-teal-600 mt-1">
                      {getLocalizedHospitalName(h.name, currentLang)}
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">{h.hospitalType}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
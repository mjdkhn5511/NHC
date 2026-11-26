import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Building, 
  Award, 
  Briefcase, 
  ArrowLeft, 
  MessageSquare, 
  Calendar, 
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { QuickConsultationForm } from "../components/QuickConsultationForm";
import { getDoctorBySlug, doctorsData, type DoctorHighlight, type DoctorFAQ } from "../data/doctorsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedDoctor, getLocalizedHospitalName } from "../utils/localizedData";

interface DoctorDetailsProps {
  onOpenConsultation: (doctorName?: string) => void;
}

export const DoctorDetails: React.FC<DoctorDetailsProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const doctor = getDoctorBySlug(slug || "");

  if (!doctor) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">
          {currentLang === "ar" ? "لم يتم العثور على ملف الطبيب" : currentLang === "fr" ? "Profil de médecin introuvable" : currentLang === "ru" ? "Профиль врача не найден" : "Doctor Profile Not Found"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {currentLang === "ar" ? "تعذر العثور على بيانات هذا الطبيب." : currentLang === "fr" ? "Le dossier médical demandé est introuvable." : currentLang === "ru" ? "Запрошенная запись о враче не найдена." : "The requested doctor record could not be found."}
        </p>
        <Link
          to={localizeUrl("/doctors")}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-bold text-xs"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          {t("doctorsPage.badge", "Doctor Directory")}
        </Link>
      </div>
    );
  }

  const localizedDoctor = getLocalizedDoctor(doctor, currentLang);
  const otherDoctors = doctorsData.filter((d) => d.id !== doctor.id).slice(0, 3);

  const hospShort = doctor.hospitalName.split("–")[0].trim();

  let seoTitle = `${doctor.name} Appointment, Fees & Surgery Cost | ${hospShort}`;
  let seoDesc = `Consult ${doctor.name} (${localizedDoctor.designation} at ${hospShort}). Get free medical opinion, surgery cost estimate & fast appointment booking in India.`;

  if (currentLang === "fr") {
    seoTitle = `${doctor.name} : Rendez-vous, Tarifs et Avis Médical | ${hospShort}`;
    seoDesc = `Consultez le ${doctor.name} (${localizedDoctor.designation} à ${hospShort}). Obtenez un avis médical gratuit, estimation du coût et prise de rendez-vous rapide.`;
  } else if (currentLang === "ar") {
    seoTitle = `${doctor.name} - حجز موعد واستشارة جراحية وتكلفة العلاج | ${hospShort}`;
    seoDesc = `احجز موعداً واستشارة مجانية مع ${doctor.name} (${localizedDoctor.designation} في ${hospShort}). تقييم التقارير الطبية وتكلفة العلاج بدون أي رسوم.`;
  } else if (currentLang === "ru") {
    seoTitle = `${doctor.name} - Запись на прием, консультация и стоимость | ${hospShort}`;
    seoDesc = `Консультация с ${doctor.name} (${localizedDoctor.designation} в ${hospShort}). Бесплатное второе мнение и расчет стоимости лечения в Индии.`;
  }

  const localizedCanonicalUrl = currentLang === "en"
    ? `https://www.nadwahealthcare.com/doctors/${doctor.slug}`
    : `https://www.nadwahealthcare.com/${currentLang}/doctors/${doctor.slug}`;

  const physicianSchema = {
    "@type": "Physician",
    "name": doctor.name,
    "jobTitle": localizedDoctor.designation,
    "medicalSpecialty": localizedDoctor.specialty,
    "worksFor": {
      "@type": "Hospital",
      "name": doctor.hospitalName
    },
    "description": seoDesc,
    "url": localizedCanonicalUrl,
    "image": doctor.image.startsWith("http") ? doctor.image : `https://www.nadwahealthcare.com${doctor.image}`,
    ...(doctor.awardsAndAchievements && doctor.awardsAndAchievements.length > 0 ? { "award": doctor.awardsAndAchievements } : {})
  };

  const doctorSchema = localizedDoctor.faqs && localizedDoctor.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@graph": [
          physicianSchema,
          {
            "@type": "FAQPage",
            "mainEntity": localizedDoctor.faqs.map((faq: DoctorFAQ) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        ]
      }
    : {
        "@context": "https://schema.org",
        ...physicianSchema
      };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        canonicalUrl={localizedCanonicalUrl}
        schemaData={doctorSchema}
        ogImage={doctor.image.startsWith("http") ? doctor.image : `https://www.nadwahealthcare.com${doctor.image}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-10 lg:py-14 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: t("nav.doctors", "Doctors"), href: "/doctors" },
              { label: doctor.name }
            ]}
          />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white inline-block mb-2">
                {localizedDoctor.specialty}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {doctor.name}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-teal-300 font-medium">
                {localizedDoctor.designation}
              </p>
              <p className="mt-1 text-xs text-slate-300 flex items-center gap-2">
                <Building className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{getLocalizedHospitalName(doctor.hospitalName, currentLang)} ({localizedDoctor.city})</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation(`Consultation with ${doctor.name}`)}
                className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("doctorDetails.consultDoctor", "Consult Specialist")}</span>
              </button>

              <a
                href={getWhatsAppUrl(`Hello NHC, I would like to consult ${doctor.name} regarding my medical condition.`)}
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

      {/* Main Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Doctor Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Doctor Summary Card */}
              <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  width={160}
                  height={160}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  style={{ aspectRatio: "1 / 1" }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover object-top border-2 border-white shadow-md shrink-0 mx-auto sm:mx-0 aspect-square"
                />
                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full">
                      <Briefcase className="w-3.5 h-3.5" />
                      {localizedDoctor.experienceFormatted}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t("common.renownedLeader", "Verified Specialist")}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {currentLang === "ar" ? "المؤهلات العلمية" : currentLang === "fr" ? "Diplômes et titres" : currentLang === "ru" ? "Образование и квалификация" : "Academic Credentials"}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      {doctor.qualifications}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {t("doctorDetails.hospitalAffiliation", "Hospital Affiliation")}
                    </span>
                    <Link
                      to={localizeUrl(`/hospitals/${doctor.hospitalSlug}`)}
                      className="text-xs sm:text-sm font-semibold text-teal-700 hover:underline"
                    >
                      {getLocalizedHospitalName(doctor.hospitalName, currentLang)} →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Key Clinical Highlights (Cards 01, 02, 03 matching reference) */}
              {localizedDoctor.highlights && localizedDoctor.highlights.length > 0 && (
                <div className="content-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {localizedDoctor.highlights.map((item: DoctorHighlight, idx: number) => (
                      <div
                        key={idx}
                        className="relative p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500/60 transition-all shadow-xs flex flex-col justify-between group"
                      >
                        <div className="flex items-center justify-end mb-3">
                          <span className="text-xs font-extrabold text-slate-400 group-hover:text-teal-700 group-hover:bg-teal-50 transition-colors bg-slate-100/80 px-2.5 py-0.5 rounded-full border border-slate-200/60 tracking-wider">
                            {item.number}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Biography */}
              <div className="content-auto">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {t("doctorDetails.overviewTitle", "Professional Background & Bio")}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {localizedDoctor.bio}
                </p>
              </div>

              {/* Specialization and Expertise */}
              <div className="content-auto">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                  {currentLang === "ar"
                    ? "التخصص والخبرة السريرية"
                    : currentLang === "fr"
                    ? "Spécialisation et expertise clinique"
                    : currentLang === "ru"
                    ? "Специализация и клинический опыт"
                    : "Specialization And Expertise"}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {doctor.expertise.map((exp, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                        i === 0
                          ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                          : "bg-white text-slate-800 border-slate-200 hover:border-teal-400 hover:bg-teal-50/30"
                      }`}
                    >
                      {exp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards and Recognitions */}
              {doctor.awardsAndAchievements?.length > 0 && (
                <div className="content-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    {t("doctorDetails.awardsTitle", "Honors, Awards & Key Achievements")}
                  </h3>
                  <ul className="space-y-2.5">
                    {doctor.awardsAndAchievements.map((award, i) => (
                      <li
                        key={i}
                        className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex items-start gap-3 text-xs sm:text-sm text-amber-950"
                      >
                        <span className="text-amber-500 font-bold">★</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Memberships */}
              {doctor.memberships?.length > 0 && (
                <div className="content-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {t("doctorDetails.membershipsTitle", "Professional Societies & Fellowships")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.memberships.map((mem, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200"
                      >
                        {mem}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctor Specific FAQs */}
              {localizedDoctor.faqs && localizedDoctor.faqs.length > 0 && (
                <div className="content-auto pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-5">
                    <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {currentLang === "ar"
                        ? `الأسئلة الشائعة حول الاستشارة والجراحة مع ${doctor.name}`
                        : currentLang === "fr"
                        ? `Questions fréquentes sur les consultations et chirurgies avec le ${doctor.name}`
                        : currentLang === "ru"
                        ? `Часто задаваемые вопросы о приеме и операциях у доктора ${doctor.name}`
                        : `Frequently Asked Questions: Consultation & Surgeries with ${doctor.name}`}
                    </h3>
                  </div>
                  <div className="space-y-3.5">
                    {localizedDoctor.faqs.map((faq: DoctorFAQ, i: number) => (
                      <div key={i} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-start gap-2">
                          <span className="text-teal-700 font-extrabold shrink-0">Q{i + 1}.</span>
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Consultation Box */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-4">
                <QuickConsultationForm
                  relatedType="doctor"
                  pageContextName={doctor.name}
                  formTitle={currentLang === "ar" ? `احصل على استشارة من ${doctor.name}` : currentLang === "fr" ? `Consulter le ${doctor.name}` : currentLang === "ru" ? `Консультация с врачом ${doctor.name}` : `Consult ${doctor.name}`}
                />

                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-2.5 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>{t("doctorsPage.specialtyLabel", "Specialty:")}</span>
                    <strong className="text-slate-800">{localizedDoctor.specialty}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("doctorDetails.hospitalAffiliation", "Hospital:")}</span>
                    <strong className="text-slate-800">{doctor.hospitalName.split("–")[0]}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{currentLang === "ar" ? "مدة المراجعة:" : currentLang === "fr" ? "Délai d'examen :" : currentLang === "ru" ? "Срок ответа :" : "Review Turnaround:"}</span>
                    <strong className="text-emerald-700 font-bold">
                      {currentLang === "ar" ? "24 - 48 ساعة" : currentLang === "fr" ? "24 - 48 Heures" : currentLang === "ru" ? "24 - 48 часов" : "24 - 48 Hours"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Specialists */}
          <div className="mt-16 pt-12 border-t border-slate-200 content-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {t("doctorDetails.otherTitle", "Other Renowned Specialists in India")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherDoctors.map((d) => {
                const locD = getLocalizedDoctor(d, currentLang);
                return (
                  <div key={d.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 transition-colors">
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{locD.specialty}</span>
                    <Link to={localizeUrl(`/doctors/${d.slug}`)} className="block text-sm font-bold text-slate-900 hover:text-teal-600 mt-1">
                      {d.name}
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">{d.hospitalName}</p>
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
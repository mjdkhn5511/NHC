import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Activity, 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  ShieldAlert, 
  Building2, 
  Stethoscope, 
  ArrowRight, 
  MessageSquare,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { QuickConsultationForm } from "../components/QuickConsultationForm";
import { getTreatmentBySlug, treatmentsData } from "../data/treatmentsData";
import { hospitalsData } from "../data/hospitalsData";
import { doctorsData } from "../data/doctorsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedTreatment, getLocalizedHospital, getLocalizedDoctor, getLocalizedHospitalName } from "../utils/localizedData";

interface TreatmentDetailsProps {
  onOpenConsultation: (treatmentTitle?: string) => void;
}

export const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || "");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();

  if (!treatment) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">Treatment Specialty Not Found</h2>
        <p className="mt-2 text-sm text-slate-600">The requested medical specialty could not be located.</p>
        <Link
          to={localizeUrl("/treatments")}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-bold text-xs"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          Back to All Specialties
        </Link>
      </div>
    );
  }

  const localizedTreatment = getLocalizedTreatment(treatment, currentLang);

  // Linked hospitals and doctors
  const associatedHospitals = hospitalsData.filter((h) => treatment.hospitalIds.includes(h.id));
  const associatedDoctors = doctorsData.filter((d) => treatment.doctorIds.includes(d.id));
  const otherTreatments = treatmentsData.filter((t) => t.id !== treatment.id).slice(0, 4);

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": localizedTreatment.title,
    "description": localizedTreatment.shortDesc,
    "bodyLocation": localizedTreatment.title,
    "url": currentLang === "en" ? `https://www.nadwahealthcare.com/treatments/${treatment.slug}` : `https://www.nadwahealthcare.com/${currentLang}/treatments/${treatment.slug}`,
    "image": treatment.image.startsWith("http") ? treatment.image : `https://www.nadwahealthcare.com${treatment.image}`
  };

  const localizedCanonicalUrl = currentLang === "en"
    ? `https://www.nadwahealthcare.com/treatments/${treatment.slug}`
    : `https://www.nadwahealthcare.com/${currentLang}/treatments/${treatment.slug}`;

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${localizedTreatment.title} ${t("treatmentDetails.inIndia", "in India")} | Nadwa Healthcare`}
        description={`${localizedTreatment.shortDesc} - JCI/NABH Delhi NCR Hospitals.`}
        canonicalUrl={localizedCanonicalUrl}
        schemaData={treatmentSchema}
        ogImage={treatment.image.startsWith("http") ? treatment.image : `https://www.nadwahealthcare.com${treatment.image}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-10 lg:py-14 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: t("nav.treatments", "Treatments"), href: "/treatments" },
              { label: localizedTreatment.title }
            ]}
          />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white inline-block mb-2">
                {localizedTreatment.badge}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {localizedTreatment.title} {t("treatmentDetails.inIndia", "in India")}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {localizedTreatment.shortDesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation(localizedTreatment.title)}
                className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25 transition-all cursor-pointer"
              >
                {t("treatmentDetails.getEstimate", "Get Treatment Estimate")}
              </button>
              <a
                href={getWhatsAppUrl(`Hello NHC, I need consultation guidance for ${treatment.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t("common.whatsappDesk", "WhatsApp Desk")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Comprehensive Clinical Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Feature Image & Quick Stay Bar */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80 relative">
                <img
                  src={treatment.image}
                  alt={localizedTreatment.title}
                  width={800}
                  height={320}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover aspect-[5/2]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#08221E]/90 p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-white text-xs">
                  <span className="flex items-center gap-2 font-bold text-teal-300">
                    <Clock className="w-4 h-4" />
                    <span>{t("treatmentDetails.recommendedStayLabel", "Recommended Stay:")} {localizedTreatment.recommendedStay}</span>
                  </span>
                  <span className="text-slate-200">
                    {t("treatmentDetails.recoveryLabel", "Recovery:")} {localizedTreatment.recoveryTimeline || treatment.recoveryTimeline}
                  </span>
                </div>
              </div>

              {/* 1. Clinical Overview */}
              <div className="content-auto">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {t("treatmentDetails.overviewTitle", "Clinical Overview & Technology")}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {localizedTreatment.overview || treatment.overview}
                </p>
              </div>

              {/* 2. Conditions Treated */}
              <div className="content-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("treatmentDetails.conditionsTitle", "Conditions Evaluated & Treated")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(localizedTreatment.conditionsTreated || treatment.conditionsTreated).map((cond, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Surgical & Medical Treatment Options */}
              <div className="content-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("treatmentDetails.proceduresTitle", "Advanced Procedures & Interventions")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(localizedTreatment.treatmentOptions || treatment.treatmentOptions).map((opt, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                    >
                      <Activity className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Potential 5-Step Treatment Pathway */}
              <div className="content-auto">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                    {t("treatmentDetails.roadmapBadge", "Clinical Pathway Roadmap")}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                    {t("treatmentDetails.pathwayTitle", "Patient Treatment Pathway in India")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {(localizedTreatment.treatmentPathway || treatment.treatmentPathway).map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#08221E] text-teal-400 font-extrabold flex items-center justify-center shrink-0 text-sm">
                        0{step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Why Consider India for this Specialty */}
              <div className="p-6 rounded-3xl bg-teal-950/20 border border-teal-900/30 content-auto">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {t("treatmentDetails.whyIndiaPrefix", "Why International Patients Choose India for")} {localizedTreatment.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {(localizedTreatment.whyIndia || treatment.whyIndia).map((reason, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-teal-600 font-bold">✓</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Accredited Hospitals for this Treatment */}
              {associatedHospitals.length > 0 && (
                <div className="content-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    {t("treatmentDetails.hospitalsTitle", "Specialized Hospital Centers in Delhi NCR")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {associatedHospitals.map((h) => {
                      const locH = getLocalizedHospital(h, currentLang);
                      return (
                        <Link
                          key={h.id}
                          to={localizeUrl(`/hospitals/${h.slug}`)}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-teal-600 uppercase">{locH.city}</span>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                              {getLocalizedHospitalName(h.name, currentLang)}
                            </h4>
                            <span className="text-xs text-slate-500">{locH.bedCapacity}</span>
                          </div>
                          <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 7. Senior Specialists for this Treatment */}
              {associatedDoctors.length > 0 && (
                <div className="content-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                    {t("treatmentDetails.doctorsTitle", "Senior Consultants & Department Leads")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {associatedDoctors.map((d) => {
                      const locD = getLocalizedDoctor(d, currentLang);
                      return (
                        <Link
                          key={d.id}
                          to={localizeUrl(`/doctors/${d.slug}`)}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500 transition-colors flex items-center gap-3.5 group"
                        >
                          <img
                            src={d.image}
                            alt={d.name}
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            className="w-12 h-12 rounded-xl object-cover shrink-0 aspect-square"
                          />
                          <div className="flex-1">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                              {d.name}
                            </h4>
                            <span className="text-[11px] text-teal-700 font-medium block">{locD.experienceFormatted}</span>
                            <span className="text-[11px] text-slate-500 block truncate">{getLocalizedHospitalName(d.hospitalName, currentLang)}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 8. Treatment-Specific FAQs */}
              {(localizedTreatment.faqs || treatment.faqs)?.length > 0 && (
                <div className="content-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {t("treatmentDetails.faqsTitle", "Frequently Asked Questions on")} {localizedTreatment.title}
                  </h3>
                  <div className="space-y-3">
                    {(localizedTreatment.faqs || treatment.faqs).map((faq, i) => {
                      const isOpen = openFaqIndex === i;
                      return (
                        <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                            className="w-full text-start p-4 flex items-center justify-between gap-3 hover:bg-slate-50 cursor-pointer"
                          >
                            <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                              <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                              {faq.question}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Medical Disclaimer Specific to Treatment */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>{t("treatmentDetails.disclaimerTitle", "Clinical Notice:")}</strong>{" "}
                  {t("treatmentDetails.disclaimerText", "Information provided regarding this treatment is intended for educational and medical travel guidance only. Individual treatment eligibility, surgical candidacy, and diagnostic protocols must be determined via formal evaluation by an accredited specialist.")}
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Consultation Box */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-4">
                <QuickConsultationForm
                  relatedType="treatment"
                  pageContextName={localizedTreatment.title}
                  formTitle={t("treatmentDetails.getEstimateFor", "Get an Estimate for") + " " + localizedTreatment.title}
                />

                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-2.5 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>{t("treatmentDetails.zeroCharges", "Coordination Fee:")}</span>
                    <strong className="text-emerald-700 font-bold">{t("treatmentDetails.freeConsultation", "100% Free")}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("treatmentDetails.estStay", "Est. India Stay:")}</span>
                    <strong className="text-slate-800 font-bold">{localizedTreatment.recommendedStay}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("treatmentDetails.hospitalsAvail", "Hospitals Available:")}</span>
                    <strong className="text-slate-800">{t("treatmentDetails.networkHospitals", "Apollo, Medanta, Max, Fortis")}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t("treatmentDetails.visaAssist", "Visa Assistance:")}</span>
                    <strong className="text-emerald-700">{t("treatmentDetails.includedFree", "Included (Free)")}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Treatments Carousel / Links */}
          <div className="mt-16 pt-12 border-t border-slate-200 content-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {t("treatmentDetails.exploreOther", "Explore Other Medical Specialties")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherTreatments.map((t) => {
                const locOther = getLocalizedTreatment(t, currentLang);
                return (
                  <Link
                    key={t.id}
                    to={localizeUrl(`/treatments/${t.slug}`)}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500 transition-colors group block"
                  >
                    <span className="text-[10px] font-bold text-teal-600 uppercase">{locOther.badge}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors mt-1">
                      {locOther.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">{locOther.shortDesc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

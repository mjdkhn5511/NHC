import React from "react";
import { 
  HeartHandshake, 
  Hospital, 
  FileSpreadsheet, 
  FileCheck, 
  Compass, 
  Languages, 
  Users, 
  ShieldCheck 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const WhyChooseSection: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: HeartHandshake,
      title: t("whyChoose.r1Title", "Personalized Treatment Coordination"),
      desc: t("whyChoose.r1Desc", "Every patient is assigned an individual case manager who understands clinical nuances and cultural preferences.")
    },
    {
      icon: Hospital,
      title: t("whyChoose.r2Title", "Premier Hospital & Doctor Selection"),
      desc: t("whyChoose.r2Desc", "Independent guidance across Delhi NCR’s renowned JCI-accredited institutions without bias toward a single facility.")
    },
    {
      icon: FileSpreadsheet,
      title: t("whyChoose.r3Title", "Medical Report Coordination"),
      desc: t("whyChoose.r3Desc", "Professional collation and curation of DICOM imaging, pathology slides, and clinical histories for specialist review.")
    },
    {
      icon: FileCheck,
      title: t("whyChoose.r4Title", "Transparent Treatment Estimates"),
      desc: t("whyChoose.r4Desc", "Direct institutional fee approximations provided by hospital billing desks with zero hidden markups.")
    },
    {
      icon: Compass,
      title: t("whyChoose.r5Title", "Travel & Accommodation Guidance"),
      desc: t("whyChoose.r5Desc", "Coordination of vetted serviced apartments and hotels located conveniently near your chosen hospital.")
    },
    {
      icon: ShieldCheck,
      title: t("whyChoose.r6Title", "Medical Visa Documentation Support"),
      desc: t("whyChoose.r6Desc", "Guidance on hospital Medical Visa Invitation Letters (VIL) required for Indian diplomatic missions.")
    },
    {
      icon: Languages,
      title: t("whyChoose.r7Title", "Language & Translation Assistance"),
      desc: t("whyChoose.r7Desc", "Multilingual communication in Arabic, French, Russian, and English to eliminate healthcare language barriers.")
    },
    {
      icon: Users,
      title: t("whyChoose.r8Title", "End-to-End Bedside Accompaniment"),
      desc: t("whyChoose.r8Desc", "Dedicated patient coordinator visiting during hospitalization to assist with paperwork, discharge, and comfort.")
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden bg-medical-dots content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference style */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-3 border border-teal-200">
            {t("whyChoose.badge", "Why Choose Us")}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("whyChoose.title", "Why Choose")}{" "}
            <span className="text-teal-700">{t("whyChoose.titleHighlight", "NadwaHealthcare")}</span>?
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
            {t("whyChoose.subtitle", "We provide structured, compassionate, and ethically grounded medical travel assistance. We bridge international patients with India's premier clinicians while ensuring transparent support at every milestone.")}
          </p>
        </div>

        {/* 8-Card Grid matching reference image card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, index) => {
            const Icon = r.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-teal-400 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Just Below the Cards (matches reference layout) */}
        <div className="mt-12 text-center">
          <button
            onClick={onConsult}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>{t("whyChoose.ctaButton", "Get Free Assistance from NHC")}</span>
            <HeartHandshake className="w-5 h-5" />
          </button>
        </div>

        {/* Ethical Transparency Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-teal-100 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              {t("whyChoose.pledgeTitle", "Our Ethical Patient Pledge")}
            </h4>
            <p className="text-xs text-slate-500 max-w-xl">
              {t("whyChoose.pledgeDesc", "NHC adheres to responsible medical travel ethics: we never promise guaranteed clinical outcomes, guaranteed visas, or unrealistic fee reductions. All clinical choices remain strictly between you and your licensed surgeon.")}
            </p>
          </div>
          <button
            onClick={onConsult}
            className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 shrink-0 transition-colors cursor-pointer"
          >
            {t("whyChoose.speakAdvisor", "Speak with an Advisor")}
          </button>
        </div>
      </div>
    </section>
  );
};

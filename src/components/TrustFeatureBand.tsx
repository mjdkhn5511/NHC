import React from "react";
import { UserCheck, GitFork, ClipboardCheck, Globe2, Building2, Stethoscope, Languages, HeartPulse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const TrustFeatureBand: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const fourBenefits = [
    {
      icon: UserCheck,
      title: t("trustBand.benefit1Title", "Personalized Patient Assistance"),
      desc: t("trustBand.benefit1Desc", "One-on-one multilingual case coordinator dedicated to your entire medical journey.")
    },
    {
      icon: GitFork,
      title: t("trustBand.benefit2Title", "Hospital & Doctor Coordination"),
      desc: t("trustBand.benefit2Desc", "Unbiased access to India's premier JCI and NABH accredited medical centers.")
    },
    {
      icon: ClipboardCheck,
      title: t("trustBand.benefit3Title", "Treatment Planning Support"),
      desc: t("trustBand.benefit3Desc", "Comprehensive multi-hospital opinions and transparent institutional cost estimates.")
    },
    {
      icon: Globe2,
      title: t("trustBand.benefit4Title", "Free Medical Visa for India Assistance"),
      desc: t("trustBand.benefit4Desc", "100% free official hospital Medical Visa Invitation Letters (VIL) with zero service charges.")
    }
  ];

  const serviceHighlights = [
    {
      icon: Building2,
      badge: t("trustBand.hl1Badge", "Premier Network"),
      label: t("trustBand.hl1Label", "Delhi NCR Hubs"),
      sub: t("trustBand.hl1Sub", "New Delhi, Gurugram, Noida & Faridabad")
    },
    {
      icon: Stethoscope,
      badge: t("trustBand.hl2Badge", "Specialist Care"),
      label: t("trustBand.hl2Label", "Senior Consultants"),
      sub: t("trustBand.hl2Sub", "Decades of verified surgical leadership")
    },
    {
      icon: Languages,
      badge: t("trustBand.hl3Badge", "Multilingual Desk"),
      label: t("trustBand.hl3Label", "Language Facilitation"),
      sub: t("trustBand.hl3Sub", "English, Arabic, Russian & French")
    },
    {
      icon: HeartPulse,
      badge: t("trustBand.hl4Badge", "Ethical Practice"),
      label: t("trustBand.hl4Label", "Zero Coordination Fee"),
      sub: t("trustBand.hl4Sub", "Free preliminary inquiry & visa guidance")
    }
  ];

  return (
    <section className="bg-[#08221E] py-14 lg:py-20 text-white relative overflow-hidden bg-dark-dots content-auto">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/15 text-teal-300 border border-teal-500/30 mb-3">
            {t("trustBand.badge", "Trusted Patient Coordination")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t("trustBand.titlePart1", "Guiding Your Health Journey with")}{" "}
            <span className="text-teal-400">{t("trustBand.titleHighlight", "Care & Transparency")}</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300">
            {t("trustBand.subtitle", "NadwaHealthcare streamlines the complex steps of seeking healthcare abroad into an organized, supportive experience.")}
          </p>
        </div>

        {/* Four Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0c312b]/80 border border-teal-800/60 rounded-3xl p-6 hover:bg-[#103a33] hover:border-teal-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-[#08221E] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-teal-900/60 flex items-center gap-1.5 text-[11px] text-teal-400 font-semibold">
                  <span>{t("trustBand.learnMore", "Learn more")}</span>
                  <span className={isRTL ? "rotate-180" : ""}>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Verified Service Highlights */}
        <div className="mt-12 pt-10 border-t border-teal-900/70">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceHighlights.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0a2823]/60 rounded-2xl p-4 sm:p-5 border border-teal-900/60 flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 text-teal-300 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                      {stat.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-slate-300 block line-clamp-1">
                      {stat.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

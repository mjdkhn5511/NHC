import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const { t, localizeUrl, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-14 lg:pb-16 bg-medical-dots">
      {/* Soft gradient background orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-teal-50/60 to-emerald-50/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px]">
              <Sparkles className="w-3 h-3" />
            </span>
            <span>{t("hero.badge", "Your Healthcare Journey, Simplified")}</span>
          </div>

          {/* Primary H1 with Selective Turquoise Highlighted Words */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {t("hero.titlePart1", "World-Class")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              {t("hero.titleHighlight", "Medical Treatment in India")}
            </span>{" "}
            {t("hero.titlePart2", "for International Patients")}
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subheading", "Your trusted partner for hospital selection, doctor coordination and personalized medical assistance in India. Get help navigating your treatment journey with care and confidence.")}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t("hero.ctaConsultation", "Get Free Consultation")}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </button>

            <Link
              to={localizeUrl("/treatments")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-teal-500 text-slate-800 font-bold text-sm sm:text-base transition-all duration-200 shadow-sm"
            >
              <span>{t("hero.ctaExplore", "Explore Treatments")}</span>
            </Link>
          </div>

          {/* High-Impact Free Medical Visa Trust Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 text-teal-900 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-300 font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Serving International Patients Worldwide</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300 font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t("hero.badgeVisa", "100% Free Medical Visa for India Assistance")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-teal-800 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200 font-semibold shadow-xs">
              <span>{t("hero.badgeVil", "⚡ Fast 24–48h Hospital Invitation Letter (VIL)")}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 font-semibold shadow-xs">
              <span>{t("hero.badgeZeroFee", "🛡️ Zero Service Fee")}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Clock, ShieldCheck, Users, CheckCircle2, MessageCircle, ArrowRight, Plane, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface MedicalVisaSectionProps {
  onOpenConsultation: () => void;
}

export const MedicalVisaSection: React.FC<MedicalVisaSectionProps> = ({ onOpenConsultation }) => {
  const { t, isRTL } = useLanguage();
  const whatsappVisaUrl = getWhatsAppUrl("Hello Nadwa Healthcare, I need 100% Free Medical Visa for India assistance and a hospital Visa Invitation Letter (VIL) for treatment.");

  const steps = [
    {
      num: "01",
      title: t("medicalVisa.step1Title", "Send Passport & Reports"),
      desc: t("medicalVisa.step1Desc", "Share patient passport copy, attendant passport, and latest medical reports via WhatsApp or our enquiry form.")
    },
    {
      num: "02",
      title: t("medicalVisa.step2Title", "Get Official Hospital VIL (Free)"),
      desc: t("medicalVisa.step2Desc", "We coordinate with top accredited Delhi NCR hospitals to issue your official Visa Invitation Letter in 24–48 hours with ₹0 fee.")
    },
    {
      num: "03",
      title: t("medicalVisa.step3Title", "Apply Online & Fly to India"),
      desc: t("medicalVisa.step3Desc", "Submit your online Indian e-Medical Visa. We arrange complimentary airport pickup and hotel coordination upon landing.")
    }
  ];

  const highlights = [
    {
      icon: CheckCircle2,
      title: t("medicalVisa.hl1Title", "100% Free Service"),
      desc: t("medicalVisa.hl1Desc", "Zero agency fee, zero hidden charges for medical visa invitation letters and guidance.")
    },
    {
      icon: Clock,
      title: t("medicalVisa.hl2Title", "24–48h Express Turnaround"),
      desc: t("medicalVisa.hl2Desc", "Urgent visa letters prioritized for critical cardiac, cancer, orthopedic, and transplant cases.")
    },
    {
      icon: ShieldCheck,
      title: t("medicalVisa.hl3Title", "Embassy-Recognized Letters"),
      desc: t("medicalVisa.hl3Desc", "Valid for all Indian Embassies, Consulates, and the official Government of India e-Visa portal.")
    },
    {
      icon: Users,
      title: t("medicalVisa.hl4Title", "Medical Attendant Visas"),
      desc: t("medicalVisa.hl4Desc", "Complete documentation support for patient (M-Visa) and up to two family attendants (MED-X).")
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/30 to-white relative overflow-hidden content-auto">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t("medicalVisa.badge", "100% Free Service • Zero Agency Fee")}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="text-teal-700">{t("medicalVisa.titleHighlight", "Medical Visa for India")}</span>{" "}
            {t("medicalVisa.titleRest", "— Free Assistance & Hospital Invitation Letters")}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t("medicalVisa.desc", "Planning medical treatment in India? We provide 100% Free Medical Visa for India guidance. We coordinate your official Hospital Visa Invitation Letter (VIL) directly from top JCI & NABH accredited hospitals in Delhi NCR with zero service charges.")}
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-slate-300 group-hover:text-teal-700 transition-colors">
                  {s.num}
                </span>
                <span className="w-auto px-2.5 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs border border-teal-200">
                  {t("medicalVisa.stepLabel", "Step")} {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div 
                key={i}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white/80 backdrop-blur-xs border border-slate-200/90"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{h.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact CTA Banner */}
        <div className="rounded-3xl bg-[#08221E] text-white p-6 sm:p-10 relative overflow-hidden shadow-2xl border border-teal-900/60">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-3">
                <Plane className="w-3.5 h-3.5" />
                {t("medicalVisa.ctaBadge", "Instant WhatsApp Visa Desk")}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                {t("medicalVisa.ctaTitle", "Get Your Free Hospital Visa Invitation Letter Today")}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("medicalVisa.ctaDesc", "Share your reports on WhatsApp or submit our quick enquiry. Our international medical travel desk is available 24/7 to issue your letter at zero cost.")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={whatsappVisaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#051714] font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t("medicalVisa.ctaBtn1", "Get Free Visa Letter")}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>{t("medicalVisa.ctaBtn2", "Submit Visa Query")}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

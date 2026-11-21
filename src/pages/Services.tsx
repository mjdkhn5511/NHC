import React from "react";
import { 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  Building,
  UserCheck
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { servicesJourneyData, scopeBreakdown } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedServiceStep } from "../utils/localizedData";

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();

  const phaseTranslations: Record<string, { ar: string; fr: string; ru: string }> = {
    "Pre-Travel & Clinical Assessment": {
      ar: "ما قبل السفر والتقييم السريري",
      fr: "Avant le départ et évaluation clinique",
      ru: "До поездки и оценка состояния",
    },
    "Medical Visa & Travel Preparation": {
      ar: "التأشيرة الطبية والتحضير للسفر",
      fr: "Visa médical et préparation du voyage",
      ru: "Медицинская виза и подготовка поездки",
    },
    "In-Hospital Treatment & Clinical Coordination": {
      ar: "العلاج في المستشفى والتنسيق السريري",
      fr: "Hospitalisation et coordination clinique",
      ru: "Лечение в госпитале и координация",
    },
    "Discharge, Local Recovery & Return": {
      ar: "الخروج من المستشفى والتعافي والعودة",
      fr: "Sortie, convalescence et retour",
      ru: "Выписка, реабилитация и возвращение",
    },
  };

  const providerTypeTranslations: Record<string, { ar: string; fr: string; ru: string }> = {
    "Direct NHC Service": {
      ar: "خدمة مباشرة من ندوة (مجاناً 100%)",
      fr: "Service direct NHC (100 % Gratuit)",
      ru: "Прямая услуга NHC (Бесплатно)",
    },
    "Hospital Direct Action": {
      ar: "إجراء مباشر من المستشفى",
      fr: "Prestation directe de l'hôpital",
      ru: "Прямая услуга клиники",
    },
    "Partner Service": {
      ar: "خدمة لوجستية معتمدة",
      fr: "Service partenaire certifié",
      ru: "Партнерская служба",
    },
    "Government / Official": {
      ar: "إجراء حكومي رسمي",
      fr: "Démarche gouvernementale",
      ru: "Государственная процедура",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${t("servicesPage.title", "International Patient")} ${t("servicesPage.titleHighlight", "Services & Journey")} | NadwaHealthcare`}
        description={t("servicesPage.desc", "Comprehensive 11-step medical tourism journey in India: from initial report evaluation, hospital opinion coordination, medical visas, airport pickup to bedside accompaniment.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/services')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.services", "Services") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Globe2 className="w-3.5 h-3.5" />
              {t("servicesPage.badge", "End-to-End International Patient Concierge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("servicesPage.title", "International Patient")}{" "}
              <span className="text-teal-400">{t("servicesPage.titleHighlight", "Services & Journey")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("servicesPage.desc", "We provide structured, compassionate assistance throughout your medical travel to India. Explore our 11-step framework and understand exactly what is provided directly by NHC and what is coordinated through accredited partners.")}
            </p>
          </div>
        </div>
      </section>

      {/* 11-Step Timeline Section */}
      <section className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {t("servicesPage.timelineBadge", "Step-by-Step Care Framework")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              {t("servicesPage.timelineTitle", "The 11 Milestones of Your")}{" "}
              <span className="text-teal-600">{t("servicesPage.timelineHighlight", "Care Journey")}</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {t("servicesPage.timelineSubtitle", "Clear expectations, zero surprises, and attentive bedside coordination at every phase.")}
            </p>
          </div>

          {/* Timeline Vertical Stack */}
          <div className="relative border-l-2 border-teal-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {servicesJourneyData.map((step) => {
              const locStep = getLocalizedServiceStep(step, currentLang);
              const isDirect = step.providerType === "Direct NHC Service";
              const catLabel = phaseTranslations[step.category]?.[currentLang as 'ar' | 'fr' | 'ru'] || step.category;
              const providerLabel = providerTypeTranslations[step.providerType]?.[currentLang as 'ar' | 'fr' | 'ru'] || step.providerType;

              return (
                <div key={step.step} className="relative group">
                  {/* Step Bubble Node */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#08221E] text-teal-300 border-4 border-white shadow-md flex items-center justify-center font-extrabold text-xs sm:text-sm group-hover:bg-teal-500 group-hover:text-[#08221E] transition-colors">
                    {step.step < 10 ? `0${step.step}` : step.step}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-400 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {currentLang === "ar" ? `المرحلة: ${catLabel}` : currentLang === "fr" ? `Phase : ${catLabel}` : currentLang === "ru" ? `Этап: ${catLabel}` : `Phase: ${step.category}`}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                          isDirect
                            ? "bg-teal-50 text-teal-800 border border-teal-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {providerLabel}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {locStep.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {locStep.shortDesc}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                        {currentLang === "ar" ? "الخطوات المشمولة:" : currentLang === "fr" ? "Étapes incluses :" : currentLang === "ru" ? "Включенные этапы:" : "Included Execution Steps:"}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {locStep.detailedProcess.map((proc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{proc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.note && (
                      <p className="mt-3 text-[11px] text-slate-400 italic">
                        * {step.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct vs Third-Party Scope Clarity Table */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {currentLang === "ar" ? "الشفافية التشغيلية" : currentLang === "fr" ? "Transparence opérationnelle" : currentLang === "ru" ? "Прозрачность процессов" : "Operational Transparency"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              {currentLang === "ar" ? "مسؤوليات ندوة المباشرة مقابل خدمات الشركاء" : currentLang === "fr" ? "Rôle direct de NHC vs Exécution partenaires" : currentLang === "ru" ? "Зона ответственности NHC и клиник-партнеров" : "Direct NHC Scope vs. Partner Execution"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {currentLang === "ar" ? "توضيح دقيق بين الخدمات التي تديرها ندوة للرعاية الصحية مجاناً وتلك المقدمة من المستشفيات أو الجهات اللوجستية." : currentLang === "fr" ? "Distinction claire entre les services gérés directement par NadwaHealthcare et ceux pris en charge par les hôpitaux." : currentLang === "ru" ? "Четкое разграничение услуг, предоставляемых бесплатно NHC, и услуг, оплачиваемых госпиталям напрямую." : "Clear distinction between services managed directly by NadwaHealthcare and those executed by hospitals or third-party logistics."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct NHC Column */}
            <div className="bg-teal-50/50 rounded-3xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentLang === "ar" ? "مسؤوليات ندوة المباشرة" : currentLang === "fr" ? "Services directs NadwaHealthcare" : currentLang === "ru" ? "Прямые обязанности NadwaHealthcare" : "Direct NHC Responsibilities"}
                  </h3>
                  <span className="text-xs text-teal-800 font-medium">
                    {currentLang === "ar" ? "تقدم مجاناً 100% للمرضى وعائلاتهم" : currentLang === "fr" ? "Fourni 100 % gratuitement aux patients" : currentLang === "ru" ? "Предоставляется 100% бесплатно для пациентов" : "Provided 100% Free of Charge to Patients"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {scopeBreakdown.directNHC.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third-Party / Institutional Column */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#08221E] text-teal-300 flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentLang === "ar" ? "خدمات المستشفى واللوجستيات" : currentLang === "fr" ? "Logistique hospitalière et partenaires" : currentLang === "ru" ? "Услуги клиник и партнеров" : "Hospital & Partner Logistics"}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentLang === "ar" ? "تسدد فواتيرها مباشرة إلى المستشفيات ومقدمي الخدمة" : currentLang === "fr" ? "Payé directement aux établissements hospitaliers" : currentLang === "ru" ? "Оплачивается напрямую в клиники и официальным службам" : "Paid Directly to Providers / Authorities"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                {scopeBreakdown.thirdPartyOrInstitutional.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 bg-[#08221E] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            {currentLang === "ar" ? "هل أنت مستعد لبدء استشارتك الطبية؟" : currentLang === "fr" ? "Prêt à débuter votre consultation médicale ?" : currentLang === "ru" ? "Готовы начать медицинскую консультацию?" : "Ready to Begin Your Medical Consultation?"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {currentLang === "ar" ? "مكتبنا الدولي متاح على مدار الساعة. أرسل تقاريرك الطبية للتقييم الأولي من عدة مستشفيات." : currentLang === "fr" ? "Notre desk international est disponible 24h/24. Transmettez vos examens pour une évaluation multi-hôpitaux." : currentLang === "ru" ? "Наш международный отдел работает 24/7. Отправьте выписки для рассмотрения в клиниках." : "Our international desk is available 24/7. Send your reports for preliminary multi-hospital evaluation."}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-600/25 transition-all inline-flex items-center gap-2"
            >
              <span>{t("nav.getQuote", "Get Free Case Evaluation")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
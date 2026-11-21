import React from "react";
import { HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQAccordion } from "../components/FAQAccordion";
import { faqsData } from "../data/faqsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface FAQsProps {
  onOpenConsultation: () => void;
}

export const FAQs: React.FC<FAQsProps> = ({ onOpenConsultation }) => {
  const { t, localizeUrl, isRTL } = useLanguage();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${t("faqsPage.title", "Frequently Asked")} ${t("faqsPage.titleHighlight", "Questions")} | Nadwa Healthcare`}
        description={t("faqsPage.desc", "Clear, honest answers about medical travel, costs, and visa processes in India.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/faqs')}`}
        schemaData={faqSchema}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.faqs", "FAQs") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              {t("faqsPage.badge", "Patient Knowledgebase & Guidance")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("faqsPage.title", "Frequently Asked")}{" "}
              <span className="text-teal-400">{t("faqsPage.titleHighlight", "Questions")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("faqsPage.desc", "Transparent, medically responsible answers regarding medical travel to India, visa protocols, hospital coordination, and safety guarantees.")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="py-14 lg:py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion showSearch={true} />
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {t("footer.urgentTitle", "Have a Specific Question About Your Case?")}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            {t("footer.urgentDesc", "Our international coordinators are available 24/7 on WhatsApp and email to evaluate your diagnostic records and address questions directly.")}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>{t("nav.getQuote", "Submit Case Details")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </button>
            <a
              href={getWhatsAppUrl("Hello NHC, I have a specific question about medical travel to India.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("footer.whatsappDesk", "Ask on WhatsApp")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
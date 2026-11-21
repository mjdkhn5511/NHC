import React, { useState } from "react";
import { ChevronDown, Activity, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TREATMENTS_SEO_OVERVIEW } from "../data/seoContentData";

export const TreatmentsSeoOverview: React.FC = () => {
  const { currentLang } = useLanguage();
  const data = TREATMENTS_SEO_OVERVIEW[currentLang as 'en' | 'ar' | 'fr' | 'ru'] || TREATMENTS_SEO_OVERVIEW.en;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/80 border-t border-slate-200 content-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-3 border border-teal-200">
            <Activity className="w-3.5 h-3.5 text-teal-700" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {data.h2Title}
          </h2>
        </div>

        {/* Informative Body Paragraphs */}
        <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          {data.paragraphs.map((p, i) => (
            <p key={i} className="text-justify">
              {p}
            </p>
          ))}
        </div>

        {/* Deep FAQs Section */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>{currentLang === 'ar' ? 'الأسئلة السريرية' : currentLang === 'fr' ? 'Questions Cliniques' : currentLang === 'ru' ? 'Клинические Вопросы' : 'Clinical Q&A'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {data.faqsTitle}
            </h3>
          </div>

          <div className="space-y-3.5">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <article
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

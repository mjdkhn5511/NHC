import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { faqsData, type FAQItem } from "../data/faqsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedFAQ } from "../utils/localizedData";

export const FAQAccordion: React.FC<{ limit?: number; showSearch?: boolean }> = ({
  limit,
  showSearch = true
}) => {
  const { currentLang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const catLabels: Record<string, { en: string; ar: string; fr: string; ru: string }> = {
    "All": { en: "All", ar: "الكل", fr: "Tous", ru: "Все" },
    "General & Process": { en: "General & Process", ar: "عام والخطوات", fr: "Processus général", ru: "Организация и процесс" },
    "Cost & Estimates": { en: "Cost & Estimates", ar: "التكاليف والأسعار", fr: "Coûts et devis", ru: "Цены и расчеты" },
    "Visa & Travel": { en: "Visa & Travel", ar: "التأشيرة والسفر", fr: "Visa et voyage", ru: "Виза и перелет" },
    "Hospitals & Doctors": { en: "Hospitals & Doctors", ar: "المستشفيات والأطباء", fr: "Hôpitaux et médecins", ru: "Клиники и врачи" },
    "Safety & Ethics": { en: "Safety & Ethics", ar: "السلامة والأخلاقيات", fr: "Sécurité et éthique", ru: "Безопасность и гарантии" },
  };

  const categories = ["All", "General & Process", "Cost & Estimates", "Visa & Travel", "Hospitals & Doctors", "Safety & Ethics"];

  const filteredFaqs = faqsData.filter((item: FAQItem) => {
    const loc = getLocalizedFAQ(item, currentLang);
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      loc.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Category Pills & Search */}
      {showSearch && (
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="faq-search"
              name="faqSearch"
              type="text"
              placeholder={t("faqsPage.searchPlaceholder", "Search medical travel questions...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm bg-white"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const label = catLabels[cat]?.[currentLang as 'ar' | 'fr' | 'ru'] || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#08221E] text-teal-300 shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Accordion Items */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {displayFaqs.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">{t("treatmentsPage.noFound", "No matching questions found.")}</p>
          </div>
        ) : (
          displayFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const loc = getLocalizedFAQ(faq, currentLang);
            const catLabel = catLabels[faq.category]?.[currentLang as 'ar' | 'fr' | 'ru'] || faq.category;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-start p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900">
                    <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    {loc.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-200">
                    <p>{loc.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {catLabel}
                    </span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
import React, { useState } from "react";
import { Search, Activity, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { TreatmentCard } from "../components/TreatmentCard";
import { treatmentsData } from "../data/treatmentsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedTreatment } from "../utils/localizedData";

interface TreatmentsProps {
  onOpenConsultation: (treatmentTitle?: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tagLabels: Record<string, { en: string; ar: string; fr: string; ru: string }> = {
    "All": { en: "All", ar: "الكل", fr: "Tous", ru: "Все" },
    "High Demand": { en: "High Demand", ar: "الأعلى طلباً", fr: "Très demandé", ru: "Высокий спрос" },
    "Specialized Care": { en: "Specialized Care", ar: "رعاية تخصصية", fr: "Soins spécialisés", ru: "Специализированная помощь" },
    "Rapid Recovery": { en: "Rapid Recovery", ar: "تعافٍ سريع", fr: "Récupération rapide", ru: "Быстрое восстановление" },
    "Advanced Tech": { en: "Advanced Tech", ar: "تقنيات متقدمة", fr: "Technologie avancée", ru: "Передовые технологии" },
    "World Leader": { en: "World Leader", ar: "ريادة عالمية", fr: "Leader mondial", ru: "Мировой лидер" },
  };

  const tags = ["All", "High Demand", "Specialized Care", "Rapid Recovery", "Advanced Tech", "World Leader"];

  const filteredTreatments = treatmentsData.filter((tItem) => {
    const loc = getLocalizedTreatment(tItem, currentLang);
    const matchesTag = selectedTag === "All" || tItem.badge === selectedTag;
    const matchesSearch =
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tItem.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tItem.conditionsTreated.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTag && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${t("treatmentsPage.title", "World-Class")} ${t("treatmentsPage.titleHighlight", "Medical Treatments")} ${t("treatmentsPage.titleEnd", "in India")} | Nadwa Healthcare`}
        description={t("treatmentsPage.desc", "Explore advanced treatments in India across cardiology, oncology, orthopedics, neurosurgery, and IVF at JCI-accredited hospitals.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/treatments')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.treatments", "Treatments") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Activity className="w-3.5 h-3.5" />
              {t("treatmentsPage.badge", "12 Clinical Specialties")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("treatmentsPage.title", "World-Class")}{" "}
              <span className="text-teal-400">{t("treatmentsPage.titleHighlight", "Medical Treatments")}</span>{" "}
              {t("treatmentsPage.titleEnd", "in India")}
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("treatmentsPage.desc", "India's premier hospitals offer cutting-edge surgical robotics, precision oncology, organ transplantation, and minimally invasive procedures at transparent institutional pricing.")}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="treatments-search"
                name="treatmentSearch"
                type="text"
                placeholder={t("treatmentsPage.searchPlaceholder", "Search treatment, surgery, or disease...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm bg-white"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => {
                const label = tagLabels[tag]?.[currentLang as 'ar' | 'fr' | 'ru'] || tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedTag === tag
                        ? "bg-[#08221E] text-teal-300 shadow-sm"
                        : "bg-white hover:bg-slate-200 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Cards Grid */}
      <section className="py-12 lg:py-16 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm text-slate-600">
              {t("treatmentsPage.showing", "Showing")} <strong className="text-slate-900">{filteredTreatments.length}</strong> {t("treatmentsPage.specialtiesCount", "medical specialties")}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t("treatmentsPage.accreditedTag", "Internationally Accredited Tertiary Protocols")}</span>
            </div>
          </div>

          {filteredTreatments.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Activity className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">{t("treatmentsPage.noFound", "No Specialties Found")}</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {t("treatmentsPage.noFoundDesc", "No treatments matched your search. You can also send custom medical inquiries directly.")}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-teal-600 text-white font-bold text-xs"
              >
                {t("treatmentsPage.resetSearch", "Reset Search")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredTreatments.map((treatment, index) => (
                <div key={treatment.id} className={index > 2 ? "card-auto" : ""}>
                  <TreatmentCard
                    treatment={treatment}
                    onConsult={(title) => onOpenConsultation(title)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Building2, MapPin, Filter, ShieldCheck, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { HospitalCard } from "../components/HospitalCard";
import { hospitalsData } from "../data/hospitalsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedHospital, CITY_TRANSLATIONS, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";

interface HospitalsProps {
  onOpenConsultation: (hospitalName?: string) => void;
}

export const Hospitals: React.FC<HospitalsProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const cities = ["All", "New Delhi", "Gurugram", "Noida", "Faridabad"];
  const specialties = [
    "All",
    "Cardiology and Heart Surgery",
    "Liver Transplant and Hepatobiliary Surgery",
    "Oncology and Cancer Institute",
    "Orthopedics and Robotic Joint Replacement",
    "Neurosurgery and Spine Surgery",
    "Kidney and Urology"
  ];

  const filteredHospitals = hospitalsData.filter((h) => {
    const loc = getLocalizedHospital(h, currentLang);
    const matchesCity = selectedCity === "All" || h.city === selectedCity;
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      h.specialties.some((s) => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.locationDetail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCity && matchesSpecialty && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen">
      <SEOHead
        title="Top JCI & NABH Hospitals in Delhi NCR | Nadwa Healthcare"
        description={t("hospitalsPage.desc", "Explore leading quaternary medical centers across New Delhi, Gurugram, Noida, and Faridabad.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/hospitals')}`}
      />

      {/* Page Header */}
      <header className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.hospitals", "Hospitals") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Building2 className="w-3.5 h-3.5" />
              {t("hospitalsPage.badge", "Delhi NCR Hospital Network")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("hospitalsPage.title", "Accredited Hospitals in")}{" "}
              <span className="text-teal-400">{t("hospitalsPage.titleHighlight", "Delhi NCR, India")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("hospitalsPage.desc", "Explore leading quaternary medical centers across New Delhi, Gurugram, Noida, and Faridabad. Equipped with international patient wings, advanced robotics, and comprehensive diagnostic facilities.")}
            </p>
          </div>
        </div>
      </header>

      {/* Featured Editorial Guide Callout */}
      <section className="bg-teal-50 border-b border-teal-200/80 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 text-teal-950 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{t("hospitalsPage.guideBannerText", "Comparing accreditations, ICU safety standards, and DEL airport distances across Delhi NCR?")}</span>
            <span className="hidden lg:inline text-teal-400">|</span>
            <span className="text-[11px] text-teal-800">
              Top Chairs: <Link to={localizeUrl("/doctors/dr-ashok-rajgopal")} className="font-bold hover:underline">Dr. Ashok Rajgopal</Link> (Medanta), <Link to={localizeUrl("/doctors/dr-naresh-trehan")} className="font-bold hover:underline">Dr. Naresh Trehan</Link>
            </span>
          </div>
          <Link
            to={localizeUrl("/blog/top-nabh-jci-accredited-hospitals-delhi-ncr")}
            className="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4 shrink-0 transition-colors"
          >
            <span>Compare Top NABH & JCI Accredited Hospitals in Delhi NCR</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="hospitals-search"
                name="hospitalSearch"
                type="text"
                placeholder={t("hospitalsPage.searchPlaceholder", "Search hospital name, city, or feature...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm bg-white"
              />
            </div>

            {/* City Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600" /> {t("hospitalsPage.cityLabel", "City:")}
              </span>
              {cities.map((c) => {
                const label = c === "All" ? t("faqsPage.catAll", "All") : (CITY_TRANSLATIONS[c]?.[currentLang] || c);
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCity(c)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedCity === c
                        ? "bg-[#08221E] text-teal-300 shadow-sm"
                        : "bg-white hover:bg-slate-200 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Specialty Dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <label htmlFor="hospitals-specialty" className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-teal-600" /> {t("doctorsPage.specialtyLabel", "Specialty:")}
              </label>
              <select
                id="hospitals-specialty"
                name="hospitalSpecialty"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {specialties.map((s) => {
                  const sLabel = s === "All" ? t("faqsPage.catAll", "All") : (SPECIALTY_TRANSLATIONS[s]?.[currentLang] || s);
                  return (
                    <option key={s} value={s}>
                      {sLabel}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Cards Grid */}
      <section className="py-12 lg:py-16 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm text-slate-600">
              {t("hospitalsPage.showing", "Showing")} <strong className="text-slate-900">{filteredHospitals.length}</strong> {t("hospitalsPage.hospitalsCount", "accredited medical centers")}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t("hospitalsPage.zeroFeeTag", "Zero NHC Coordination Charges")}</span>
            </div>
          </div>

          {filteredHospitals.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">{t("hospitalsPage.noFound", "No Hospitals Found")}</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {t("hospitalsPage.noFoundDesc", "No hospitals matched your current filter selections. Try clearing your search query or choosing 'All' cities.")}
              </p>
              <button
                onClick={() => {
                  setSelectedCity("All");
                  setSelectedSpecialty("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-teal-600 text-white font-bold text-xs"
              >
                {t("hospitalsPage.resetFilters", "Reset Filters")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredHospitals.map((hospital, index) => (
                <div key={hospital.id} className={index > 1 ? "card-auto" : ""}>
                  <HospitalCard
                    hospital={hospital}
                    priority={index === 0}
                    onRequestAssistance={(name) => onOpenConsultation(`Inquiry for ${name}`)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
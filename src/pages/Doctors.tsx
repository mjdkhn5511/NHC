import React, { useState } from "react";
import { Search, Stethoscope, MapPin, Filter, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { DoctorCard } from "../components/DoctorCard";
import { doctorsData } from "../data/doctorsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedDoctor, CITY_TRANSLATIONS, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";

interface DoctorsProps {
  onOpenConsultation: (doctorName?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const specialties = [
    "All",
    "Cardiology and Heart Surgery",
    "Oncology and Cancer Treatment",
    "Orthopedics and Joint Replacement",
    "Neurosurgery and Spine Surgery",
    "Liver Transplant",
    "Liver and Gastroenterology",
    "Kidney and Urology"
  ];

  const cities = ["All", "New Delhi", "Gurugram", "Noida", "Faridabad"];

  const filteredDoctors = doctorsData.filter((doc) => {
    const loc = getLocalizedDoctor(doc, currentLang);
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      doc.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    const matchesCity = selectedCity === "All" || doc.city === selectedCity;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.hospitalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.bio.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSpecialty && matchesCity && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${t("doctorsPage.title", "Leading Medical Specialists in")} ${t("doctorsPage.titleHighlight", "India")} | Nadwa Healthcare`}
        description={t("doctorsPage.desc", "Consult renowned Indian medical specialists and surgeons across Delhi NCR.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/doctors')}`}
      />

      {/* Header */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.doctors", "Doctors") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              {t("doctorsPage.badge", "Verified Medical Leaders")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("doctorsPage.title", "Leading Medical Specialists in")}{" "}
              <span className="text-teal-400">{t("doctorsPage.titleHighlight", "India")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("doctorsPage.desc", "Connect with senior clinicians, robotic surgeons, and department chairs practicing across premier Delhi NCR hospitals. Review verified clinical backgrounds and request direct consultation opinions.")}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="doctors-search"
                name="doctorSearch"
                type="text"
                placeholder={t("doctorsPage.searchPlaceholder", "Search doctor by name or specialty...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm bg-white"
              />
            </div>

            {/* Specialty Filter Dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <label htmlFor="doctors-specialty" className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-teal-600" /> {t("doctorsPage.specialtyLabel", "Specialty:")}
              </label>
              <select
                id="doctors-specialty"
                name="doctorSpecialty"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {specialties.map((spec) => {
                  const label = spec === "All" ? t("faqsPage.catAll", "All") : (SPECIALTY_TRANSLATIONS[spec]?.[currentLang] || spec);
                  return (
                    <option key={spec} value={spec}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* City Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600" /> {t("doctorsPage.cityLabel", "City:")}
              </span>
              {cities.map((city) => {
                const label = city === "All" ? t("faqsPage.catAll", "All") : (CITY_TRANSLATIONS[city]?.[currentLang] || city);
                return (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedCity === city
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

      {/* Doctor Cards Grid */}
      <section className="py-12 lg:py-16 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm text-slate-600">
              {t("doctorsPage.showing", "Showing")} <strong className="text-slate-900">{filteredDoctors.length}</strong> {t("doctorsPage.doctorsCount", "verified specialist doctors")}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t("doctorsPage.accreditedTag", "NABH / JCI Hospital Faculty")}</span>
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">{t("doctorsPage.noFound", "No Specialists Found")}</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {t("doctorsPage.noFoundDesc", "No doctors matched your current filter criteria. You can submit custom medical requirements directly.")}
              </p>
              <button
                onClick={() => {
                  setSelectedSpecialty("All");
                  setSelectedCity("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-teal-600 text-white font-bold text-xs"
              >
                {t("doctorsPage.resetFilters", "Reset Filters")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredDoctors.map((doc, index) => (
                <div key={doc.id} className={index > 2 ? "card-auto" : ""}>
                  <DoctorCard
                    doctor={doc}
                    priority={index === 0}
                    onRequestConsultation={(name) => onOpenConsultation(`Consultation with ${name}`)}
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
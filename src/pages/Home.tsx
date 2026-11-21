import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, Compass, FileCheck, ArrowUpRight, BookOpen } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { HeroSection } from "../components/HeroSection";
import { TrustFeatureBand } from "../components/TrustFeatureBand";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { TreatmentCard } from "../components/TreatmentCard";
import { HospitalCard } from "../components/HospitalCard";
import { DoctorCard } from "../components/DoctorCard";
import { Image } from "../components/Image";
import { EnquiryForm } from "../components/EnquiryForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { HomeSeoOverview } from "../components/HomeSeoOverview";
import { treatmentsData } from "../data/treatmentsData";
import { hospitalsData } from "../data/hospitalsData";
import { doctorsData } from "../data/doctorsData";
import { servicesJourneyData } from "../data/servicesData";
import { patientStoriesData } from "../data/patientStoriesData";
import { MedicalVisaSection } from "../components/MedicalVisaSection";
import { blogsData } from "../data/blogsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedServiceStep, getLocalizedPatientStory, getLocalizedHospitalName, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";

interface HomeProps {
  onOpenConsultation: (preselectedTreatment?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const [treatmentFilter, setTreatmentFilter] = useState<string>("all");

  const filteredTreatments = treatmentFilter === "all"
    ? treatmentsData.slice(0, 6)
    : treatmentsData.filter((t) => t.id === treatmentFilter || t.badge.toLowerCase().includes(treatmentFilter));

  const featuredHospitals = hospitalsData.filter((h) => h.featured).slice(0, 3);
  const featuredDoctors = doctorsData.filter((d) => d.featured).slice(0, 3);

  return (
    <main className="bg-white">
      <SEOHead
        title="Nadwa Healthcare | Medical Tourism & Top Doctors in India"
        description="100% Free Medical Visa for India assistance and official hospital visa invitation letters (VIL) in 24-48 hours. Premier Delhi NCR hospital selection and specialist doctor coordination."
        canonicalUrl={currentLang === "en" ? "https://www.nadwahealthcare.com/" : `https://www.nadwahealthcare.com/${currentLang}`}
      />

      {/* 1. Hero Section matching reference image layout */}
      <HeroSection onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. Trust and Benefits Band (Dark Teal Band matching reference) */}
      <TrustFeatureBand />

      {/* 3. Why Choose NadwaHealthcare Section */}
      <WhyChooseSection onConsult={() => onOpenConsultation()} />

      {/* 4. Treatments Showcase Grid (Reference Card Style) */}
      <section className="py-16 sm:py-24 bg-white relative content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 mb-2 border border-teal-200">
                {t("homeTreatments.badge", "World-Class Clinical Specialties")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("homeTreatments.title", "Explore Premier")}{" "}
                <span className="text-teal-700">{t("homeTreatments.titleHighlight", "Medical Treatments")}</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                {t("homeTreatments.desc", "Advanced clinical protocols, robotic technologies, and internationally acclaimed multidisciplinary care across Delhi NCR's top institutes.")}
              </p>
            </div>

            <Link
              to={localizeUrl("/treatments")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group"
            >
              <span>{t("homeTreatments.viewAll", "View All 12 Specialties")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Treatment Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setTreatmentFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "all"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterAll", "All Specialties")}
            </button>
            <button
              onClick={() => setTreatmentFilter("cardiology")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "cardiology"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterCardio", "Cardiology & Heart")}
            </button>
            <button
              onClick={() => setTreatmentFilter("cancer-treatment")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "cancer-treatment"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterCancer", "Cancer & Oncology")}
            </button>
            <button
              onClick={() => setTreatmentFilter("orthopedics")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "orthopedics"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterOrtho", "Orthopedics & Joint")}
            </button>
            <button
              onClick={() => setTreatmentFilter("neurosurgery")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "neurosurgery"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterNeuro", "Neuro & Spine")}
            </button>
            <button
              onClick={() => setTreatmentFilter("liver-transplant")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                treatmentFilter === "liver-transplant"
                  ? "bg-[#08221E] text-teal-300 shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {t("homeTreatments.filterLiver", "Liver & Gastro")}
            </button>
          </div>

          {/* Grid of Treatment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onConsult={(title) => onOpenConsultation(title)}
              />
            ))}
          </div>

          {/* Centered CTA Just Below Cards */}
          <div className="mt-12 text-center">
            <Link
              to={localizeUrl("/treatments")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{t("homeTreatments.exploreAllBtn", "Explore All 12 Medical Specialties")}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 Dedicated Free Medical Visa for India Section */}
      <MedicalVisaSection onOpenConsultation={() => onOpenConsultation("Medical Visa Assistance")} />

      {/* 5. Delhi NCR Hospital Directory Spotlight */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-2 border border-teal-200">
                {t("homeHospitals.badge", "Accredited Hospital Network")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("homeHospitals.title", "Premier Hospitals in")}{" "}
                <span className="text-teal-700">{t("homeHospitals.titleHighlight", "Delhi NCR")}</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                {t("homeHospitals.desc", "JCI and NABH accredited quaternary medical centers in New Delhi, Gurugram, Noida, and Faridabad with dedicated international lounges.")}
              </p>
            </div>

            <Link
              to={localizeUrl("/hospitals")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group"
            >
              <Building2 className="w-4 h-4" />
              <span>{t("homeHospitals.viewAll", "Explore All Hospital Hubs")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredHospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                onRequestAssistance={(name) => onOpenConsultation(`Assistance for ${name}`)}
              />
            ))}
          </div>

          {/* Centered CTAs Just Below Cards */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={localizeUrl("/hospitals")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{t("homeHospitals.exploreAllBtn", "Explore All Delhi NCR Hospitals")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
            <Link
              to={localizeUrl("/blog/top-nabh-jci-accredited-hospitals-delhi-ncr")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-50 hover:bg-teal-50 border border-slate-300 hover:border-teal-300 text-slate-800 hover:text-teal-900 font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>Compare Top NABH & JCI Accredited Hospitals in Delhi NCR</span>
              <ArrowRight className={`w-4 h-4 text-teal-600 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Medical Specialists Spotlight */}
      <section className="py-16 sm:py-24 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 mb-2 border border-teal-200">
                {t("homeDoctors.badge", "Renowned Medical Leaders")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("homeDoctors.title", "Consult with")}{" "}
                <span className="text-teal-700">{t("homeDoctors.titleHighlight", "Leading Specialists")}</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                {t("homeDoctors.desc", "Surgeons with international fellowships, national honors (Padma awards), and decades of clinical mastery.")}
              </p>
            </div>

            <Link
              to={localizeUrl("/doctors")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group"
            >
              <Stethoscope className="w-4 h-4" />
              <span>{t("homeDoctors.viewAll", "View Specialist Directory")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onRequestConsultation={(name) => onOpenConsultation(`Consultation with ${name}`)}
              />
            ))}
          </div>

          {/* Centered CTA Just Below Cards */}
          <div className="mt-12 text-center">
            <Link
              to={localizeUrl("/doctors")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{t("homeDoctors.consultAllBtn", "Consult Leading Specialist Doctors")}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Patient Journey Timeline Preview */}
      <section className="py-16 sm:py-24 bg-[#08221E] text-white relative overflow-hidden bg-dark-dots content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              {t("homeJourney.badge", "11-Step Structured Framework")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t("homeJourney.title", "Your Seamless")}{" "}
              <span className="text-teal-400">{t("homeJourney.titleHighlight", "Treatment Journey")}</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              {t("homeJourney.desc", "From your first diagnostic upload to post-discharge recovery at home, NHC coordinates every milestone.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesJourneyData.slice(0, 4).map((rawStep) => {
              const step = getLocalizedServiceStep(rawStep, currentLang);
              return (
                <div
                  key={step.step}
                  className="bg-[#0b2d26] border border-teal-800/80 rounded-3xl p-6 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white font-black flex items-center justify-center text-sm mb-4">
                      0{step.step}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.shortDesc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-teal-900 text-[10px] uppercase font-bold text-teal-400 tracking-wider">
                    {step.providerType}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to={localizeUrl("/services")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-600/25 transition-all"
            >
              <span>{t("homeJourney.exploreAllBtn", "Explore the Complete 11-Step Process")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Verified Patient Experience Cases */}
      <section className="py-16 sm:py-24 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 mb-2 border border-teal-200">
                {t("homeStories.badge", "Ethical & Verified Case Records")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("homeStories.title", "International")}{" "}
                <span className="text-teal-700">{t("homeStories.titleHighlight", "Patient Experiences")}</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                {t("homeStories.desc", "Documented case summaries illustrating treatment pathways, duration of stay, and rehabilitation without exaggerated claims.")}
              </p>
            </div>

            <Link
              to={localizeUrl("/patient-stories")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group"
            >
              <Compass className="w-4 h-4" />
              <span>{t("homeStories.viewAll", "Read Full Case Studies")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {patientStoriesData.slice(0, 2).map((rawStory) => {
              const story = getLocalizedPatientStory(rawStory, currentLang);
              const category = SPECIALTY_TRANSLATIONS[story.treatmentCategory]?.[currentLang] || story.treatmentCategory;
              return (
                <div
                  key={story.id}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-teal-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                        <span>{story.countryFlag}</span>
                        <span>{story.country}</span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-2.5 py-0.5 rounded-full">
                        {category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {story.summaryTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      "{story.patientNarrative}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">
                      {t("patientStoriesPage.hospitalLabel", "Hospital:")} {getLocalizedHospitalName(story.hospitalName.split(",")[0], currentLang)}
                    </span>
                    <span className="text-teal-700 font-medium bg-teal-50 px-2 py-0.5 rounded">
                      {t("patientStoriesPage.stayLabel", "Stay:")} {story.lengthOfStay}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered CTA Just Below Cards */}
          <div className="mt-12 text-center">
            <Link
              to={localizeUrl("/patient-stories")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{t("homeStories.viewAllBtn", "View All Patient Case Studies")}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8.5 Medical Travel Guides & Blogs Spotlight */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100 content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 mb-2 border border-teal-200">
                <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                <span>{t("homeBlogs.badge", "International Medical Travel Guides")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("homeBlogs.title", "Latest Clinical &")}{" "}
                <span className="text-teal-700">{t("homeBlogs.titleHighlight", "Treatment Cost Guides")}</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                {t("homeBlogs.desc", "Expert-reviewed surgery costs, recovery protocols, and medical visa guidance for patients from UAE, Saudi Arabia, Oman, Uzbekistan, and worldwide.")}
              </p>
            </div>
            <Link
              to={localizeUrl("/blog")}
              className="inline-flex items-center gap-1 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>{t("homeBlogs.viewAll", "Explore All 12 Medical Guides")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.slice(0, 3).map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100 aspect-[16/9]">
                  <Image
                    src={blog.coverImage}
                    alt={blog.h1Title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-600 text-white shadow-xs">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium">
                    {blog.readingTime} • {blog.publishDate}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                      <Link to={localizeUrl(`/blog/${blog.slug}`)}>
                        {blog.h1Title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={localizeUrl(`/blog/${blog.slug}`)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800"
                    >
                      <span>{t("homeBlogs.readGuide", "Read Guide")}</span>
                      <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                    </Link>
                    <button
                      onClick={() => onOpenConsultation(blog.h1Title)}
                      className="text-[11px] font-bold text-slate-500 hover:text-teal-600 bg-slate-100 px-3 py-1 rounded-full cursor-pointer"
                    >
                      {t("homeBlogs.costQuote", "Cost Quote")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8.8 Comprehensive Medical Tourism SEO Knowledge Base & FAQs */}
      <HomeSeoOverview />

      {/* 9. Prominent Consultation & Medical Enquiry Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-teal-50/40 relative content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-2 border border-teal-200">
              <FileCheck className="w-3.5 h-3.5" />
              {t("homeEnquiry.badge", "Start Your Medical Query")}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("homeEnquiry.title", "Get Your Free")}{" "}
              <span className="text-teal-700">{t("homeEnquiry.titleHighlight", "Hospital & Treatment Estimate")}</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              {t("homeEnquiry.desc", "Submit your reports for evaluation by senior specialists across Delhi NCR. You will receive transparent treatment plans and hospital estimates within 24 hours.")}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-100">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions Preview */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100 content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
              {t("homeFaqs.badge", "Common Questions")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("homeFaqs.title", "Frequently Asked")}{" "}
              <span className="text-teal-700">{t("homeFaqs.titleHighlight", "Questions")}</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {t("homeFaqs.desc", "Clear, honest answers about medical travel, costs, and visa processes in India.")}
            </p>
          </div>

          <FAQAccordion limit={5} showSearch={false} />

          <div className="mt-8 text-center">
            <Link
              to={localizeUrl("/faqs")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>{t("homeFaqs.viewAll", "View All Frequently Asked Questions")}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rotate-90" : ""}`} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight, Phone, Shield } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { mainNavigation } from "../data/navigationData";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { getLocalizedHospitalName, getLocalizedTreatment, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";
import { getTreatmentBySlug } from "../data/treatmentsData";
import { getHospitalBySlug } from "../data/hospitalsData";
import { getDoctorBySlug } from "../data/doctorsData";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();

  const getNavLabel = (label: string): string => {
    switch (label) {
      case "Home": return t("nav.home", "Home");
      case "Hospitals": return t("nav.hospitals", "Hospitals");
      case "Doctors": return t("nav.doctors", "Doctors");
      case "Treatments": return t("nav.treatments", "Treatments");
      case "Services": return t("nav.services", "Services");
      case "Blogs": return t("nav.blogs", "Blog");
      default: return label;
    }
  };

  const getNavChild = (child: { label: string; href: string; desc?: string }) => {
    if (currentLang === "en") return child;

    if (child.href === "/hospitals") {
      return {
        label: currentLang === "ar" ? "جميع مستشفيات دلهي إن سي آر" : currentLang === "fr" ? "Tous les hôpitaux de Delhi NCR" : "Все клиники Дели NCR",
        desc: currentLang === "ar" ? "تصفح المستشفيات المعتمدة دولياً JCI وNABH" : currentLang === "fr" ? "Centres d'excellence accrédités JCI & NABH" : "Ведущие клиники с аккредитацией JCI и NABH"
      };
    }
    if (child.href === "/doctors") {
      return {
        label: currentLang === "ar" ? "دليل الأطباء والاستشاريين" : currentLang === "fr" ? "Trouver un spécialiste" : "Поиск врача-специалиста",
        desc: currentLang === "ar" ? "أكثر من 50 من كبار الاستشاريين ورؤساء الأقسام" : currentLang === "fr" ? "Plus de 50 chirurgiens et professeurs renommés" : "Более 50 ведущих профессоров и хирургов"
      };
    }
    if (child.href === "/treatments") {
      return {
        label: currentLang === "ar" ? "كافة التخصصات الطبية (12 تخصصاً)" : currentLang === "fr" ? "Les 12 spécialités médicales" : "Все 12 медицинских направлений",
        desc: currentLang === "ar" ? "نظرة شاملة على كافة العلاجات والجراحات المتقدمة" : currentLang === "fr" ? "Aperçu de toutes les chirurgies et soins de pointe" : "Обзор всех видов лечения и операций"
      };
    }

    if (child.href.startsWith("/hospitals/")) {
      const slug = child.href.replace("/hospitals/", "");
      const hosp = getHospitalBySlug(slug);
      if (hosp) {
        return {
          label: getLocalizedHospitalName(hosp.name, currentLang),
          desc: child.desc
        };
      }
    }

    if (child.href.startsWith("/treatments/")) {
      const slug = child.href.replace("/treatments/", "");
      const treat = getTreatmentBySlug(slug);
      if (treat) {
        const locT = getLocalizedTreatment(treat, currentLang);
        return {
          label: locT.title,
          desc: locT.shortDesc
        };
      }
    }

    if (child.href.startsWith("/doctors/")) {
      const slug = child.href.replace("/doctors/", "");
      const doc = getDoctorBySlug(slug);
      if (doc) {
        const locSpec = SPECIALTY_TRANSLATIONS[doc.specialty]?.[currentLang] || doc.specialty;
        return {
          label: doc.name,
          desc: locSpec
        };
      }
    }

    return child;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    const localized = localizeUrl(path);
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/ar" || location.pathname === "/fr" || location.pathname === "/ru";
    }
    return location.pathname.startsWith(localized);
  };

  return (
    <>
      {/* Top Micro Emergency & Multilingual Bar */}
      <div className="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>{t("nav.emergencyBadge", "Medical Tourism Desk")}</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3 text-teal-400 shrink-0" />
              <span>{t("nav.desk", "24/7 Desk:")}</span>
              <a 
                href={`tel:${siteConfig.phone}`} 
                dir="ltr" 
                className="inline-block font-sans text-slate-300 hover:text-teal-400 transition-colors"
              >
                <bdi dir="ltr">{siteConfig.phoneDisplay}</bdi>
              </a>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 text-[10px]">
              {t("nav.medicalVisaFree", "✨ 100% Free Medical Visa for India")}
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto shrink-0">
            <span className="text-slate-300 hidden md:inline text-[11px]">
              {t("nav.languagesLabel", "Languages:")}
            </span>
            <LanguageSelector variant="topbar" />
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#08221E] ${
          isScrolled
            ? "shadow-xl shadow-black/20 border-b border-teal-900/40 py-2.5"
            : "border-b border-teal-900/30 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Brand Logo */}
            <BrandLogo variant="light" className="shrink-0" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {mainNavigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const active = isActive(item.href);
                const targetHref = localizeUrl(item.href);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      to={targetHref}
                      className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all ${
                        active
                          ? "text-teal-400 bg-white/10"
                          : "text-slate-200 hover:text-teal-300 hover:bg-white/5"
                      }`}
                    >
                      {getNavLabel(item.label)}
                    </Link>
                  );
                }

                // Dropdown Navigation Item
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="inline-flex items-center">
                      <Link
                        to={targetHref}
                        className={`inline-flex items-center gap-1 pl-3 pr-1 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all ${
                          active
                            ? "text-teal-400 bg-white/10"
                            : "text-slate-200 hover:text-teal-300 hover:bg-white/5"
                        }`}
                      >
                        <span>{getNavLabel(item.label)}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === item.label ? null : item.label);
                        }}
                        className="p-1.5 text-teal-400 hover:text-teal-200 cursor-pointer rounded-md transition-colors"
                        aria-label={`Toggle ${item.label} dropdown`}
                        aria-expanded={activeDropdown === item.label}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : "group-hover:rotate-180"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                        <div className={`bg-[#0b2e28] border border-teal-800/80 rounded-2xl shadow-2xl p-2 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item.children?.map((child) => {
                            const locChild = getNavChild(child);
                            return (
                              <Link
                                key={child.href}
                                to={localizeUrl(child.href)}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors group/child"
                              >
                                <div className="text-xs font-bold text-white group-hover/child:text-teal-300">
                                  {locChild.label}
                                </div>
                                {locChild.desc && (
                                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                                    {locChild.desc}
                                  </p>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-200 bg-teal-950/60 hover:bg-teal-900/60 border border-teal-800/80 px-3 py-2 rounded-full transition-colors"
                title="Chat with WhatsApp desk"
              >
                <MessageCircle className="w-4 h-4 text-teal-400" />
                <span className="hidden xl:inline">{t("common.whatsappDesk", "WhatsApp Help")}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs xl:text-sm tracking-wide shadow-md shadow-teal-600/20 hover:shadow-teal-600/40 transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <span>{t("nav.getQuote", "Get Free Consultation")}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Tablet & Mobile Right Actions */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-2.5 sm:px-4 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                <span className="sm:hidden">{t("nav.consultShort", "Consult")}</span>
                <span className="hidden sm:inline">{t("nav.getQuote", "Get Free Consultation")}</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a2c26] border-b border-teal-800/80 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            {/* Mobile Language Switcher */}
            <div className="mb-4">
              <LanguageSelector variant="mobile" />
            </div>

            <div className="space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.label} className="border-b border-teal-900/60 pb-1">
                  <Link
                    to={localizeUrl(item.href)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-100 hover:text-teal-300"
                  >
                    {getNavLabel(item.label)}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 pb-1">
                      {item.children.slice(0, 4).map((c) => {
                        const locChild = getNavChild(c);
                        return (
                          <Link
                            key={c.href}
                            to={localizeUrl(c.href)}
                            className="block text-xs text-slate-300 hover:text-teal-300 py-1"
                          >
                            → {locChild.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2.5 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md"
              >
                <span>{t("nav.getQuote", "Get Free Consultation")}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("common.whatsappDesk", "Chat on WhatsApp")} (<bdi dir="ltr">{siteConfig.whatsappDisplay}</bdi>)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

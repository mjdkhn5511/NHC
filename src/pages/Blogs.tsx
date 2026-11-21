import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles, Globe, Filter, MessageCircle, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { Image } from "../components/Image";
import { blogsData } from "../data/blogsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedBlog } from "../utils/localizedData";

interface BlogsProps {
  onOpenConsultation: (preselectedTopic?: string) => void;
}

export const Blogs: React.FC<BlogsProps> = ({ onOpenConsultation }) => {
  const { t, isRTL, currentLang, localizeUrl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { key: "All", label: t("blogsPage.categories.all", "All Categories") },
    { key: "Cardiology & Heart Surgery", label: t("blogsPage.categories.cardiology", "Cardiology & Heart Surgery") },
    { key: "Cancer & Oncology", label: t("blogsPage.categories.oncology", "Cancer & Oncology") },
    { key: "Orthopedics & Joint Replacement", label: t("blogsPage.categories.orthopedics", "Orthopedics & Joint Replacement") },
    { key: "Neurosurgery & Spine", label: t("blogsPage.categories.neurosurgery", "Neurosurgery & Spine") },
    { key: "Kidney & Urology", label: t("blogsPage.categories.kidney", "Kidney & Urology") },
    { key: "Liver & Gastroenterology", label: t("blogsPage.categories.liver", "Liver & Gastroenterology") },
    { key: "IVF & Fertility", label: t("blogsPage.categories.ivf", "IVF & Fertility") },
    { key: "Cosmetic & Plastic Surgery", label: t("blogsPage.categories.cosmetic", "Cosmetic & Plastic Surgery") },
    { key: "General Surgery", label: t("blogsPage.categories.generalSurgery", "General Surgery") },
    { key: "Neurology", label: t("blogsPage.categories.neurology", "Neurology") },
    { key: "Liver Transplant", label: t("blogsPage.categories.liverTransplant", "Liver Transplant") },
    { key: "Dental Treatment", label: t("blogsPage.categories.dental", "Dental Treatment") },
  ];

  const filteredBlogs = blogsData.filter((b) => {
    const localized = getLocalizedBlog(b, currentLang);
    const matchesSearch =
      b.h1Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localized.h1Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.secondaryKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || b.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const generalVisaWhatsapp = getWhatsAppUrl(
    currentLang === "ar"
      ? "مرحباً ندوة للرعاية الصحية، أنا مريض دولي وأرغب في الحصول على استشارة طبية مجانية وتأشيرة علاجية للهند."
      : currentLang === "ru"
      ? "Здравствуйте, Nadwa Healthcare! Я иностранный пациент и хочу получить бесплатную консультацию и помощь с медицинской визой в Индию."
      : currentLang === "fr"
      ? "Bonjour Nadwa Healthcare, je suis un patient international et je souhaite obtenir une consultation gratuite et une assistance pour un visa médical en Inde."
      : "Hello Nadwa Healthcare, I am an international patient and I would like free consultation and medical visa assistance for India."
  );

  const canonicalUrl = currentLang === "en" 
    ? "https://www.nadwahealthcare.com/blog" 
    : `https://www.nadwahealthcare.com/${currentLang}/blog`;

  return (
    <>
      <SEOHead
        title={t("blogsPage.metaTitle", "Medical Travel Guides & Treatment Costs in India | Nadwa Healthcare Blogs")}
        description={t("blogsPage.metaDesc", "Explore in-depth 2026 medical guides for international patients. Compare heart surgery, cancer treatment, knee replacement, and transplant costs in India with free visa support.")}
        canonicalUrl={canonicalUrl}
      />

      {/* Hero Header */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-start">
          <Breadcrumb
            items={[
              { label: t("blogsPage.breadcrumb", "Medical Travel Guides & Blogs") }
            ]}
          />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("blogsPage.badge", "International Patient Knowledge Hub")}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              {t("blogsPage.title", "Treatment Guides, Cost Breakdowns &")}{" "}
              <span className="text-teal-400">{t("blogsPage.titleHighlight", "Medical Travel in India")}</span>
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed font-light">
              {t("blogsPage.desc", "Researched and medically reviewed clinical guides for patients traveling from the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Russia, Uzbekistan and worldwide to Delhi NCR.")}
            </p>

            {/* Target Countries Ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-teal-200">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>{t("blogsPage.dedicatedGuidesFor", "Dedicated Travel Guides for:")}</span>
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇦🇪 {t("blogsPage.countries.uae", "UAE")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇸🇦 {t("blogsPage.countries.saudi", "Saudi Arabia")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇴🇲 {t("blogsPage.countries.oman", "Oman")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇶🇦 {t("blogsPage.countries.qatar", "Qatar")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇰🇼 {t("blogsPage.countries.kuwait", "Kuwait")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇺🇿 {t("blogsPage.countries.uzbekistan", "Uzbekistan")}</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/10">🇷🇺 {t("blogsPage.countries.russia", "Russia")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search & Filter Toolbar */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Box with proper RTL mirror */}
              <div className="relative w-full md:w-96">
                <Search className={`w-4 h-4 text-slate-400 absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2`} />
                <input
                  id="blogs-search"
                  name="blogSearch"
                  type="text"
                  placeholder={t("blogsPage.searchPlaceholder", "Search by surgery, condition, cost, or doctor...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full ${isRTL ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-900`}
                />
              </div>

              {/* Category Dropdown (Mobile & Desktop) */}
              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <label htmlFor="blogs-category" className="text-xs font-bold text-slate-500 flex items-center gap-1.5 shrink-0">
                  <Filter className="w-3.5 h-3.5" />
                  <span>{t("blogsPage.filterLabel", "Filter:")}</span>
                </label>
                <select
                  id="blogs-category"
                  name="blogCategory"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 shrink-0"
                >
                  {categories.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">
                {t("blogsPage.noBlogsTitle", "No medical guides found")}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {t("blogsPage.noBlogsDesc", "Try searching with a different keyword or resetting your filter.")}
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 px-4 py-2 rounded-full bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors"
              >
                {t("blogsPage.clearFilters", "Clear Filters")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => {
                const localized = getLocalizedBlog(blog, currentLang);
                const blogUrl = localizeUrl(`/blog/${blog.slug}`);
                return (
                  <article
                    key={blog.id}
                    className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    {/* Card Visual / Category */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 aspect-[16/9]">
                      <Image
                        src={blog.coverImage}
                        alt={localized.h1Title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/9]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-600 text-white shadow-sm">
                          {localized.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                          {localized.badge}
                        </span>
                      </div>

                      {/* Reading Time */}
                      <div className={`absolute bottom-3 ${isRTL ? "right-3" : "left-3"} flex items-center gap-2 text-white text-[11px] font-medium`}>
                        <Clock className="w-3.5 h-3.5 text-teal-300" />
                        <span>{localized.readingTime}</span>
                        <span>•</span>
                        <Calendar className="w-3.5 h-3.5 text-teal-300" />
                        <span>{blog.publishDate}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between text-start">
                      <div>
                        {/* Primary SEO Keyword Badge */}
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 text-[10px] font-bold tracking-wide uppercase border border-teal-200/80 mb-2.5">
                          {t("blogsPage.keywordLabel", "Keyword:")} {blog.primaryKeyword}
                        </div>

                        <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                          <Link to={blogUrl}>
                            {localized.h1Title}
                          </Link>
                        </h2>

                        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {blog.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={blogUrl}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
                        >
                          <span>{t("blogsPage.readGuide", "Read Full Clinical Guide")}</span>
                          <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                        </Link>

                        <button
                          onClick={() => onOpenConsultation(localized.h1Title)}
                          className="text-[11px] font-bold text-slate-600 hover:text-teal-700 bg-slate-100 hover:bg-teal-50 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {t("blogsPage.getCostQuote", "Get Cost Quote")}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Bottom Lead Generation Banner */}
          <div className="mt-16 rounded-3xl bg-[#08221E] text-white p-6 sm:p-10 border border-teal-900 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-start">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t("blogsPage.bottomBadge", "100% Free Medical Visa & Cost Estimates")}</span>
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  {t("blogsPage.bottomTitle", "Have a Medical Report for Free Evaluation?")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {t("blogsPage.bottomDesc", "Send your diagnostics or prescription via WhatsApp. Senior specialists across Apollo, Medanta, Max, and Fortis in Delhi NCR will review your case with zero upfront fee.")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={generalVisaWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#051714] font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t("blogsPage.whatsappDesk", "WhatsApp Medical Desk")}</span>
                </a>

                <button
                  onClick={() => onOpenConsultation("General Blog Inquiry")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>{t("blogsPage.requestQuote", "Request Free Treatment Quote")}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

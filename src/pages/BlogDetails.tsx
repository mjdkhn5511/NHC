import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  Clock, CheckCircle2, 
  MessageCircle, ArrowRight, Share2, HelpCircle, AlertCircle, BookOpen, ShieldCheck
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { blogsData } from "../data/blogsData";
import { treatmentsData } from "../data/treatmentsData";
import { getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedBlog } from "../utils/localizedData";
import { submitPatientInquiry } from "../services/inquiryService";

interface BlogDetailsProps {
  onOpenConsultation: (preselectedTopic?: string) => void;
}

interface KeywordRule {
  pattern: RegExp;
  url: string;
}

const KEYWORD_RULES: KeywordRule[] = [
  // Hospitals
  { pattern: /\b(Fortis Escorts Heart Institute|FEHI)\b/i, url: "/hospitals/fortis-escorts-heart-institute" },
  { pattern: /\b(Medanta\s*[-–—]?\s*The Medicity|Medanta Medicity)\b/i, url: "/hospitals/medanta-the-medicity" },
  { pattern: /\b(Indraprastha Apollo Hospitals?|Apollo Hospitals? Delhi)\b/i, url: "/hospitals/indraprastha-apollo-hospitals" },
  { pattern: /\b(Fortis Memorial Research Institute|FMRI)\b/i, url: "/hospitals/fortis-memorial-research-institute" },
  { pattern: /\b(Max Super Speciality Hospital|Max Hospital Saket)\b/i, url: "/hospitals/max-super-speciality-hospital-saket" },
  { pattern: /\b(Artemis Hospital)\b/i, url: "/hospitals/artemis-hospital-gurugram" },
  { pattern: /\b(Manipal Hospital Dwarka|Manipal Hospital)\b/i, url: "/hospitals/manipal-hospital-dwarka" },
  { pattern: /\b(Sanar International Hospitals?)\b/i, url: "/hospitals/sanar-international-hospital" },
  { pattern: /\b(Amrita Hospital)\b/i, url: "/hospitals/amrita-hospital-faridabad" },
  { pattern: /\b(Jaypee Hospital)\b/i, url: "/hospitals/jaypee-hospital-noida" },

  // Senior Specialist Doctors
  { pattern: /\b(Dr\.?\s+Naresh Trehan)\b/i, url: "/doctors/dr-naresh-trehan" },
  { pattern: /\b(Dr\.?\s+Ashok Seth)\b/i, url: "/doctors/dr-ashok-seth" },
  { pattern: /\b(Dr\.?\s+Ashok Rajgopal)\b/i, url: "/doctors/dr-ashok-rajgopal" },
  { pattern: /\b(Dr\.?\s+Randhir Sud)\b/i, url: "/doctors/dr-randhir-sud" },
  { pattern: /\b(Dr\.?\s+Anant Kumar)\b/i, url: "/doctors/dr-anant-kumar" },
  { pattern: /\b(Dr\.?\s+Vinod Raina)\b/i, url: "/doctors/dr-vinod-raina" },
  { pattern: /\b(Dr\.?\s+Bipin Walia)\b/i, url: "/doctors/dr-bipin-walia" },
  { pattern: /\b(Dr\.?\s+Sandeep Vaishya)\b/i, url: "/doctors/dr-sandeep-vaishya" },
  { pattern: /\b(Dr\.?\s+Subhash Gupta)\b/i, url: "/doctors/dr-subhash-gupta" },
  { pattern: /\b(Dr\.?\s+Rajesh(?: Kumar)? Ahlawat)\b/i, url: "/doctors/dr-rajesh-ahlawat" },
  { pattern: /\b(Dr\.?\s+Harit Chaturvedi)\b/i, url: "/doctors/dr-harit-chaturvedi" },

  // Clinical Guides & Comparison Hubs
  { pattern: /\b(liver transplant cost guide in India|liver transplant cost in India)\b/i, url: "/blog/liver-transplant-cost-in-india-complete-guide" },
  { pattern: /\b(accredited hospitals in Delhi NCR|accredited quaternary care hospitals)\b/i, url: "/hospitals" },

  // Visa & Services
  { pattern: /\b(Indian Medical Visa|Medical Visa for India|medical visa assistance|medical visa invitation letter)\b/i, url: "/services" },
];

const TREATMENT_KEYWORD_MAP: Record<string, RegExp> = {
  "cardiology": /\b(Cardiology Treatment|Heart Surgery in India|Cardiac Surgery)\b/i,
  "cancer-treatment": /\b(Cancer Treatment in India|Advanced Oncology|Oncology Care)\b/i,
  "orthopedics": /\b(Orthopedics and Joint Replacement|Knee Replacement in India|Hip Replacement)\b/i,
  "neurosurgery": /\b(Neurosurgery in India|Brain Tumor Surgery|Endoscopic Spine Surgery)\b/i,
  "kidney-urology": /\b(Kidney Treatment in India|Renal Care|Urology Treatment)\b/i,
  "liver-gastroenterology": /\b(Gastroenterology in India|Liver Disease Treatment|GI Surgery)\b/i,
  "ivf-fertility": /\b(IVF Treatment in India|Fertility Care in India|IVF & Fertility)\b/i,
  "cosmetic-surgery": /\b(Cosmetic Surgery in India|Plastic Surgery in India|Aesthetic Surgery)\b/i,
  "general-surgery": /\b(Laparoscopic Surgery in India|Minimally Invasive Surgery)\b/i,
  "neurology": /\b(Neurology Treatment in India|Stroke Rehabilitation|Parkinson's Care)\b/i,
  "liver-transplant": /\b(Liver Transplant in India|Living Donor Transplant)\b/i,
  "dental": /\b(Dental Tourism in India|Dental Implants in India|Full Mouth Reconstruction)\b/i,
};

function renderParagraphWithLinks(
  text: string, 
  localizeUrl: (url: string) => string, 
  treatmentUrl?: string, 
  treatmentKeywords?: RegExp
): React.ReactNode {
  const rules = [...KEYWORD_RULES];
  if (treatmentUrl && treatmentKeywords) {
    rules.unshift({ pattern: treatmentKeywords, url: treatmentUrl });
  }

  interface MatchItem {
    start: number;
    end: number;
    text: string;
    url: string;
  }

  const matches: MatchItem[] = [];

  for (const rule of rules) {
    const rx = new RegExp(rule.pattern.source, 'gi');
    let m: RegExpExecArray | null;
    while ((m = rx.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      const overlaps = matches.some((ex) => start < ex.end && end > ex.start);
      if (!overlaps) {
        matches.push({ start, end, text: m[0], url: rule.url });
        break;
      }
    }
  }

  if (matches.length === 0) {
    return text;
  }

  matches.sort((a, b) => a.start - b.start);

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  matches.forEach((match, idx) => {
    if (match.start > lastIndex) {
      elements.push(text.substring(lastIndex, match.start));
    }
    elements.push(
      <Link
        key={`link-${idx}`}
        to={localizeUrl(match.url)}
        className="font-semibold text-teal-700 hover:text-teal-900 underline decoration-teal-400 decoration-1 underline-offset-2 transition-colors hover:decoration-teal-600"
      >
        {match.text}
      </Link>
    );
    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

export const BlogDetails: React.FC<BlogDetailsProps> = ({ onOpenConsultation: _onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isRTL, currentLang, localizeUrl } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Quick Consultation Form State
  const [quickForm, setQuickForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Client-side permanent redirect for legacy slugs
  if (slug === "heart-surgery-india-cost-guide") {
    const target = currentLang === "en"
      ? "/blog/heart-surgery-cost-in-india-guide"
      : `/${currentLang}/blog/heart-surgery-cost-in-india-guide`;
    return <Navigate to={target} replace />;
  }

  if (slug === "cancer-treatment-india-oncology-cost-guide") {
    const target = currentLang === "en"
      ? "/blog/cancer-treatment-in-india-oncology-cost-guide"
      : `/${currentLang}/blog/cancer-treatment-in-india-oncology-cost-guide`;
    return <Navigate to={target} replace />;
  }

  const rawBlog = blogsData.find((b) => b.slug === slug);

  if (!rawBlog) {
    return <Navigate to={localizeUrl("/blog")} replace />;
  }

  const blog = getLocalizedBlog(rawBlog, currentLang);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.h1Title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.fullName || !quickForm.email) return;

    setIsSubmitting(true);
    try {
      await submitPatientInquiry({
        fullName: quickForm.fullName,
        email: quickForm.email,
        callingCode: "",
        phone: quickForm.phone || "",
        country: quickForm.country || "International",
        treatment: blog.category,
        preferredCity: "Delhi NCR",
        message: `Quick appointment form submission from blog: ${blog.h1Title}`,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappInquiryUrl = getWhatsAppUrl(
    currentLang === "ar"
      ? `مرحباً ندوة للرعاية الصحية، أستفسر عن مقال "${blog.h1Title}". أرغب في الحصول على تقدير لتكلفة العلاج واستشارة طبية وتأشيرة علاجية للهند.`
      : currentLang === "ru"
      ? `Здравствуйте, Nadwa Healthcare! Я интересуюсь статьей "${blog.h1Title}". Хочу узнать стоимость лечения и получить консультацию.`
      : currentLang === "fr"
      ? `Bonjour Nadwa Healthcare, je me renseigne sur l'article "${blog.h1Title}". Je souhaite obtenir une estimation de traitement et une assistance visa médical.`
      : `Hello Nadwa Healthcare, I am inquiring about "${blog.h1Title}". I would like a treatment estimate and free Medical Visa for India guidance.`
  );

  const treatmentSlug = blog.treatmentId === "dental" ? "dental-treatment" : blog.treatmentId;
  const matchingTreatment = treatmentsData.find((t) => t.slug === treatmentSlug);
  const treatmentKeywords = TREATMENT_KEYWORD_MAP[blog.treatmentId];
  const treatmentUrl = matchingTreatment ? `/treatments/${treatmentSlug}` : undefined;

  const relatedBlogs = blogsData
    .filter((b) => b.id !== rawBlog.id)
    .slice(0, 3);

  const canonicalUrl = currentLang === "en"
    ? `https://www.nadwahealthcare.com/blog/${rawBlog.slug}`
    : `https://www.nadwahealthcare.com/${currentLang}/blog/${rawBlog.slug}`;

  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": blog.metaTitle || blog.h1Title,
        "description": blog.metaDescription || blog.summary,
        "aspect": ["Diagnosis", "Treatment", "Cost", "Recovery", "Medical Travel"]
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "headline": blog.h1Title,
        "description": blog.metaDescription || blog.summary,
        "image": blog.coverImage.startsWith('http') ? blog.coverImage : `https://www.nadwahealthcare.com${blog.coverImage}`,
        "author": {
          "@type": "Organization",
          "name": "Nadwa Healthcare Clinical Coordination Desk",
          "url": "https://www.nadwahealthcare.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Nadwa Healthcare",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.nadwahealthcare.com/images/brand-logo-square.png"
          }
        },
        "datePublished": "2026-10-21",
        "dateModified": "2026-11-07",
        "mainEntityOfPage": canonicalUrl
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": blog.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={`${blog.h1Title} | Nadwa Healthcare`}
        description={blog.metaDescription || blog.summary}
        canonicalUrl={canonicalUrl}
        schemaData={schemaData}
      />

      <article className="bg-white min-h-screen">
        {/* ================= EDITORIAL LIGHT HEADER ================= */}
        <header className="bg-slate-50/80 border-b border-slate-200/90 py-8 lg:py-10 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <Breadcrumb
              items={[
                { label: t("blogDetails.breadcrumbsBlogs", "Blogs"), href: localizeUrl("/blog") },
                { label: blog.category }
              ]}
            />

            {/* Badges Bar: Category, Medically Reviewed, Reading Time */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100/90 text-teal-800">
                {blog.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/90">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t("blogDetails.medicallyReviewed", "Medically Reviewed")}</span>
              </span>
              <span className={`flex items-center gap-1.5 text-xs text-slate-500 ${isRTL ? "mr-auto" : "ml-auto"}`}>
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{blog.readingTime}</span>
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {blog.h1Title}
            </h1>

            {/* Editorial Byline: Organization + Review Desk + Share Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                  NHC
                </div>
                <div>
                  <div className="font-bold text-slate-900">Nadwa Healthcare Clinical Coordination Desk</div>
                  <div className="text-[11px] text-slate-500">Updated for 2026 • Medical Travel Guide</div>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 transition-colors cursor-pointer text-xs shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{copied ? t("blogDetails.linkCopied", "Link Copied!") : t("blogDetails.shareGuide", "Share Guide")}</span>
              </button>
            </div>

            {/* Executive Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {blog.summary}
            </p>
          </div>
        </header>

        {/* ================= 2-COLUMN MAIN EDITORIAL LAYOUT ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* ================= LEFT SIDEBAR (STICKY ON DESKTOP) ================= */}
            <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
              
              {/* COMPACT APPOINTMENT / CONSULTATION FORM (Exact match to requested widget) */}
              <div className="bg-[#f0f9f8] rounded-2xl p-5 border border-teal-200/90 shadow-md">
                <div className="text-center mb-4">
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0b5e54] tracking-tight">
                    {t("blogDetails.quickFormTitle", "Book an Appointment Now")}
                  </h3>
                  <p className="font-bold text-xs sm:text-sm text-slate-800 mt-1">
                    {t("blogDetails.quickFormSubtitle", "Consult Top Indian Specialists")}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-white rounded-xl p-5 border border-emerald-300 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-sm">
                      {t("blogDetails.formSuccessTitle", "Inquiry Received Successfully!")}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t("blogDetails.formSuccessDesc", "Our senior international coordinator will contact you shortly via WhatsApp or Email.")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3">
                    <input
                      id="blog-quick-fullname"
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      required
                      value={quickForm.fullName}
                      onChange={(e) => setQuickForm({ ...quickForm, fullName: e.target.value })}
                      placeholder={t("blogDetails.namePlaceholder", "Enter Full Name")}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                    
                    <input
                      id="blog-quick-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder={t("blogDetails.phonePlaceholder", "Enter Phone Number")}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />

                    <input
                      id="blog-quick-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      placeholder={t("blogDetails.emailPlaceholder", "Enter Email Address")}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />

                    <input
                      id="blog-quick-country"
                      type="text"
                      name="country"
                      autoComplete="country-name"
                      value={quickForm.country}
                      onChange={(e) => setQuickForm({ ...quickForm, country: e.target.value })}
                      placeholder={t("blogDetails.countryPlaceholder", "Preferred Location / Country")}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-1 py-3 px-4 rounded-xl bg-[#009e60] hover:bg-[#008953] text-white font-extrabold text-sm shadow-md shadow-emerald-700/15 transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? "..." : t("blogDetails.bookBtn", "Book Your Appointment")}
                    </button>

                    <div className="text-[11px] text-slate-500 text-center pt-1 font-medium">
                      🔒 {t("blogDetails.formPrivacy", "100% Confidential • Free Doctor Opinion")}
                    </div>
                  </form>
                )}
              </div>

              {/* TABLE OF CONTENTS CARD */}
              {blog.sections && blog.sections.length > 0 && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>{t("blogDetails.tableOfContents", "In this Guide")}</span>
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    {blog.sections.map((sec, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx}`}
                        className="block text-slate-600 hover:text-teal-700 font-medium py-1 px-2 rounded-lg hover:bg-teal-50 transition-colors line-clamp-2"
                      >
                        {sec.h2}
                      </a>
                    ))}
                    {blog.faqs && blog.faqs.length > 0 && (
                      <a
                        href="#faqs-section"
                        className="block text-slate-600 hover:text-teal-700 font-medium py-1 px-2 rounded-lg hover:bg-teal-50 transition-colors"
                      >
                        {t("blogDetails.faqTitle", "Frequently Asked Questions")}
                      </a>
                    )}
                  </nav>
                </div>
              )}

              {/* INSTANT WHATSAPP ASSISTANCE BADGE */}
              <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-200 text-start">
                <div className="text-xs font-bold text-teal-900 mb-1">
                  {currentLang === "ar" ? "هل لديك تقارير طبية جاهزة؟" : "Have Medical Reports Ready?"}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                  {currentLang === "ar"
                    ? "تواصل مباشرة مع استشاريينا لمراجعة فورية مجانية للأشعة والتحاليل."
                    : "Send scans directly to our clinical coordinators on WhatsApp for a fast evaluation."}
                </p>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Reports</span>
                </a>
              </div>

            </aside>

            {/* ================= RIGHT MAIN ARTICLE COLUMN ================= */}
            <main className="flex-1 min-w-0 max-w-3xl order-1 lg:order-2 space-y-8 text-start">
              
              {/* Featured Cover Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[420px] aspect-[16/9]">
                <img
                  src={blog.coverImage}
                  alt={blog.h1Title}
                  width={1200}
                  height={675}
                  style={{ aspectRatio: "16 / 9" }}
                  className="w-full h-full max-h-[420px] object-cover aspect-[16/9]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>

              {/* Medical Terms Glossary Explainer */}
              {blog.medicalTerms && blog.medicalTerms.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 border border-teal-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 text-teal-900 font-extrabold text-xs uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4 text-teal-700" />
                    <span>{t("blogDetails.medicalTermsTitle", "Simple Explanations of Medical Terms in this Guide")}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {blog.medicalTerms.map((m, idx) => (
                      <div key={idx} className="bg-white p-3.5 rounded-xl border border-teal-100 shadow-2xs">
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          {m.term}:
                        </strong>
                        <span className="text-xs sm:text-sm text-slate-600 mt-1 block leading-relaxed">
                          {m.simpleExplanation}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Content Sections */}
              <div className="space-y-10 text-slate-800 leading-relaxed">
                {blog.sections.map((section, sIdx) => (
                  <section key={sIdx} id={`section-${sIdx}`} className="space-y-4 scroll-mt-24">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
                      {section.h2}
                    </h2>

                    {section.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {renderParagraphWithLinks(p, localizeUrl, treatmentUrl, treatmentKeywords)}
                      </p>
                    ))}

                    {/* Bullet Points */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 my-3">
                        {section.bulletPoints.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Hospital Comparison Table */}
                    {section.hospitalTable && section.hospitalTable.length > 0 && (
                      <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                        <div className="bg-[#08221E] text-white px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{t("blogDetails.hospitalTableTitle", "Best Accredited Hospitals in Delhi NCR (Comparison)")}</span>
                          <span className="text-teal-400 text-xs font-semibold">{t("blogDetails.hospitalTableBadge", "JCI & NABH")}</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-start border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                                <th className="py-2.5 px-3.5 text-start">{t("blogDetails.thHospital", "Hospital Name")}</th>
                                <th className="py-2.5 px-3.5 text-start">{t("blogDetails.thLocation", "Location")}</th>
                                <th className="py-2.5 px-3.5 text-start">{t("blogDetails.thAccreditations", "Accreditations")}</th>
                                <th className="py-2.5 px-3.5 text-start">{t("blogDetails.thSpecialties", "Flagship Specialties")}</th>
                                <th className="py-2.5 px-3.5 text-start text-teal-800">{t("blogDetails.thDistance", "Distance from DEL Airport")}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {section.hospitalTable.map((hRow, hIdx) => (
                                <tr key={hIdx} className="hover:bg-teal-50/30 transition-colors">
                                  <td className="py-3 px-3.5 font-bold text-slate-900">{renderParagraphWithLinks(hRow.hospitalName, localizeUrl)}</td>
                                  <td className="py-3 px-3.5 text-slate-600 whitespace-nowrap">{hRow.location}</td>
                                  <td className="py-3 px-3.5 whitespace-nowrap">
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 font-bold text-[11px]">
                                      {hRow.accreditations}
                                    </span>
                                  </td>
                                  <td className="py-3 px-3.5 text-slate-700 leading-snug">{hRow.specialties}</td>
                                  <td className="py-3 px-3.5 font-semibold text-teal-700 whitespace-nowrap">{hRow.distanceAirport}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Cost Comparison Table */}
                    {section.costTable && section.costTable.length > 0 && (
                      <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                        <div className="bg-slate-900 text-white px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-between">
                          <span>{t("blogDetails.tableProcedureEstimate", "Procedure & Surgical Estimate")}</span>
                          <span className="text-teal-400 text-xs font-semibold">{t("blogDetails.tableCostUsd", "Estimated Costs in USD ($)")}</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-start border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                                <th className="py-2.5 px-3.5 text-start">{t("blogDetails.tableProcedure", "Procedure")}</th>
                                <th className="py-2.5 px-3.5 text-start text-teal-800">{t("blogDetails.tableIndiaCost", "India Cost (Package)")}</th>
                                <th className="py-2.5 px-3.5 text-start text-slate-500">{t("blogDetails.tableWesternCost", "USA / UK Cost")}</th>
                                <th className="py-2.5 px-3.5 text-start text-emerald-700">{t("blogDetails.tableSavings", "Patient Savings")}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {section.costTable.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-teal-50/30 transition-colors">
                                  <td className="py-2.5 px-3.5 font-semibold text-slate-900">{row.procedure}</td>
                                  <td className="py-2.5 px-3.5 font-bold text-teal-700">{row.indiaCostUsd}</td>
                                  <td className="py-2.5 px-3.5 text-slate-400 line-through">{row.westernCostUsd}</td>
                                  <td className="py-2.5 px-3.5">
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                                      {t("blogDetails.tableSave", "Save")} {row.savingsPercentage}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Medical Alert / Callout */}
                    {section.callout && (
                      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{section.callout}</span>
                      </div>
                    )}

                    {/* Sub-sections with H3 */}
                    {section.h3List?.map((h3Item, h3Idx) => (
                      <div key={h3Idx} className={`mt-5 ${isRTL ? "pr-4 border-r-2" : "pl-4 border-l-2"} border-teal-500 space-y-2`}>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {h3Item.h3}
                        </h3>
                        {h3Item.paragraphs.map((subP, subPIdx) => (
                          <p key={subPIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {renderParagraphWithLinks(subP, localizeUrl, treatmentUrl, treatmentKeywords)}
                          </p>
                        ))}
                        {h3Item.bulletPoints?.map((subB, subBIdx) => (
                          <li key={subBIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 list-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                            <span>{subB}</span>
                          </li>
                        ))}
                      </div>
                    ))}
                  </section>
                ))}
              </div>

              {/* FAQ Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div id="faqs-section" className="pt-8 border-t border-slate-200 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-teal-600" />
                    <span>{t("blogDetails.faqTitle", "Frequently Asked Questions")}</span>
                  </h2>
                  <div className="space-y-3">
                    {blog.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Treatment Guides */}
              <div className="pt-10 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {t("blogDetails.moreGuidesTitle", "Explore More Treatment Guides")}
                  </h3>
                  <Link
                    to={localizeUrl("/blog")}
                    className="text-xs sm:text-sm font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                  >
                    <span>{t("blogDetails.viewAllGuides", "View All Guides")}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedBlogs.map((rel) => {
                    const locRel = getLocalizedBlog(rel, currentLang);
                    return (
                      <Link
                        key={rel.id}
                        to={localizeUrl(`/blog/${rel.slug}`)}
                        className="group block p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-400 transition-all"
                      >
                        <img
                          src={rel.coverImage}
                          alt={locRel.h1Title}
                          width={320}
                          height={112}
                          style={{ width: "100%", height: "112px", aspectRatio: "20 / 7" }}
                          className="w-full h-28 object-cover rounded-lg mb-2.5 group-hover:opacity-90 transition-opacity aspect-[20/7]"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                          {locRel.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                          {locRel.h1Title}
                        </h4>
                        <span className="mt-2 text-[11px] font-semibold text-teal-600 flex items-center gap-1">
                          <span>{t("blogDetails.readGuide", "Read Guide")}</span>
                          <ArrowRight className={`w-3 h-3 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </main>

          </div>
        </div>
      </article>
    </>
  );
};

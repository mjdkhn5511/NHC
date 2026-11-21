import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Languages, 
  Plane, 
  AlertCircle 
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { EnquiryForm } from "../components/EnquiryForm";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { SocialLinks } from "../components/SocialLinks";

export const Contact: React.FC = () => {
  const { currentLang, t, localizeUrl } = useLanguage();

  return (
    <main className="bg-white min-h-screen">
      <SEOHead
        title="Contact 24/7 International Patient Desk | Nadwa Healthcare"
        description={t("contactPage.desc", "We assist international patients seeking medical treatment across Delhi NCR, India. Reach us via WhatsApp, email, or enquiry form.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/contact')}`}
      />

      {/* Header Banner */}
      <header className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.contact", "Contact Us") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Phone className="w-3.5 h-3.5" />
              {t("contactPage.badge", "24/7 International Coordination Desk")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("contactPage.title", "Contact")}{" "}
              <span className="text-teal-400">{t("contactPage.titleHighlight", "NadwaHealthcare")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("contactPage.desc", "We assist international patients seeking medical treatment across Delhi NCR, India. Reach us via WhatsApp, email, or by submitting your medical reports below.")}
            </p>
          </div>
        </div>
      </header>

      {/* Main Contact Grid */}
      <section className="py-14 lg:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Cols: Contact Channels & Delhi NCR Office */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Quick Connect Card */}
              <div className="bg-emerald-600 text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-emerald-700/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">{t("contactPage.waTitle", "Fast-Track WhatsApp")}</h3>
                    <p className="text-xs text-emerald-100">{t("contactPage.waResponse", "Average response: 15 Minutes")}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                  {t("contactPage.waDesc", "Chat directly with senior patient coordinators for urgent opinions, invitation letters, or price estimates.")}
                </p>
                <a
                  href={getWhatsAppUrl("Hello NHC, I want to initiate a medical inquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-emerald-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{t("contactPage.chatWaBtn", "Open WhatsApp Chat")} (<bdi dir="ltr">{siteConfig.whatsappDisplay}</bdi>)</span>
                </a>
              </div>

              {/* Contact Information Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-slate-900">
                  {currentLang === "ar" ? "معلومات الاتصال المباشرة" : currentLang === "fr" ? "Coordonnées directes" : currentLang === "ru" ? "Прямые контакты" : "Direct Contact Information"}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">{t("contactPage.officeTitle", "Delhi NCR Central Coordination Office")}</strong>
                      <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}, India. PIN {siteConfig.address.postalCode}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">{t("nav.desk", "International Phone Desk")}</strong>
                      <a href={`tel:${siteConfig.phone}`} dir="ltr" className="inline-block text-teal-700 font-medium hover:underline">
                        <bdi dir="ltr">{siteConfig.phoneDisplay}</bdi>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Email:</strong>
                      <span className="text-teal-700 font-medium">{siteConfig.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">{t("contactPage.hoursLabel", "Working Hours:")}</strong>
                      <span>{t("contactPage.hoursValue", "24 Hours / 7 Days (International Desk)")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Languages className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">{t("footer.languagesLabel", "Supported Languages")}</strong>
                      <span>English, العربية, Français, Русский, हिन्दी</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <Plane className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    {currentLang === "ar" ? "على بعد حوالي 20 دقيقة من مطار أنديرا غاندي الدولي (DEL)" : currentLang === "fr" ? "Env. 20 minutes de l'aéroport international de Delhi (DEL)" : currentLang === "ru" ? "Около 20 минут от международного аэропорта Дели (DEL)" : "Approx. 20 minutes from Indira Gandhi International Airport (DEL)"}
                  </span>
                </div>

                {/* Official Social Media Links */}
                <div className="pt-4 border-t border-slate-100">
                  <strong className="text-xs font-semibold text-slate-800 block mb-2.5">
                    {currentLang === "ar" ? "تابعنا على وسائل التواصل الاجتماعي:" : currentLang === "fr" ? "Suivez-nous sur les réseaux sociaux :" : currentLang === "ru" ? "Присоединяйтесь к нам в соцсетях:" : "Follow Us on Social Media:"}
                  </strong>
                  <SocialLinks variant="light" />
                </div>
              </div>

              {/* Emergency Desk Notice */}
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>{currentLang === "ar" ? "حالات الطوارئ الحرجة:" : currentLang === "fr" ? "Urgences vitales :" : currentLang === "ru" ? "Экстренные случаи:" : "Critical Emergency Cases:"}</strong>{" "}
                  {currentLang === "ar" ? "لنقل حالات العناية المركزة (ICU) العاجلة أو التنسيق للإسعاف الجوي، يرجى التواصل فوراً عبر مكتب الواتساب للاستجابة الفورية." : currentLang === "fr" ? "Pour les transferts urgents en réanimation (USI) ou évacuation sanitaire aérienne, contactez directement notre desk WhatsApp." : currentLang === "ru" ? "Для срочного перевода в реанимацию (ОРИТ) или санитарной авиации свяжитесь напрямую с круглосуточным координатором в WhatsApp." : "For urgent ICU transfer or air-ambulance coordination into Delhi NCR, please contact our 24-hour critical desk directly on WhatsApp for expedited response."}
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Full Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-teal-100 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {t("nav.emergencyBadge", "Online Consultation Desk")}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    {t("form.title", "Submit Medical Enquiry & Reports")}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {t("form.subtitle", "Fill in your details and required treatment. We will gather verified opinions from Delhi NCR specialists without any upfront fee.")}
                  </p>
                </div>

                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
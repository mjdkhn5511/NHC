import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Phone, User, Globe, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getWhatsAppUrl } from "../config/siteConfig";
import { submitPatientInquiry } from "../services/inquiryService";

export interface QuickConsultationFormProps {
  relatedType?: "home" | "doctor" | "treatment" | "hospital" | "general";
  pageContextName?: string; // e.g. "Dr. Ashok Rajgopal", "Cardiac Surgery", "Medanta The Medicity"
  customDefaultMessage?: string;
  formTitle?: string;
  formSubtitle?: string;
  onSuccess?: (ticketId: string) => void;
  className?: string;
}

const COMMON_CALLING_CODES = [
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
  { code: "+7", country: "Russia / KZ", flag: "🇷🇺" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+252", country: "Somalia", flag: "🇸🇴" },
  { code: "+249", country: "Sudan", flag: "🇸🇩" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+91", country: "India", flag: "🇮🇳" },
];

const POPULAR_COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Oman",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Uzbekistan",
  "Kazakhstan",
  "Russia",
  "Kenya",
  "Nigeria",
  "Tanzania",
  "Ethiopia",
  "Somalia",
  "Sudan",
  "Bangladesh",
  "Afghanistan",
  "Nepal",
  "United Kingdom",
  "United States",
  "Canada",
  "France",
  "Mauritius",
  "Ghana",
  "Uganda"
];

function getAutoFillMessage(
  relatedType: string,
  pageContextName: string | undefined,
  lang: string
): string {
  const name = pageContextName || "";

  if (relatedType === "doctor" && name) {
    if (lang === "ar") {
      return `أود استشارة ${name} للحصول على تقييم طبي وتقدير تكلفة العملية في الهند.`;
    }
    if (lang === "fr") {
      return `Je souhaite consulter le ${name} pour un avis médical et une estimation du coût de chirurgie en Inde.`;
    }
    if (lang === "ru") {
      return `Я хотел бы проконсультироваться с доктором ${name} по поводу медицинского заключения и стоимости лечения в Индии.`;
    }
    return `I would like to consult ${name} for a medical review and treatment cost estimate in India.`;
  }

  if (relatedType === "treatment" && name) {
    if (lang === "ar") {
      return `أرغب في الحصول على خيارات المستشفيات وتقدير شفاف لتكلفة علاج ${name} في الهند.`;
    }
    if (lang === "fr") {
      return `Je souhaite obtenir les options d'hôpitaux et une estimation transparente des coûts pour ${name} en Inde.`;
    }
    if (lang === "ru") {
      return `Я хочу узнать варианты клиник и получить расчет стоимости для ${name} в Индии.`;
    }
    return `I am looking for hospital options and a transparent cost estimate for ${name} in India.`;
  }

  if (relatedType === "hospital" && name) {
    if (lang === "ar") {
      return `أود استشارة كبار الأطباء والاستفسار عن تكاليف العلاج في مستشفى ${name}.`;
    }
    if (lang === "fr") {
      return `Je souhaite consulter les médecins spécialistes et me renseigner sur les coûts de traitement à ${name}.`;
    }
    if (lang === "ru") {
      return `Я хотел бы проконсультироваться со специалистами и узнать стоимость лечения в клинике ${name}.`;
    }
    return `I would like to consult specialist doctors and inquire about treatment costs at ${name}.`;
  }

  // Home / General default
  if (lang === "ar") {
    return "أود الاستفسار عن خيارات العلاج الطبي، واختيار المستشفيات، وتقديرات التكلفة في الهند.";
  }
  if (lang === "fr") {
    return "Je souhaite me renseigner sur les options de traitement médical, le choix des hôpitaux et les estimations de coût en Inde.";
  }
  if (lang === "ru") {
    return "Я хотел бы узнать о вариантах лечения, подборе клиник и расчете стоимости в Индии.";
  }
  return "I would like to inquire about medical treatment options, hospital selection and cost estimates in India.";
}

export const QuickConsultationForm: React.FC<QuickConsultationFormProps> = ({
  relatedType = "home",
  pageContextName,
  customDefaultMessage,
  formTitle,
  formSubtitle,
  onSuccess,
  className = ""
}) => {
  const { currentLang, isRTL, t } = useLanguage();

  const [name, setName] = useState("");
  const [callingCode, setCallingCode] = useState("+971");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United Arab Emirates");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ ticketId: string } | null>(null);

  // Auto-fill textarea whenever pageContextName or currentLang changes
  useEffect(() => {
    if (customDefaultMessage) {
      setMessage(customDefaultMessage);
    } else {
      setMessage(getAutoFillMessage(relatedType, pageContextName, currentLang));
    }
  }, [relatedType, pageContextName, customDefaultMessage, currentLang]);

  // Default country synced with calling code
  const handleCallingCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setCallingCode(code);
    const match = COMMON_CALLING_CODES.find((c) => c.code === code);
    if (match) {
      setCountry(match.country);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage(
        currentLang === "ar"
          ? "يرجى إدخال اسمك الكريم"
          : currentLang === "fr"
          ? "Veuillez entrer votre nom complet"
          : currentLang === "ru"
          ? "Пожалуйста, введите ваше имя"
          : "Please enter your full name"
      );
      return;
    }

    if (!phone.trim() || phone.trim().length < 5) {
      setErrorMessage(
        currentLang === "ar"
          ? "يرجى إدخال رقم هاتف أو واتساب صحيح"
          : currentLang === "fr"
          ? "Veuillez entrer un numéro de téléphone/WhatsApp valide"
          : currentLang === "ru"
          ? "Пожалуйста, укажите действующий номер WhatsApp или телефона"
          : "Please enter a valid phone or WhatsApp number"
      );
      return;
    }

    if (!country.trim()) {
      setErrorMessage(
        currentLang === "ar"
          ? "يرجى تحديد دولتك"
          : currentLang === "fr"
          ? "Veuillez indiquer votre pays"
          : currentLang === "ru"
          ? "Пожалуйста, укажите вашу страну"
          : "Please specify your country of residence"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const treatmentCategory =
        relatedType === "doctor"
          ? `Doctor: ${pageContextName || "Specialist"}`
          : relatedType === "treatment"
          ? `Treatment: ${pageContextName || "General"}`
          : relatedType === "hospital"
          ? `Hospital: ${pageContextName || "Network Hospital"}`
          : "General Medical Travel Inquiry";

      const res = await submitPatientInquiry({
        fullName: name.trim(),
        email: "",
        callingCode,
        phone: phone.trim(),
        country: country.trim(),
        treatment: treatmentCategory,
        preferredCity: "Delhi NCR (Any Premier Hospital)",
        message: message.trim(),
      });

      if (res.success) {
        setSuccessData({ ticketId: res.ticketId });
        if (onSuccess) {
          onSuccess(res.ticketId);
        }
      } else {
        setErrorMessage(res.error || "Submission error. Please try WhatsApp directly.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred. Please contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Localized placeholders
  const namePlaceholder =
    currentLang === "ar"
      ? "الاسم الكامل"
      : currentLang === "fr"
      ? "Votre Nom complet"
      : currentLang === "ru"
      ? "Ваше имя"
      : "Name";

  const phonePlaceholder =
    currentLang === "ar"
      ? "رقم الهاتف / الواتساب"
      : currentLang === "fr"
      ? "Numéro WhatsApp / Téléphone"
      : currentLang === "ru"
      ? "Номер WhatsApp / Телефона"
      : "Number";

  const countryPlaceholder =
    currentLang === "ar"
      ? "الدولة"
      : currentLang === "fr"
      ? "Pays de résidence"
      : currentLang === "ru"
      ? "Страна проживания"
      : "Country";

  const submitBtnText =
    currentLang === "ar"
      ? "طلب استشارة مجانية وتقدير تكلفة"
      : currentLang === "fr"
      ? "Obtenir un avis médical gratuit"
      : currentLang === "ru"
      ? "Получить бесплатную консультацию"
      : "Get Free Consultation & Estimate";

  const defaultTitle =
    formTitle ||
    (currentLang === "ar"
      ? "احصل على استشارة طبية مجانية"
      : currentLang === "fr"
      ? "Obtenez un avis médical et devis gratuit"
      : currentLang === "ru"
      ? "Бесплатная медицинская консультация"
      : "Get Free Medical Opinion & Estimate");

  const defaultSub =
    formSubtitle ||
    (currentLang === "ar"
      ? "رد رسمي خلال 24–48 ساعة • بدون أي رسوم وساطة"
      : currentLang === "fr"
      ? "Réponse sous 24–48h • Zéro frais de coordination"
      : currentLang === "ru"
      ? "Ответ в течение 24–48 часов • Без комиссий"
      : "Official doctor response in 24–48h • 100% Free Assistance");

  // Success view
  if (successData) {
    return (
      <div
        className={`w-full max-w-[480px] bg-white rounded-3xl p-6 sm:p-7 border border-emerald-200 shadow-2xl text-center space-y-4 animate-in fade-in zoom-in-95 duration-200 ${className}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">
          {currentLang === "ar"
            ? "تم استلام استفسارك بنجاح!"
            : currentLang === "fr"
            ? "Demande reçue avec succès !"
            : currentLang === "ru"
            ? "Ваша заявка принята!"
            : "Inquiry Received Successfully!"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {currentLang === "ar"
            ? `شكراً ${name}. تم تخصيص رقم التذكرة:`
            : currentLang === "fr"
            ? `Merci ${name}. Votre dossier a été créé avec le ticket :`
            : currentLang === "ru"
            ? `Спасибо, ${name}. Номер вашей заявки:`
            : `Thank you, ${name}. Your inquiry has been registered with Reference ID:`}
        </p>
        <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-xl font-mono text-sm font-bold text-teal-800">
          {successData.ticketId}
        </div>
        <p className="text-xs text-slate-500">
          {currentLang === "ar"
            ? "سيقوم منسق الحالات الدولي بالتواصل معك عبر الواتساب أو الهاتف خلال 24 ساعة."
            : currentLang === "fr"
            ? "Notre coordinateur médical international vous contactera par WhatsApp ou téléphone sous 24h."
            : currentLang === "ru"
            ? "Наш медицинский координатор свяжется с вами по WhatsApp или телефону в течение 24 часов."
            : "Our International Case Coordinator will review your details and contact you via WhatsApp / Phone within 24 hours."}
        </p>
        <div className="pt-2 space-y-2">
          <a
            href={getWhatsAppUrl(
              `Hello NHC Coordinator, I just submitted an inquiry (${successData.ticketId}) for ${name} from ${country}. Please advise.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>
              {currentLang === "ar"
                ? "متابعة فورية عبر الواتساب"
                : currentLang === "fr"
                ? "Suivre immédiatement sur WhatsApp"
                : currentLang === "ru"
                ? "Быстрая связь в WhatsApp"
                : "Chat Now with Coordinator on WhatsApp"}
            </span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              setName("");
              setPhone("");
            }}
            className="text-xs font-semibold text-slate-500 hover:text-teal-700 underline pt-1 block mx-auto"
          >
            {currentLang === "ar"
              ? "إرسال استفسار آخر"
              : currentLang === "fr"
              ? "Envoyer une autre demande"
              : currentLang === "ru"
              ? "Отправить еще один запрос"
              : "Submit another inquiry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-[480px] bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-teal-200/90 shadow-2xl shadow-teal-950/10 text-left transition-all ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-bold tracking-wide uppercase mb-2">
          <Sparkles className="w-3 h-3 text-teal-600" />
          <span>{t("hero.badgeVisa", "100% Free Medical Assistance")}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
          {defaultTitle}
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {defaultSub}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-in fade-in duration-150">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Input */}
        <div>
          <label htmlFor="quick-consult-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 cursor-pointer">
            {currentLang === "ar" ? "الاسم" : currentLang === "fr" ? "Nom" : currentLang === "ru" ? "Имя" : "Name"}
            <span className="text-teal-600 ml-0.5">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="quick-consult-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={namePlaceholder}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium transition-colors outline-none"
            />
          </div>
        </div>

        {/* Number Input (Country Code + Phone) */}
        <div>
          <label htmlFor="quick-consult-phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 cursor-pointer">
            {currentLang === "ar" ? "رقم الهاتف / الواتساب" : currentLang === "fr" ? "Numéro" : currentLang === "ru" ? "Номер" : "Number"}
            <span className="text-teal-600 ml-0.5">*</span>
          </label>
          <div className="flex rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus-within:bg-white focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 overflow-hidden transition-all">
            <select
              id="quick-consult-calling-code"
              name="callingCode"
              autoComplete="tel-country-code"
              aria-label="Calling Code"
              value={callingCode}
              onChange={handleCallingCodeChange}
              className="px-2.5 py-2.5 bg-slate-100/80 border-r border-slate-200 text-slate-700 text-xs font-bold outline-none cursor-pointer shrink-0"
            >
              {COMMON_CALLING_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <div className="relative flex-1 flex items-center">
              <input
                id="quick-consult-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={phonePlaceholder}
                className="w-full px-3 py-2.5 bg-transparent text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium outline-none"
              />
            </div>
          </div>
        </div>

        {/* Country Input */}
        <div>
          <label htmlFor="quick-consult-country" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 cursor-pointer">
            {currentLang === "ar" ? "الدولة" : currentLang === "fr" ? "Pays" : currentLang === "ru" ? "Страна" : "Country"}
            <span className="text-teal-600 ml-0.5">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Globe className="w-4 h-4" />
            </div>
            <input
              id="quick-consult-country"
              name="country"
              type="text"
              autoComplete="country-name"
              required
              list="popular-countries-list"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder={countryPlaceholder}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium transition-colors outline-none"
            />
            <datalist id="popular-countries-list">
              {POPULAR_COUNTRIES.map((cty) => (
                <option key={cty} value={cty} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Text Area (Auto-filled according to related page) */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="quick-consult-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 cursor-pointer">
              {currentLang === "ar"
                ? "رسالتك / استفسار طبي"
                : currentLang === "fr"
                ? "Votre demande médicale"
                : currentLang === "ru"
                ? "Медицинский запрос"
                : "Medical Inquiry / Message"}
            </label>
            <span className="text-[10px] text-teal-700 font-semibold">
              {currentLang === "ar"
                ? "مملوء تلقائياً"
                : currentLang === "fr"
                ? "Pré-rempli"
                : currentLang === "ru"
                ? "Автозаполнение"
                : "Auto-filled"}
            </span>
          </div>
          <div className="relative">
            <textarea
              id="quick-consult-message"
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your medical condition or requirements..."
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium transition-colors outline-none resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>
                  {currentLang === "ar"
                    ? "جاري الإرسال..."
                    : currentLang === "fr"
                    ? "Envoi en cours..."
                    : currentLang === "ru"
                    ? "Отправка..."
                    : "Submitting..."}
                </span>
              </span>
            ) : (
              <>
                <span>{submitBtnText}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </>
            )}
          </button>
        </div>

        {/* Footer Quick Contact on WhatsApp */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
          <div className="flex items-center gap-1 text-slate-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>{t("common.privacySafe", "100% Confidential")}</span>
          </div>

          <a
            href={getWhatsAppUrl(
              `Hello NHC, I would like to inquire about: ${message || "medical treatment in India"}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold hover:underline transition-colors"
          >
            <MessageSquare className="w-3 h-3 text-emerald-600" />
            <span>WhatsApp Desk</span>
          </a>
        </div>
      </form>
    </div>
  );
};

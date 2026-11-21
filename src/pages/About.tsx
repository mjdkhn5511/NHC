import React from "react";
import { 
  HeartHandshake, 
  ShieldCheck, 
  Eye, 
  Target, 
  MapPin, 
  ArrowRight,
  Stethoscope,
  Globe2
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();

  return (
    <main className="bg-white min-h-screen">
      <SEOHead
        title="About Nadwa Healthcare | Medical Tourism Partner in India"
        description={t("aboutPage.desc", "Empowering international patients with transparent access, independent medical coordination, and compassionate bedside assistance across Delhi NCR and India.")}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/about')}`}
      />

      {/* Header Banner */}
      <header className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.about", "About Us") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              {t("aboutPage.badge", "Our Purpose & Patient Commitment")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("aboutPage.title", "About")}{" "}
              <span className="text-teal-400">{t("aboutPage.titleHighlight", "NadwaHealthcare (NHC)")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("aboutPage.desc", "Empowering international patients with transparent access, independent medical coordination, and compassionate bedside assistance across Delhi NCR and India.")}
            </p>
          </div>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-teal-50/50 rounded-3xl p-8 border border-teal-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t("aboutPage.missionTitle", "Our Mission")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("aboutPage.missionDesc", "To simplify and humanize international medical travel for patients facing complex health conditions. We provide direct, unbiased bridge-building between patients worldwide and India's premier accredited healthcare specialists, ensuring every patient is treated with dignity, transparency, and clinical diligence.")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#08221E] text-teal-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t("aboutPage.visionTitle", "Our Vision")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("aboutPage.visionDesc", "To be the most trusted healthcare navigation partner in India, renowned for uncompromising ethical standards, clear pricing disclosure, multilingual empathy, and seamless coordination from pre-arrival evaluations to post-discharge recovery.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & How We Operate */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200 content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentLang === "ar" ? "دورنا كمنسق طبي مستقل للمرضى" : currentLang === "fr" ? "Notre rôle de facilitateur indépendant" : currentLang === "ru" ? "Наша роль независимого медицинского координатора" : "Our Role as Independent Patient Facilitators"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {currentLang === "ar" ? "فهم الفرق بين تنسيق السياحة العلاجية وتقديم الرعاية الطبية المباشرة." : currentLang === "fr" ? "Comprendre la distinction entre facilitation de séjour médical et prestation de soins directe." : currentLang === "ru" ? "Четкое разграничение между организацией лечения и прямым оказанием медицинских услуг." : "Understanding the distinction between medical travel facilitation and direct healthcare provision."}
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              {currentLang === "ar" ? "قد يكون السفر لتلقي العلاج في بلد أجنبي أمراً معقداً ومقلقاً — بدءاً من فهم الأنظمة الطبية غير المألوفة، ومقارنة سمعة المستشفيات، والتحقق من كفاءة الجراحين، واستخراج تأشيرات السفر، وحتى ترتيبات الإقامة المناسبة أثناء المرض." : currentLang === "fr" ? "Se faire soigner à l'étranger peut être intimidant : interpréter un système de santé inconnu, comparer les réputations hospitalières, vérifier les accréditations chirurgicales, obtenir un visa médical et organiser le logement." : currentLang === "ru" ? "Поездка на лечение за рубеж сопряжена со сложностями: выбор профильного госпиталя, проверка квалификации хирурга, оформление визовых документов и организация проживания." : "Navigating healthcare in a foreign country can be daunting—interpreting unfamiliar medical systems, comparing hospital reputations, validating surgeon credentials, obtaining travel visas, and organizing accommodations during critical illnesses."}
            </p>
            <p>
              <strong>{currentLang === "ar" ? "ندوة للرعاية الصحية (NHC)" : currentLang === "fr" ? "NadwaHealthcare (NHC)" : currentLang === "ru" ? "NadwaHealthcare (NHC)" : "NadwaHealthcare (NHC)"}</strong> {currentLang === "ar" ? "تعمل كممثلك الميداني الموثوق في الهند. انطلاقاً من مقرنا في دلهي إن سي آر، ينسق فريقنا مع أعرق الصروح الطبية في الهند مثل ميدانتا، وأبولو، وفورتيس، وماكس." : currentLang === "fr" ? "est votre référent dédié sur place en Inde. Basée à Delhi NCR, notre équipe coordonne avec les institutions les plus renommées d'Inde : Medanta, Apollo, Fortis et Max Healthcare." : currentLang === "ru" ? "выступает вашим доверенным представителем в Индии. Находясь в Дели NCR, наша команда напрямую взаимодействует с лучшими клиниками страны — Medanta, Apollo, Fortis и Max." : "serves as your dedicated on-ground advocate in India. Headquartered in Delhi NCR, our team coordinates with India's most respected medical institutions—such as Medanta The Medicity, Indraprastha Apollo, Fortis Healthcare, and Max Healthcare."}
            </p>
            <p>
              {currentLang === "ar" ? "من المهم التأكيد: نحن لسنا مستشفى ولا نقدم الرعاية الطبية أو التشخيص المباشر، بل نتواصل مباشرة مع كبار الاستشاريين المعتمدين ولجان الأورام لتقديم خطط علاج رسمية وتقديرات تكلفة شفافة صادرة من المستشفيات مباشرة." : currentLang === "fr" ? "Important : nous ne sommes pas un hôpital et ne prodiguons pas d'actes médicaux directs. Nous coordonnons avec les chirurgiens accrédités pour vous fournir avis écrits et devis transparents émis par les institutions." : currentLang === "ru" ? "Важно: мы не являемся клиникой и не ставим медицинских диагнозов. Мы взаимодействуем с сертифицированными профессорами для предоставления официальных заключений и прямых смет клиник." : "Importantly, we are not a hospital or a direct healthcare provider. We do not practice medicine or issue independent medical diagnoses. Instead, we coordinate directly with verified, board-certified surgeons and hospital tumor boards to deliver formal medical opinions and transparent cost estimates directly from the institutions."}
            </p>
          </div>

          {/* Core Values Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
              <h4 className="text-sm font-bold text-slate-900">{currentLang === "ar" ? "شفافية مطلقة 100%" : currentLang === "fr" ? "100 % Transparence" : currentLang === "ru" ? "100% Прозрачность" : "100% Transparency"}</h4>
              <p className="text-xs text-slate-600">
                {currentLang === "ar" ? "تقديرات مالية مباشرة من المستشفى بدون أي عمولات خفية." : currentLang === "fr" ? "Devis hospitaliers directs sans aucun frais caché." : currentLang === "ru" ? "Прямые сметы от госпиталей без скрытых наценок и комиссий." : "Direct hospital estimates with zero added fees. You always know what is paid to the hospital."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Stethoscope className="w-8 h-8 text-teal-600" />
              <h4 className="text-sm font-bold text-slate-900">{currentLang === "ar" ? "استقلالية طبية" : currentLang === "fr" ? "Indépendance clinique" : currentLang === "ru" ? "Клиническая независимость" : "Clinical Independence"}</h4>
              <p className="text-xs text-slate-600">
                {currentLang === "ar" ? "نقدم آراء متعددة من كبرى المستشفيات لتختار الجراح الأنسب." : currentLang === "fr" ? "Nous présentons plusieurs avis d'hôpitaux pour choisir le spécialiste adapté." : currentLang === "ru" ? "Предоставляем заключения нескольких клиник для выбора лучшего хирурга." : "We present multiple hospital opinions so you can choose the right specialist for your situation."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <Globe2 className="w-8 h-8 text-teal-600" />
              <h4 className="text-sm font-bold text-slate-900">{currentLang === "ar" ? "رعاية متعددة اللغات" : currentLang === "fr" ? "Accompagnement multilingue" : currentLang === "ru" ? "Многоязычная поддержка" : "Multilingual Care"}</h4>
              <p className="text-xs text-slate-600">
                {currentLang === "ar" ? "دعم كامل بالعربية والإنجليزية والفرنسية والروسية لضمان دقة التواصل الطبي." : currentLang === "fr" ? "Prise en charge en français, anglais, arabe et russe pour une parfaite clarté." : currentLang === "ru" ? "Поддержка на русском, английском, арабском и французском языках." : "Support in English, Arabic, French, and Russian to ensure no detail is lost in translation."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi NCR Presence */}
      <section className="py-16 sm:py-20 bg-white content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <MapPin className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {currentLang === "ar" ? "مقرنا في عاصمة الرعاية الصحية في الهند" : currentLang === "fr" ? "Au cœur du pôle médical d'excellence en Inde" : currentLang === "ru" ? "В самом центре передовой медицины Индии" : "Based in the Healthcare Capital of India"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {currentLang === "ar" ? "يقع مكتبنا التشغيلي في نيودلهي، على بعد دقائق من كبرى المستشفيات الدولية و20 دقيقة من مطار أنديرا غاندي الدولي." : currentLang === "fr" ? "Notre bureau opérationnel est situé à New Delhi, à quelques minutes des grands hôpitaux internationaux et à 20 minutes de l'aéroport international de Delhi (DEL)." : currentLang === "ru" ? "Наш координационный офис расположен в Нью-Дели, в шаговой доступности от ведущих клиник и в 20 минутах от аэропорта (DEL)." : "Our operational desk is located in New Delhi, within minutes of premier international medical centers and 20 minutes from Indira Gandhi International Airport (DEL)."}
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto">
            <strong>{currentLang === "ar" ? "العنوان:" : currentLang === "fr" ? "Adresse :" : currentLang === "ru" ? "Адрес:" : "Address:"}</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}, India.
            <div className="mt-1 text-teal-700 font-semibold">{t("nav.desk", "Desk:")} <bdi dir="ltr">{siteConfig.phoneDisplay}</bdi> | {siteConfig.email}</div>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>{t("nav.getQuote", "Speak with a Patient Coordinator")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
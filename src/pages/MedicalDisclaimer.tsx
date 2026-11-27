import React from "react";
import { ShieldAlert, AlertTriangle, Stethoscope, HeartPulse } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface DisclaimerContent {
  metaTitle: string;
  metaDesc: string;
  breadcrumb: string;
  badge: string;
  heading: string;
  subtitle: string;
  highlightTitle: string;
  highlightText: string;
  sec1Title: string;
  sec1P1: string;
  sec1P2: string;
  sec2Title: string;
  sec2P1: string;
  sec2P2: string;
  sec3Title: string;
  sec3P1: string;
  sec4Title: string;
  sec4P1: string;
  footerNote: string;
}

const DISCLAIMER_DATA: Record<'en' | 'ar' | 'fr' | 'ru', DisclaimerContent> = {
  en: {
    metaTitle: "Medical Disclaimer | Nadwa Healthcare",
    metaDesc: "Official medical disclaimer of NadwaHealthcare (NHC). Important clinical notice regarding medical travel facilitation and treating physician liability.",
    breadcrumb: "Medical Disclaimer",
    badge: "Essential Healthcare Notice",
    heading: "Medical Disclaimer & Clinical Notice",
    subtitle: "Please read this notice carefully prior to seeking healthcare services through NadwaHealthcare.",
    highlightTitle: "NadwaHealthcare is Not a Medical Provider",
    highlightText: 'NadwaHealthcare ("NHC") is an independent international patient facilitation agency and medical concierge service provider based in Delhi NCR, India. NHC does not own, operate, or control any medical facilities, nor does it employ doctors, surgeons, nurses, or medical practitioners.',
    sec1Title: "1. No Doctor-Patient Relationship",
    sec1P1: "Information communicated through this website, by email, phone, or WhatsApp does not constitute medical advice, diagnosis, or clinical recommendation, nor does it establish a doctor-patient relationship between you and NadwaHealthcare.",
    sec1P2: "Preliminary medical opinions and treatment estimates provided through NHC are direct opinions rendered by third-party licensed doctors and surgeons practicing at accredited partner hospitals. Any formal doctor-patient relationship is established exclusively between the patient and the licensed treating physician in India.",
    sec2Title: "2. No Medical Guarantees or Warranties",
    sec2P1: "Medicine and surgery are not exact sciences. Due to variations in individual human biology, disease progression, immune responses, and pre-existing medical conditions, no medical outcome, surgical result, or cure can be guaranteed.",
    sec2P2: "NadwaHealthcare explicitly rejects any claim of guaranteed success rates, 100% cure, or complications-free treatments. All prospective surgical and medical interventions involve intrinsic clinical risks that should be thoroughly discussed directly with the operating surgeon.",
    sec3Title: "3. Requirement for Direct Medical Consultation",
    sec3P1: "Remote evaluations conducted using scans, digital DICOM files, or pathology reports are preliminary. The final diagnosis, surgical plan, and treatment suitability can only be confirmed after in-person clinical examination, secondary diagnostic validations, and anesthetic workups conducted at the hospital in India.",
    sec4Title: "4. Emergency Healthcare Warning",
    sec4P1: "This website and our international intake channels are not designed for life-threatening acute medical emergencies. If you or a loved one is experiencing severe acute chest pain, uncontrolled hemorrhage, loss of consciousness, or sudden respiratory distress in your home country, please contact your local emergency services or nearest hospital emergency room immediately.",
    footerNote: "For further clarification on our operational structure, please write to our legal desk at"
  },
  ar: {
    metaTitle: "إخلاء المسؤولية الطبية | ندوة للرعاية",
    metaDesc: "إخلاء المسؤولية الطبية والمعلومات الصحية الخاصة بخدمات واستشارات ندوة للرعاية الصحية للمرضى الدوليين.",
    breadcrumb: "إخلاء المسؤولية الطبية",
    badge: "تنويه سريري وقانوني هام",
    heading: "إخلاء المسؤولية الطبية والإشعار السريري",
    subtitle: "يرجى قراءة هذا الإشعار بعناية قبل طلب خدمات التنسيق الطبي من خلال ندوة للرعاية الصحية.",
    highlightTitle: "ندوة للرعاية الصحية ليست مزوداً طبياً مباشراً",
    highlightText: "ندوة للرعاية الصحية (NHC) هي وكالة مستقلة لتنسيق سفر المرضى الدوليين وخدمات المساعدة الطبية في دلهي إن سي آر، الهند. ندوة للرعاية الصحية لا تمتلك أو تشغل أو تدير أي مستشفيات أو مراكز طبية، ولا توظف أطباء أو جراحين أو ممرضين بشكل مباشر.",
    sec1Title: "١. انتفاء العلاقة بين الطبيب والمريض مع الوكالة",
    sec1P1: "المعلومات والبيانات المتبادلة عبر هذا الموقع الإلكتروني أو البريد الإلكتروني أو الهاتف أو تطبيق واتساب لا تشكل مشورة طبية مباشرة أو تشخيصاً سريرياً أو توصية علاجية ملزمة، ولا تنشئ علاقة تعاقدية بين الطبيب والمريض بينك وبين ندوة للرعاية الصحية.",
    sec1P2: "الآراء الطبية التقديرية وتكلفة العلاج المقدمة عبر ندوة للرعاية الصحية هي آراء صادرة مباشرة عن أطباء وجراحين مرخصين ومستقلين يمارسون عملهم في المستشفيات الهندية المعتمدة دولياً. إن العلاقة الرسمية بين الطبيب والمريض تنشأ حصراً وبشكل مباشر بين المريض والطبيب المعالج المرخص في الهند.",
    sec2Title: "٢. عدم وجود ضمانات طبية أو نتائج مؤكدة",
    sec2P1: "الطب والجراحة ليسا من العلوم الدقيقة المطلقة. نظراً لاختلاف الاستجابة البيولوجية والمناعية لكل مريض وتطور الحالة الصحية ووجود أمراض مصاحبة، فإنه لا يمكن بأي حال من الأحوال ضمان نتائج طبية أو جراحية محددة أو الشفاء التام بنسبة 100%.",
    sec2P2: "ترفض ندوة للرعاية الصحية صراحة أي ادعاء بنسب نجاح مضمونة أو شفاء كامل دون مضاعفات. إن جميع التدخلات الجراحية والعلاجية تنطوي على مخاطر سريرية متأصلة يجب مناقشتها بدقة ومباشرة مع الجراح المعالج قبل اتخاذ أي قرار.",
    sec3Title: "٣. وجوب الفحص السريري المباشر في المستشفى",
    sec3P1: "التقييمات الطبية الأولية التي تُجرى عن بُعد استناداً إلى صور الأشعة أو ملفات DICOM أو تقارير الخزعة هي تقييمات استرشادية أولية. يتم تأكيد التشخيص النهائي والخطة الجراحية ومدى ملاءمة المريض للعملية فقط بعد الفحص السريري الحضوري والفحوصات المخبرية وتقييم التخدير داخل المستشفى في الهند.",
    sec4Title: "٤. تنويه حالات الطوارئ الطبية الحادة",
    sec4P1: "هذا الموقع وقنوات التواصل الخاصة بنا غير مخصصة للحالات الطارئة المهددة للحياة. إذا كنت أنت أو أحد أفراد عائلتك تعاني من ألم حاد في الصدر أو نزيف غير مسيطر عليه أو فقدان للوعي أو ضيق تنفس حاد في بلد إقامتك، يرجى التوجه فوراً إلى أقرب قسم طوارئ أو الاتصال بالإسعاف فوراً.",
    footerNote: "لأي استفسار إضافي بخصوص سياستنا التشغيلية والتنظيمية، يرجى مراسلة قسم الشؤون القانونية على"
  },
  fr: {
    metaTitle: "Avis de Non-Responsabilité | Nadwa",
    metaDesc: "Mentions légales et avertissement médical concernant les informations fournies par Nadwa Healthcare aux patients internationaux.",
    breadcrumb: "Avis de Non-Responsabilité",
    badge: "Avis Clinique & Juridique Essentiel",
    heading: "Avis de Non-Responsabilité Médicale & Notice Clinique",
    subtitle: "Veuillez lire attentivement cette notice avant de solliciter des services de coordination par l'intermédiaire de NadwaHealthcare.",
    highlightTitle: "NadwaHealthcare n'est pas un établissement de soins",
    highlightText: "NadwaHealthcare (\"NHC\") est une agence indépendante de facilitation de voyages médicaux et de conciergerie pour patients internationaux basée à Delhi NCR, Inde. NHC ne possède, n'exploite ni ne gère aucun établissement médical et n'emploie aucun médecin, chirurgien ou infirmier.",
    sec1Title: "1. Absence de relation médecin-patient avec l'agence",
    sec1P1: "Les informations communiquées via ce site web, par e-mail, téléphone ou WhatsApp ne constituent en aucun cas un avis médical direct, un diagnostic ou une recommandation clinique, et n'établissent aucune relation médecin-patient entre vous et NadwaHealthcare.",
    sec1P2: "Les avis médicaux préliminaires et les devis transmis par NHC sont émis directement par des médecins et chirurgiens agréés exerçant dans les hôpitaux partenaires accrédités en Inde. Toute relation médicale formelle s'établit exclusivement entre le patient et le médecin traitant agréé en Inde.",
    sec2Title: "2. Absence de garanties de résultats médicaux",
    sec2P1: "La médecine et la chirurgie ne sont pas des sciences exactes. En raison de la variabilité biologique individuelle, de l'évolution des pathologies et des antécédents médicaux, aucun résultat clinique, succès chirurgical ou guérison ne peut être garanti.",
    sec2P2: "NadwaHealthcare réfute expressément toute allégation de taux de réussite garanti ou de guérison à 100%. Tout acte médical ou chirurgical comporte des risques inhérents qui doivent être discutés directement avec l'équipe chirurgicale.",
    sec3Title: "3. Nécessité d'une consultation médicale directe sur place",
    sec3P1: "Les évaluations effectuées à distance à partir d'imageries médicales, de scanners ou de rapports de laboratoire sont préliminaires. Le diagnostic final, le protocole opératoire et l'éligibilité chirurgicale ne sont validés qu'après l'examen clinique en présentiel et le bilan pré-opératoire à l'hôpital en Inde.",
    sec4Title: "4. Avertissement concernant les urgences vitales",
    sec4P1: "Ce site web et nos canaux d'assistance ne sont pas destinés aux urgences médicales vitales immédiates. Si vous ou un proche présentez des douleurs thoraciques aiguës, une hémorragie sévère, une perte de connaissance ou une détresse respiratoire dans votre pays de résidence, contactez immédiatement les services d'urgence locaux.",
    footerNote: "Pour toute précision relative à nos mentions légales et opérationnelles, contactez notre département juridique à"
  },
  ru: {
    metaTitle: "Отказ от Ответственности | Nadwa",
    metaDesc: "Правовая информация и медицинское предупреждение относительно консультационных материалов Nadwa Healthcare.",
    breadcrumb: "Отказ от ответственности",
    badge: "Важное клиническое и правовое уведомление",
    heading: "Медицинский Отказ от Ответственности",
    subtitle: "Пожалуйста, внимательно ознакомьтесь с данным уведомлением перед обращением за услугами через NadwaHealthcare.",
    highlightTitle: "NadwaHealthcare не является медицинским учреждением",
    highlightText: "NadwaHealthcare («NHC») — независимое международное агентство по организации медицинского туризма и сопровождению пациентов в Дели NCR, Индия. NHC не владеет, не управляет медицинскими учреждениями и не имеет в штате практикующих врачей или медицинского персонала.",
    sec1Title: "1. Отсутствие отношений «врач-пациент» с компанией",
    sec1P1: "Информация, передаваемая через данный сайт, электронную почту, телефон или WhatsApp, не является прямой медицинской консультацией, постановкой диагноза или клиническим назначением и не устанавливает отношений «врач-пациент» между вами и NadwaHealthcare.",
    sec1P2: "Предварительные медицинские заключения и расчеты стоимости формируются непосредственно лицензированными врачами и хирургами аккредитованных индийских клиник. Официальные взаимоотношения «врач-пациент» возникают исключительно между пациентом и лечащим врачом в Индии.",
    sec2Title: "2. Отсутствие медицинских гарантий",
    sec2P1: "Медицина и хирургия не являются точными науками. В силу индивидуальных биологических особенностей, течения заболеваний и иммунного ответа ни один клинический исход, результат операции или выздоровление не могут быть гарантированы.",
    sec2P2: "NadwaHealthcare категорически отвергает любые заявления о 100% гарантии успеха или отсутствии осложнений. Любое хирургическое вмешательство сопряжено с рисками, которые должны быть подробно обсуждены непосредственно с хирургом.",
    sec3Title: "3. Необходимость очной консультации и диагностики",
    sec3P1: "Дистанционные оценки на основании выписок, МРТ, КТ и анализов являются предварительными. Окончательный клинический диагноз, план лечения и допуск к операции определяются только после очного осмотра и предоперационного обследования в клинике в Индии.",
    sec4Title: "4. Предупреждение об экстренных состояниях",
    sec4P1: "Данный сайт и каналы связи не предназначены для оказания экстренной медицинской помощи при жизнеугрожающих состояниях. При острой боли в груди, кровотечении, потере сознания или нарушении дыхания в вашей стране немедленно вызовите скорую медицинскую помощь.",
    footerNote: "По вопросам юридической и операционной структуры обращайтесь в юридический отдел:"
  }
};

export const MedicalDisclaimer: React.FC = () => {
  const { currentLang, localizeUrl } = useLanguage();
  const c = DISCLAIMER_DATA[currentLang as 'en' | 'ar' | 'fr' | 'ru'] || DISCLAIMER_DATA.en;

  return (
    <main className="bg-white min-h-screen">
      <SEOHead
        title={c.metaTitle}
        description={c.metaDesc}
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/medical-disclaimer')}`}
      />

      {/* Header Banner */}
      <header className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: c.breadcrumb }]} />
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              {c.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {c.heading}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {c.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed text-start">
          {/* Important Highlight Box */}
          <section className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-300/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <h2>{c.highlightTitle}</h2>
            </div>
            <p className="text-amber-950/90 leading-relaxed">
              {c.highlightText}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600 shrink-0" />
              <span>{c.sec1Title}</span>
            </h2>
            <p>{c.sec1P1}</p>
            <p>{c.sec1P2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-teal-600 shrink-0" />
              <span>{c.sec2Title}</span>
            </h2>
            <p>
              {c.sec2P1}
            </p>
            <p>
              {c.sec2P2}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {c.sec3Title}
            </h2>
            <p>{c.sec3P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {c.sec4Title}
            </h2>
            <p>{c.sec4P1}</p>
          </section>

          <footer className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
            {c.footerNote}{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-teal-600 font-semibold underline">
              {siteConfig.email}
            </a>.
          </footer>
        </div>
      </article>
    </main>
  );
};

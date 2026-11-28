import type { DoctorItem, DoctorHighlight, DoctorFAQ } from "../data/doctorsData.ts";
import type { HospitalItem } from "../data/hospitalsData.ts";
import type { TreatmentItem } from "../data/treatmentsData.ts";
import type { FAQItem } from "../data/faqsData.ts";
import type { ServiceJourneyStep } from "../data/servicesData.ts";
import type { PatientStoryItem } from "../data/patientStoriesData.ts";
import type { BlogPost } from "../data/blogsData.ts";
import { BLOG_CONTENT_TRANSLATIONS } from "../data/blogContentTranslations.ts";

// City Name Translations
export const CITY_TRANSLATIONS: Record<string, Record<string, string>> = {
  "Gurugram": {
    ar: "غوروغرام",
    fr: "Gurugram",
    ru: "Гуруграм",
  },
  "New Delhi": {
    ar: "نيودلهي",
    fr: "New Delhi",
    ru: "Нью-Дели",
  },
  "Noida": {
    ar: "نويدا",
    fr: "Noida",
    ru: "Нойда",
  },
  "Faridabad": {
    ar: "فريد آباد",
    fr: "Faridabad",
    ru: "Фаридабад",
  },
};

// Medical Specialty Translations
export const SPECIALTY_TRANSLATIONS: Record<string, Record<string, string>> = {
  "Liver Transplant": {
    ar: "زراعة الكبد",
    fr: "Greffe de foie",
    ru: "Трансплантация печени",
  },
  "Cardiology and Heart Surgery": {
    ar: "أمراض وجراحة القلب",
    fr: "Cardiologie et chirurgie cardiaque",
    ru: "Кардиология и кардиохирургия",
  },
  "Oncology and Cancer Treatment": {
    ar: "علاج الأورام والسرطان",
    fr: "Oncologie et soins du cancer",
    ru: "Онкология и лечение рака",
  },
  "Orthopedics and Joint Replacement": {
    ar: "جراحة العظام واستبدال المفاصل",
    fr: "Orthopédie et remplacement articulaire",
    ru: "Ортопедия и замена суставов",
  },
  "Neurosurgery and Spine Surgery": {
    ar: "جراحة المخ والأعصاب والعمود الفقري",
    fr: "Neurochirurgie et colonne vertébrale",
    ru: "Нейрохирургия и позвоночник",
  },
  "Neurology": {
    ar: "أمراض الأعصاب والدماغ",
    fr: "Neurologie médicale",
    ru: "Неврология",
  },
  "Kidney and Urology": {
    ar: "زراعة الكلى وجراحة المسالك",
    fr: "Greffe rénale et urologie",
    ru: "Трансплантация почки и урология",
  },
  "Liver and Gastroenterology": {
    ar: "أمراض وزراعة الكبد والجهاز الهضمي",
    fr: "Hépatologie et gastro-entérologie",
    ru: "Гепатология и гастроэнтерология",
  },
  "Bone Marrow Transplant": {
    ar: "زراعة نخاع العظم",
    fr: "Greffe de moelle osseuse",
    ru: "Трансплантация костного мозга",
  },
  "IVF & Fertility": {
    ar: "أطفال الأنابيب والخصوبة",
    fr: "FIV et fertilité",
    ru: "ЭКО и лечение бесплодия",
  },
  "IVF and Fertility": {
    ar: "أطفال الأنابيب والخصوبة",
    fr: "FIV et fertilité",
    ru: "ЭКО и лечение бесплодия",
  },
  "Dental Care": {
    ar: "طب وجراحة الأسنان",
    fr: "Soins dentaires et implants",
    ru: "Стоматология и имплантация",
  },
  "Dental Treatment": {
    ar: "طب وجراحة وزراعة الأسنان",
    fr: "Soins dentaires et implants",
    ru: "Стоматология и имплантация",
  },
  "Ophthalmology": {
    ar: "طب وجراحة العيون",
    fr: "Ophtalmologie",
    ru: "Офтальмология",
  },
  "Cosmetic Surgery": {
    ar: "الجراحة التجميلية",
    fr: "Chirurgie esthétique et plastique",
    ru: "Пластическая хирургия",
  },
  "Cosmetic and Plastic Surgery": {
    ar: "جراحة التجميل والترميم",
    fr: "Chirurgie plastique et esthétique",
    ru: "Пластическая и реконструктивная хирургия",
  },
  "General Surgery": {
    ar: "الجراحة العامة والمناظير",
    fr: "Chirurgie générale et laparoscopique",
    ru: "Общая хирургия и лапароскопия",
  },
  "Pediatric Cardiac Surgery": {
    ar: "جراحة قلب الأطفال",
    fr: "Chirurgie cardiaque pédiatrique",
    ru: "Детская кардиохирургия",
  },
};

// Hospital Name Translations
export const HOSPITAL_NAME_TRANSLATIONS: Record<string, Record<string, string>> = {
  "Sanar International Hospitals": {
    ar: "مستشفيات سانار الدولية",
    fr: "Hôpitaux Internationaux Sanar",
    ru: "Международные клиники Санар",
  },
  "Sanar International Hospital": {
    ar: "مستشفى سانار الدولي",
    fr: "Hôpital International Sanar",
    ru: "Международный госпиталь Санар",
  },
  "Medanta – The Medicity": {
    ar: "مستشفى ميدانتا – ذا ميديستي",
    fr: "Medanta – The Medicity",
    ru: "Меданта – Зе Медисити",
  },
  "Medanta - The Medicity": {
    ar: "مستشفى ميدانتا – ذا ميديستي",
    fr: "Medanta – The Medicity",
    ru: "Меданта – Зе Медисити",
  },
  "Indraprastha Apollo Hospitals": {
    ar: "مستشفيات إندرابراستا أبولو",
    fr: "Hôpitaux Indraprastha Apollo",
    ru: "Клиника Индрапрастха Аполло",
  },
  "Fortis Memorial Research Institute (FMRI)": {
    ar: "معهد فورتيس التذكاري للأبحاث (FMRI)",
    fr: "Institut de Recherche Fortis Memorial (FMRI)",
    ru: "Институт Фортис Мемориал (FMRI)",
  },
  "Max Super Speciality Hospital, Saket": {
    ar: "مستشفى ماكس سوبر التخصصي، ساكيت",
    fr: "Hôpital Max Super Speciality, Saket",
    ru: "Клиника Макс Супер Специалити, Сакет",
  },
  "Artemis Hospital": {
    ar: "مستشفى أرتيميس",
    fr: "Hôpital Artemis",
    ru: "Клиника Артемис",
  },
  "Manipal Hospital, Dwarka": {
    ar: "مستشفى مانيبال، دواركا",
    fr: "Hôpital Manipal, Dwarka",
    ru: "Клиника Манипал, Дварка",
  },
  "Fortis Escorts Heart Institute (FEHI)": {
    ar: "معهد فورتيس إسكورتس للقلب (FEHI)",
    fr: "Institut de Cardiologie Fortis Escorts (FEHI)",
    ru: "Институт сердца Фортис Эскортс (FEHI)",
  },
  "Fortis Escorts Heart Institute": {
    ar: "معهد فورتيس إسكورتس للقلب",
    fr: "Institut de Cardiologie Fortis Escorts",
    ru: "Институт сердца Фортис Эскортс",
  },
  "Jaypee Hospital": {
    ar: "مستشفى جايبي",
    fr: "Hôpital Jaypee",
    ru: "Клиника Джейпи",
  },
  "Amrita Hospital": {
    ar: "مستشفى أمريتا",
    fr: "Hôpital Amrita",
    ru: "Госпиталь Амрита",
  },
  "Amrita Hospital, Faridabad": {
    ar: "مستشفى أمريتا، فريد آباد",
    fr: "Hôpital Amrita, Faridabad",
    ru: "Госпиталь Амрита, Фаридабад",
  },
};

export function getLocalizedHospitalName(name: string, lang: string): string {
  if (!name || lang === 'en') return name;
  const direct = HOSPITAL_NAME_TRANSLATIONS[name]?.[lang];
  if (direct) return direct;
  const normalized = name.replace(/[–—]/g, '-').trim();
  for (const [key, trans] of Object.entries(HOSPITAL_NAME_TRANSLATIONS)) {
    if (key.replace(/[–—]/g, '-').trim() === normalized) {
      return trans[lang] || name;
    }
  }
  return name;
}

// Experience text formatter
export function formatExperience(exp: string, lang: string): string {
  const match = exp.match(/(\d+\+?)/);
  const num = match ? match[1] : exp.replace(/[^0-9+]/g, "").trim();
  if (!num) return exp;

  if (lang === "ar") return `${num} عاماً من الخبرة`;
  if (lang === "fr") return `${num} ans d'expérience`;
  if (lang === "ru") return `${num} лет опыта`;
  return `${num} Years Experience`;
}

// Doctor translations dictionary
const DOCTOR_LOCALIZATIONS: Record<string, Record<string, {
  designation?: string;
  bio?: string;
  highlights?: DoctorHighlight[];
  faqs?: DoctorFAQ[];
}>> = {
  "dr-naresh-trehan": {
    "ar": {
      "designation": "رئيس مجلس الإدارة والمدير العام، كبير جراحي القلب والصدر",
      "bio": "الدكتور ناريش تريهان جراح قلب وصدر عالمي بارز ومؤسس مستشفى ميدانتا، والجراح الشخصي الأسبق لرئيس جمهورية الهند. تدرب في مركز جامعة نيويورك الطبي وأجرى أكثر من 48,000 جراحة قلب مفتوح ناجحة."
    },
    "fr": {
      "designation": "Président et directeur général, chirurgien cardiothoracique en chef",
      "bio": "Le Dr Naresh Trehan est un chirurgien cardiothoracique de renommée mondiale, fondateur de Medanta – The Medicity et ancien chirurgien personnel du président de l'Inde. Il a réalisé plus de 48 000 interventions cardiaques à cœur ouvert."
    },
    "ru": {
      "designation": "Председатель и генеральный директор, главный кардиоторакальный хирург",
      "bio": "Д-р Нареш Трехан — всемирно известный кардиоторакальный хирург, основатель Medanta – The Medicity и бывший личный хирург президента Индии. Он выполнил более 48 000 успешных операций на открытом сердце."
    }
  },
  "dr-ashok-seth": {
    "ar": {
      "designation": "رئيس مجلس إدارة معهد فورتيس إسكورتس للقلب",
      "bio": "الدكتور أشوك سيث من أبرز أطباء القلب التداخلي في العالم، رائد تقنيات استبدال الصمام الأبهري عبر القسطرة (TAVR) في آسيا، وأجرى أكثر من 50,000 قسطرة تشخيصية وعلاجية بنسب نجاح استثنائية."
    },
    "fr": {
      "designation": "Président de l'Institut de cardiologie Fortis Escorts",
      "bio": "Le Dr Ashok Seth est l'un des cardiologues interventionnels les plus respectés au monde, pionnier des techniques transcathéter (TAVR) en Asie-Pacifique avec plus de 50 000 angiographies et angioplasties réalisées."
    },
    "ru": {
      "designation": "Председатель Института сердца Fortis Escorts",
      "bio": "Д-р Ашок Сет — один из ведущих мировых интервенционных кардиологов, пионер транскатетерной замены аортального клапана (TAVR) в Азиатско-Тихоокеанском регионе с более чем 50 000 успешных процедур."
    }
  },
  "dr-arvinder-soin": {
    "ar": {
      "designation": "رئيس معهد زراعة الكبد والطب التجديدي بميدانتا",
      "bio": "يعد الدكتور أرفيندر سينغ سوين رائداً عالمياً في زراعة الكبد من متبرعين أحياء، حيث قاد وفريقه آلاف عمليات زراعة الكبد بنسبة نجاح 95% لعلاج مرضى من أكثر من 50 دولة حول العالم."
    },
    "fr": {
      "designation": "Président de l'Institut de greffe de foie et de médecine régénérative",
      "bio": "Le Dr Arvinder Singh Soin est mondialement reconnu pour avoir fondé le programme de greffe de foie de donneur vivant en Inde, avec un taux de réussite de 95 % pour des patients de plus de 50 pays."
    },
    "ru": {
      "designation": "Руководитель Института трансплантации печени Medanta",
      "bio": "Д-р Арвиндер Сингх Соин — всемирно признанный лидер в области трансплантации печени от живого донора в Индии. Его команда провела тысячи операций с показателем успешности 95%."
    }
  },
  "dr-subhash-gupta": {
    "ar": {
      "designation": "رئيس مركز علوم الكبد والقنوات الصفراوية",
      "bio": "الدكتور سوبهاش غوبتا رائد زراعة الكبد وجراحة القنوات الصفراوية، قاد أهم برامج زراعة الكبد في شمال الهند مع تميز فائق في إنقاذ حالات الفشل الكبدي الحاد وزراعة الكبد للأطفال."
    },
    "fr": {
      "designation": "Président du Centre des sciences hépatiques et biliaires",
      "bio": "Le Dr Subhash Gupta est un pionnier légendaire de la chirurgie hépatobiliaire et de la greffe de foie, ayant développé les plus grands programmes de greffe du nord de l'Inde."
    },
    "ru": {
      "designation": "Руководитель Центра гепатобилиарных наук и трансплантации",
      "bio": "Д-р Субхаш Гупта — легендарный специалист по пересадке печени и гепатобилиарной хирургии, основатель ведущих программ трансплантологии в Северной Индии."
    }
  },
  "dr-ashok-rajgopal": {
    "ar": {
      "designation": "رئيس مجلس الإدارة لمعهد اضطرابات الجهاز العضلي الهيكلي وجراحة العظام",
      "bio": "الابتكار كلمة مقترنة دائماً باسم الدكتور أشوك راجغوبال. جراح عظام ذو شهرة عالمية، يمتلك العديد من الإنجازات السباقة في الهند: أول جراحة لاستبدال مفصل الركبة بالكامل في كلا الجانبين، وأول جراحة استبدال مفصل طفيفة التوغل (MIS)، وأول استبدال افتراضي للركبة باستخدام أدوات مخصصة لكل مريض، وأول جراح يستخدم مفاصل ركبة مخصصة حسب الجنس في الهند. أجرى أكثر من 39,000 عملية استبدال للركبة وأكثر من 60,000 عملية تنظير للمفاصل والإصابات الرياضية. كما شارك في فريق تصميم نظام الركبة Persona من شركة Zimmer وصمم أدوات جراحة استبدال الركبة طفيفة التوغل المستخدمة عالمياً. وحصل على العديد من الجوائز المرموقة بما في ذلك وسام بادما شري وجائزة الدكتور بي سي روي.",
      "highlights": [
        {
          "number": "01",
          "text": "جراح عظام ذو شهرة دولية أجرى أكثر من 39,000 جراحة استبدال للركبة و60,000 جراحة تنظيرية."
        },
        {
          "number": "02",
          "text": "أول جراح في الهند ينفذ استبدال الركبة الثنائي والجراحة طفيفة التوغل (MIS) والافتراضية بأدوات مخصصة."
        },
        {
          "number": "03",
          "text": "شارك في تصميم نظام Zimmer Persona وطور أدوات MIS الحاصلة على براءات اختراع والمستخدمة عالمياً."
        }
      ],
      "faqs": [
        {
          "question": "ما هي رسوم كشف العيادة الخارجية وإجراءات حجز الموعد مع الدكتور أشوك راجغوبال في ميدانتا جوروجرام؟",
          "answer": "تتراوح رسوم كشف العيادة الخارجية (OPD) مع الدكتور أشوك راجغوبال في مستشفى ميدانتا – ذا ميديسيتي عادةً بين 2000 إلى 3000 روبية هندية (حوالي 25 - 40 دولاراً). يمكن للمرضى الدوليين الحصول على موعد ذي أولوية وتقييم طبي مجاني للتقارير والأشعة مع تقدير تكلفة الجراحة قبل السفر عبر التواصل مع ندوة للرعاية الصحية (+91 96485 78320 / info@nadwahealthcare.com) بدون أي رسوم وساطة."
        },
        {
          "question": "ما هي تكلفة جراحة استبدال مفصل الركبة بالكامل (TKR) مع الدكتور أشوك راجغوبال في ميدانتا؟",
          "answer": "تبدأ تكلفة استبدال مفصل الركبة الأحادية (ركبة واحدة) مع الدكتور أشوك راجغوبال في ميدانتا من 250,000 إلى 350,000 روبية (3000 - 4200 دولار)، بينما تتراوح باقة استبدال الركبتين معاً (Bilateral TKR) بين 450,000 و650,000 روبية (5500 - 7800 دولار) بحسب اختيار التقنية التقليدية أو طفيفة التوغل أو الروبوتية مع مفاصل Zimmer Persona. تشمل الباقات أتعاب الجراحة وإقامة 4-5 أيام والفحوصات والعلاج الطبيعي."
        },
        {
          "question": "كيف يمكن للمرضى الدوليين الحصول على خطاب دعوة التأشيرة الطبية للعلاج مع الدكتور أشوك راجغوبال؟",
          "answer": "يمكن للمرضى الدوليين الحصول على خطاب دعوة تأشيرة علاجية رسمي (VIL) من مستشفى ميدانتا عبر ندوة للرعاية الصحية في غضون 24 إلى 48 ساعة مجاناً. يكفي إرسال نسخ من جواز سفر المريض والمرافق مع أحدث صور أشعة الركبة والتقارير عبر واتساب (+91 96485 78320) أو البريد الإلكتروني (info@nadwahealthcare.com)."
        }
      ]
    },
    "fr": {
      "designation": "Président du groupe – Institut des troubles musculo-squelettiques et d'orthopédie",
      "bio": "L'innovation est indissociable du Dr Ashok Rajgopal. Chirurgien orthopédique de renommée internationale, il compte de nombreuses premières à son actif en Inde : première chirurgie de remplacement bilatéral du genou, première chirurgie mini-invasive (MIS), premier remplacement virtuel avec instrumentation personnalisée, et premier chirurgien à utiliser des prothèses adaptées au sexe du patient. Il a réalisé plus de 39 000 arthroplasties totales du genou et plus de 60 000 arthroscopies. Co-concepteur du système de genou Persona de Zimmer, il a également conçu les instruments de chirurgie mini-invasive utilisés aujourd'hui par les chirurgiens du monde entier. Il a reçu de prestigieuses distinctions dont le Padma Shri et le prix Dr B.C. Roy.",
      "highlights": [
        {
          "number": "01",
          "text": "Chirurgien orthopédiste de renommée internationale avec plus de 39 000 prothèses de genou et 60 000 arthroscopies."
        },
        {
          "number": "02",
          "text": "Premier en Inde à pratiquer l'arthroplastie bilatérale et mini-invasive (MIS) ainsi que la chirurgie virtuelle personnalisée."
        },
        {
          "number": "03",
          "text": "Co-concepteur du système de genou Zimmer Persona et concepteur d'instruments MIS brevetés utilisés dans le monde entier."
        }
      ],
      "faqs": [
        {
          "question": "Quels sont les tarifs de consultation et les démarches de rendez-vous avec le Dr Ashok Rajgopal à Medanta Gurugram ?",
          "answer": "Une consultation en clinique externe (OPD) avec le Dr Ashok Rajgopal à Medanta – The Medicity varie généralement entre 2 000 et 3 000 INR (environ 25 à 40 USD). Les patients internationaux bénéficient d'un rendez-vous prioritaire et d'un deuxième avis médical gratuit avant le départ via Nadwa Healthcare (+91 96485 78320 / info@nadwahealthcare.com) sans aucuns frais d'intermédiation."
        },
        {
          "question": "Quel est le coût d'une prothèse totale de genou avec le Dr Ashok Rajgopal à Medanta ?",
          "answer": "Une arthroplastie unilatérale (un seul genou) avec le Dr Ashok Rajgopal à Medanta démarre entre 250 000 et 350 000 INR (3 000 à 4 200 USD). Un forfait bilatéral (les deux genoux) varie entre 450 000 et 650 000 INR (5 500 à 7 800 USD) selon la technique conventionnelle, mini-invasive ou robotique Zimmer Persona. Le forfait comprend la chirurgie, 4 à 5 jours d'hospitalisation, les examens et la rééducation."
        },
        {
          "question": "Comment obtenir une lettre d'invitation pour visa médical pour être soigné par le Dr Ashok Rajgopal ?",
          "answer": "Les patients internationaux reçoivent gratuitement une lettre d'invitation officielle pour visa médical (VIL) de l'hôpital Medanta sous 24 à 48 heures via Nadwa Healthcare. Il suffit de transmettre la copie des passeports du patient et de l'accompagnateur ainsi que les radiographies récentes du genou par WhatsApp (+91 96485 78320) ou par e-mail (info@nadwahealthcare.com)."
        }
      ]
    },
    "ru": {
      "designation": "Руководитель Института заболеваний опорно-двигательного аппарата и ортопедии",
      "bio": "Инновации неразрывно связаны с именем доктора Ашока Раджгопала. Ортопед-хирург мирового уровня, он впервые в Индии выполнил двустороннее эндопротезирование коленного сустава, первую минимально инвазивную операцию (MIS), первую виртуальную замену с персонализированными инструментами и впервые применил гендерно-специфичные протезы. На его счету более 39 000 операций по тотальному эндопротезированию колена и свыше 60 000 артроскопических операций. Он входит в группу разработчиков системы коленного сустава Persona компании Zimmer и запатентовал хирургические инструменты для MIS, используемые по всему миру. Удостоен престижных наград Падма Шри и премии доктора Б. К. Роя.",
      "highlights": [
        {
          "number": "01",
          "text": "Всемирно признанный ортопед: более 39 000 операций по замене коленного сустава и 60 000 артроскопий."
        },
        {
          "number": "02",
          "text": "Первый в Индии выполнил двустороннюю и минимально инвазивную (MIS) замену коленного сустава."
        },
        {
          "number": "03",
          "text": "Соразработчик коленной системы Zimmer Persona и создатель запатентованных инструментов MIS."
        }
      ],
      "faqs": [
        {
          "question": "Какова стоимость амбулаторного приема и порядок записи к доктору Ашоку Раджгопалу в Medanta Gurugram?",
          "answer": "Стоимость очной консультации доктора Ашока Раджгопала в Medanta – The Medicity составляет от 2 000 до 3 000 INR (около 25–40 USD). Иностранные пациенты могут получить приоритетную запись на прием, а также бесплатное предварительное второе мнение и расчет стоимости операции через Nadwa Healthcare (+91 96485 78320 / info@nadwahealthcare.com) без агентских комиссий."
        },
        {
          "question": "Сколько стоит операция по замене коленного сустава у доктора Ашока Раджгопала в Medanta?",
          "answer": "Операция по замене одного коленного сустава (одностороннее эндопротезирование) у доктора Ашока Раджгопала в Medanta начинается от 250 000 до 350 000 INR (3 000–4 200 USD). Пакет двусторонней замены коленей составляет от 450 000 до 650 000 INR (5 500–7 800 USD) в зависимости от использования робота и имплантов Zimmer Persona. Пакет включает операцию, 4–5 дней госпитализации, анализы и реабилитацию."
        },
        {
          "question": "Как иностранным пациентам получить приглашение для медицинской визы на лечение у доктора Ашока Раджгопала?",
          "answer": "Иностранные пациенты получают официальное визовое приглашение (VIL) от клиники Medanta через Nadwa Healthcare бесплатно в течение 24–48 часов. Достаточно отправить копии загранпаспортов пациента и сопровождающего лица, а также рентгеновские снимки коленей по WhatsApp (+91 96485 78320) или на электронную почту (info@nadwahealthcare.com)."
        }
      ]
    }
  },
  "dr-rana-patir": {
    "ar": {
      "designation": "رئيس قسم جراحة المخ والأعصاب وقاعدة الجمجمة",
      "bio": "الدكتور رانا باتير جراح أعصاب بارز يتمتع بخبرة تزيد عن 30 عاماً، أجرى أكثر من 10,000 جراحة عصبية دقيقة تشمل أورام الدماغ وجراحات العمود الفقري طفيفة التوغل وقاعدة الجمجمة."
    },
    "fr": {
      "designation": "Chef du département de neurochirurgie",
      "bio": "Le Dr Rana Patir est un neurochirurgien éminent avec plus de trois décennies de maîtrise dans les tumeurs cérébrales et la chirurgie rachidienne mini-invasive, avec plus de 10 000 interventions."
    },
    "ru": {
      "designation": "Руководитель отделения нейрохирургии",
      "bio": "Д-р Рана Патир — ведущий нейрохирург Индии с более чем 30-летним стажем, выполнивший более 10 000 сложных нейрохирургических операций на головном мозге и позвоночнике."
    }
  },
  "dr-vinod-raina": {
    "ar": {
      "designation": "رئيس معهد علاج الأورام وأمراض الدم ونخاع العظم",
      "bio": "الدكتور فينود راينا كبير أطباء الأورام في الهند والعميد السابق بقسم الأورام في AIIMS دلهي. أجرى أول عملية زرع خلايا جذعية في الهند لعلاج سرطانات الدم الصلبة والليمفاوية."
    },
    "fr": {
      "designation": "Chef du service d'oncologie médicale et d'hématologie",
      "bio": "Le Dr Vinod Raina est l'un des oncologues médicaux les plus réputés d'Inde, ancien professeur à l'AIIMS, ayant dirigé plus de 600 greffes de cellules souches et de moelle osseuse."
    },
    "ru": {
      "designation": "Руководитель отделения медицинской онкологии и гематологии",
      "bio": "Д-р Винод Райна — один из самых авторитетных онкологов Индии, бывший профессор AIIMS, выполнивший более 600 трансплантаций стволовых клеток и костного мозга."
    }
  },
  "dr-ashok-vaid": {
    "ar": {
      "designation": "رئيس معهد الأورام الطبية وأمراض الدم وزراعة النخاع",
      "bio": "الدكتور أشوك كومار فايد رائد علاج الأورام الطبي في الهند، حائز على وسام بادما شري الرفيع، وأول طبيب أورام في القطاع الخاص الهندي يجري 25 عملية زراعة نخاع عظم متتالية."
    },
    "fr": {
      "designation": "Président de l'Institut d'oncologie médicale et de thérapie cellulaire",
      "bio": "Le Dr Ashok Vaid est un oncologue médical de premier plan décoré du Padma Shri, pionnier des thérapies ciblées et de la greffe de moelle osseuse en Inde avec des milliers de rémissions."
    },
    "ru": {
      "designation": "Председатель Института медицинской онкологии и гематологии",
      "bio": "Д-р Ашок Кумар Вайд — один из ведущих медицинских онкологов Индии, лауреат ордена Падма Шри, пионер таргетной иммунотерапии и трансплантации костного мозга."
    }
  },
  "dr-harit-chaturvedi": {
    "ar": {
      "designation": "رئيس معهد جراحة الأورام بماكس للرعاية الصحية",
      "bio": "الدكتور هاريث شاتورفيدي جراح أورام بارز ورئيس الجمعية الهندية لجراحة الأورام سابقاً، متخصص في الجراحات الروبوتية المعقدة لأورام الثدي والجهاز الهضمي والصدر."
    },
    "fr": {
      "designation": "Président de l'Institut de chirurgie oncologique",
      "bio": "Le Dr Harit Chaturvedi est une sommité en chirurgie oncologique, ancien président de la Société indienne d'oncologie chirurgicale, expert en résections thoraciques et digestives robotisées."
    },
    "ru": {
      "designation": "Председатель Института хирургической онкологии",
      "bio": "Д-р Харит Чатурведи — выдающийся онкохирург Индии, экс-президент Индийской ассоциации хирургической онкологии, специалист по сложным роботизированным операциям."
    }
  },
  "dr-rajesh-ahlawat": {
    "ar": {
      "designation": "رئيس معهد جراحة الكلى والمسالك البولية والروبوت",
      "bio": "الدكتور راجيش أهلوات مبتكر عالمي في جراحة المسالك البولية بالروبوت والمشارك في ابتكار تقنية زراعة الكلى بالروبوت المعتمدة دولياً، مع إنجاز أكثر من 4,000 عملية زراعة كلى ناجحة."
    },
    "fr": {
      "designation": "Président de l'Institut du rein, d'urologie et de robotique",
      "bio": "Le Dr Rajesh Ahlawat est un pionnier mondial de l'urologie robotique et co-développeur de la technique de greffe rénale robotisée, adoptée dans le monde entier."
    },
    "ru": {
      "designation": "Руководитель Института урологии, нефрологии и роботизированной хирургии",
      "bio": "Д-р Раджеш Ахлават — мировой новатор в роботизированной урологии и соавтор метода роботизированной трансплантации почки с гипотермией."
    }
  },
  "dr-anant-kumar": {
    "ar": {
      "designation": "رئيس قسم جراحة المسالك البولية وزراعة الكلى والروبوت",
      "bio": "الدكتور أنانت كومار أحد أشهر جراحي زراعة الكلى بالروبوت في آسيا، أجرى أكثر من 3,500 عملية زراعة كلى وأكثر من 500 عملية استئصال كلي وجزئي لأورام الكلى بالروبوت."
    },
    "fr": {
      "designation": "Chef du département d'urologie, greffe rénale et robotique",
      "bio": "Le Dr Anant Kumar compte plus de 3 500 greffes de rein à son actif et plus de 500 néphrectomies robotisées, reconnu internationalement pour ses prouesses chirurgicales."
    },
    "ru": {
      "designation": "Руководитель отделения урологии, трансплантации почки и робототехники",
      "bio": "Д-р Анант Кумар — один из известнейших урологов-трансплантологов Азии, выполнивший свыше 3 500 пересадок почек и сотен сложнейших роботизированных операций."
    }
  },
  "dr-yk-mishra": {
    "ar": {
      "designation": "رئيس جراحة القلب والصدر والشرايين التاجية",
      "bio": "الدكتور واي كيه ميشرا أجرى أكثر من 19,000 جراحة قلب مفتوح، رائد تقنيات تحويل مسار الشرايين التاجية طفيفة التوغل وجراحة استبدال الصمام المترالي بالمنظار."
    },
    "fr": {
      "designation": "Chef du service de chirurgie cardiovasculaire et thoracique",
      "bio": "Le Dr Y. K. Mishra a réalisé plus de 19 000 interventions cardiaques à cœur ouvert, pionnier du pontage coronarien mini-invasif et de la plastie mitrale endoscopique."
    },
    "ru": {
      "designation": "Главный кардиоторакальный и сосудистый хирург",
      "bio": "Д-р Ю. К. Мишра провел более 19 000 операций на открытом сердце, признанный лидер в области малоинвазивного аортокоронарного шунтирования."
    }
  },
  "dr-balram-airan": {
    "ar": {
      "designation": "كبير جراحي قلب الأطفال وزراعة القلب والرئة",
      "bio": "الدكتور بالرام إيران العميد ورئيس قسم جراحة القلب السابق في AIIMS دلهي، رائد جراحات عيوب القلب الخلقية المعقدة وزراعة القلب للأطفال والبالغين."
    },
    "fr": {
      "designation": "Chirurgien cardiaque pédiatrique en chef et transplantation",
      "bio": "Le Dr Balram Airan, ancien doyen de l'AIIMS Delhi, est le maître incontesté de la chirurgie cardiaque pédiatrique et des cardiopathies congénitales complexes en Inde."
    },
    "ru": {
      "designation": "Главный детский кардиохирург и трансплантолог",
      "bio": "Д-р Балрам Айран — экс-декан института AIIMS, ведущий специалист по сложным врожденным порокам сердца у новорожденных и трансплантации сердца."
    }
  },
  "dr-sks-marya": {
    "ar": {
      "designation": "رئيس مجلس إدارة جراحة العظام والمفاصل الروبوتية",
      "bio": "الدكتور إس كيه إس ماريا جراح عظام رائد على مستوى العالم، أجرى أكثر من 18,000 عملية استبدال للمفاصل ورئيس سابق للجمعية الهندية لجراحة المفاصل."
    },
    "fr": {
      "designation": "Président de l'Institut d'orthopédie et de chirurgie articulaire",
      "bio": "Le Dr S. K. S. Marya a réalisé plus de 18 000 arthroplasties du genou et de la hanche, ancien président de l'Indian Orthopaedic Association et autorité mondiale."
    },
    "ru": {
      "designation": "Руководитель Института ортопедии и эндопротезирования суставов",
      "bio": "Д-р С. К. С. Марья выполнил более 18 000 операций по эндопротезированию суставов, экс-президент Индийской ортопедической ассоциации."
    }
  },
  "dr-subhash-jangid": {
    "ar": {
      "designation": "مدير قسم جراحة استبدال المفاصل بالروبوت والملاحة الحاسوبية",
      "bio": "الدكتور سوبهاش جانغيد رائد جراحة استبدال مفصل الركبة بالروبوت في الهند مع إجراء أكثر من 8,000 عملية ناجحة، خبير تقنيات الملاحة الحاسوبية واستبدال المفاصل ثنائية الجانب."
    },
    "fr": {
      "designation": "Directeur de l'arthroplastie robotisée et assistée par ordinateur",
      "bio": "Le Dr Subhash Jangid est un expert reconnu de la chirurgie du genou assistée par robot, avec plus de 8 000 interventions et une récupération ultrarapide."
    },
    "ru": {
      "designation": "Директор отделения роботизированной артропластики суставов",
      "bio": "Д-р Субхаш Джангид — признанный специалист по роботизированной замене суставов с более чем 8 000 успешных операций и ускоренной реабилитацией."
    }
  },
  "dr-ips-oberoi": {
    "ar": {
      "designation": "رئيس قسم مناظير المفاصل والطب الرياضي واستبدال المفاصل",
      "bio": "الدكتور آي بي إس أوبروي خبير عالمي في جراحات مناظير المفاصل الدقيقة وإعادة بناء أربطة الركبة والكتف، مع إجراء أكثر من 7,000 جراحة بالمنظار."
    },
    "fr": {
      "designation": "Chef du service d'arthroscopie, médecine sportive et arthroplastie",
      "bio": "Le Dr I. P. S. Oberoi est un chirurgien de référence pour la reconstruction ligamentaire et l'arthroscopie mini-invasive avec plus de 7 000 interventions réussies."
    },
    "ru": {
      "designation": "Руководитель отделения артроскопии и спортивной ортопедии",
      "bio": "Д-р И. П. С. Оберой — ведущий специалист по артроскопической хирургии связок колена и плеча с опытом более 7 000 успешных малоинвазивных операций."
    }
  },
  "dr-sandeep-vaishya": {
    "ar": {
      "designation": "المدير التنفيذي لقسم جراحة المخ والأعصاب والسايبر نايف",
      "bio": "الدكتور سانديب فايشيا من أمهر جراحي المخ والأعصاب في الهند، رائد الجراحة الإشعاعية بجهاز CyberKnife، ومتخصص في استئصال أورام الدماغ وجراحة الضفيرة العضدية."
    },
    "fr": {
      "designation": "Directeur exécutif de neurochirurgie et radiochirurgie CyberKnife",
      "bio": "Le Dr Sandeep Vaishya est un neurochirurgien émérite, pionnier de la radiochirurgie CyberKnife et sommité mondiale de la chirurgie du plexus brachial."
    },
    "ru": {
      "designation": "Исполнительный директор отделения нейрохирургии и CyberKnife",
      "bio": "Д-р Сандип Вайшья — один из ведущих нейрохирургов Индии, специалист высшего класса по радиохирургии CyberKnife и микрохирургии опухолей мозга."
    }
  },
  "dr-aditya-gupta": {
    "ar": {
      "designation": "رئيس جراحة المخ والأعصاب وجراحة العمود الفقري التحفيزية",
      "bio": "الدكتور أديتيا غوبتا خبير التحفيز العميق للدماغ (DBS) لمرضى باركنسون وجراحات الصرع وأورام قاعدة الجمجمة مع أكثر من 6,000 جراحة عصبية دقيقة."
    },
    "fr": {
      "designation": "Chef de la neurochirurgie et de la stimulation cérébrale profonde (DBS)",
      "bio": "Le Dr Aditya Gupta est une sommité de la neurochirurgie fonctionnelle, spécialiste de la stimulation cérébrale profonde et des tumeurs de la base du crâne."
    },
    "ru": {
      "designation": "Руководитель нейрохирургии и глубокой стимуляции мозга (DBS)",
      "bio": "Д-р Адитья Гупта — признанный эксперт по глубокой стимуляции головного мозга при болезни Паркинсона и микрохирургии основания черепа."
    }
  },
  "dr-randhir-sud": {
    "ar": {
      "designation": "رئيس معهد أمراض الجهاز الهضمي والكبد والمناظير التداخلية",
      "bio": "الدكتور راندير سود حائز على وسام بادما شري، رائد مناظير القنوات المرارية والبنكرياس (ERCP) ومناظير الموجات فوق الصوتية (EUS) في الهند."
    },
    "fr": {
      "designation": "Président de l'Institut de gastroentérologie et d'endoscopie avancée",
      "bio": "Le Dr Randhir Sud est un gastroentérologue légendaire récompensé du Padma Shri, maître des procédures endoscopiques interventionnelles (CPRE, écho-endoscopie)."
    },
    "ru": {
      "designation": "Председатель Института гастроэнтерологии и гепатологии",
      "bio": "Д-р Рандхир Суд — кавалер ордена Падма Шри, ведущий гастроэнтеролог Индии и пионер эндоскопических операций на желчных протоках и поджелудочной железе."
    }
  },
  "dr-sunil-choudhary": {
    "ar": {
      "designation": "رئيس قسم الجراحة التجميلية والترميمية وجراحة اليد",
      "bio": "الدكتور سونيل تشودري جراح تجميل عالمي تدرب في المملكة المتحدة، متخصص في تجميل الوجه والأنف ونحت القوام والجراحات الميكروسكوبية الترميمية."
    },
    "fr": {
      "designation": "Directeur de chirurgie esthétique, plastique et reconstructrice",
      "bio": "Le Dr Sunil Choudhary, formé au Royaume-Uni, est un maître de la rhinoplastie, du remodelage corporel et de la microchirurgie reconstructive de haute précision."
    },
    "ru": {
      "designation": "Руководитель отделения пластической и эстетической хирургии",
      "bio": "Д-р Сунил Чоудхари — ведущий пластический хирург, прошедший обучение в Великобритании, специалист по ринопластике, фейслифтингу и контурированию тела."
    }
  },
  "dr-lokesh-kumar": {
    "ar": {
      "designation": "رئيس قسم جراحة التجميل والترميم ونحت القوام",
      "bio": "الدكتور لوكيش كومار يتمتع بخبرة تزيد عن 30 عاماً، رئيس سابق لجمعية جراحي التجميل في الهند، رائد تقنيات شفط الدهون عالي الدقة وتجميل الثدي."
    },
    "fr": {
      "designation": "Chef du département de chirurgie plastique et esthétique",
      "bio": "Le Dr Lokesh Kumar cumule plus de trois décennies de savoir-faire, expert de la liposuccion haute définition, de la plastie mammaire et du rajeunissement facial."
    },
    "ru": {
      "designation": "Руководитель отделения пластической хирургии и контурирования",
      "bio": "Д-р Локеш Кумар — эксперт с более чем 30-летним стажем, экс-президент Индийской ассоциации пластических хирургов, мастер липосакции VASER."
    }
  },
  "dr-abha-majumdar": {
    "ar": {
      "designation": "مديرة مركز أطفال الأنابيب والطب التناسلي",
      "bio": "الدكتورة أبهى ماجومدار رائدة علاج العقم وأطفال الأنابيب في شمال الهند، ساهمت في ولادة أكثر من 5,000 طفل عبر تقنيات الحقن المجهري وزراعة الأجنة المتطورة."
    },
    "fr": {
      "designation": "Directrice du Centre de FIV et médecine de la reproduction",
      "bio": "Le Dr Abha Majumdar est une figure historique de la procréation médicalement assistée en Inde, ayant permis la naissance de plus de 5 000 enfants par FIV et ICSI."
    },
    "ru": {
      "designation": "Директор Центра ЭКО и репродуктивной медицины",
      "bio": "Д-р Абха Маджумдар — ведущий репродуктолог Индии с 35-летним стажем, благодаря которой на свет появилось более 5 000 здоровых детей с помощью ЭКО и ИКСИ."
    }
  },
  "dr-kaberi-banerjee": {
    "ar": {
      "designation": "المديرة الطبية واستشارية العقم وأطفال الأنابيب",
      "bio": "الدكتورة كابيري بانيرجي تدربت في مستشفى غايز أند سانت توماس بلندن، متخصصة في علاج حالات فشل أطفال الأنابيب المتكرر وضعف مخزون المبيض."
    },
    "fr": {
      "designation": "Directrice médicale et spécialiste de l'infertilité complexe et FIV",
      "bio": "Le Dr Kaberi Banerjee, formée à Londres (Guy's and St Thomas'), est spécialisée dans les échecs récurrents d'implantation embryonnaire et l'insuffisance ovarienne."
    },
    "ru": {
      "designation": "Медицинский директор и ведущий специалист по лечению бесплодия и ЭКО",
      "bio": "Д-р Кабери Банерджи — репродуктолог с британским образованием (Guy's and St Thomas' Лондон), специалист по сложным случаям повторных неудач ЭКО."
    }
  },
  "dr-gaurav-kharya": {
    "ar": {
      "designation": "رئيس مركز زراعة نخاع العظم والعلاج الجيني للأطفال",
      "bio": "الدكتور غوراف خاريا رائد زراعة نخاع العظم للأطفال في الهند، حقق إنجازات تاريخية في علاج الثلاسيميا والأنيميا المنجلية ونقص المناعة الأولي."
    },
    "fr": {
      "designation": "Chef du service de greffe de moelle osseuse et thérapie génique pédiatrique",
      "bio": "Le Dr Gaurav Kharya est un pionnier mondial de la greffe de moelle osseuse pédiatrique pour la drépanocytose, la thalassémie et les déficits immunitaires."
    },
    "ru": {
      "designation": "Руководитель Центра трансплантации костного мозга и генной терапии у детей",
      "bio": "Д-р Гаурав Кхарья — всемирно известный гематолог-трансплантолог, проведший сотни успешных трансплантаций ТКМ детям с талассемией и серповидной анемией."
    }
  },
  "dr-dharma-choudhary": {
    "ar": {
      "designation": "كبير مديري قسم أمراض الدم وزراعة نخاع العظم (BMT)",
      "bio": "الدكتور دارما تشودري خبير زراعة نخاع العظم التناسلية والذاتية، أجرى أكثر من 2,000 زراعة نخاع عظم ناجحة لمرضى اللوكيميا والليمفوما والمايلوما."
    },
    "fr": {
      "designation": "Directeur principal d'hématologie et greffe de cellules souches",
      "bio": "Le Dr Dharma Choudhary a réalisé plus de 2 000 greffes de moelle osseuse pour des leucémies aiguës, lymphomes et myélomes multiples avec un taux de succès exceptionnel."
    },
    "ru": {
      "designation": "Главный директор отделения гематологии и трансплантации костного мозга",
      "bio": "Д-р Дхарма Чоудхари — ведущий трансплантолог костного мозга Индии с опытом свыше 2 000 пересадок стволовых клеток при лейкозах и лимфомах."
    }
  },
  "dr-dinesh-khullar": {
    "ar": {
      "designation": "رئيس مجلس إدارة قسم أمراض وزراعة الكلى",
      "bio": "الدكتور دينيش خولار استشاري أمراض وزراعة الكلى البارز، متخصص في زراعة الكلى غير المتوافقة فصيلة الدم (ABO-Incompatible) وعلاج الفشل الكلوي المزمن."
    },
    "fr": {
      "designation": "Président du département de néphrologie et transplantation rénale",
      "bio": "Le Dr Dinesh Khullar est une autorité en néphrologie, pionnier des greffes rénales à incompatibilité ABO et de la prise en charge de l'insuffisance rénale terminale."
    },
    "ru": {
      "designation": "Руководитель отделения нефрологии и трансплантации почки",
      "bio": "Д-р Динеш Кхуллар — авторитетный нефролог-трансплантолог, специалист по пересадке почек при несовместимости групп крови (ABO-несовместимые пересадки)."
    }
  },
  "dr-sanjay-gogoi": {
    "ar": {
      "designation": "رئيس قسم جراحة المسالك البولية وزراعة الكلى بالروبوت",
      "bio": "الدكتور سانجاي غوغوي أجرى أكثر من 2,500 عملية زراعة كلى، رائد زراعة الكلى بالروبوت عبر شقوق جراحية مجهرية لسرعة التعافي وتقليل الألم."
    },
    "fr": {
      "designation": "Chef du service d'urologie et transplantation rénale robotisée",
      "bio": "Le Dr Sanjay Gogoi a réalisé plus de 2 500 greffes de rein, pionnier de l'abord robotique mini-invasif assurant une cicatrisation accélérée sans complication."
    },
    "ru": {
      "designation": "Руководитель отделения роботизированной урологии и трансплантации почки",
      "bio": "Д-р Санджай Гогой выполнил свыше 2 500 трансплантаций почек, пионер минимально инвазивной роботизированной пересадки почки."
    }
  }
};

// Hospital translations dictionary
const HOSPITAL_LOCALIZATIONS: Record<string, Record<string, { shortDesc?: string; bedCapacity?: string; distanceFromAirport?: string }>> = {
  "sanar-gurugram": {
    "ar": {
      "shortDesc": "مستشفى رائد للرعاية الفائقة على طريق جولف كورس في غوروغرام، متخصص في زراعة الكبد والكلى ونخاع العظم وجراحة الأعصاب وعلاج الأورام المتقدم.",
      "bedCapacity": "+130 سرير (35 سرير عناية مركزة)",
      "distanceFromAirport": "18 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Hôpital de soins quaternaires sur Golf Course Road à Gurugram, spécialisé dans les greffes d'organes, la moelle osseuse, les neurosciences et l'oncologie.",
      "bedCapacity": "+130 lits (35 lits de soins intensifs)",
      "distanceFromAirport": "Env. 18 km de l'aéroport international de Delhi"
    },
    "ru": {
      "shortDesc": "Ведущий госпиталь четвертичного уровня в Гуруграме, специализирующийся на пересадке печени, почек, костного мозга, нейрохирургии и онкологии.",
      "bedCapacity": "+130 коек (35 реанимационных коек)",
      "distanceFromAirport": "Около 18 км от аэропорта Дели (DEL)"
    }
  },
  "medanta-gurugram": {
    "ar": {
      "shortDesc": "واحد من أضخم المجمعات الطبية متعددة التخصصات في آسيا، أسسه جراح القلب الدكتور ناريش تريهان، ويضم معاهد متميزة للقلب وزراعة الكبد والأورام بالروبوت.",
      "bedCapacity": "+1,250 سرير (+350 سرير عناية مركزة)",
      "distanceFromAirport": "18 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "L'un des plus grands complexes hospitaliers multispécialités d'Asie, fondé par le Dr Naresh Trehan, réputé pour la cardiologie, les greffes et la robotique.",
      "bedCapacity": "+1 250 lits (+350 lits de réanimation)",
      "distanceFromAirport": "Env. 18 km de l'aéroport international de Delhi"
    },
    "ru": {
      "shortDesc": "Один из крупнейших медицинских комплексов Азии, основанный кардиохирургом Нарешем Треханом, флагман кардиохирургии, трансплантации и онкологии.",
      "bedCapacity": "+1 250 коек (+350 реанимационных коек)",
      "distanceFromAirport": "Около 18 км от аэропорта Дели (DEL)"
    }
  },
  "apollo-delhi": {
    "ar": {
      "shortDesc": "أول مستشفى يحصل على اعتماد JCI الدولي في الهند ومركز التميز الإقليمي لزراعة الكبد والكلى، وجراحات القلب المفتوح والأورام الدقيقة.",
      "bedCapacity": "+710 سرير (+160 سرير عناية فائقة)",
      "distanceFromAirport": "21 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Premier hôpital accrédité JCI en Inde et pôle d'excellence renommé pour les greffes d'organes, la cardiologie lourde et les soins anticancéreux.",
      "bedCapacity": "+710 lits (+160 lits de soins intensifs)",
      "distanceFromAirport": "Env. 21 km de l'aéroport international de Delhi"
    },
    "ru": {
      "shortDesc": "Первый в Индии госпиталь с аккредитацией JCI и флагманский центр Южной Азии по пересадке органов, кардиохирургии и онкологии.",
      "bedCapacity": "+710 коек (+160 коек реанимации)",
      "distanceFromAirport": "Около 21 км от аэропорта Дели (DEL)"
    }
  },
  "fortis-fmri": {
    "ar": {
      "shortDesc": "صرح طبي متطور في جوروجرام يُعرف باسم 'مستشفى المستقبل'، مجهز بأحدث الروبوتات الجراحية والملاحة الدقيقة لعلاج الأورام وجراحة الأعصاب والمفاصل.",
      "bedCapacity": "+1,000 سرير سريري معتمد",
      "distanceFromAirport": "17 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Hôpital de renommée internationale à Gurugram surnommé 'l'hôpital du futur', doté de technologies robotiques pour la neurochirurgie et l'oncologie.",
      "bedCapacity": "+1 000 lits cliniques",
      "distanceFromAirport": "Env. 17 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Ультрасовременный медицинский комплекс в Гуруграме ('клиника будущего'), оснащенный роботами da Vinci, нейронавигацией и центром трансплантологии.",
      "bedCapacity": "+1 000 утвержденных коек",
      "distanceFromAirport": "Около 17 км от аэропорта Дели"
    }
  },
  "max-saket": {
    "ar": {
      "shortDesc": "مستشفى تخصصي فائق التميز في جنوب دلهي، يضم نخبة جراحي الأورام وأمراض القلب وزراعة الأعضاء وجراحة العظام بالروبوت.",
      "bedCapacity": "+530 سرير (+140 سرير عناية حرجة)",
      "distanceFromAirport": "14 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Centre d'excellence chirurgicale au sud de New Delhi, réputé pour son institut du cancer, ses chirurgies cardiaques et ses greffes d'organes assistées par robot.",
      "bedCapacity": "+530 lits (+140 lits intensifs)",
      "distanceFromAirport": "Env. 14 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Ведущий хирургический центр Южного Дели, специализирующийся на онкологии, роботизированной кардиохирургии и трансплантации органов.",
      "bedCapacity": "+530 коек (+140 реанимационных коек)",
      "distanceFromAirport": "Около 14 км от аэропорта Дели"
    }
  },
  "artemis-gurugram": {
    "ar": {
      "shortDesc": "أول مستشفى معتمد من JCI في جوروجرام، متميز في جراحة القلب التدخلية، وعلاج الأورام الدقيق، وجراحة المخ والعمود الفقري.",
      "bedCapacity": "+400 سرير حديث",
      "distanceFromAirport": "19 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Premier hôpital accrédité JCI à Gurugram, offrant des soins de pointe en cardiologie, neurochirurgie, orthopédie et cancérologie.",
      "bedCapacity": "+400 lits modernes",
      "distanceFromAirport": "Env. 19 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Первый в Гуруграме госпиталь с аккредитацией JCI, лидер в области интервенционной кардиологии, нейрохирургии и онкологии.",
      "bedCapacity": "+400 современных коек",
      "distanceFromAirport": "Около 19 км от аэропорта Дели"
    }
  },
  "manipal-delhi": {
    "ar": {
      "shortDesc": "مستشفى رعاية فائقة حديث في دواركا قرب مطار دلهي الدولي، يضم أحدث أجنحة الجراحة الروبوتية وزراعة الكلى والكبد وعلاج السرطان.",
      "bedCapacity": "+380 سرير (118 سرير عناية مركزة)",
      "distanceFromAirport": "11 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Hôpital de soins quaternaires ultramoderne à Dwarka, à proximité immédiate de l'aéroport, pôle d'excellence en greffes et chirurgie robotique.",
      "bedCapacity": "+380 lits (118 lits de soins intensifs)",
      "distanceFromAirport": "Env. 11 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Новейший госпиталь четвертичного уровня в Дварке рядом с аэропортом Дели, лидер в роботизированной хирургии и пересадке органов.",
      "bedCapacity": "+380 коек (118 коек интенсивной терапии)",
      "distanceFromAirport": "Около 11 км от аэропорта Дели"
    }
  },
  "fortis-escorts": {
    "ar": {
      "shortDesc": "المعهد الأبرز عالمياً في طب وجراحة القلب وقسطرة الشرايين، أسسه رواد أمراض القلب في الهند، وأجرى عشرات الآلاف من جراحات القلب الناجحة.",
      "bedCapacity": "+310 سرير متخصص في أمراض القلب",
      "distanceFromAirport": "20 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Institut cardiaque de renommée planétaire, référence suprême en cardiologie interventionnelle (TAVR), chirurgie pédiatrique et pontage coronarien.",
      "bedCapacity": "+310 lits dédiés à la cardiologie",
      "distanceFromAirport": "Env. 20 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Всемирно известный кардиологический институт, высший центр компетенций по эндоваскулярной кардиологии (TAVR) и кардиохирургии.",
      "bedCapacity": "+310 специализированных кардиокоек",
      "distanceFromAirport": "Около 20 км от аэропорта Дели"
    }
  },
  "jaypee-noida": {
    "ar": {
      "shortDesc": "مستشفى ضخم للرعاية الثلاثية في نويدا الكبرى، يضم برامج رائدة لزراعة الكبد والكلى ونخاع العظم وجراحة قلب الأطفال.",
      "bedCapacity": "+504 سرير معتمد (150 سرير عناية مركزة)",
      "distanceFromAirport": "38 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Grand centre hospitalier tertiaire à Noida, doté d'unités de pointe pour la greffe d'organes, la chirurgie cardiaque pédiatrique et l'oncologie.",
      "bedCapacity": "+504 lits (150 lits de réanimation)",
      "distanceFromAirport": "Env. 38 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Крупный медицинский центр третичного уровня в Нойде с передовыми отделениями трансплантологии, детской кардиохирургии и онкологии.",
      "bedCapacity": "+504 койки (150 коек интенсивной терапии)",
      "distanceFromAirport": "Около 38 км от аэропорта Дели"
    }
  },
  "amrita-faridabad": {
    "ar": {
      "shortDesc": "أضخم مستشفى خاص فائق التطور في الهند، يمتد على مساحة 130 فداناً ويضم 64 غرفة عمليات ذكية ومراكز متقدمة لزراعة الأعضاء وأبحاث الخلايا الجذعية.",
      "bedCapacity": "+2,600 سرير (534 سرير عناية مركزة)",
      "distanceFromAirport": "35 كم من مطار دلهي الدولي (DEL)"
    },
    "fr": {
      "shortDesc": "Le plus grand hôpital privé d'Inde avec 64 blocs opératoires intelligents, spécialisé dans les greffes d'organes complexes et la médecine régénérative.",
      "bedCapacity": "+2 600 lits (534 lits de soins intensifs)",
      "distanceFromAirport": "Env. 35 km de l'aéroport de Delhi"
    },
    "ru": {
      "shortDesc": "Крупнейший частный госпиталь Индии с 64 модульными операционными, флагман трансплантологии, робототехники и клеточной медицины.",
      "bedCapacity": "+2 600 коек (534 реанимационных койки)",
      "distanceFromAirport": "Около 35 км от аэропорта Дели"
    }
  }
};

export interface LocalizedTreatmentFields {
  title?: string;
  badge?: string;
  shortDesc?: string;
  overview?: string;
  recommendedStay?: string;
  recoveryTimeline?: string;
  conditionsTreated?: string[];
  treatmentOptions?: string[];
  treatmentPathway?: Array<{ step: number; title: string; description: string }>;
  whyIndia?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

// Treatment translations dictionary
const TREATMENT_LOCALIZATIONS: Record<string, Record<string, LocalizedTreatmentFields>> = {
  "cardiology": {
    "ar": {
      "title": "أمراض وجراحة القلب",
      "badge": "إقبال دولي واسع",
      "shortDesc": "رعاية قلبية شاملة تشمل جراحة القلب المفتوح وتغيير الشرايين بالقلب النابض، واستبدال الصمام الأبهري بالقسطرة (TAVR) وجراحة قلب الأطفال.",
      "recommendedStay": "من 10 إلى 16 يوماً في الهند",
      "recoveryTimeline": "تعافٍ مبدئي في 2-3 أسابيع؛ التئام كامل لعظمة الصدر في 8-12 أسبوعاً",
      "overview": "تتميز مراكز القلب الرائدة في الهند بسمعة دولية مرموقة في إجراء عمليات القلب المفتوح المعقدة، وجراحات الشرايين التاجية بالروبوت، والتدخلات القلبية الهيكلية عبر القسطرة. تقدم ندوة للرعاية الصحية استشارات مع نخبة من كبار جراحي القلب المجهزين بأحدث غرف العمليات الهجينة.",
      "conditionsTreated": [
        "مرض الشريان التاجي (تصلب وانسداد الشرايين)",
        "أمراض واعتلال صمامات القلب (تضيق الصمام الأبهري والمترالي)",
        "عيوب القلب الخلقية (ثقب بين الأذينين والبطينين، رباعية فالوت)",
        "قصور وفشل عضلة القلب واعتلالها المتقدم",
        "اضطرابات النبض وكهربائية القلب وعدم انتظام ضربات القلب",
        "تمدد وتسلخ الشريان الأورطي الصدري والبطني"
      ],
      "treatmentOptions": [
        "جراحة تحويل مجرى الشريان التاجي بالقلب النابض وبالروبوت (CABG)",
        "استبدال الصمام الأبهري عبر القسطرة بدون فتح الصدر (TAVR / TAVI)",
        "إصلاح واستبدال صمامات القلب عبر شقوق جراحية مجهرية",
        "جراحات قلب الأطفال المعقدة وتصحيح العيوب الخلقية",
        "زراعة أجهزة تنظيم ضربات القلب ومزيلات الرجفان (CRT-D / ICD)",
        "القسطرة العلاجية المعقدة للشرايين التاجية وزراعة الدعامات الدوائية"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة صور القسطرة وأشعة الإيكو",
          "description": "مشاركة تقارير الإيكو وأفلام القسطرة DICOM لتقييمها من قبل استشاريي القلب."
        },
        {
          "step": 2,
          "title": "الخطة العلاجية وخطاب التأشيرة",
          "description": "إصدار الرأي الطبي الرسمي ومدة الإقامة المقدرة وخطاب الدعوة الطبية المجاني."
        },
        {
          "step": 3,
          "title": "الوصول وإعادة التقييم في دلهي",
          "description": "استقبال من المطار وفحوصات تأكيدية في مختبر قسطرة القلب وموافقة التخدير."
        },
        {
          "step": 4,
          "title": "إجراء العملية والعناية المركزة",
          "description": "تنفيذ الجراحة أو التدخل بالقسطرة يليها رعاية مركزة متخصصة للقلب."
        },
        {
          "step": 5,
          "title": "التأهيل القلبي وتصريح السفر جواً",
          "description": "بدء الحركة والتمارين واستقرار الأدوية ومنح شهادة اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "خبرة سريرية هائلة لكبار الجراحين بمعدلات نجاح تفوق 98.5%",
        "مختبرات قسطرة هجينة وأجهزة روبوت دا فينشي da Vinci الجراحية",
        "جراحو قلب تدربوا في أكبر مراكز القلب الأمريكية والبريطانية",
        "تكلفة علاجية توفر 60% إلى 80% مقارنة بالدول الغربية"
      ],
      "faqs": [
        {
          "question": "كم يوماً قبل السفر يجب أن أرسل صور القسطرة وأشعة القلب؟",
          "answer": "يُوصى بإرسال ملفات DICOM وأقراص القسطرة القلبية مع تقارير الإيكو قبل 5-7 أيام على الأقل من السفر حتى يتمكن كبار الجراحين من مراجعتها وتقديم تقرير مبدئي موثق."
        },
        {
          "question": "متى يكون من الآمن للمريض السفر بالطائرة بعد جراحة القلب المفتوح؟",
          "answer": "يمنح استشاريو جراحة القلب تصريح اللياقة للسفر جواً بين 10 إلى 14 يوماً بعد العملية، شريطة استقرار أشعة الصدر والتحاليل وكفاءة عضلة القلب تماماً."
        }
      ]
    },
    "fr": {
      "title": "Cardiologie et chirurgie cardiaque",
      "badge": "Haute demande",
      "shortDesc": "Prise en charge cardiaque complète : pontage coronarien à cœur battant, remplacement valvulaire TAVR et chirurgie cardiaque pédiatrique.",
      "recommendedStay": "10 à 16 jours en Inde",
      "recoveryTimeline": "2 à 3 semaines initiales ; cicatrisation sternale en 8 à 12 semaines",
      "overview": "Les centres cardiaques d'excellence en Inde sont mondialement reconnus pour la réalisation de chirurgies à cœur ouvert complexes, de revascularisations assistées par robot et d'interventions transcathéter structurelles. Nadwa Healthcare vous met en relation avec des équipes cardiothoraciques chevronnées.",
      "conditionsTreated": [
        "Coronaropathie (sténose et occlusion des artères coronaires)",
        "Valvulopathies (sténose aortique et mitrale)",
        "Malformations cardiaques congénitales (CIA, CIV, tétralogie de Fallot)",
        "Insuffisance cardiaque terminale et cardiomyopathies",
        "Troubles du rythme cardiaque et arythmies complexes",
        "Anévrismes et dissections de l'aorte thoracique et abdominale"
      ],
      "treatmentOptions": [
        "Pontage aortocoronarien à cœur battant et chirurgie robotique (CABG)",
        "Remplacement valvulaire aortique percutané (TAVR / TAVI)",
        "Chirurgie réparatrice et remplacement valvulaire mini-invasif",
        "Chirurgie cardiaque pédiatrique et fermeture des communications",
        "Implantation de stimulateurs, défibrillateurs et resynchronisateurs (CRT-D / DAI)",
        "Angioplastie coronaire complexe et pose de stents actifs"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Évaluation de la coronarographie et de l'échocardiographie",
          "description": "Examen collégial des fichiers DICOM par des chirurgiens cardiothoraciques référents."
        },
        {
          "step": 2,
          "title": "Plan opératoire et invitation de visa",
          "description": "Émission du devis détaillé, de la durée de séjour et de la lettre officielle de visa."
        },
        {
          "step": 3,
          "title": "Arrivée et bilan préopératoire à Delhi",
          "description": "Accueil aéroportuaire, contrôle en salle de cathétérisme et validation anesthésique."
        },
        {
          "step": 4,
          "title": "Intervention chirurgicale et soins intensifs",
          "description": "Intervention sous surveillance continue en réanimation cardiothoracique dédiée."
        },
        {
          "step": 5,
          "title": "Réadaptation cardiaque et aptitude au vol",
          "description": "Mobilisation progressive, ajustement thérapeutique et certificat médical de vol."
        }
      ],
      "whyIndia": [
        "Volume clinique exceptionnel avec taux de succès chirurgical supérieur à 98,5 %",
        "Salles d'opération hybrides ultramodernes et robot chirurgical da Vinci",
        "Chirurgiens de renommée internationale formés aux États-Unis et au Royaume-Uni",
        "Économies de 60 % à 80 % par rapport aux tarifs européens et américains"
      ],
      "faqs": [
        {
          "question": "Combien de temps avant le voyage dois-je envoyer mes examens angiographiques ?",
          "answer": "Nous vous conseillons d'adresser vos fichiers DICOM et échocardiogrammes au moins 5 à 7 jours avant le départ afin que nos chirurgiens référents établissent un avis médical préliminaire."
        },
        {
          "question": "Quand le patient peut-il prendre l'avion en toute sécurité après une chirurgie à cœur ouvert ?",
          "answer": "Généralement, l'autorisation médicale de vol est délivrée entre 10 et 14 jours post-opératoires après stabilisation clinique complète."
        }
      ]
    },
    "ru": {
      "title": "Кардиология и кардиохирургия",
      "badge": "Высокий спрос",
      "shortDesc": "Комплексная кардиопомощь: аортокоронарное шунтирование на работающем сердце, транскатетерная замена клапанов TAVR и детская кардиохирургия.",
      "recommendedStay": "10–16 дней в Индии",
      "recoveryTimeline": "2–3 недели первично; полное сращение грудины 8–12 недель",
      "overview": "Флагманские кардиоцентры Индии признаны во всем мире за выдающиеся результаты сложных операций на открытом сердце, роботизированного шунтирования и эндоваскулярного протезирования клапанов. Nadwa Healthcare организует лечение у ведущих кардиохирургов.",
      "conditionsTreated": [
        "Ишемическая болезнь сердца (атеросклероз коронарных артерий)",
        "Пороки клапанов сердца (стеноз и недостаточность аортального/митрального клапанов)",
        "Врожденные пороки сердца (ДМПП, ДМЖП, тетрада Фалло)",
        "Тяжелая сердечная недостаточность и кардиомиопатия",
        "Нарушения сердечного ритма и проводимости (аритмии)",
        "Аневризмы грудного и брюшного отделов аорты"
      ],
      "treatmentOptions": [
        "Аортокоронарное шунтирование на работающем сердце и с помощью робота (АКШ)",
        "Транскатетерная имплантация аортального клапана без разреза (TAVR / TAVI)",
        "Малоинвазивная пластика и протезирование клапанов сердца",
        "Детская кардиохирургия и коррекция врожденных аномалий",
        "Установка кардиостимуляторов, кардиовертеров-дефибрилляторов (CRT-D / ИКД)",
        "Сложное стентирование коронарных артерий и ангиопластика"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Анализ дисков коронарографии и ЭхоКГ",
          "description": "Изучение записей DICOM ведущими кардиохирургами Индии."
        },
        {
          "step": 2,
          "title": "План операции и медицинское визовое приглашение",
          "description": "Официальное медицинское заключение, расчет сметы и выдача визового письма VIL."
        },
        {
          "step": 3,
          "title": "Прибытие в Дели и контрольная диагностика",
          "description": "Встреча в аэропорту, лабораторные тесты, осмотр анестезиолога и кардиолога."
        },
        {
          "step": 4,
          "title": "Проведение операции и кардиореанимация",
          "description": "Выполнение операции и наблюдение в специализированном отделении кардиореанимации."
        },
        {
          "step": 5,
          "title": "Кардиореабилитация и допуск к перелету",
          "description": "Ранняя активизация, подбор поддерживающей терапии и сертификат Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Колоссальный клинический опыт и показатели успешности операций свыше 98,5%",
        "Гибридные кардиохирургические операционные и роботизированные комплексы",
        "Хирурги мирового уровня со стажировками в ведущих клиниках США и Европы",
        "Стоимость лечения на 60–80% ниже по сравнению с Германией, Израилем и США"
      ],
      "faqs": [
        {
          "question": "За сколько дней до поездки необходимо отправить снимки коронарографии?",
          "answer": "Рекомендуется выслать диски DICOM и протоколы ЭхоКГ за 5–7 дней до планируемого приезда для детального консилиума кардиохирургов."
        },
        {
          "question": "Через какое время после открытой операции на сердце разрешен авиаперелет?",
          "answer": "Разрешение на перелет (Fit-to-fly) обычно выдается через 10–14 дней после вмешательства при полной стабильности показателей."
        }
      ]
    }
  },
  "cancer-treatment": {
    "ar": {
      "title": "علاج الأورام والسرطان",
      "badge": "رعاية تخصصية متقدمة",
      "shortDesc": "علاج متكامل ومتعدد التخصصات للأورام يشمل العلاج الإشعاعي الدقيق (CyberKnife وProton Beam) والعلاج المناعي والموجه واستئصال الأورام جراحياً.",
      "recommendedStay": "من أسبوعين إلى 3 أسابيع للجراحة؛ ومن 4 إلى 8 أسابيع لبروتوكولات الإشعاع",
      "recoveryTimeline": "يختلف حسب مرحلة الورم ونوع العلاج",
      "overview": "يتطلب علاج السرطان الحديث نهجاً شاملاً ومتكاملاً من خلال لجان الأورام متعددة التخصصات (Tumor Board). تجمع مراكز علاج السرطان المعتمدة دولياً في دلهي إن سي آر بين الجراحة الروبوتية، والعلاج الكيماوي الدقيق، والعلاج المناعي الموجه، وأحدث تقنيات الإشعاع الدقيق (مثل CyberKnife وProton Beam) تحت سقف واحد لتخصيص خطة العلاج وفقاً للجينوم الجزيئي للورم.",
      "conditionsTreated": [
        "أورام وسرطانات الجهاز الهضمي والقولون والمستقيم",
        "سرطان الثدي والأورام النسائية التناسلية",
        "أورام الرأس والعنق والغدة الدرقية",
        "سرطان الرئة وأورام الصدر",
        "أورام المسالك البولية وسرطان البروستاتا",
        "سرطانات وأمراض الدم الخبيثة (اللوكيميا، الليمفوما، المايلوما المتعددة)"
      ],
      "treatmentOptions": [
        "العلاج الإشعاعي فائق الدقة (شعاع البروتون، سايبر نايف CyberKnife، وتروبيم TrueBeam STx)",
        "جراحة الأورام بالروبوت مع الحفاظ على الأعضاء الحيوية",
        "العلاج الكيماوي الجهازي والعلاج الجزيئي الموجه",
        "العلاج المناعي بمثبطات نقاط التفتيش (Immunotherapy)",
        "العلاج الكيماوي عالي الحرارة داخل التجويف البطني (HIPEC)",
        "زراعة نخاع العظم الذاتية والتناسلية (BMT)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة الفحص النسيجي وأشعة PET-CT",
          "description": "مشاركة كتل الخزعة النسيجية وتقارير الصبغات المناعية وصور PET-CT لتقييمها بدقة من قبل كبار أطباء الأورام."
        },
        {
          "step": 2,
          "title": "مداولة لجنة الأورام (Tumor Board)",
          "description": "تحدد لجنة متخصصة متعددة التخصصات خطة العلاج المثلى (الجراحة الاستئصالية مقابل العلاج الكيماوي التمهيدي)."
        },
        {
          "step": 3,
          "title": "الفحوصات التأكيدية والتجهيز الطبي",
          "description": "إعادة فحص المؤشرات الجزيئية إذا لزم الأمر، وتأكيد مرحلة الورم، وتركيب منفذ العلاج الكيماوي (Chemo Port)."
        },
        {
          "step": 4,
          "title": "بدء العلاج / الاستئصال الجراحي",
          "description": "بدء دورات العلاج الإشعاعي الموجه، أو الكيماوي، أو إجراء الاستئصال الجراحي بمساعدة الروبوت بأعلى معايير الأمان."
        },
        {
          "step": 5,
          "title": "بروتوكول المتابعة والتعافي والتصريح بالسفر",
          "description": "توفير إرشادات للدورات التالية، وتقارير علاجية مفصلة لطبيبك المحلي في بلدك، ومنح شهادة اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "مراكز مجهزة بأحدث تقنيات شعاع البروتون (Proton Beam) وأجهزة السايبر نايف (CyberKnife) بدقة تحت المليمتر",
        "لجان أورام متعددة التخصصات تطبق أدق المعايير الدولية لشبكة NCCN والجمعية الأوروبية للأورام ESMO",
        "الحصول على أحدث أدوية السرطان الجزيئية والمناعية المعتمدة عالمياً بأسعار مؤسسية مخفضة",
        "أجنحة أورام مخصصة للمرضى الدوليين مع تمريض متخصص في العزل ومكافحة العدوى"
      ],
      "faqs": [
        {
          "question": "هل يمكنني إحضار شرائح أو كتل عينات الخزعة النسيجية معي إلى الهند؟",
          "answer": "نعم، يُوصى بشدة بإحضار كتل البارافين أو الشرائح الزجاجية لعينة الورم حتى تتمكن مختبرات التشخيص المرجعية في الهند من إجراء فحص تحقق ثانوي واختبارات نسيجية مناعية (IHC) وجينية متخصصة لتحديد أدق خطة علاج."
        },
        {
          "question": "هل يمكنني مواصلة جلسات العلاج الكيماوي في بلدي بعد الخضوع للجراحة في الهند؟",
          "answer": "نعم، يقدم أطباؤنا الاستشاريون بروتوكولات علاج كيماوي مفصلة وموثقة دولياً بأسماء الأدوية وجرعاتها وجداولها الزمنية لتمكين طبيبك المحلي في بلدك من متابعة وإعطاء الجلسات بسلاسة وأمان."
        }
      ]
    },
    "fr": {
      "title": "Oncologie et traitement du cancer",
      "badge": "Soins spécialisés",
      "shortDesc": "Oncologie multidisciplinaire intégrée : radiothérapie de précision (CyberKnife, Proton Beam), immunothérapie, thérapies ciblées et résections chirurgicales.",
      "recommendedStay": "2 à 3 semaines pour la chirurgie ; 4 à 8 semaines pour la radiothérapie",
      "recoveryTimeline": "Varie selon le stade et la modalité",
      "overview": "L'oncologie moderne exige une concertation pluridisciplinaire en comité de concertation (Tumor Board). Les centres anticancéreux d'élite en Inde regroupent chirurgie robotique, chimiothérapie de précision, immunothérapie ciblée et radiothérapie de pointe (CyberKnife, Proton Beam) pour un traitement personnalisé.",
      "conditionsTreated": [
        "Cancers gastro-intestinaux et colorectaux",
        "Cancers du sein et gynécologiques",
        "Tumeurs de la tête, du cou et de la thyroïde",
        "Cancers du poumon et thoraciques",
        "Cancers urologiques et de la prostate",
        "Hémopathies malignes (leucémie, lymphome, myélome)"
      ],
      "treatmentOptions": [
        "Radiothérapie de précision (Proton Beam, CyberKnife, TrueBeam STx)",
        "Chirurgie oncologique robotisée préservatrice d'organes",
        "Chimiothérapie systémique et thérapies moléculaires ciblées",
        "Immunothérapie par inhibiteurs de points de contrôle",
        "Chimiothérapie hyperthermique intrapéritonéale (CHIP / HIPEC)",
        "Greffes autologues et allogéniques de moelle osseuse"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Analyse histopathologique et TEP-scan",
          "description": "Transmission des blocs de biopsie et imageries TEP pour évaluation par nos comités spécialisés."
        },
        {
          "step": 2,
          "title": "Concertation pluridisciplinaire (Tumor Board)",
          "description": "Le comité pluridisciplinaire définit la stratégie thérapeutique (chirurgie première vs traitement néoadjuvant)."
        },
        {
          "step": 3,
          "title": "Bilan préopératoire et pose de cathéter",
          "description": "Confirmation du bilan d'extension, tests moléculaires complémentaires et pose de chambre implantable."
        },
        {
          "step": 4,
          "title": "Intervention chirurgicale ou début des cures",
          "description": "Mise en œuvre de la radiothérapie ciblée, des cycles de chimiothérapie ou de la chirurgie robotique."
        },
        {
          "step": 5,
          "title": "Protocole de maintenance et aptitude au vol",
          "description": "Transmission du protocole de suivi pour votre médecin local et certificat médical d'aptitude au vol."
        }
      ],
      "whyIndia": [
        "Centres équipés de protonthérapie de pointe et de systèmes CyberKnife de précision inframillimétrique",
        "Comités de concertation pluridisciplinaire appliquant les protocoles internationaux NCCN et ESMO",
        "Accès aux molécules anticancéreuses et thérapies ciblées les plus récentes à des tarifs encadrés",
        "Services d'hospitalisation dédiés aux patients internationaux avec contrôle strict des infections"
      ],
      "faqs": [
        {
          "question": "Puis-je apporter mes blocs de paraffine ou lames de biopsie en Inde ?",
          "answer": "Oui, il est fortement recommandé d'apporter vos blocs de paraffine ou lames de biopsie afin que les laboratoires de référence indiens puissent procéder à une contre-expertise et à des analyses immunohistochimiques ciblées."
        },
        {
          "question": "La chimiothérapie peut-elle être poursuivie dans mon pays après la chirurgie en Inde ?",
          "answer": "Oui, nos oncologues partenaires établissent des protocoles de chimiothérapie complets et standardisés avec formules et calendrier pour que votre médecin traitant local puisse poursuivre les cures en toute sécurité."
        }
      ]
    },
    "ru": {
      "title": "Онкология и лечение рака",
      "badge": "Специализированная помощь",
      "shortDesc": "Комплексная онкологическая помощь: прецизионная лучевая терапия (CyberKnife, Протонная терапия), иммунотерапия, таргетная терапия и роботизированные резекции.",
      "recommendedStay": "2–3 недели при хирургии; 4–8 недель при лучевой терапии",
      "recoveryTimeline": "Зависит от стадии и метода лечения",
      "overview": "Современная онкология требует комплексного подхода междисциплинарного консилиума (Tumor Board). Специализированные онкоцентры Дели NCR объединяют роботизированную хирургию, таргетную терапию, иммунотерапию и прецизионную лучевую терапию (CyberKnife, Протонная терапия) для подбора персонализированного протокола лечения.",
      "conditionsTreated": [
        "Рак желудочно-кишечного тракта и колоректальный рак",
        "Рак молочной железы и гинекологические опухоли",
        "Опухоли головы, шеи и щитовидной железы",
        "Рак легких и торакальная онкология",
        "Онкоурология и рак предстательной железы",
        "Онкогематология (лейкозы, лимфомы, множественная миелома)"
      ],
      "treatmentOptions": [
        "Прецизионная лучевая терапия (Протонная терапия, CyberKnife, TrueBeam STx)",
        "Органосохраняющая роботизированная онкохирургия",
        "Системная химиотерапия и таргетная молекулярная терапия",
        "Иммунотерапия ингибиторами контрольных точек",
        "Гипертермическая интраперитонеальная химиотерапия (HIPEC)",
        "Аутологичная и аллогенная трансплантация костного мозга"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Пересмотр гистологии и ПЭТ-КТ",
          "description": "Предоставление гистологических стекол и дисков ПЭТ-КТ для консилиума онкологов."
        },
        {
          "step": 2,
          "title": "Междисциплинарный онкоконсилиум",
          "description": "Консилиум определяет оптимальную тактику (хирургия против неоадъювантной терапии)."
        },
        {
          "step": 3,
          "title": "Подготовка и установка инфузионного порта",
          "description": "Молекулярно-генетическое профилирование опухоли и установка венозной порт-системы."
        },
        {
          "step": 4,
          "title": "Проведение операции или лучевой терапии",
          "description": "Высокоточное облучение, роботизированное удаление опухоли или курсы иммунотерапии."
        },
        {
          "step": 5,
          "title": "Протокол поддерживающей терапии и выписка",
          "description": "Выдача протокола продолжения терапии для лечащего врача дома и сертификата для перелета."
        }
      ],
      "whyIndia": [
        "Клиники оснащены протонной терапией и системами радиохирургии CyberKnife субмиллиметровой точности",
        "Междисциплинарные онкоконсилиумы, следующие международным клиническим протоколам NCCN и ESMO",
        "Доступ к новейшим таргетным и иммунопрепаратам по регулируемым государственным тарифам",
        "Специализированные онкологические отделения для иностранцев с инфекционным контролем"
      ],
      "faqs": [
        {
          "question": "Могу ли я привезти с собой в Индию парафиновые блоки или гистологические стекла биопсии?",
          "answer": "Да, настоятельно рекомендуется привезти гистологические стекла и парафиновые блоки, чтобы референс-лаборатории индийских клиник провели повторный пересмотр и специализированные иммуногистохимические (ИГХ) и генетические тесты."
        },
        {
          "question": "Можно ли продолжить курсы химиотерапии в своей стране после операции в Индии?",
          "answer": "Да, наши ведущие онкологи составляют подробные международные протоколы с точными дозировками препаратов и графиком введения, что позволяет вашему лечащему врачу на родине продолжать терапию без задержек."
        }
      ]
    }
  },
  "orthopedics": {
    "ar": {
      "title": "جراحة العظام واستبدال المفاصل",
      "badge": "تعافٍ حركي سريع",
      "shortDesc": "استبدال مفصل الركبة والورك بمساعدة الروبوت، وجراحات المفاصل التنظيرية الرياضية، وتثبيت العمود الفقري.",
      "recommendedStay": "من 10 إلى 14 يوماً في الهند (14-18 يوماً للركبتين معاً)",
      "recoveryTimeline": "المشي بمساعدة من اليوم الأول؛ استقلالية حركية كاملة خلال 3-4 أسابيع",
      "overview": "تعتمد مراكز جراحة العظام الرائدة في دلهي إن سي آر على أحدث أذرع الروبوت الموجهة بالذكاء الاصطناعي (مثل أنظمة Mako وRosa) لإجراء استبدال مفاصل الركبة والورك بدقة مجهرية بالغة، مما يقلل من النزيف وتلف الأنسجة ويضمن عمراً أطول للمفصل الصناعي وسرعة استثنائية في التعافي.",
      "conditionsTreated": [
        "الخشونة المتقدمة وتآكل مفصل الركبة والورك",
        "النخر اللاوعائي ونخر رأس عظمة الفخذ (AVN)",
        "فشل وتخلخل مفاصل الركبة والورك السابقة وحاجة المراجعة",
        "إصابات وتمزقات أربطة وغضاريف الركبة (الرباط الصليبي والغضروف الهلالي)",
        "تمزقات أوتار الكتف المدورة والخلع المتكرر",
        "الانزلاق الغضروفي الفقري وتضيق القناة الشوكية"
      ],
      "treatmentOptions": [
        "استبدال مفصل الركبة الكامل بمساعدة الذراع الروبوتية (TKA)",
        "استبدال مفصل الورك طفيف التوغل عبر النهج الأمامي المباشر",
        "استبدال مفصلي الركبة في جلسة جراحية واحدة (ثنائي الجانب)",
        "جراحات إعادة بناء ومراجعة المفاصل الصناعية المعقدة",
        "إصلاح أوتار وغضاريف المفاصل بالمنظار والطب الرياضي",
        "استبدال مفصل الكتف العكسي واستعادة المدى الحركي"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة الأشعة السينية المحملة والرنين",
          "description": "تقييم زوايا ميل المفصل، ودرجة تآكل الغضروف، وكثافة العظام بواسطة كبار جراحي العظام."
        },
        {
          "step": 2,
          "title": "اختيار المفصل والخطة الجراحية",
          "description": "مناقشة نوع المفصل الأمريكي المعتمد (سيراميك، أوكسينيوم Oxinium) والتقنية الروبوتية."
        },
        {
          "step": 3,
          "title": "الملاحة بالكمبيوتر والجراحة الروبوتية",
          "description": "بناء نموذج ثلاثي الأبعاد للمفصل وتنفيذ عملية التثبيت بدقة تحت المليمتر."
        },
        {
          "step": 4,
          "title": "بدء المشي في اليوم الأول بعد الجراحة",
          "description": "جلسات علاج طبيعي مكثفة تحت إشراف أخصائيين للمشي وتحميل الوزن بأمان."
        },
        {
          "step": 5,
          "title": "صعود الدرج واستخراج تصريح السفر",
          "description": "التدريب على صعود السلالم، وفك الغرز الطبية، ومنح شهادة اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "دقة الروبوت متناهية الصغر التي تضمن ثبات المفصل لأكثر من 25 عاماً",
        "استخدام مفاصل صناعية أمريكية معتمدة من FDA من كبرى الشركات (Stryker وZimmer Biomet)",
        "أجنحة علاج طبيعي وتأهيل حركي مكثف داخل المستشفى من اليوم الأول",
        "تكلفة جراحية تقل بنسبة 70% مقارنة بالولايات المتحدة والمملكة المتحدة"
      ],
      "faqs": [
        {
          "question": "هل يمكن استبدال مفصلي الركبتين معاً في نفس العملية؟",
          "answer": "نعم، يمكن إجراء استبدال الركبتين المتزامن بأمان تام للمرضى الذين يتمتعون بكفاءة قلبية وتنفسية جيدة، مما يوفر على المريض تكلفة السفر المزدوج ويقلل فترة التعافي الإجمالية."
        },
        {
          "question": "ما هي ماركات المفاصل الصناعية المستخدمة في مستشفيات الهند؟",
          "answer": "تعتمد المستشفيات الشريكة حصرياً على مفاصل صناعية أصلية معتمدة من إدارة الغذاء والدواء الأمريكية (US FDA) من شركات عالمية رائدة مثل Stryker وZimmer Biomet وDePuy Synthes وSmith & Nephew."
        }
      ]
    },
    "fr": {
      "title": "Orthopédie et prothèses articulaires",
      "badge": "Récupération rapide",
      "shortDesc": "Remplacement robotisé du genou et de la hanche, arthroscopie sportive et stabilisation rachidienne.",
      "recommendedStay": "10 à 14 jours en Inde (14 à 18 jours pour bilatéral)",
      "recoveryTimeline": "Marche assistée dès le 1er jour ; autonomie en 3-4 semaines",
      "overview": "Les centres d'excellence orthopédique en Inde utilisent des bras robotisés guidés par IA (Mako, Rosa) pour les arthroplasties de hanche et de genou, garantissant un alignement submillimétrique, moins de traumatismes musculaires et une longévité prothétique maximale.",
      "conditionsTreated": [
        "Arthrose sévère et invalidante du genou et de la hanche",
        "Ostéonécrose de la tête fémorale (nécrose avasculaire)",
        "Échecs et descellement d'anciennes prothèses nécessitant révision",
        "Lésions ligamentaires et méniscales (croisé antérieur, LCA, ménisque)",
        "Ruptures de la coiffe des rotateurs et luxations de l'épaule",
        "Canal lombaire étroit, hernies discales et spondylolisthésis"
      ],
      "treatmentOptions": [
        "Arthroplastie totale du genou assistée par bras robotique (PTG)",
        "Prothèse totale de hanche par voie antérieure mini-invasive",
        "Remplacement simultané des deux genoux en une seule séance",
        "Chirurgie complexe de reprise et révision de prothèse",
        "Réparation ligamentaire et cartilagineuse par arthroscopie",
        "Prothèse inversée de l'épaule et reconstruction articulaire"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Étude des radiographies en charge et IRM",
          "description": "Évaluation de l'axe mécanique, de l'usure du cartilage et du stock osseux."
        },
        {
          "step": 2,
          "title": "Choix de l'implant et planification 3D",
          "description": "Sélection d'implants haute performance agréés FDA (céramique, oxinium)."
        },
        {
          "step": 3,
          "title": "Navigation tomodensitométrique et chirurgie robotique",
          "description": "Pose millimétrique de l'implant sans agression des tissus périarticulaires."
        },
        {
          "step": 4,
          "title": "Premier lever et rééducation immédiate",
          "description": "Marche avec kinésithérapeute dès les premières 24 heures post-opératoires."
        },
        {
          "step": 5,
          "title": "Autonomie escaliers et autorisation de vol",
          "description": "Apprentissage des escaliers, ablation des fils et certificat d'aptitude au vol."
        }
      ],
      "whyIndia": [
        "Précision robotique submillimétrique assurant une survie prothétique de plus de 25 ans",
        "Prothèses de référence internationale agréées FDA (Stryker, Zimmer Biomet)",
        "Unités spécialisées de kinésithérapie hospitalière dès le premier jour",
        "Tarifs tout compris 60 % à 75 % moins élevés qu'en Europe occidentale"
      ],
      "faqs": [
        {
          "question": "Peut-on remplacer les deux genoux simultanément ?",
          "answer": "Oui, l'arthroplastie bilatérale simultanée est couramment pratiquée chez les patients présentant un bon statut cardiaque et pulmonaire, permettant un séjour et une convalescence uniques."
        },
        {
          "question": "Quelles marques d'implants sont utilisées dans vos hôpitaux ?",
          "answer": "Nos hôpitaux partenaires utilisent exclusivement des implants haut de gamme certifiés US FDA et CE : Stryker, Zimmer Biomet, DePuy Synthes et Smith & Nephew."
        }
      ]
    },
    "ru": {
      "title": "Ортопедия и замена суставов",
      "badge": "Быстрое восстановление",
      "shortDesc": "Роботизированная замена коленного и тазобедренного суставов, артроскопия и стабилизация позвоночника.",
      "recommendedStay": "10–14 дней в Индии (14–18 дней при замене двух суставов)",
      "recoveryTimeline": "Ходьба с поддержкой в 1-й день; самостоятельность через 3–4 недели",
      "overview": "Ведущие ортопедические клиники Дели NCR применяют роботизированные системы (Mako, Rosa) с искусственным интеллектом для эндопротезирования суставов. Это гарантирует точность позиционирования импланта до десятых долей миллиметра, минимальное повреждение мышц и сверхбыстрое восстановление.",
      "conditionsTreated": [
        "Тяжелый деформирующий остеоартроз (коксартроз и гонартроз)",
        "Асептический асептический некроз головки бедренной кости (АНГБК)",
        "Нестабильность и износ ранее установленных эндопротезов (ревизия)",
        "Разрывы крестообразных связок и менисков коленного сустава",
        "Разрывы вращательной манжеты и привычный вывих плеча",
        "Межпозвоночные грыжи и стеноз позвоночного канала"
      ],
      "treatmentOptions": [
        "Тотальное эндопротезирование коленного сустава роботом (ТЭКС)",
        "Эндопротезирование тазобедренного сустава через прямой передний доступ",
        "Одновременная замена обоих коленных суставов за одну операцию",
        "Сложное ревизионное эндопротезирование суставов",
        "Артроскопическая пластика связок и восстановление хряща",
        "Реверсивное эндопротезирование плечевого сустава"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Оценка рентгенограмм под нагрузкой и МРТ",
          "description": "Анализ оси конечности и плотности костной ткани профессорами ортопедии."
        },
        {
          "step": 2,
          "title": "Подбор эндопротеза и 3D-планирование",
          "description": "Выбор сертифицированного FDA импланта (керамика, оксиниум Oxinium)."
        },
        {
          "step": 3,
          "title": "Роботизированная операция под КТ-навигацией",
          "description": "Идеальная пространственная ориентация компонентов протеза."
        },
        {
          "step": 4,
          "title": "Активизация и подъем на ноги в 1-й день",
          "description": "Индивидуальные занятия с инструктором ЛФК прямо в палате."
        },
        {
          "step": 5,
          "title": "Ходьба по лестнице и допуск к перелету",
          "description": "Обучение ходьбе по ступенькам, снятие швов и выдача сертификата Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Субмиллиметровая точность робота, обеспечивающая срок службы сустава более 25 лет",
        "Оригинальные эндопротезы от мировых лидеров: Stryker, Zimmer Biomet, DePuy",
        "Интенсивная физиотерапия и реабилитация с первых суток после операции",
        "Стоимость эндопротезирования на 70% ниже, чем в клиниках Германии и Израиля"
      ],
      "faqs": [
        {
          "question": "Можно ли заменить оба коленных сустава одновременно?",
          "answer": "Да, одновременное протезирование обоих коленей успешно проводится пациентам с хорошим состоянием сердечно-сосудистой системы, сокращая общий период реабилитации."
        },
        {
          "question": "Какие марки эндопротезов используются в клиниках?",
          "answer": "Используются исключительно оригинальные протезы с сертификацией US FDA от признанных мировых производителей: Stryker, Zimmer Biomet, DePuy Synthes и Smith & Nephew."
        }
      ]
    }
  },
  "neurosurgery": {
    "ar": {
      "title": "جراحة المخ والأعصاب والعمود الفقري",
      "badge": "تقنيات عصبية فائقة",
      "shortDesc": "استئصال أورام الدماغ بالمجهر، وجراحة قاعدة الجمجمة بالمنظار، وجراحات العمود الفقري طفيفة التوغل، والتحفيز العميق للدماغ.",
      "recommendedStay": "من 12 إلى 20 يوماً حسب طبيعة العملية العصبية",
      "recoveryTimeline": "تعافٍ مبدئي في 2-4 أسابيع؛ واستقرار كامل خلال 6-12 أسبوعاً",
      "overview": "تجمع أقسام جراحة المخ والأعصاب في كبرى مستشفيات الهند بين غرف عمليات الرنين المغناطيسي أثناء الجراحة (Intraoperative MRI)، وأنظمة الملاحة العصبية ثلاثية الأبعاد، والميكروسكوبات الجراحية فائقة الدقة لعلاج أورام المخ والتشوهات الشريانية وتضيق العمود الفقري مع حماية وظائف الدماغ الحيوية.",
      "conditionsTreated": [
        "أورام الدماغ (الورم الدبقي، الورم السحائي، أورام الغدة النخامية)",
        "تمدد الأوعية الدموية الدماغية والتشوهات الشريانية الوريدية (AVM)",
        "الانزلاق الغضروفي العنقي والقطني وضغط الحبل الشوكي",
        "استسقاء الدماغ وتكيسات الغشاء العنكبوتي",
        "ألم العصب الخامس (التهاب ثلاثي التوائم) وتشنج الوجه النصفي",
        "أورام العمود الفقري والتشوهات العصبية الخلقية للأطفال"
      ],
      "treatmentOptions": [
        "فتح الجمجمة في حالة اليقظة مع المراقبة العصبية اللحظية (Awake Craniotomy)",
        "جراحة العمود الفقري طفيفة التوغل واستئصال الغضروف عبر ثقب المفتاح (MISS)",
        "استئصال أورام الغدة النخامية بالمنظار عبر الأنف بدون شق خارجي",
        "التحفيز العميق للدماغ (DBS) لمرضى باركنسون والارتعاش اللاإرادي",
        "القسطرة التداخلية الدماغية وتركيب اللفائف وعوازل التدفق للشرايين",
        "تثبيت وتعديل انحرافات وتشوهات العمود الفقري المعقدة"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "تقييم صور الرنين المغناطيسي DICOM",
          "description": "دراسة دقيقة لأشعة الرنين بالصبغة لتحديد حدود الورم وعلاقته بمراكز الحركة والكلام."
        },
        {
          "step": 2,
          "title": "تحديد الخطة الجراحية ومسار الملاحة",
          "description": "وضع معالم الملاحة العصبية وتقدير نسب الأمان بدقة من قبل كبار الجراحين."
        },
        {
          "step": 3,
          "title": "التنويم وتخطيط الألياف العصبية ثلاثي الأبعاد",
          "description": "فحوصات التخطيط الدماغي، وتخطيط مسارات الأعصاب الحركية، وموافقة التخدير العصبي."
        },
        {
          "step": 4,
          "title": "التدخل الجراحي الميكروسكوبي الدقيق",
          "description": "استئصال الورم بمساعدة المراقبة الفسيولوجية العصبية اللحظية لحماية الأعصاب."
        },
        {
          "step": 5,
          "title": "التأهيل العصبي وتصريح السفر جواً",
          "description": "إعادة التأهيل الحركي، وأشعة مقطعية للمتابعة، وفحص ضغط المقصورة للسفر جواً."
        }
      ],
      "whyIndia": [
        "تجهيزات غرف العمليات بأحدث أجهزة الرنين المغناطيسي اللحظي 3T iMRI",
        "خبرة واسعة في جراحات الدماغ في وضع اليقظة لحماية النطق والحركة",
        "معدلات نجاح تفوق 97% في جراحات استئصال أورام قاعدة الجمجمة والعمود الفقري",
        "عناية مركزة عصبية فائقة بإشراف أطباء تخدير ورعاية حرجة متخصصين"
      ],
      "faqs": [
        {
          "question": "متى يمكنني السفر بالطائرة بعد الخضوع لجراحة في الدماغ؟",
          "answer": "نظراً لتغيرات ضغط الهواء داخل مقصورة الطائرة وامتصاص الهواء داخل الجمجمة، يخضع المريض لفحص بالأشعة المقطعية وتتم الموافقة على السفر عادة بعد 14 إلى 21 يوماً من الجراحة لضمان الأمان التام."
        },
        {
          "question": "هل تُجرى جراحات أورام الغدة النخامية بدون جروح ظاهرة في الوجه؟",
          "answer": "نعم، يتم استئصال الغالبية العظمى من أورام الغدة النخامية عبر المنظار الدقيق من خلال تجويف الأنف الطبيعي دون الحاجة لأي شق جراحي في الوجه أو الرأس، مع خروج سريع من المستشفى."
        }
      ]
    },
    "fr": {
      "title": "Neurochirurgie et colonne vertébrale",
      "badge": "Technologies de pointe",
      "shortDesc": "Exérèse microscopique des tumeurs cérébrales, chirurgie endoscopique de la base du crâne et chirurgie rachidienne mini-invasive.",
      "recommendedStay": "12 à 20 jours selon l'intervention crânienne ou rachidienne",
      "recoveryTimeline": "Récupération initiale en 2 à 4 semaines ; consolidation en 6 à 12 semaines",
      "overview": "Les départements de neurochirurgie en Inde disposent d'IRM peropératoire (iMRI), de suites de neuronavigation informatisée et d'endoscopes haute définition pour traiter les pathologies crâniennes et les compressions médullaires avec une préservation neurologique maximale.",
      "conditionsTreated": [
        "Tumeurs cérébrales (gliomes, méningiomes, adénomes hypophysaires)",
        "Anévrismes cérébraux et malformations artério-veineuses (MAV)",
        "Hernies discales cervicales et lombaires avec compression radiculaire",
        "Hydrocéphalie et kystes arachnoïdiens",
        "Névralgie du trijumeau et spasme hémifacial",
        "Tumeurs rachidiennes et malformations congénitales de l'enfant"
      ],
      "treatmentOptions": [
        "Crâniotomie éveillée avec surveillance électrophysiologique en temps réel",
        "Chirurgie rachidienne mini-invasive (MISS) par abord tubulaire",
        "Exérèse endoscopique endonasale des tumeurs de l'hypophyse",
        "Stimulation cérébrale profonde (DBS) pour tremblements et Parkinson",
        "Embolisation d'anévrismes par voie endovasculaire (coils et flow diverter)",
        "Arthrodèse et correction complexe des déformations rachidiennes"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Évaluation neuroradiologique (IRM et scanner)",
          "description": "Étude des rapports anatomiques de la lésion avec les zones fonctionnelles."
        },
        {
          "step": 2,
          "title": "Stratégie chirurgicale et neuronavigation",
          "description": "Cartographie du geste opératoire pour sécuriser les voies motrices et du langage."
        },
        {
          "step": 3,
          "title": "Hospitalisation et tractographie 3D",
          "description": "Bilan électrophysiologique de référence et préparation anesthésique neurochirurgicale."
        },
        {
          "step": 4,
          "title": "Intervention sous monitoring peropératoire (IONM)",
          "description": "Résection tumorale guidée par microscopie opératoire et guidage laser."
        },
        {
          "step": 5,
          "title": "Rééducation neurologique et aptitude au vol",
          "description": "Contrôle scanographique post-opératoire et délivrance du certificat Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Plateaux techniques dotés d'IRM peropératoire 3T et de neuronavigation stéréotaxique",
        "Maîtrise éprouvée des chirurgies éveillées préservant la motricité et la parole",
        "Excellence reconnue en chirurgie rachidienne mini-invasive par trou de serrure",
        "Réanimations neurochirurgicales spécialisées assurant un suivi 24h/24"
      ],
      "faqs": [
        {
          "question": "Combien de temps après une chirurgie cérébrale puis-je prendre l'avion ?",
          "answer": "En raison de la pressurisation de la cabine aérienne et de la résorption des bulles d'air intracrâniennes, un délai de 14 à 21 jours avec scanner de contrôle est généralement requis avant le vol retour."
        },
        {
          "question": "L'adénome hypophysaire est-il opéré sans cicatrice visible ?",
          "answer": "Oui, la voie d'abord endoscopique endonasale permet d'accéder directement à la glande hypophyse par les narines, sans aucune incision sur le visage ou le crâne."
        }
      ]
    },
    "ru": {
      "title": "Нейрохирургия и хирургия позвоночника",
      "badge": "Передовые технологии",
      "shortDesc": "Микрохирургическое удаление опухолей мозга, эндоскопические операции основания черепа и малоинвазивная хирургия позвоночника.",
      "recommendedStay": "12–20 дней в зависимости от объема вмешательства",
      "recoveryTimeline": "Начальное восстановление 2–4 недели; полная реабилитация 6–12 недель",
      "overview": "Нейрохирургические отделения ведущих госпиталей Индии оборудованы интраоперационными томографами (iMRI 3T), системами нейронавигации и высокоточными микроскопами для безопасного удаления опухолей головного мозга и декомпрессии спинного мозга с сохранением двигательных и речевых функций.",
      "conditionsTreated": [
        "Опухоли головного мозга (глиомы, менингиомы, аденомы гипофиза)",
        "Аневризмы сосудов мозга и артериовенозные мальформации (АВМ)",
        "Грыжи шейного и поясничного отделов, стеноз спинномозгового канала",
        "Гидроцефалия и арахноидальные кисты головного мозга",
        "Невралгия тройничного нерва и гемифациальный спазм",
        "Опухоли спинного мозга и сколиотические деформации"
      ],
      "treatmentOptions": [
        "Краниотомия в сознании (Awake Craniotomy) с картированием речи и движений",
        "Малоинвазивная хирургия позвоночника через замочную скважину (MISS)",
        "Трансназальное эндоскопическое удаление опухолей гипофиза через нос",
        "Глубокая стимуляция головного мозга (DBS) при болезни Паркинсона",
        "Эндоваскулярная эмболизация аневризм микроспиралями и стент-графтами",
        "Многоуровневый спондилодез и стабилизация позвоночника"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Изучение снимков МРТ и КТ головного/спинного мозга",
          "description": "Оценка локализации опухоли и взаимоотношения с функциональными центрами."
        },
        {
          "step": 2,
          "title": "Разработка хирургического плана и траектории",
          "description": "Определение безопасного коридора доступа ведущими нейрохирургами."
        },
        {
          "step": 3,
          "title": "Госпитализация и трактография 3D",
          "description": "Нейрофизиологический мониторинг и подготовка к операции."
        },
        {
          "step": 4,
          "title": "Высокоточное микрохирургическое вмешательство",
          "description": "Резекция под интраоперационным контролем нейромониторинга."
        },
        {
          "step": 5,
          "title": "Нейрореабилитация и выписка с разрешением на полет",
          "description": "Контрольное КТ-исследование и оформление документов для авиаперелета."
        }
      ],
      "whyIndia": [
        "Операционные блоки оснащены интраоперационными МРТ 3T и станциями нейронавигации",
        "Опыт проведения сложнейших операций на головном мозге в сознании пациента",
        "Высочайший уровень малоинвазивной хирургии грыж позвоночника без повреждения мышц",
        "Специализированная нейрореанимация с круглосуточным мониторингом внутричерепного давления"
      ],
      "faqs": [
        {
          "question": "Через какое время после операции на мозге можно лететь на самолете?",
          "answer": "Из-за перепадов давления в салоне самолета и необходимости полного рассасывания пузырьков воздуха после краниотомии перелет разрешается через 14–21 день после контрольного КТ."
        },
        {
          "question": "Проводится ли удаление аденомы гипофиза без разрезов на голове?",
          "answer": "Да, большинство аденом гипофиза удаляются эндоскопически через носовые ходы без единого наружного разреза на голове или лице."
        }
      ]
    }
  },
  "neurology": {
    "ar": {
      "title": "أمراض الأعصاب والدماغ",
      "badge": "علاج طبي وتشخيصي متقدم",
      "shortDesc": "تشخيص وعلاج متقدم للسكتات الدماغية، والصرع المستعصي، ومرض باركنسون، والتصلب اللويحي المتعدد، واعتلالات الأعصاب.",
      "recommendedStay": "من 7 إلى 14 يوماً للفحوصات الشاملة وبروتوكولات العلاج",
      "recoveryTimeline": "تحسن تدريجي مستمر مع برامج التأهيل العصبي المخصصة",
      "overview": "توفر مراكز طب الأعصاب في دلهي إن سي آر تقنيات تشخيص كهربائية فسيولوجية متطورة، ومراقبة فيديو وتخطيط الدماغ المتواصل على مدار 24 ساعة (Video EEG)، وفحوصات الجينات الوراثية العصبية، وبرامج تأهيل عصبي متقدمة للجلطات واضطرابات الحركة والتصلب العصبي.",
      "conditionsTreated": [
        "الصرع المستعصي ونوبات التشنج العصبي غير المستجيبة للأدوية",
        "مرض باركنسون واضطرابات الحركة والارتعاش اللاإرادي",
        "الجلطات الدماغية الإقفارية والنزفية وإعادة التأهيل بعدها",
        "مرض التصلب المتعدد (MS) والتهاب النخاع الشوكي والعصب البصري",
        "الوهن العضلي الوبيل (Myasthenia Gravis) واعتلال الأعصاب الطرفية",
        "الصداع النصفي المزمن واضطرابات الذاكرة والزهايمر"
      ],
      "treatmentOptions": [
        "المراقبة التليفزيونية وتخطيط كهربائية الدماغ المستمر (24-Hour Video EEG)",
        "العلاج المناعي المتقدم بالأجسام المضادة الموجهة لمرضى التصلب العصبي",
        "حقن البوتوكس العلاجي للتشنجات العضلية والصداع النصفي المستعصي",
        "برامج التأهيل الحركي واللغوي المتقدمة لمرضى السكتات الدماغية",
        "علاج اضطرابات النوم والخلل العصبي المستقل التخصصي",
        "التقييم الشامل والبرمجة لأجهزة التحفيز العميق للدماغ (DBS Programming)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة التاريخ الطبي الدوائي",
          "description": "تحليل دقيق لقائمة الأدوية السابقة واستجابة النوبات أو الأعراض العصبية."
        },
        {
          "step": 2,
          "title": "تنسيق الفحوصات العصبية المتقدمة",
          "description": "حجز جلسات تخطيط الدماغ ورنين الأعصاب وتخطيط العضلات (EMG/NCV)."
        },
        {
          "step": 3,
          "title": "التقييم السريري من كبار أطباء الأعصاب",
          "description": "فحص عصبي إكلينيكي مفصل ودراسة وظائف الاتزان والذاكرة."
        },
        {
          "step": 4,
          "title": "تعديل الخطة العلاجية والدوائية",
          "description": "بدء بروتوكولات الأدوية الحديثة أو الجرعات المناعية الموجهة."
        },
        {
          "step": 5,
          "title": "خطة المتابعة بعيدة المدى والتأهيل",
          "description": "وضع خطة علاجية طويلة الأمد لطبيبك المحلي وجداول المتابعة الدورية."
        }
      ],
      "whyIndia": [
        "مختبرات تشخيصية عصبية مجهزة بأحدث أجهزة مراقبة نوبات الصرع الرقمية",
        "استشاريو أعصاب معتمدون دولياً ذوو خبرة واسعة في الحالات المستعصية",
        "توفر أحدث أدوية التصلب اللويحي والعلاجات المناعية البيولوجية",
        "مراكز تأهيل عصبي متكاملة للعلاج الطبيعي والوظيفي والنطق"
      ],
      "faqs": [
        {
          "question": "هل يمكن ضبط أدوية الصرع والسيطرة على النوبات في الحالات المستعصية؟",
          "answer": "نعم، من خلال المراقبة المستمرة بالفيديو وتخطيط الدماغ (Video EEG) لمدة 24-48 ساعة، يحدد أطباؤنا البؤرة الصرعية بدقة ويعدلون الأدوية أو يرشحون المريض لخيارات علاجية دقيقة تحقق نسب تحكم عالية."
        },
        {
          "question": "كم يوماً تستغرق الفحوصات العصبية الشاملة في الهند؟",
          "answer": "تستغرق الفحوصات التشخيصية العصبية المتكاملة عادة بين 5 إلى 7 أيام لإتمام الرنين المغناطيسي، وتخطيط الأعصاب والعضلات، وتخطيط الدماغ المطول واستشارة كبار الخبراء."
        }
      ]
    },
    "fr": {
      "title": "Neurologie médicale",
      "badge": "Diagnostic avancé",
      "shortDesc": "Prise en charge diagnostique et médicale de l'AVC, de l'épilepsie réfractaire, de la maladie de Parkinson et de la sclérose en plaques.",
      "recommendedStay": "7 à 14 jours pour bilans approfondis et ajustements thérapeutiques",
      "recoveryTimeline": "Amélioration progressive sous rééducation ciblée",
      "overview": "Les instituts de neurologie en Inde offrent une neurophysiologie diagnostique de pointe, une surveillance EEG vidéo continue de 24 heures, des analyses génétiques ciblées et des programmes de neuroréhabilitation sur mesure pour les affections neurologiques chroniques et dégénératives.",
      "conditionsTreated": [
        "Épilepsie réfractaire et syndromes convulsifs pharmaco-résistants",
        "Maladie de Parkinson et syndromes parkinsoniens atypiques",
        "Accidents vasculaires cérébraux (AVC ischémiques et hémorragiques)",
        "Sclérose en plaques (SEP) et neuromyélite optique",
        "Myasthénie grave et neuropathies périphériques",
        "Troubles mnésiques et démences neurodégénératives"
      ],
      "treatmentOptions": [
        "Enregistrement vidéo-EEG continu de longue durée (24 à 48 heures)",
        "Thérapies immunologiques et biomédicaments pour la sclérose en plaques",
        "Injections de toxine botulique pour la spasticité et les dystonies",
        "Programmes intensifs de réadaptation neuro-motrice et orthophonie",
        "Électromyographie (EMG) et vitesses de conduction nerveuse haute résolution",
        "Programmation et optimisation des stimulateurs cérébraux profonds (DBS)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Analyse des antécédents et bilans antérieurs",
          "description": "Étude collégiale des traitements essayés et de la fréquence des crises."
        },
        {
          "step": 2,
          "title": "Planification des explorations électrophysiologiques",
          "description": "Programmation des sessions EEG vidéo, EMG et IRM cérébrale à haut champ."
        },
        {
          "step": 3,
          "title": "Consultation avec les neurologues référents",
          "description": "Examen clinique complet de la motricité, des réflexes et de la cognition."
        },
        {
          "step": 4,
          "title": "Ajustement thérapeutique et protocoles innovants",
          "description": "Introduction de molécules de dernière génération et immunothérapie."
        },
        {
          "step": 5,
          "title": "Protocole de suivi au pays d'origine",
          "description": "Remise du rapport détaillé pour votre médecin traitant et programme d'exercices."
        }
      ],
      "whyIndia": [
        "Unités d'exploration de l'épilepsie dotées de systèmes de télémétrie numérique 24h/24",
        "Neurologues de renommée mondiale spécialisés dans les maladies orphelines et complexes",
        "Disponibilité immédiate des thérapies biologiques et anticorps monoclonaux",
        "Plateaux complets de rééducation neuro-fonctionnelle et cognitive"
      ],
      "faqs": [
        {
          "question": "Peut-on mieux stabiliser une épilepsie réfractaire ?",
          "answer": "Oui, la vidéo-EEG prolongée permet d'isoler précisément le foyer épileptogène afin d'ajuster une polythérapie ciblée ou d'évaluer une indication chirurgicale de résection."
        },
        {
          "question": "Quelle est la durée d'un bilan neurologique complet en Inde ?",
          "answer": "Un bilan complet (IRM 3T, EEG vidéo, EMG et consultations pluridisciplinaires) requiert généralement entre 5 et 8 jours ouvrés."
        }
      ]
    },
    "ru": {
      "title": "Неврология",
      "badge": "Комплексная диагностика",
      "shortDesc": "Специализированная диагностика и лечение инсульта, фармакорезистентной эпилепсии, болезни Паркинсона и рассеянного склероза.",
      "recommendedStay": "7–14 дней для обследования и коррекции терапии",
      "recoveryTimeline": "Постепенное улучшение под контролем специалистов",
      "overview": "Неврологические клиники Дели NCR предоставляют экспертную нейрофизиологическую диагностику, суточный видео-ЭЭГ мониторинг, генетическое секвенирование и специализированные программы нейрореабилитации для пациентов с хроническими и прогрессирующими заболеваниями нервной системы.",
      "conditionsTreated": [
        "Фармакорезистентная эпилепсия и судорожные приступы",
        "Болезнь Паркинсона и экстрапирамидные расстройства",
        "Последствия ишемического и геморрагического инсультов",
        "Рассеянный склероз (РС) и оптиконейромиелит",
        "Миастения гравис и полинейропатии различного генеза",
        "Когнитивные нарушения, деменция и болезнь Альцгеймера"
      ],
      "treatmentOptions": [
        "24-часовой цифровой видео-ЭЭГ мониторинг сна и бодрствования",
        "Таргетная иммунотерапия моноклональными антителами при рассеянном склерозе",
        "Ботулинотерапия при спастичности, дистонии и хронической мигрени",
        "Комплексная нейрореабилитация двигательных и речевых нарушений",
        "Электромиография (ЭМГ) и вызванные потенциалы нервной системы",
        "Настройка и программирование стимуляторов глубоких структур мозга (DBS)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Изучение истории болезни и препаратов",
          "description": "Анализ предыдущих схем лечения и динамики неврологического дефицита."
        },
        {
          "step": 2,
          "title": "Организация углубленной диагностики",
          "description": "Запись на видео-ЭЭГ, высокопольное МРТ 3T и электронейромиографию."
        },
        {
          "step": 3,
          "title": "Консультация ведущих профессоров неврологии",
          "description": "Детальный неврологический осмотр и оценка двигательных функций."
        },
        {
          "step": 4,
          "title": "Коррекция медикаментозной схемы",
          "description": "Введение препаратов последнего поколения и биологической терапии."
        },
        {
          "step": 5,
          "title": "Индивидуальный протокол для лечащего врача",
          "description": "Выдача подробных рекомендаций и графика мониторинга на родине."
        }
      ],
      "whyIndia": [
        "Специализированные центры лечения эпилепсии с круглосуточным видео-ЭЭГ мониторингом",
        "Опыт ведущих индийских профессоров в ведении редких и резистентных неврологических патологий",
        "Широкий доступ к новейшим оригинальным биопрепаратам и иммуноглобулинам",
        "Индивидуальные программы ранней эрготерапии и логопедической коррекции"
      ],
      "faqs": [
        {
          "question": "Можно ли подобрать эффективное лечение при устойчивой к таблеткам эпилепсии?",
          "answer": "Да, суточный видео-ЭЭГ мониторинг позволяет выявить точную локализацию очага эпилептической активности и подобрать комбинацию препаратов нового поколения или оценить возможность хирургического лечения."
        },
        {
          "question": "Сколько времени занимает полное неврологическое обследование?",
          "answer": "Комплексное обследование (включая МРТ, видео-ЭЭГ мониторинг, анализы и консилиум) обычно занимает от 5 до 7 дней."
        }
      ]
    }
  },
  "kidney-urology": {
    "ar": {
      "title": "زراعة الكلى وجراحة المسالك البولية",
      "badge": "نسب نجاح عالمية",
      "shortDesc": "زراعة الكلى من متبرعين أحياء، واستئصال كلى المتبرع بالمنظار، وتفتيت الحصوات بالليزر، وجراحات المسالك البولية بالروبوت.",
      "recommendedStay": "من 14 إلى 21 يوماً للتقييم والزراعة والمتابعة",
      "recoveryTimeline": "عمل الكلية المزروعة فورياً؛ تعافٍ كامل خلال 4-6 أسابيع",
      "overview": "تحظى مراكز زراعة الكلى والمسالك البولية في الهند بشهرة دولية بفضل إجراء آلاف عمليات زراعة الكلى من متبرعين أحياء بنسب نجاح تتجاوز 95%، وتطبيق تقنيات استئصال كلية المتبرع بالمنظار لسرعة التعافي، وزراعة الكلى بالروبوت للمتلقي مع أدنى معدلات للمضاعفات.",
      "conditionsTreated": [
        "الفشل الكلوي المزمن في مراحله النهائية (القصور الكلوي)",
        "حصوات الكلى والحالب المعقدة والمتشعبة (حصى قرن الوعل)",
        "أورام وسرطانات الكلى والمثانة والبروستاتا",
        "تضخم البروستاتا الحميد (BPH) واحتباس البول البولي",
        "تضيق حوض الكلى وحالب البول الخلقي والمكتسب",
        "سلس البول واضطرابات التحكم المثاني العصبية"
      ],
      "treatmentOptions": [
        "زراعة الكلى من متبرع حي من الأقارب (Living Donor Renal Transplant)",
        "استئصال كلية المتبرع عبر المنظار الدقيق طفيف التوغل",
        "زراعة الكلى غير المتوافقة فصيلة الدم (ABO-Incompatible Kidney Transplant)",
        "تفتيت حصوات الكلى بالليزر المرن عبر مجرى البول (RIRS / PCNL)",
        "استئصال البروستاتا بالروبوت وتجريف البروستاتا بالليزر (HoLEP)",
        "إعادة بناء وتوسيع حوض الكلى والحالب بالروبوت (Robotic Pyeloplasty)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة تقارير تطابق الأنسجة وفصائل الدم",
          "description": "فحص تقارير وظائف الكلى وفصيلة دم المريض والمتبرع وتقارير تطابق HLA والأنسجة."
        },
        {
          "step": 2,
          "title": "موافقة لجنة زراعة الأعضاء الرسمية",
          "description": "استيفاء المتطلبات القانونية لزراعة الأعضاء وإصدار خطابات التأشيرة الطبية الرسمية للمريض والمتبرع."
        },
        {
          "step": 3,
          "title": "الفحوصات الشاملة للمريض والمتبرع في المستشفى",
          "description": "إجراء فحوصات الأشعة المقطعية للشرايين الكلوية، وتقييم كفاءة القلب، وأمان المتبرع 100%."
        },
        {
          "step": 4,
          "title": "إجراء عمليتي التبرع والزراعة بالتزامن",
          "description": "استئصال كلية المتبرع بالمنظار وزراعتها الفورية للمريض في غرف عمليات متجاورة معقمة."
        },
        {
          "step": 5,
          "title": "متابعة أدوية تثبيط المناعة وتصريح السفر",
          "description": "ضبط مستويات أدوية المناعة ومراقبة وظائف الكلى حتى الوصول لمستويات الكرياتينين الطبيعية."
        }
      ],
      "whyIndia": [
        "معدلات نجاح تفوق 95% لعمليات زراعة الكلى من متبرعين أحياء",
        "استئصال كلية المتبرع بالمنظار مما يمكنه من الخروج في غضون 48-72 ساعة",
        "خبرة فائقة في زراعات الكلى غير متوافقة الفصيلة مع بروتوكولات فصل البلازما المتقدمة",
        "تكلفة إجمالية شاملة للعمليتين تقل بنسبة 70% إلى 80% مقارنة بالدول الغربية"
      ],
      "faqs": [
        {
          "question": "هل يُشترط وجود متبرع من العائلة لزراعة الكلى في الهند؟",
          "answer": "نعم، بموجب القوانين الهندية الصارمة لزراعة الأعضاء البشرية، يجب أن يكون المتبرع قريباً من العائلة بالدم (مثل الوالدين، الإخوة، الأبناء، أو الزوج/الزوجة) مع إثبات القرابة رسمياً لحماية المرضى والمتبرعين."
        },
        {
          "question": "هل يؤثر التبرع بكلية واحدة على صحة المتبرع مستقبلاً؟",
          "answer": "لا يؤثر التبرع سلباً على الإطلاق بعد استيفاء الفحوصات الدقيقة التي تؤكد سلامة المتبرع بنسبة 100%. يعيش المتبرع حياة طبيعية تماماً بكلية واحدة مع كفاءة كاملة لجميع وظائف الجسم."
        }
      ]
    },
    "fr": {
      "title": "Greffe rénale et urologie",
      "badge": "Succès mondial",
      "shortDesc": "Greffe de rein de donneur vivant, néphrectomie du donneur par laparoscopie, lithotritie laser et urologie robotique.",
      "recommendedStay": "14 à 21 jours pour le bilan, la greffe et la stabilisation",
      "recoveryTimeline": "Fonction rénale immédiate ; récupération complète en 4-6 semaines",
      "overview": "Les centres de néphrologie et transplantation rénale en Inde sont réputés pour la réalisation de milliers de greffes rénales de donneur vivant avec un taux de succès supérieur à 95 %, la néphrectomie cœlioscopique chez le donneur et la transplantation robotisée assurant une récupération rapide.",
      "conditionsTreated": [
        "Insuffisance rénale chronique terminale nécessitant hémodialyse",
        "Lithiase urinaire complexe et calculs coralliformes du rein",
        "Cancers du rein, de la vessie et de la prostate",
        "Hypertrophie bénigne de la prostate (HBP) et rétention d'urine",
        "Sténose de la jonction pyélo-urétérale congénitale ou acquise",
        "Incontinence urinaire et vessie neurologique"
      ],
      "treatmentOptions": [
        "Transplantation rénale de donneur vivant apparenté",
        "Néphrectomie du donneur par cœlioscopie mini-invasive",
        "Greffe de rein à incompatibilité de groupe sanguin (ABO-incompatible)",
        "Urétérorénoscopie souple avec lithotritie laser (RIRS et PCNL)",
        "Prostatectomie totale robotisée et énucléation laser de prostate (HoLEP)",
        "Pyéloplastie robotisée pour sténose de la jonction pyélo-urétérale"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Évaluation du typage HLA et compatibilité sanguine",
          "description": "Contrôle des groupes sanguins du couple receveur-donneur et de la clairance de la créatinine."
        },
        {
          "step": 2,
          "title": "Validation par le comité d'éthique de transplantation",
          "description": "Conformité avec les réglementations officielles et délivrance des visas médicaux receveur/donneur."
        },
        {
          "step": 3,
          "title": "Bilans exhaustifs préopératoires à l'hôpital",
          "description": "Angioscanner des artères rénales du donneur et bilan cardiovasculaire complet du receveur."
        },
        {
          "step": 4,
          "title": "Intervention chirurgicale simultanée donneur et receveur",
          "description": "Prélèvement laparoscopique et implantation immédiate du greffon en blocs opératoires jumeaux."
        },
        {
          "step": 5,
          "title": "Équilibre immunosuppresseur et certificat de vol",
          "description": "Ajustement précis des dosages sanguins de tacrolimus et autorisation de voyage."
        }
      ],
      "whyIndia": [
        "Taux de survie du greffon rénal supérieur à 95 % à un an",
        "Prélèvement sous cœlioscopie permettant au donneur de sortir sous 48 à 72 heures",
        "Expertise majeure dans les greffes ABO-incompatibles avec protocole de plasmaphérèse",
        "Forfait global incluant donneur et receveur 70 % moins cher qu'en Europe"
      ],
      "faqs": [
        {
          "question": "Le donneur doit-il impérativement être un membre de la famille ?",
          "answer": "Oui, la législation médicale indienne exige formellement un lien de parenté familial documenté (parents, fratrie, enfants ou conjoint) afin de garantir une démarche éthique et légale."
        },
        {
          "question": "Le don de rein a-t-il un impact sur la vie future du donneur ?",
          "answer": "Non, un bilan médical rigoureux s'assure au préalable que le donneur possède une excellente réserve rénale. Le rein restant compense pleinement et permet une vie longue et normale."
        }
      ]
    },
    "ru": {
      "title": "Трансплантация почки и урология",
      "badge": "Высокая успешность",
      "shortDesc": "Трансплантация почки от живого донора, лапароскопический забор почки, лазерное дробление камней и роботизированная урология.",
      "recommendedStay": "14–21 день для обследования, операции и подбора терапии",
      "recoveryTimeline": "Работа почки с первых суток; полное восстановление 4–6 недель",
      "overview": "Клиники нефрологии и урологии Индии признаны мировыми лидерами по числу успешных родственных трансплантаций почки с выживаемостью трансплантата свыше 95%. Забор почки у донора выполняется лапароскопически через мини-проколы, обеспечивая выписку донора уже через 2-3 дня.",
      "conditionsTreated": [
        "Терминальная стадия хронической почечной недостаточности (ХПН)",
        "Мочекаменная болезнь и коралловидные камни почек",
        "Злокачественные новообразования почки, мочевого пузыря и простаты",
        "Аденома предстательной железы (ДГПЖ) и задержка мочи",
        "Стриктуры уретры и гидронефроз (сужение лоханочно-мочеточникового сегмента)",
        "Нейрогенный мочевой пузырь и недержание мочи"
      ],
      "treatmentOptions": [
        "Трансплантация почки от живого родственного донора",
        "Малоинвазивный лапароскопический забор донорской почки",
        "ABO-несовместимая пересадка почки при разных группах крови",
        "Гибкая ретроградная лазерная литотрипсия камней (RIRS и PCNL)",
        "Роботизированная простатэктомия и лазерная энуклеация простаты (HoLEP)",
        "Роботизированная пластика лоханочно-мочеточникового сегмента (пиелопластика)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Анализ совместимости HLA и групп крови",
          "description": "Проверка анализов пары донор-реципиент и уровня клубочковой фильтрации."
        },
        {
          "step": 2,
          "title": "Прохождение этического комитета по трансплантации",
          "description": "Юридическое согласование документов о родстве и выдача виз VIL."
        },
        {
          "step": 3,
          "title": "Комплексное обследование реципиента и донора",
          "description": "КТ-ангиография сосудов почек донора и оценка безопасности наркоза."
        },
        {
          "step": 4,
          "title": "Одновременная операция донора и реципиента",
          "description": "Лапароскопический забор органа и прецизионная имплантация в смежных операционных."
        },
        {
          "step": 5,
          "title": "Подбор иммуносупрессии и допуск к перелету",
          "description": "Коррекция концентрации иммуносупрессивных препаратов и нормализация креатинина."
        }
      ],
      "whyIndia": [
        "Показатель приживаемости трансплантата почки превышает 95%",
        "Лапароскопический забор почки у донора с выпиской из стационара через 48–72 часа",
        "Успешный опыт пересадки почек при несовместимости групп крови (плазмаферез)",
        "Стоимость комплексной программы на 70–80% доступнее, чем в клиниках Турции или Европы"
      ],
      "faqs": [
        {
          "question": "Обязательно ли донор должен быть родственником?",
          "answer": "Да, согласно закону Индии о трансплантации органов человека, донором может выступать только близкий генетический или юридический родственник (родители, братья/сестры, дети, супруг/супруга) при наличии подтверждающих документов."
        },
        {
          "question": "Как отражается удаление одной почки на здоровье донора?",
          "answer": "Перед операцией донор проходит жесточайший отбор. Оставшаяся здоровая почка полностью берет на себя фильтрацию, донор живет полноценной долгой жизнью без каких-либо ограничений."
        }
      ]
    }
  },
  "liver-gastroenterology": {
    "ar": {
      "title": "أمراض وزراعة الكبد والجهاز الهضمي",
      "badge": "مناظير وتدخلات متقدمة",
      "shortDesc": "تشخيص وعلاج أمراض الكبد المزمنة، والتهاب الكبد الفيروسي، وتليف الكبد، ومناظير القنوات المرارية والبنكرياس (ERCP) ومناظير الموجات فوق الصوتية.",
      "recommendedStay": "من 7 إلى 14 يوماً للفحوصات والتدخلات بالمنظار",
      "recoveryTimeline": "استئناف الأنشطة الخفيفة خلال أيام بعد الإجراءات التنظيرية",
      "overview": "تضم معاهد الكبد والجهاز الهضمي في كبرى مستشفيات دلهي أحدث وحدات مناظير الجهاز الهضمي التداخلية في آسيا، حيث تقدم استئصال أورام القولون والمعدة بالمنظار، ودعامات القنوات الصفراوية، وعلاج ارتفاع ضغط الوريد البابي وتليف الكبد بأحدث البروتوكولات العالمية.",
      "conditionsTreated": [
        "تليف الكبد وارتفاع ضغط الوريد البابي واستسقاء البطن",
        "التهاب الكبد الفيروسي المزمن (B و C) وأمراض الكبد الدهنية",
        "انسداد وحصوات القنوات المرارية والصفراوية (اليرقان الانسدادي)",
        "التهاب البنكرياس الحاد والمزمن وأكياس البنكرياس",
        "أمراض القولون الالتهابية (التهاب القولون التقرحي ومرض كرون)",
        "أورام وزوائد المعدة والقولون والمريء المبكرة"
      ],
      "treatmentOptions": [
        "منظار القنوات الصفراوية والبنكرياسية الراجع واستخراج الحصوات (ERCP)",
        "منظار الموجات فوق الصوتية وأخذ العينات الدقيقة (EUS-FNA)",
        "استئصال أورام وزوائد الغشاء المخاطي بالمنظار دون جراحة (ESD / EMR)",
        "ربط وحقن دوالي المريء والمعدة بالمنظار لوقف النزيف",
        "تركيب دعامات القنوات المرارية وتوسيع التضيقات الهضمية",
        "العلاج البيولوجي المتقدم لأمراض الأمعاء الالتهابية المزمنة"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة وظائف الكبد والأشعة المقطعية",
          "description": "دراسة تقارير إنزيمات الكبد، وفحص الفبروسكان FibroScan، وأشعة الرنين للقنوات المرارية (MRCP)."
        },
        {
          "step": 2,
          "title": "تحديد الخطة التنظيرية أو الدوائية",
          "description": "تحديد موعد المنظار التداخلي أو بروتوكول علاج التهاب الكبد."
        },
        {
          "step": 3,
          "title": "إجراء المنظار التداخلي تحت التهدئة",
          "description": "تنفيذ إجراء ERCP أو EUS بأحدث المناظير بدون ألم وبأعلى معايير الأمان."
        },
        {
          "step": 4,
          "title": "الملاحظة الطبية وفحوصات ما بعد المنظار",
          "description": "متابعة سريعة لساعات في المستشفى والتأكد من فتح القنوات المرارية واستقرار الإنزيمات."
        },
        {
          "step": 5,
          "title": "النظام الغذائي وتصريح السفر",
          "description": "تقديم إرشادات التغذية الكبدية وقائمة الأدوية وشهادة اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "مراكز جهاز هضمي رائدة تجري آلاف مناظير ERCP سنوياً بأعلى نسب نجاح",
        "رواد مناظير EUS والتشخيص الدقيق لأمراض الكبد والبنكرياس في آسيا",
        "توفر أحدث أجهزة الفايبروسكان لقياس درجة تليف ودهون الكبد بدون عينة",
        "تكلفة فحص وعلاج تقل بنسبة 60% إلى 75% مقارنة بالمراكز الأوروبية"
      ],
      "faqs": [
        {
          "question": "هل يتطلب منظار القنوات المرارية ERCP شقاً جراحياً في البطن؟",
          "answer": "لا، يتم إجراء منظار ERCP بالكامل عن طريق الفم عبر أنبوب مرن دقيق تحت التهدئة التامة دون أي جرح أو شق خارجي على الإطلاق، مع تعافٍ سريع."
        },
        {
          "question": "هل يمكن علاج تليف الكبد وإيقاف تدهوره؟",
          "answer": "نعم، من خلال تشخيص السبب الرئيسي (سواء كان فيروسياً أو دهنياً) وتطبيق بروتوكولات الأدوية المضادة للفيروسات وخافضات ضغط الوريد البابي، يمكن تثبيت وظائف الكبد ومنع حدوث مضاعفات."
        }
      ]
    },
    "fr": {
      "title": "Hépatologie et gastro-entérologie",
      "badge": "Endoscopie avancée",
      "shortDesc": "Prise en charge des hépatopathies chroniques, cirrhose, calculs biliaires, CPRE et écho-endoscopie interventionnelle.",
      "recommendedStay": "7 à 14 jours pour bilans et gestes endoscopiques",
      "recoveryTimeline": "Reprise des activités légères sous quelques jours après l'endoscopie",
      "overview": "Les instituts d'hépatologie et de gastroentérologie en Inde regroupent les plateaux techniques endoscopiques les plus sophistiqués d'Asie pour la CPRE, l'écho-endoscopie (EUS) et les résections muqueuses sans chirurgie ouverte.",
      "conditionsTreated": [
        "Cirrhose hépatique, hypertension portale et ascite",
        "Hépatites virales chroniques B et C et stéatose hépatique (NASH)",
        "Lithiases et sténoses des voies biliaires (ictère obstructif)",
        "Pancréatites aiguës et chroniques et kystes pancréatiques",
        "Maladies inflammatoires chroniques de l'intestin (MICI : Crohn, RCH)",
        "Polypes et lésions précancéreuses du tube digestif"
      ],
      "treatmentOptions": [
        "Cholangiopancréatographie rétrograde endoscopique (CPRE / ERCP)",
        "Écho-endoscopie diagnostique et interventionnelle avec ponction (EUS-FNA)",
        "Dissection sous-muqueuse endoscopique (ESD) et mucosectomie (EMR)",
        "Ligature et sclérose des varices œsophagiennes pour stopper le saignement",
        "Pose de prothèses biliaires métalliques ou plastiques",
        "Biothérapies de pointe pour les maladies inflammatoires digestives"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Bilan biologique hépatique et imagerie",
          "description": "Étude des transaminases, bilirubinémie, FibroScan et bili-IRM."
        },
        {
          "step": 2,
          "title": "Planification du geste endoscopique interventionnel",
          "description": "Validation de l'indication de CPRE ou d'exploration digestive sous sédation."
        },
        {
          "step": 3,
          "title": "Réalisation du geste sous contrôle radiologique",
          "description": "Extraction de calculs de la voie biliaire principale ou drainage endoscopique."
        },
        {
          "step": 4,
          "title": "Surveillance clinique post-interventionnelle",
          "description": "Contrôle biologique de l'absence de pancréatite et reprise de l'alimentation."
        },
        {
          "step": 5,
          "title": "Consignes diététiques et certificat de vol",
          "description": "Établissement du protocole médicamenteux d'entretien et autorisation de voyage."
        }
      ],
      "whyIndia": [
        "Centres réalisant des milliers de CPRE annuelles avec des taux de succès élevés",
        "Équipements de pointe en écho-endoscopie diagnostique et thérapeutique",
        "Accès rapide au FibroScan hépatique sans recours à la biopsie invasive",
        "Tarifs 65 % moins chers qu'en Europe occidentale pour une technicité équivalente"
      ],
      "faqs": [
        {
          "question": "La CPRE nécessite-t-elle une ouverture de l'abdomen ?",
          "answer": "Non, la CPRE s'effectue entièrement par les voies naturelles via un endoscope introduit par la bouche sous sédation, sans aucune incision cutanée."
        },
        {
          "question": "Peut-on stabiliser une cirrhose du foie débutante ?",
          "answer": "Oui, un traitement étiologique rapide associé au contrôle de la pression portale permet d'enrayer l'évolution et de préserver durablement la fonction hépatocellulaire."
        }
      ]
    },
    "ru": {
      "title": "Гепатология и гастроэнтерология",
      "badge": "Передовая эндоскопия",
      "shortDesc": "Лечение хронических заболеваний печени, цирроза, вирусных гепатитов, удаление камней желчных протоков (ЭРХПГ) и эндосонография.",
      "recommendedStay": "7–14 дней для обследования и малоинвазивных процедур",
      "recoveryTimeline": "Возврат к обычной активности через несколько дней после эндоскопии",
      "overview": "Специализированные центры гепатологии и гастроэнтерологии Дели NCR располагают лучшими эндоскопическими отделениями для удаления камней желчных протоков (ЭРХПГ), стентирования и эндосонографии (EUS) опухолей ЖКТ без полостных разрезов.",
      "conditionsTreated": [
        "Цирроз печени, портальная гипертензия и асцит",
        "Хронические вирусные гепатиты B и C, жировой гепатоз (НАСГ)",
        "Камни и стриктуры желчных протоков (механическая желтуха)",
        "Острый и хронический панкреатит, кисты поджелудочной железы",
        "Воспалительные заболевания кишечника (язвенный колит и болезнь Крона)",
        "Полипы и ранние опухоли желудка и толстой кишки"
      ],
      "treatmentOptions": [
        "Эндоскопическая ретроградная холангиопанкреатография (ЭРХПГ)",
        "Эндоскопическое ультразвуковое исследование с биопсией (EUS-FNA)",
        "Эндоскопическая подслизистая диссекция ранних опухолей (ESD и EMR)",
        "Лигирование и склерозирование варикозных вен пищевода",
        "Установка пластиковых и металлических стентов в желчные протоки",
        "Современная биологическая таргетная терапия при ВЗК"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Анализ печеночных проб и МРХПГ",
          "description": "Изучение биохимии крови, фибросканирования печени и МРТ желчных путей."
        },
        {
          "step": 2,
          "title": "Планирование эндоскопического вмешательства",
          "description": "Согласование проведения ЭРХПГ или эндосонографии под медикаментозным сном."
        },
        {
          "step": 3,
          "title": "Выполнение процедуры под рентген-контролем",
          "description": "Извлечение камней из протоков или стентирование без боли."
        },
        {
          "step": 4,
          "title": "Контроль состояния и биохимии крови",
          "description": "Кратковременное пребывание в стационаре и контроль оттока желчи."
        },
        {
          "step": 5,
          "title": "Диетические рекомендации и допуск к перелету",
          "description": "Индивидуальный план гепатопротекторной терапии и выписка."
        }
      ],
      "whyIndia": [
        "Огромный опыт клиник в проведении тысяч успешных процедур ЭРХПГ ежегодно",
        "Высокоточная диагностика поражений поджелудочной железы методом EUS",
        "Неинвазивное определение стадии фиброза печени на аппаратах FibroScan",
        "Стоимость лечебно-диагностических программ на 65% ниже, чем в клиниках ЕС"
      ],
      "faqs": [
        {
          "question": "Требуются ли разрезы на животе при процедуре ЭРХПГ?",
          "answer": "Нет, процедура ЭРХПГ выполняется полностью через рот с помощью гибкого эндоскопа под легким наркозом без каких-либо кожных разрезов."
        },
        {
          "question": "Можно ли остановить прогрессирование цирроза печени?",
          "answer": "Да, своевременная терапия первопричины (противовирусные препараты, диета) и снижение давления в воротной вене позволяют компенсировать функцию печени и предотвратить декомпенсацию."
        }
      ]
    }
  },
  "liver-transplant": {
    "ar": {
      "title": "زراعة الكبد",
      "badge": "الريادة العالمية في زراعة الكبد",
      "shortDesc": "زراعة الكبد من متبرع حي للأطفال والبالغين بنسب نجاح تفوق 95% تحت إشراف أشهر جراحي الكبد في العالم.",
      "recommendedStay": "من 21 إلى 30 يوماً في الهند للتقييم والعملية والمتابعة",
      "recoveryTimeline": "خروج المتبرع في 7-10 أيام؛ تعافي المريض التام خلال 8-12 أسبوعاً",
      "overview": "تتصدر الهند دول العالم في مجال زراعة الكبد من متبرعين أحياء (Living Donor Liver Transplantation)، حيث تُجري مراكز دلهي المتخصصة أكثر من 1,500 عملية زراعة كبد سنوياً لعلاج مرضى الفشل الكبدي الحاد والمزمن وأورام الكبد السرطانية بأعلى معايير الأمان للمتبرع والمريض وبنسب نجاح معتمدة دولياً تزيد عن 95%.",
      "conditionsTreated": [
        "فشل الكبد في مراحله النهائية الناتج عن التليف المتقدم",
        "سرطان الخلايا الكبدية الأولي (HCC) المتوافق مع معايير الزراعة",
        "الفشل الكبدي الحاد الخاطف المهدد للحياة",
        "رتق القنوات الصفراوية الخلقي عند الرضع والأطفال (Biliary Atresia)",
        "أمراض التمثيل الغذائي الوراثية المؤثرة على الكبد (مثل داء ويلسون)",
        "التهاب الكبد المناعي الذاتي غير المستجيب للأدوية المثبطة"
      ],
      "treatmentOptions": [
        "زراعة الكبد من متبرع حي من الأقارب للبالغين (فص الكبد الأيمن)",
        "زراعة الكبد للأطفال من أحد الوالدين (الفص الأيسر الجانبي)",
        "زراعة الكبد غير المتوافقة فصيلة الدم (ABO-Incompatible Liver Transplant)",
        "استئصال فص كبد المتبرع بالمنظار والجراحة طفيفة التوغل",
        "بروتوكولات التروية واستعادة وظائف الكبد فائقة التطور",
        "إعادة بناء الأوعية الدموية والقنوات الصفراوية المجهرية الدقيقة"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "تقييم فصائل الدم والأشعة الثلاثية للمتبرع",
          "description": "فحص فصيلة الدم وأشعة مقطعية ثلاثية الأبعاد لحساب حجم كبد المتبرع بدقة متناهية."
        },
        {
          "step": 2,
          "title": "موافقة اللجنة الحكومية الهندية للأعضاء",
          "description": "استيفاء الوثائق القانونية الرسمية لصلة القرابة وإصدار تأشيرات المريض والمتبرع."
        },
        {
          "step": 3,
          "title": "الفحوصات السريرية والقلبية الدقيقة للمتبرع",
          "description": "التأكد بنسبة 100% من أمان التبرع وسلامة المتبرع واكتمال كفاءته الجسدية."
        },
        {
          "step": 4,
          "title": "إجراء عمليتي التبرع والزراعة المتزامنتين",
          "description": "استئصال جزء من كبد المتبرع وزراعته في جسد المريض عبر فريقين جراحيين يعملان معاً لأكثر من 10 ساعات."
        },
        {
          "step": 5,
          "title": "العناية المركزة وضبط أدوية المناعة والسفر",
          "description": "متابعة نمو الكبد السريع حتى استعادة حجمه الكامل واستقرار المؤشرات للسفر جواً."
        }
      ],
      "whyIndia": [
        "إجراء أكبر عدد من زراعات الكبد من متبرع حي في العالم بنسب نجاح تفوق 95%",
        "سجل أمان عالمي لا مثيل له للمتبرعين دون أي مضاعفات طويلة الأمد",
        "قدرة الكبد المذهلة على تجديد نفسه والنمو الكامل خلال 6 إلى 8 أسابيع",
        "تكلفة إجمالية شاملة للعمليتين تقل بنسبة 70% إلى 80% مقارنة بأمريكا وأوروبا"
      ],
      "faqs": [
        {
          "question": "كم من الوقت يحتاج كبد المتبرع ليعود إلى حجمه الطبيعي بالكامل؟",
          "answer": "يمتلك الكبد قدرة استثنائية فريدة على التجدد، حيث ينمو الجزء المتبقي لدى المتبرع والجزء المزروع لدى المريض ليعودا إلى 90%-100% من الحجم الطبيعي الأصلي خلال 6 إلى 8 أسابيع فقط بعد الجراحة."
        },
        {
          "question": "هل توجد أي مخاطر طويلة المدى على صحة المتبرع بالكبد؟",
          "answer": "سلامة المتبرع هي الأولوية القصوى المطلقة. يخضع المتبرع لبروتوكول تقييم طبي صارم جداً للتأكد من عدم وجود أي خطورة عليه، ويستعيد المتبرع عافيته وقدرته على العمل خلال 3 إلى 4 أسابيع."
        }
      ]
    },
    "fr": {
      "title": "Greffe de foie",
      "badge": "Leader mondial",
      "shortDesc": "Transplantation hépatique pédiatrique et adulte de donneur vivant avec taux de réussite supérieur à 95 % par les sommités de la spécialité.",
      "recommendedStay": "21 à 30 jours en Inde pour l'évaluation, l'intervention et le suivi",
      "recoveryTimeline": "Sortie du donneur en 7-10 jours ; récupération du receveur en 8-12 semaines",
      "overview": "L'Inde est le leader planétaire incontesté de la transplantation hépatique de donneur vivant (LDLT), avec plus de 1 500 greffes par an réalisées dans les centres de Delhi NCR pour cirrhoses décompensées et carcinomes hépatocellulaires avec plus de 95 % de survie.",
      "conditionsTreated": [
        "Insuffisance hépatique terminale secondaire à la cirrhose",
        "Carcinome hépatocellulaire (cancer du foie) répondant aux critères de Milan",
        "Insuffisance hépatique aiguë fulminante engageant le pronostic vital",
        "Atrésie des voies biliaires chez le nourrisson et le jeune enfant",
        "Maladies métaboliques héréditaires (maladie de Wilson, hémochromatose)",
        "Hépatite auto-immune réfractaire aux corticoïdes et immunosuppresseurs"
      ],
      "treatmentOptions": [
        "Greffe de donneur vivant apparenté adulte (lobe droit du foie)",
        "Greffe hépatique pédiatrique de parent à enfant (segment hépatique gauche)",
        "Greffe hépatique avec incompatibilité de groupe sanguin (ABO-incompatible)",
        "Prélèvement hépatique du donneur par laparoscopie mini-invasive",
        "Reconstruction vasculaire et anastomose biliaire microchirurgicale",
        "Protocoles de régénération et de préservation hépatique avancés"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Typage sanguin et volumétrie hépatique 3D",
          "description": "Calcul précis au scanner du volume hépatique prélevé pour assurer la sécurité du donneur."
        },
        {
          "step": 2,
          "title": "Autorisation du comité gouvernemental de bioéthique",
          "description": "Instruction du dossier officiel de parenté et délivrance prioritaire des visas médicaux."
        },
        {
          "step": 3,
          "title": "Bilan approfondi et angiographie du donneur",
          "description": "Validation médicale absolue de l'absence de risque pour le donneur apparenté."
        },
        {
          "step": 4,
          "title": "Double intervention chirurgicale simultanée",
          "description": "Intervention menée par deux équipes coordonnées durant 10 à 12 heures."
        },
        {
          "step": 5,
          "title": "Réanimation spécialisée et certificat de vol",
          "description": "Surveillance de la cinétique des enzymes hépatiques et délivrance du Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Plus grand nombre de greffes de foie de donneur vivant au monde avec 95 % de succès",
        "Protocole de sécurité donneur irréprochable avec zéro séquelle à long terme",
        "Régénération spectaculaire du foie qui retrouve sa taille normale en 6 à 8 semaines",
        "Coût global comprenant donneur et receveur 75 % inférieur aux tarifs occidentaux"
      ],
      "faqs": [
        {
          "question": "Combien de temps faut-il pour que le foie du donneur repousse ?",
          "answer": "Le tissu hépatique possède une extraordinaire capacité d'autorégénération : la partie restante chez le donneur comme le greffon chez le receveur retrouvent 90 % à 100 % de leur volume fonctionnel sous 6 à 8 semaines."
        },
        {
          "question": "Quelles sont les suites opératoires pour le donneur de foie ?",
          "answer": "La sécurité du donneur est la règle d'or. Le donneur quitte l'hôpital après 7 à 10 jours et reprend ses activités professionnelles et physiques normales en 3 à 4 semaines."
        }
      ]
    },
    "ru": {
      "title": "Трансплантация печени",
      "badge": "Мировое лидерство",
      "shortDesc": "Трансплантация печени от живого донора взрослым и детям с показателем успешности свыше 95% у хирургов мирового уровня.",
      "recommendedStay": "21–30 дней в Индии для подготовки, операции и реабилитации",
      "recoveryTimeline": "Выписка донора через 7–10 дней; полное восстановление реципиента 8–12 недель",
      "overview": "Индия занимает безоговорочное 1-е место в мире по числу и успешности трансплантаций печени от живого родственного донора (LDLT). Центры Дели NCR ежегодно выполняют свыше 1 500 операций с показателем приживаемости свыше 95% при терминальном циррозе и раке печени.",
      "conditionsTreated": [
        "Терминальная стадия цирроза печени любой этиологии",
        "Гепатоцеллюлярная карцинома (рак печени) по Миланским критериям",
        "Острая печеночная недостаточность (фульминантный гепатит)",
        "Врожденная атрезия желчевыводящих путей у грудных детей",
        "Генетические болезни накопления (болезнь Вильсона-Коновалова)",
        "Аутоиммунный гепатит, резистентный к медикаментозной терапии"
      ],
      "treatmentOptions": [
        "Родственная трансплантация печени взрослым (правая доля печени)",
        "Детская трансплантация печени от родителя (левый латеральный сектор)",
        "ABO-несовместимая пересадка печени при несовпадении групп крови",
        "Лапароскопический забор доли печени у донора через мини-доступ",
        "Прецизионная микрососудистая реконструкция печеночных артерий",
        "Протоколы ускоренной регенерации и иммунологической адаптации"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Анализ групп крови и 3D-волюметрия КТ",
          "description": "Точнейший компьютерный расчет объема изымаемой доли печени донора."
        },
        {
          "step": 2,
          "title": "Государственный комитет Индии по трансплантации",
          "description": "Юридическая верификация родства пары и приоритетное оформление виз VIL."
        },
        {
          "step": 3,
          "title": "Углубленное комплексное обследование донора",
          "description": "Стопроцентная гарантия безопасности и здоровья донора перед операцией."
        },
        {
          "step": 4,
          "title": "Синхронная 10-часовая операция донора и реципиента",
          "description": "Две параллельно работающие хирургические бригады в стерильных блоках."
        },
        {
          "step": 5,
          "title": "Специализированная ОРИТ и допуск к перелету",
          "description": "Контроль восстановления печеночной паренхимы и выдача сертификата Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Мировой рекорд по количеству успешных родственных пересадок печени (успешность >95%)",
        "Безупречные стандарты безопасности донора с полным сохранением здоровья",
        "Уникальная регенерация: печень донора и реципиента вырастает до нормы за 6–8 недель",
        "Стоимость пересадки печени в Индии на 75–80% доступнее, чем в клиниках Германии и США"
      ],
      "faqs": [
        {
          "question": "За сколько времени печень донора восстанавливается в объеме?",
          "answer": "Печень обладает уникальной способностью к регенерации: как оставшаяся часть у донора, так и пересаженная доля у реципиента восстанавливают 90–100% первоначального объема всего за 6–8 недель."
        },
        {
          "question": "Опасно ли донорство части печени для донора?",
          "answer": "Безопасность донора — непреложный закон трансплантологии. Донор проходит жесточайшее обследование, выписывается через 7–10 дней и полностью возвращается к привычной жизни и спорту через месяц."
        }
      ]
    }
  },
  "ivf-fertility": {
    "ar": {
      "title": "أطفال الأنابيب والخصوبة",
      "badge": "أحدث تقنيات الإخصاب",
      "shortDesc": "الحقن المجهري (ICSI)، والفحص الجيني للأجنة قبل الغرس (PGT-A)، وتجميد البويضات، وعلاج العقم المستعصي لدى الزوجين.",
      "recommendedStay": "من 14 إلى 21 يوماً لدورة أطفال الأنابيب الكاملة",
      "recoveryTimeline": "إجراء غير جراحي؛ عودة للحياة اليومية الطبيعية من اليوم التالي",
      "overview": "تطبق مراكز الخصوبة وأطفال الأنابيب المعتمدة دولياً في الهند أحدث تقنيات الحقن المجهري، وحواضن الأجنة الذكية المزودة بالتصوير الفاصل الزمني (EmbryoScope)، والفحص الجيني للكروموسومات (PGT-A/PGD) لضمان زراعة أجنة سليمة وتحقيق أعلى نسب نجاح للحمل حتى في حالات الفشل المتكرر والتقدم في العمر.",
      "conditionsTreated": [
        "تأخر الإنجاب الأولي والثانوي غير المفسر للزوجين",
        "انسداد أو تلف قناتي فالوب وتصاقات الحوض الشديدة",
        "ضعف وقلة عدد وحركة وتشوهات الحيوانات المنوية",
        "متلازمة تكيس المبايض (PCOS) واضطرابات التبويض",
        "بطانة الرحم المهاجرة المتقدمة (Endometriosis)",
        "حالات فشل انغراس الأجنة المتكرر في المحاولات السابقة"
      ],
      "treatmentOptions": [
        "الحقن المجهري الدقيق للبويضة بحيوان منوي واحد (ICSI)",
        "الفحص الوراثي والجيني الشامل للكروموسومات قبل الغرس (PGT-A / NGS)",
        "حفظ وتجميد البويضات والأجنة بالتبريد فائق السرعة (Vitrification)",
        "سحب الحيوانات المنوية جراحياً وميكروسكوبياً من الخصية (TESA / Micro-TESE)",
        "تقنية تصوير الأجنة المستمر داخل الحواضن الذكية (Time-Lapse EmbryoScope)",
        "تنظير الرحم التشخيصي والعلاجي لتهيئة بطانة الرحم للالتصاق"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة تحاليل الهرمونات والسائل المنوي",
          "description": "فحص مستويات AMH والهرمونات والتحليل الرقمي للحيوانات المنوية."
        },
        {
          "step": 2,
          "title": "وضع بروتوكول التنشيط الفردي",
          "description": "تحديد جرعات التنشيط الهرموني المناسبة لمخزون المبيض وعمر الزوجة."
        },
        {
          "step": 3,
          "title": "متابعة التبويض وسحب البويضات",
          "description": "متابعة نمو البويضات بالسونار وسحبها بدون ألم تحت تخدير بسيط وخفيف."
        },
        {
          "step": 4,
          "title": "الإخصاب المجهري والفحص الجيني",
          "description": "تلقيح البويضات بالحقن المجهري ومتابعة نمو الأجنة وفحصها وراثياً."
        },
        {
          "step": 5,
          "title": "نقل الأجنة المجمدة واختبار الحمل",
          "description": "إرجاع الأجنة ذات الجودة العالية وإجراء فحص هرمون الحمل في الدم (Beta-hCG)."
        }
      ],
      "whyIndia": [
        "معدلات نجاح إخصاب وحمل سريري تضاهي أرقى مراكز الخصوبة العالمية",
        "مختبرات أجنة معقمة بأعلى معايير النقاء الهوائي وغرف نظيفة فئة 10,000",
        "توفر الفحص الجيني الشامل للكروموسومات بتقنية الجيل القادم NGS",
        "تكلفة دورة الحقن المجهري توفر أكثر من 70% مقارنة بأوروبا وأمريكا"
      ],
      "faqs": [
        {
          "question": "ما هي نسبة نجاح الحقن المجهري في حالات الفشل المتكرر؟",
          "answer": "بفضل استخدام الفحص الوراثي للأجنة (PGT-A) واختيار الأجنة السليمة وراثياً قبل الإرجاع، ترتفع نسب الحمل السريري لتصل إلى 65% - 70% حتى لدى الحالات التي عانت من محاولات سابقة غير ناجحة."
        },
        {
          "question": "كم يوماً تحتاج الزوجة للبقاء في الهند لإتمام الدورة؟",
          "answer": "تحتاج الزوجة عادة من 15 إلى 20 يوماً لبدء التنشيط ومتابعة نمو البويضات وسحبها وإرجاع الأجنة وإجراء تحليل الحمل الأول قبل السفر براحة واطمئنان."
        }
      ]
    },
    "fr": {
      "title": "FIV et fertilité",
      "badge": "Médecine de reproduction",
      "shortDesc": "FIV avec ICSI, diagnostic génétique préimplantatoire (DPI / PGT-A), congélation ovocytaire et traitement de l'infertilité complexe.",
      "recommendedStay": "14 à 21 jours pour le cycle complet de FIV",
      "recoveryTimeline": "Procédure non chirurgicale ; reprise d'activité le lendemain",
      "overview": "Les centres de fertilité et d'assistance médicale à la procréation en Inde appliquent les technologies d'ICSI les plus récentes, l'incubation Time-Lapse (EmbryoScope) et le dépistage génétique préimplantatoire des anomalies chromosomiques (PGT-A) pour optimiser les taux de naissance vivante.",
      "conditionsTreated": [
        "Infertilité inexpliquée du couple ou échecs répétés d'implantation",
        "Obstruction ou altération bilatérale des trompes de Fallope",
        "Oligospermie, asthénospermie ou azoospermie masculine",
        "Syndrome des ovaires polykystiques (SOPK) et anovulation",
        "Endométriose sévère affectant la réserve et la qualité ovocytaire",
        "Âge maternel avancé avec diminution de la réserve ovarienne"
      ],
      "treatmentOptions": [
        "Injection intracytoplasmique de spermatozoïde (FIV - ICSI)",
        "Dépistage génétique préimplantatoire des aneuploïdies (PGT-A / NGS)",
        "Vitrification ultra-rapide des ovocytes et des embryons au stade blastocyste",
        "Prélèvement chirurgical de spermatozoïdes testiculaires (TESA / Micro-TESE)",
        "Suivi embryonnaire continu en incubateur intelligent Time-Lapse",
        "Hystéroscopie diagnostique et amélioration de la réceptivité endométriale"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Bilan hormonal complet et spermogramme",
          "description": "Dosage de l'AMH, bilan de réserve ovarienne et analyse de fragmentation de l'ADN spermatique."
        },
        {
          "step": 2,
          "title": "Protocole de stimulation ovarienne personnalisée",
          "description": "Prescription individualisée de gonadotrophines selon le profil ovarien."
        },
        {
          "step": 3,
          "title": "Monitorage échographique et ponction ovocytaire",
          "description": "Surveillance de la maturation folliculaire et ponction sous sédation légère."
        },
        {
          "step": 4,
          "title": "Fécondation ICSI et culture embryonnaire",
          "description": "Développement in vitro jusqu'au stade blastocyste (J5) et biopsie génétique."
        },
        {
          "step": 5,
          "title": "Transfert d'embryon et test de grossesse",
          "description": "Implantation de l'embryon sélectionné et dosage sanguin de bêta-hCG."
        }
      ],
      "whyIndia": [
        "Taux de succès de grossesse clinique comparables aux meilleurs centres américains",
        "Laboratoires d'embryologie sous flux laminaire stérile ISO de classe 10 000",
        "Accès systématique au séquençage génétique de nouvelle génération NGS",
        "Coût d'un cycle complet 70 % inférieur aux tarifs pratiqués en Europe et aux USA"
      ],
      "faqs": [
        {
          "question": "Quel est le taux de succès après plusieurs échecs de FIV ?",
          "answer": "Grâce au dépistage génétique PGT-A permettant de transférer exclusivement des embryons euploïdes, le taux de grossesse par transfert atteint 65 % à 70 %."
        },
        {
          "question": "Combien de temps faut-il séjourner en Inde pour une FIV ?",
          "answer": "La durée recommandée sur place est de 15 à 21 jours pour couvrir la fin de la stimulation, la ponction, le transfert d'embryon et le premier dosage hormonal."
        }
      ]
    },
    "ru": {
      "title": "ЭКО и лечение бесплодия",
      "badge": "Передовая репродуктология",
      "shortDesc": "ИКСИ (ICSI), генетическое тестирование эмбрионов (ПГТ-А / PGT-A), витрификация яйцеклеток и лечение сложных форм бесплодия.",
      "recommendedStay": "14–21 день для прохождения полного цикла ЭКО",
      "recoveryTimeline": "Неинвазивные процедуры; обычный образ жизни со следующего дня",
      "overview": "Клиники репродуктивной медицины и ЭКО в Индии оснащены новейшими эмбриологическими инкубаторами с технологией Time-Lapse (EmbryoScope) и генетическими анализаторами NGS для ПГТ-А, что позволяет отобрать генетически здоровый эмбрион и добиться наступления беременности даже при многократных неудачных попытках в прошлом.",
      "conditionsTreated": [
        "Первичное и вторичное бесплодие неясного генеза у супругов",
        "Трубно-перитонеальный фактор (непроходимость маточных труб)",
        "Тяжелый мужской фактор (олиго-, астено-, тератозооспермия, азооспермия)",
        "Синдром поликистозных яичников (СПКЯ) и ановуляторные циклы",
        "Тяжелые формы эндометриоза, влияющие на овариальный резерв",
        "Многократные неудачные попытки ЭКО в анамнезе"
      ],
      "treatmentOptions": [
        "Интрацитоплазматическая инъекция сперматозоида (ИКСИ / ICSI)",
        "Преимплантационное генетическое тестирование эмбрионов (ПГТ-А методом NGS)",
        "Сверхбыстрая витрификация (заморозка) яйцеклеток и эмбрионов",
        "Хирургическое извлечение сперматозоидов из яичка (TESA / Micro-TESE)",
        "Культивирование эмбрионов в инкубаторах EmbryoScope с видеофиксацией",
        "Офисная гистероскопия для подготовки эндометрия к переносу"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Анализ гормонов (АМГ) и спермограммы",
          "description": "Оценка овариального резерва женщины и фрагментации ДНК сперматозоидов."
        },
        {
          "step": 2,
          "title": "Индивидуальный протокол стимуляции",
          "description": "Подбор дозировок препаратов под контролем УЗИ."
        },
        {
          "step": 3,
          "title": "Пункция фолликулов под легким наркозом",
          "description": "Забор зрелых ооцитов без боли за 15–20 минут."
        },
        {
          "step": 4,
          "title": "Оплодотворение ИКСИ и генетический тест ПГТ-А",
          "description": "Культивирование до 5 суток (бластоциста) и биопсия клеток трофэктодермы."
        },
        {
          "step": 5,
          "title": "Перенос здорового эмбриона и тест ХГЧ",
          "description": "Бережный перенос эмбриона в полость матки и анализ крови на ХГЧ."
        }
      ],
      "whyIndia": [
        "Частота наступления клинической беременности достигает 65–70%",
        "Эмбриологические лаборатории чистых комнат класса ISO 10 000",
        "Широкое применение генетического секвенирования эмбрионов NGS",
        "Стоимость программы ЭКО в 3 раза ниже, чем в США, Великобритании или ОАЭ"
      ],
      "faqs": [
        {
          "question": "Каковы шансы на беременность после нескольких неудач ЭКО?",
          "answer": "Благодаря генетическому тестированию эмбрионов (ПГТ-А) и персонализированному протоколу переноса шансы на наступление беременности достигают 65–70% даже у пациенток старшей возрастной группы."
        },
        {
          "question": "Сколько дней нужно находиться в Индии для программы ЭКО?",
          "answer": "Обычно требуется от 15 до 21 дня: на завершение стимуляции, пункцию, культивирование, перенос эмбриона и контрольный тест на ХГЧ."
        }
      ]
    }
  },
  "cosmetic-surgery": {
    "ar": {
      "title": "الجراحة التجميلية ونحت القوام",
      "badge": "دقة وجمال طبيعي",
      "shortDesc": "تجميل الأنف، ونحت القوام بالفيزر (VASER Liposuction)، وتكبير وشد الثدي، وشد الوجه والبطن على يد كبار الجراحين المعتمدين دولياً.",
      "recommendedStay": "من 8 إلى 14 يوماً حسب نوع الإجراء التجميلي",
      "recoveryTimeline": "تعافٍ أولي في أسبوعين؛ والنتيجة النهائية الممتازة في 3-6 أشهر",
      "overview": "تجمع أقسام الجراحة التجميلية والترميمية في دلهي إن سي آر بين أرقى التقنيات الجراحية ونحت القوام عالي الدقة (VASER HD)، وأحدث غرف العمليات المعقمة، وأجهزة الليزر التجميلي بإشراف جراحي تجميل حاصلين على زمالات الكليات الملكية البريطانية والأمريكية لتحقيق نتائج جمالية طبيعية ومتناسقة.",
      "conditionsTreated": [
        "تشوهات وانحرافات الأنف التجميلية والوظيفية (صعوبة التنفس)",
        "تراكم الدهون العنيدة في البطن والخصر والظهر والذراعين",
        "ترهلات الجلد بعد فقدان الوزن الكبير أو الحمل والولادة",
        "صغر أو ترهل وعدم تناسق حجم الثديين",
        "تثدي الرجال وتضخم الغدد الدهنية في منطقة الصدر (Gynecomastia)",
        "علامات تقدم سن الوجه وتدلي الجفون وترهل الرقبة"
      ],
      "treatmentOptions": [
        "تجميل وإعادة تشكيل الأنف المفتوح والمغلق (Rhinoplasty)",
        "نحت القوام الديناميكي عالي الدقة بالموجات فوق الصوتية (VASER Lipo)",
        "شد وتجميل البطن المصغر والكامل (Tummy Tuck / Abdominoplasty)",
        "تكبير الثدي بالسيليكون المعتمد من FDA وشد وتصغير الثدي",
        "شد الوجه والرقبة العميق بالمنظار واستعادة نضارة الملامح (Facelift)",
        "إزالة تثدي الرجال بالفيزر من خلال ثقب مجهري غير مرئي"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "استشارة مصورة وتحديد الأهداف الجمالية",
          "description": "مشاركة صور فوتوغرافية ومناقشة التوقعات والنتائج الواقعية مع جراح التجميل."
        },
        {
          "step": 2,
          "title": "الفحوصات التجهيزية وموافقة التخدير",
          "description": "تحاليل سيولة الدم الشاملة ورسم القلب وأشعة الصدر لضمان الأمان التام."
        },
        {
          "step": 3,
          "title": "التدخل الجراحي التجميلي الدقيق",
          "description": "تنفيذ الجراحة في غرف عمليات مجهزة بأحدث أدوات النحت بدون ألم."
        },
        {
          "step": 4,
          "title": "المتابعة السريرية وارتداء المشد الطبي",
          "description": "متابعة تصريف السوائل، والتحكم في التورم، وارتداء المشد الضاغط المخصص."
        },
        {
          "step": 5,
          "title": "إزالة الغرز وفحص السفر جواً",
          "description": "فحص التئام الجروح، وتوفير كريمات الندبات، ومنح تصريح اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "جراحو تجميل معتمدون دولياً تدربوا في المملكة المتحدة وأمريكا",
        "استخدام أحدث أجهزة الفيزر VASER الأصلية وحشوات السيليكون المعتمدة عالمياً (Mentor وMotiva)",
        "مستشفيات كبرى معتمدة من JCI توفر أعلى درجات التعقيم وأمان التخدير",
        "أسعار تنافسية للغاية توفر 65% إلى 75% مقارنة بأوروبا ودول الخليج"
      ],
      "faqs": [
        {
          "question": "متى تظهر النتيجة النهائية لعملية شفط الدهون ونحت القوام؟",
          "answer": "يلاحظ المريض فرقاً واضحاً فور زوال التورم المبدئي خلال 2 إلى 3 أسابيع، بينما تستقر النتيجة الجمالية النهائية المشدودة والمنحوتة خلال 3 إلى 6 أشهر مع الالتزام بالمشد الطبي."
        },
        {
          "question": "هل تترك جراحات تجميل الأنف وشد البطن ندبات ظاهرة؟",
          "answer": "يستخدم جراحونا تقنيات إخفاء الشقوق الجراحية في الثنايا الطبيعية للجلد واستخدام الخيوط التجميلية المجهرية الدقيقة تحت الجلد، مما يجعل الندبات غير مرئية وتتلاشى مع الوقت."
        }
      ]
    },
    "fr": {
      "title": "Chirurgie plastique et esthétique",
      "badge": "Précision esthétique",
      "shortDesc": "Rhinoplastie, liposuccion VASER haute définition, plastie mammaire, abdominoplastie et lifting cervico-facial par des chirurgiens diplômés.",
      "recommendedStay": "8 à 14 jours selon interventions",
      "recoveryTimeline": "1 à 2 semaines initiales ; résultat optimal en 3-6 mois",
      "overview": "Les services de chirurgie plastique et esthétique de Delhi NCR associent technologies d'ultrasons VASER de pointe, implants mammaires agréés FDA et blocs opératoires stériles de haut niveau pour des résultats harmonieux et naturels.",
      "conditionsTreated": [
        "Dysharmonies du nez, déviation de la cloison et gêne respiratoire",
        "Surcharges graisseuses localisées rebelles au sport et aux régimes",
        "Relâchement cutané abdominal post-grossesse ou post-perte de poids",
        "Hypotrophie ou ptôse mammaire nécessitant augmentation ou lifting",
        "Gynécomastie masculine (développement anormal de la poitrine)",
        "Vieillissement du visage, relâchement du cou et poches sous les yeux"
      ],
      "treatmentOptions": [
        "Rhinoplastie ultrasonique structurelle et esthétique",
        "Liposuccion haute définition assistée par ultrasons (VASER Lipo HD)",
        "Abdominoplastie complète avec réparation des muscles grands droits",
        "Augmentation mammaire par implants en gel de silicone cohésif agréés FDA",
        "Lifting cervico-facial profond et blépharoplastie des 4 paupières",
        "Correction de gynécomastie par micro-incision sans rançon cicatricielle"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Analyse photographique et attentes esthétiques",
          "description": "Étude morphologique préliminaire et modélisation des résultats souhaités."
        },
        {
          "step": 2,
          "title": "Bilan sanguin préopératoire et anesthésie",
          "description": "Bilan de coagulation complet et consultation anesthésique sécurisée."
        },
        {
          "step": 3,
          "title": "Intervention chirurgicale au bloc",
          "description": "Geste de remodelage précis dans un bloc opératoire accrédité JCI."
        },
        {
          "step": 4,
          "title": "Surveillance et pose de vêtement compressif",
          "description": "Gestion de l'œdème et port du vêtement de contention adapté."
        },
        {
          "step": 5,
          "title": "Ablation des fils et autorisation de vol",
          "description": "Contrôle cicatriciel, prescription de soins locaux et certificat médical de vol."
        }
      ],
      "whyIndia": [
        "Chirurgiens plasticiens formés aux standards du Royal College britannique",
        "Utilisation exclusive de prothèses agréées US FDA (Mentor, Motiva)",
        "Sécurité hospitalière de niveau tertiaire avec zéro compromis sur la réanimation",
        "Économies substantielles de 60 % à 70 % par rapport aux cliniques européennes"
      ],
      "faqs": [
        {
          "question": "Quand le résultat définitif de la liposuccion VASER est-il visible ?",
          "answer": "L'amélioration de la silhouette est visible dès la résorption des premiers œdèmes à 3 semaines, et le résultat optimal et sculpté se stabilise entre 3 et 6 mois."
        },
        {
          "question": "Les cicatrices d'abdominoplastie ou de rhinoplastie sont-elles visibles ?",
          "answer": "Les incisions sont minutieusement dissimulées dans les plis naturels de l'aine ou sous la columelle du nez avec des sutures intradermiques très fines, s'estompant avec le temps."
        }
      ]
    },
    "ru": {
      "title": "Пластическая и эстетическая хирургия",
      "badge": "Эстетическая хирургия",
      "shortDesc": "Ринопластика, липосакция VASER, абдоминопластика, подтяжка лица и маммопластика у ведущих сертифицированных хирургов.",
      "recommendedStay": "8–14 дней в зависимости от объема",
      "recoveryTimeline": "1–2 недели первично; окончательный эффект через 3–6 месяцев",
      "overview": "Отделения пластической и реконструктивной хирургии Дели NCR объединяют передовые ультразвуковые аппараты VASER HD, сертифицированные импланты FDA и опытнейших хирургов с международной практикой для создания естественных, гармоничных пропорций лица и тела.",
      "conditionsTreated": [
        "Эстетическая деформация формы носа и искривление носовой перегородки",
        "Локальные жировые ловушки на животе, боках, бедрах и спине",
        "Птоз (обвисание) кожи живота после родов или резкого похудения",
        "Недостаточный объем или асимметрия молочных желез",
        "Гинекомастия (увеличение грудных желез у мужчин)",
        "Возрастные изменения овала лица, брыли и избытки кожи век"
      ],
      "treatmentOptions": [
        "Открытая и закрытая функциональная риносептопластика",
        "Ультразвуковая липосакция высокого разрешения (VASER Lipo HD)",
        "Тотальная абдоминопластика с ушиванием диастаза прямых мышц живота",
        "Маммопластика с использованием силиконовых имплантов FDA (Mentor, Motiva)",
        "Глубокий SMAS-лифтинг лица и шеи, блефаропластика",
        "Малоинвазивное лечение гинекомастии через точечные проколы"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Фотоанализ и моделирование желаемого результата",
          "description": "Обсуждение реалистичных пропорций и хирургического доступа."
        },
        {
          "step": 2,
          "title": "Предоперационные анализы и осмотр анестезиолога",
          "description": "Коагулограмма, ЭКГ и допуск к наркозу в аккредитованной клинике."
        },
        {
          "step": 3,
          "title": "Выполнение пластической операции",
          "description": "Прецизионная пластика с использованием микрохирургического инструментария."
        },
        {
          "step": 4,
          "title": "Послеоперационный уход и компрессионное белье",
          "description": "Контроль спадения отеков и ношение специального белья."
        },
        {
          "step": 5,
          "title": "Снятие швов и допуск к авиаперелету",
          "description": "Контрольный осмотр хирурга, рекомендации по уходу за рубцами и выписка."
        }
      ],
      "whyIndia": [
        "Пластические хирурги с многолетней практикой в Великобритании и США",
        "Оригинальное ультразвуковое оборудование VASER и сертифицированные импланты FDA",
        "Высочайшая безопасность многопрофильных госпиталей JCI с палатами интенсивной терапии",
        "Цены на 65–70% выгоднее, чем в клиниках Швейцарии, Великобритании или Южной Кореи"
      ],
      "faqs": [
        {
          "question": "Когда виден окончательный результат ультразвуковой липосакции VASER?",
          "answer": "Первые контуры тела заметны уже через 2–3 недели по мере спадения отеков, а окончательный рельефный результат формируется в течение 3–6 месяцев при ношении компрессионного белья."
        },
        {
          "question": "Остаются ли заметные рубцы после абдоминопластики?",
          "answer": "Разрез при абдоминопластике располагается максимально низко в зоне бикини и легко скрывается даже открытым нижним бельем, со временем превращаясь в тонкую светлую полоску."
        }
      ]
    }
  },
  "general-surgery": {
    "ar": {
      "title": "الجراحة العامة وجراحة المناظير",
      "badge": "جراحة ثقب المفتاح طفيفة التوغل",
      "shortDesc": "جراحات البطن بالمنظار والروبوت لعلاج الفتق، وحصوات المرارة، والتهاب الزائدة الدودية، وجراحات السمنة وتكميم المعدة.",
      "recommendedStay": "من 5 إلى 8 أيام للجراحات الروتينية؛ ومن 8 إلى 10 أيام لجراحات السمنة",
      "recoveryTimeline": "العودة للعمل المكتبي في 7-10 أيام؛ تجنب رفع الأثقال لمدة 4 أسابيع",
      "overview": "تتميز أقسام الجراحة العامة وجراحة المناظير في الهند بتطبيق تقنيات ثقب المفتاح طفيفة التوغل والجراحة الروبوتية المتقدمة لاستئصال المرارة وعلاج الفتق وجراحات السمنة (تكميم وتحويل مسار المعدة) بأقل قدر من الألم الجراحي وأسرع فترة إقامة بالمستشفى.",
      "conditionsTreated": [
        "حصوات والتهابات المرارة الحادة والمزمنة",
        "الفتق الإربي والسري وفتق ما بعد الجراحات السابقة",
        "السمنة المفرطة والأمراض الأيضية المصاحبة (السكري وارتفاع الضغط)",
        "أورام وأمراض القولون والمستقيم الحميدة والخبيثة",
        "التهاب الزائدة الدودية الحاد وحصوات القناة الصفراوية",
        "أمراض الشرج والمستقيم (البواسير، الشق الشرجي، والناسور بالليزر)"
      ],
      "treatmentOptions": [
        "استئصال المرارة بالمنظار عبر شقوق مجهرية (Laparoscopic Cholecystectomy)",
        "إصلاح الفتق بالمنظار مع تثبيت الشبكة الجراحية (TEP / TAPP Hernia Repair)",
        "تكميم المعدة بالمنظار وجراحة تحويل المسار المصغر لعلاج السمنة",
        "استئصال الزائدة الدودية بالمنظار عبر ثقب واحد",
        "علاج البواسير والناسور بأحدث تقنيات الليزر بدون جراحة مفتوحة",
        "جراحات الجهاز الهضمي المتقدمة بمساعدة الروبوت da Vinci"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة السونار والأشعة المقطعية للبطن",
          "description": "تحديد حجم حصوات المرارة أو أبعاد الفتق بدقة بواسطة الجراحين."
        },
        {
          "step": 2,
          "title": "الفحوصات السريرية وموافقة التخدير",
          "description": "فحوصات الدم ووظائف الكبد وتخطيط القلب لتأمين الجراحة."
        },
        {
          "step": 3,
          "title": "التدخل الجراحي بالمنظار أو الروبوت",
          "description": "تنفيذ الجراحة عبر شقوق مليمترية طفيفة تحت التخدير العام."
        },
        {
          "step": 4,
          "title": "بدء التغذية والحركة في نفس اليوم",
          "description": "استئناف شرب السوائل والمشي في ممرات المستشفى خلال ساعات قليلة."
        },
        {
          "step": 5,
          "title": "متابعة التئام الجروح وتصريح الطيران",
          "description": "فحص الشقوق المجهرية والتأكد من انتظام حركة الأمعاء والسفر بأمان."
        }
      ],
      "whyIndia": [
        "رواد جراحة المناظير في آسيا مع تنفيذ ملايين الجراحات الناجحة",
        "أحدث غرف العمليات المزودة بكاميرات 4K ثلاثية الأبعاد وأنظمة الروبوت",
        "معدلات إقامة فائقة القصر (من 24 إلى 48 ساعة فقط في المستشفى)",
        "تكلفة اقتصادية للغاية تقل بنسبة 70% مقارنة بالغرب ودول الخليج"
      ],
      "faqs": [
        {
          "question": "متى يمكنني المشي وتناول الطعام بعد استئصال المرارة بالمنظار؟",
          "answer": "يستطيع المريض المشي وتناول السوائل الخفيفة بعد 4 إلى 6 ساعات فقط من انتهاء جراحة المنظار، ويغادر معظم المرضى المستشفى في اليوم التالي مباشرة."
        },
        {
          "question": "كم يوماً يجب أن أنتظر قبل السفر بالطائرة بعد جراحة الفتق أو المرارة؟",
          "answer": "يمكن للمريض السفر جواً بأمان تام بعد 5 إلى 7 أيام من جراحات المناظير البسيطة، شريطة استقرار حركة الأمعاء وعدم وجود أي آلام حادة."
        }
      ]
    },
    "fr": {
      "title": "Chirurgie générale et laparoscopique",
      "badge": "Chirurgie mini-invasive",
      "shortDesc": "Chirurgie abdominale laparoscopique et robotique : hernies, vésicule biliaire, appendicite et chirurgie bariatrique.",
      "recommendedStay": "5 à 8 jours en chirurgie courante ; 8 à 10 jours en bariatrie",
      "recoveryTimeline": "Travail de bureau sous 7-10 jours",
      "overview": "Les services de chirurgie générale et viscérale en Inde sont pionniers de la cœlioscopie avancée et de la chirurgie robotique pour la vésicule biliaire, les cures de hernie et la chirurgie bariatrique de l'obésité avec une durée d'hospitalisation réduite au minimum.",
      "conditionsTreated": [
        "Lithiase vésiculaire symptomatique et cholécystite aiguë",
        "Hernies inguinales, ombilicales et éventrations postopératoires",
        "Obésité morbide et syndrome métabolique (diabète de type 2)",
        "Appendicite aiguë et urgences abdominales infectieuses",
        "Pathologies colorectales bénignes et diverticulites",
        "Pathologie proctologique (hémorroïdes, fissures, fistules par laser)"
      ],
      "treatmentOptions": [
        "Cholécystectomie par laparoscopie mini-invasive (ablation de la vésicule)",
        "Cure de hernie sous cœlioscopie avec pose de prothèse (TAPP / TEP)",
        "Sleeve gastrectomie et bypass gastrique par voie laparoscopique",
        "Appendicectomie laparoscopique par abord mini-invasif",
        "Traitement au laser des hémorroïdes et fistules anales sans plaie ouverte",
        "Chirurgie digestive majeure assistée par robot chirurgical da Vinci"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Échographie abdominale et bilan préopératoire",
          "description": "Localisation précise des calculs biliaires ou de l'orifice herniaire."
        },
        {
          "step": 2,
          "title": "Consultation anesthésique sécurisée",
          "description": "Bilan sanguin standard, radiographie pulmonaire et électrocardiogramme."
        },
        {
          "step": 3,
          "title": "Intervention sous cœlioscopie mini-invasive",
          "description": "Opération menée à travers 3 à 4 micro-incisions millimétriques."
        },
        {
          "step": 4,
          "title": "Premier lever et réalimentation précoce",
          "description": "Mobilisation et reprise des boissons claires le jour même de l'opération."
        },
        {
          "step": 5,
          "title": "Contrôle cicatriciel et autorisation de vol",
          "description": "Ablation des pansements et certificat médical d'aptitude au voyage aérien."
        }
      ],
      "whyIndia": [
        "Centre d'excellence en chirurgie cœlioscopique fort de décennies d'expérience",
        "Colonnes vidéo 4K ultra-haute définition et instrumentation robotique fine",
        "Séjours hospitaliers ultracourts (24h à 48h de surveillance en moyenne)",
        "Tarifs compétitifs avec une économie de 60 % à 70 % par rapport à l'Europe"
      ],
      "faqs": [
        {
          "question": "Quand peut-on remarcher après une ablation de la vésicule par cœlioscopie ?",
          "answer": "Le patient se lève et marche quelques heures après l'intervention. La sortie d'hospitalisation intervient généralement 24 heures après la chirurgie."
        },
        {
          "question": "Combien de temps avant de pouvoir prendre l'avion après une chirurgie laparoscopique ?",
          "answer": "Un délai de 5 à 7 jours est généralement suffisant pour permettre la résorption des gaz cœlioscopiques et garantir un vol serein."
        }
      ]
    },
    "ru": {
      "title": "Общая и лапароскопическая хирургия",
      "badge": "Малоинвазивная хирургия",
      "shortDesc": "Лапароскопические и роботизированные операции: грыжи, желчнокаменная болезнь, аппендицит и бариатрическая хирургия.",
      "recommendedStay": "5–8 дней при плановых операциях; 8–10 дней при бариатрии",
      "recoveryTimeline": "Офисная работа через 7–10 дней",
      "overview": "Отделения общей и эндоскопической хирургии клиник Дели NCR являются мировыми лидерами по числу лапароскопических операций через проколы при желчнокаменной болезни, паховых грыжах и бариатрических вмешательствах для снижения веса с минимальным болевым синдромом.",
      "conditionsTreated": [
        "Желчнокаменная болезнь (ЖКБ), калькулезный холецистит",
        "Паховые, пупочные и послеоперационные вентральные грыжи",
        "Морбидное ожирение и метаболический синдром (сахарный диабет 2 типа)",
        "Острый аппендицит и спаечная болезнь брюшной полости",
        "Заболевания толстой кишки, полипоз и дивертикулез",
        "Проктологические патологии (лазерное лечение геморроя и свищей)"
      ],
      "treatmentOptions": [
        "Лапароскопическая холецистэктомия (удаление желчного пузыря через проколы)",
        "Лапароскопическая герниопластика с установкой сетчатого импланта (ТЕР/ТАРР)",
        "Продольная резекция желудка (Sleeve) и желудочное шунтирование (Bypass)",
        "Лапароскопическая аппендэктомия через мини-доступ",
        "Лазерная коагуляция геморроидальных узлов и свищей без разрезов",
        "Роботизированные абдоминальные операции на комплексе da Vinci"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "УЗИ брюшной полости и предоперационный чекап",
          "description": "Оценка размеров конкрементов желчного пузыря или дефекта грыжи."
        },
        {
          "step": 2,
          "title": "Консультация хирурга и анестезиолога",
          "description": "Стандартные анализы крови, коагулограмма и ЭКГ."
        },
        {
          "step": 3,
          "title": "Лапароскопическая операция через микропроколы",
          "description": "Вмешательство под оптическим увеличением 4K без больших разрезов."
        },
        {
          "step": 4,
          "title": "Подъем на ноги и питье в день операции",
          "description": "Ранняя активизация пациента через 3–4 часа после выхода из наркоза."
        },
        {
          "step": 5,
          "title": "Контрольный осмотр и допуск к вылету",
          "description": "Оценка заживления проколов, снятие наклеек и сертификат Fit-to-fly."
        }
      ],
      "whyIndia": [
        "Колоссальный опыт хирургов в проведении лапароскопических операций",
        "Современные видеостойки 4K 3D и высокоэнергетические коагуляторы",
        "Короткий срок госпитализации (обычно всего 1–2 суток в палате)",
        "Стоимость операций на 70% ниже, чем в аналогичных частных центрах Европы"
      ],
      "faqs": [
        {
          "question": "Когда можно ходить и есть после удаления желчного пузыря?",
          "answer": "Вставать и пить воду можно уже через 4–6 часов после лапароскопии. Выписка из клиники в отель обычно происходит на следующий день."
        },
        {
          "question": "Через сколько дней после лапароскопии разрешен авиаперелет?",
          "answer": "При неосложненных лапароскопических операциях перелет разрешается через 5–7 дней после контрольного осмотра оперирующим хирургом."
        }
      ]
    }
  },
  "dental-treatment": {
    "ar": {
      "title": "طب وجراحة وزراعة الأسنان",
      "badge": "ابتسامة وصحة الأسنان",
      "shortDesc": "إعادة تأهيل الفم بالكامل، وزراعة الأسنان الفورية All-on-4 وAll-on-6، وتصميم الابتسامة الرقمية (هوليوود سمايل)، وجراحة الفكين التقويمية.",
      "recommendedStay": "من 7 إلى 10 أيام للزراعة الفورية وتجميل الابتسامة",
      "recoveryTimeline": "استئناف الأكل الطبيعي خلال أيام؛ يكتمل الاندماج العظمي في 3-6 أشهر",
      "overview": "تضم مراكز طب وتجميل الأسنان المتقدمة في دلهي إن سي آر تقنيات التصميم الرقمي للابتسامة (Digital Smile Design)، وأشعة الفك المقطعية ثلاثية الأبعاد (CBCT)، وتصنيع التركيبات بالكمبيوتر في نفس اليوم بتقنية CAD/CAM، لتوفير زراعة الأسنان الفورية وابتسامة هوليوود بأعلى معايير الدقة الجمالية.",
      "conditionsTreated": [
        "فقدان الأسنان الكامل أو الجزئي وضمور عظام الفكين",
        "تآكل واصفرار وتكسر الأسنان الشديد وعدم تناسق الابتسامة",
        "تشوهات إطباق الفكين والبروز الشديد (جراحات الفك التقويمية)",
        "أمراض اللثة المتقدمة وانحسار عظم السن المحيط",
        "التهابات عصب الأسنان المعقدة وحاجة علاج الجذور المجهري",
        "ضروس العقل المطمورة المسببة لآلام وتلف الأسنان المجاورة"
      ],
      "treatmentOptions": [
        "زراعة الأسنان الفورية والتحميل الفوري لنفس اليوم (All-on-4 / All-on-6)",
        "ابتسامة هوليوود وعدسات الفينير واللومينير الخزفية فائقة الرقة (E-max)",
        "زراعة وتطعيم عظام الفك ورفع الجيب الفكي الأنفي (Sinus Lift)",
        "علاج جذور وعصب الأسنان بالميكروسكوب في جلسة واحدة",
        "جراحة الفكين التقويمية وتصحيح العضة بالكمبيوتر (Orthognathic Surgery)",
        "تيجان وجسور الزيركون المصنعة بالليزر والكمبيوتر (CAD/CAM Zirconia)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "الأشعة المقطعية للفكين 3D CBCT",
          "description": "قياس كثافة وعمق عظام الفك بدقة وتحديد المسار الرقمي للزرعات."
        },
        {
          "step": 2,
          "title": "التصميم الرقمي للابتسامة ومحاكاة النتيجة",
          "description": "معاينة شكل الابتسامة والأسنان ثلاثية الأبعاد على الشاشة قبل البدء."
        },
        {
          "step": 3,
          "title": "غرس الزرعات السويسرية / الألمانية",
          "description": "تثبيت زرعات التيتانيوم المعتمدة تحت التخدير الموضعي أو التهدئة بدون ألم."
        },
        {
          "step": 4,
          "title": "تركيب الأسنان والجسور المؤقتة الفورية",
          "description": "الحصول على أسنان ثابتة لممارسة الأكل والابتسام من اليوم الأول."
        },
        {
          "step": 5,
          "title": "تثبيت التركيبات النهائية وتصريح السفر",
          "description": "تثبيت تيجان الزيركون أو الإيماكس النهائية وفحص الإطباق والمغادرة بأمان."
        }
      ],
      "whyIndia": [
        "استخدام أشهر الزرعات السويسرية والأمريكية المعتمدة عالمياً (Straumann وNobel Biocare)",
        "مختبرات رقمية داخلية لتصنيع التيجان بتقنية CAD/CAM خلال 24 إلى 48 ساعة",
        "أطباء وجراحو فم وأسنان حاصلون على أعلى البوردات والزمالات الدولية",
        "توفير هائل بنسبة 70% إلى 80% في تكلفة الزراعة وهوليوود سمايل مقارنة بالغرب والخليج"
      ],
      "faqs": [
        {
          "question": "هل يمكن الحصول على أسنان ثابتة في نفس اليوم بتقنية All-on-4؟",
          "answer": "نعم، بفضل تقنية التحميل الفوري All-on-4 / All-on-6، يقوم الجراح بغرس 4 أو 6 زرعات وتثبيت جسر أسنان ثابت مؤقت خلال 24 إلى 48 ساعة، مما يتيح لك الابتسام وتناول الطعام فورياً."
        },
        {
          "question": "ما هي ماركات زرعات الأسنان المستخدمة وضمانها؟",
          "answer": "تستخدم مراكزنا كبرى الماركات العالمية السويسرية والألمانية والأمريكية مثل Straumann وNobel Biocare وOsstem مع بطاقة ضمان دولية معتمدة تدوم مدى الحياة."
        }
      ]
    },
    "fr": {
      "title": "Soins et implants dentaires",
      "badge": "Esthétique dentaire",
      "shortDesc": "Réhabilitation buccale complète, implants All-on-4 / All-on-6, conception numérique du sourire et chirurgie maxillo-faciale.",
      "recommendedStay": "7 à 10 jours en Inde",
      "recoveryTimeline": "Alimentation normale sous quelques jours ; ostéointégration en 3-6 mois",
      "overview": "Les cliniques dentaires d'excellence à Delhi NCR intègrent scanner 3D Cone Beam (CBCT), conception numérique du sourire (DSD) et usinage assisté par ordinateur CAD/CAM pour des implants immédiats et des facettes de haute précision.",
      "conditionsTreated": [
        "Édentement partiel ou complet avec perte de masse osseuse",
        "Dents usées, jaunies, fracturées ou mal alignées",
        "Malocclusions complexes et dysmorphies des mâchoires",
        "Maladie parodontale avancée et déchaussement dentaire",
        "Infections radiculaires complexes nécessitant endodontie microscopique",
        "Dents de sagesse incluses et kystes des maxillaires"
      ],
      "treatmentOptions": [
        "Implantation immédiate All-on-4 et All-on-6 pour arcade complète",
        "Facettes dentaires esthétiques ultra-fines en céramique E-max",
        "Comblement osseux et greffe de sinus (Sinus Lift)",
        "Endodontie et traitement de canal sous microscope en une séance",
        "Chirurgie orthognathique et correction des mâchoires par simulation 3D",
        "Couronnes et bridges en zircone usinés par CFAO numérique"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Scanner volumique 3D (Cone Beam CBCT)",
          "description": "Cartographie de la hauteur osseuse et des trajets nerveux pour guider les implants."
        },
        {
          "step": 2,
          "title": "Conception numérique du sourire (DSD)",
          "description": "Simulation interactive de la nouvelle ligne de sourire sur écran haute définition."
        },
        {
          "step": 3,
          "title": "Pose des implants en titane sous anesthésie locale",
          "description": "Implantation atraumatique guidée par ordinateur sans douleur."
        },
        {
          "step": 4,
          "title": "Fixation de la prothèse provisoire immédiate",
          "description": "Pose d'un bridge fixe provisoire permettant de mastiquer et sourire dès le premier jour."
        },
        {
          "step": 5,
          "title": "Ajustement de l'occlusion et certificat de départ",
          "description": "Pose des céramiques définitives zircone/E-max et remise de la garantie internationale."
        }
      ],
      "whyIndia": [
        "Systèmes d'implants suisses et suédois de réputation mondiale (Straumann, Nobel Biocare)",
        "Laboratoires CFAO intégrés garantissant des prothèses prêtes en 48 heures",
        "Praticiens spécialistes diplômés et formés aux techniques esthétiques internationales",
        "Tarifs tout compris 70 % à 80 % moins onéreux qu'en Europe et aux États-Unis"
      ],
      "faqs": [
        {
          "question": "Peut-on repartir avec des dents fixes immédiatement avec All-on-4 ?",
          "answer": "Oui, la mise en charge immédiate permet de fixer une prothèse transitoire vissée en 24 à 48 heures sur les 4 implants posés, sans période sans dents."
        },
        {
          "question": "Les implants dentaires sont-ils assortis d'une garantie ?",
          "answer": "Oui, les implants de premier rang (Straumann, Nobel Biocare) bénéficient d'un passeport implantaire international et d'une garantie mondiale du fabricant."
        }
      ]
    },
    "ru": {
      "title": "Стоматология и дентальная имплантация",
      "badge": "Здоровье улыбки",
      "shortDesc": "Полная реабилитация полости рта, имплантация All-on-4 / All-on-6, цифровой дизайн улыбки и челюстно-лицевая хирургия.",
      "recommendedStay": "7–10 дней в Индии",
      "recoveryTimeline": "Обычное питание через несколько дней; остеоинтеграция 3–6 месяцев",
      "overview": "Стоматологические центры Дели NCR применяют 3D-томографию (КЛКТ), цифровой дизайн улыбки (Digital Smile Design) и технологию CAD/CAM для немедленной нагрузки при имплантации All-on-4/6 и установки эстетических виниров E-max мирового класса.",
      "conditionsTreated": [
        "Полное или частичное отсутствие зубов (адентия) и атрофия кости",
        "Стираемость, потемнение эмали, сколы зубов и дефекты улыбки",
        "Сложные нарушения прикуса и деформации челюстей",
        "Тяжелый пародонтит и подвижность зубов",
        "Кисты и сложные воспалительные процессы в корневых каналах",
        "Ретинированные зубы мудрости с риском смещения зубного ряда"
      ],
      "treatmentOptions": [
        "Имплантация All-on-4 и All-on-6 с немедленной нагрузкой несъемным протезом",
        "Установка тонкостенных керамических виниров E-max (голливудская улыбка)",
        "Костная пластика челюстей и открытый/закрытый синус-лифтинг",
        "Лечение корневых каналов зубов под операционным микроскопом",
        "Ортогнатическая хирургия челюстей с компьютерным 3D-планированием",
        "Безметалловые коронки и мостовидные протезы из диоксида циркония CAD/CAM"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "3D-томография челюстей (КЛКТ)",
          "description": "Оценка плотности кости и виртуальное позиционирование имплантов."
        },
        {
          "step": 2,
          "title": "Цифровой дизайн улыбки (DSD)",
          "description": "Визуализация будущей улыбки на экране до начала манипуляций."
        },
        {
          "step": 3,
          "title": "Установка титановых имплантов без боли",
          "description": "Малоинвазивная операция под местной анестезией или седацией."
        },
        {
          "step": 4,
          "title": "Фиксация несъемного адаптационного протеза",
          "description": "Установка зубов на 1-2 сутки с возможностью сразу улыбаться и жевать."
        },
        {
          "step": 5,
          "title": "Установка постоянных циркониевых коронок",
          "description": "Проверка прикуса, выдача паспорта имплантации и допуск к вылету."
        }
      ],
      "whyIndia": [
        "Использование премиальных швейцарских имплантов Straumann и Nobel Biocare",
        "Собственные цифровые зуботехнические лаборатории CAD/CAM с изготовлением за 48 часов",
        "Опытные челюстно-лицевые хирурги с международными сертификатами",
        "Экономия до 75% по сравнению со стоимостью имплантации в ОАЭ, Европе и США"
      ],
      "faqs": [
        {
          "question": "Можно ли получить несъемные зубы за один день по технологии All-on-4?",
          "answer": "Да, протокол All-on-4 / All-on-6 позволяет зафиксировать красивый несъемный мостовидный протез в течение 24–48 часов после установки имплантов."
        },
        {
          "question": "Предоставляется ли гарантия на установленные зубные импланты?",
          "answer": "Да, на оригинальные импланты ведущих мировых систем (Straumann, Nobel Biocare) выдается международный паспорт с пожизненной гарантией производителя."
        }
      ]
    }
  },
  "bone-marrow-transplant": {
    "ar": {
      "title": "زراعة نخاع العظم (BMT)",
      "badge": "أجنحة عزل معقمة",
      "shortDesc": "زراعة نخاع العظم الذاتية والتناسلية لعلاج اللوكيميا، والليمفوما، والمايلوما، والثلاسيميا في غرف عزل مزودة بفلاتر HEPA فائقة النقاء.",
      "recommendedStay": "من 30 إلى 60 يوماً في الهند للعلاج وفترة استعادة المناعة",
      "recoveryTimeline": "استقرار كريات الدم في 3-4 أسابيع؛ استعادة المناعة في 3-6 أشهر",
      "overview": "تعد وحدات زراعة نخاع العظم والخلايا الجذعية في الهند من الأكبر والأحدث في العالم، وتتميز بأجنحة عزل مزودة بتدفق الهواء الصفائحي وفلاتر HEPA عالية الكفاءة لمكافحة العدوى، مع تحقيق معدلات شفاء دولية في زراعة النخاع الذاتية والتناسلية ونصف المتطابقة (Haploidentical) لعلاج سرطانات الدم وأمراض نقص المناعة والثلاسيميا.",
      "conditionsTreated": [
        "اللوكيميا الحادة والمزمنة (سرطان الدم النخاعي والليمفاوي)",
        "أورام الغدد الليمفاوية (هودجكين وغير هودجكين) المتكررة",
        "المايلوما المتعددة (Multiple Myeloma)",
        "أنيميا البحر المتوسط (الثلاسيميا الكبرى Thalassemia Major)",
        "فقر الدم المنجلي (Sickle Cell Disease) والأنيميا اللاتنسجية",
        "متلازمات نقص المناعة الأولية واضطرابات التمثيل الغذائي الوراثية"
      ],
      "treatmentOptions": [
        "زراعة نخاع العظم التناسلية من متبرع شقيق متطابق (Matched Sibling Donor BMT)",
        "زراعة نخاع العظم نصف المتطابقة من أحد الوالدين (Haploidentical BMT)",
        "زراعة الخلايا الجذعية الذاتية لسرطانات الدم (Autologous Stem Cell Transplant)",
        "زراعة الخلايا الجذعية من متبرع غير قريب متطابق دولياً (MUD BMT)",
        "العلاج الخلوي المتقدم والمعالجة المناعية التكميلية",
        "غرف عزل معقمة بضغط هواء إيجابي وفلاتر HEPA فائقة النقاء"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "تحليل تطابق الأنسجة HLA عالي الدقة",
          "description": "إجراء فحص التنميط الجيني لمستضدات الكريات البيضاء للمريض وأفراد العائلة."
        },
        {
          "step": 2,
          "title": "تقييم الحالة وتحديد بروتوكول التحضير",
          "description": "اختيار نظام العلاج الكيماوي التمهيدي المناسب لنوع المرض."
        },
        {
          "step": 3,
          "title": "العزل المعقم وجمع الخلايا الجذعية",
          "description": "دخول غرفة العزل HEPA وجمع الخلايا الجذعية من المتبرع أو المريض بتقنية فصادة الدم."
        },
        {
          "step": 4,
          "title": "تسريب الخلايا الجذعية ومراقبة الالتصاق",
          "description": "حقن الخلايا الجذعية بالوريد والمتابعة اليومية الدقيقة حتى بدء إنتاج كريات الدم الجديدة (Engraftment)."
        },
        {
          "step": 5,
          "title": "استعادة المناعة وتصريح السفر الآمن",
          "description": "التأكد من استقرار صفائح الدم والمناعة ومكافحة العدوى ومنح تصريح السفر الآمن."
        }
      ],
      "whyIndia": [
        "أكثر من 5,000 عملية زراعة نخاع عظم ناجحة بنسب شفاء تضاهي المراكز الأمريكية",
        "ريادة عالمية في زراعات النخاع نصف المتطابقة (Haplo) من أحد الوالدين في حال عدم توفر متبرع متطابق تماماً",
        "أجنحة عزل ومكافحة عدوى بأعلى المعايير الدولية الصارمة",
        "تكلفة إجمالية توفر ما يصل إلى 80% مقارنة بالولايات المتحدة والمملكة المتحدة"
      ],
      "faqs": [
        {
          "question": "ماذا لو لم يتوفر متبرع متطابق بنسبة 100% بين الإخوة؟",
          "answer": "يمتلك خبراؤنا خبرة رائدة في زراعة نخاع العظم نصف المتطابقة (Haploidentical BMT)، حيث يمكن لأحد الوالدين أو الأبناء التبرع بنسبة تطابق 50% مع تطبيق بروتوكولات متطورة لتنقية الخلايا بنسب نجاح عالية جداً."
        },
        {
          "question": "كم يوماً يقضي المريض داخل غرفة العزل المعقمة؟",
          "answer": "يمكث المريض عادة داخل غرفة العزل المزودة بفلاتر HEPA بين 3 إلى 4 أسابيع حتى يرتفع تعداد خلايا الدم البيضاء وتستقر مناعته تماماً ويستطيع مغادرة العزل بأمان."
        }
      ]
    },
    "fr": {
      "title": "Greffe de moelle osseuse (BMT)",
      "badge": "Unités stériles HEPA",
      "shortDesc": "Greffes autologues et allogéniques pour leucémies, lymphomes et thalassémies au sein d'unités de pointe à flux laminaire HEPA.",
      "recommendedStay": "30 à 60 jours en Inde pour la greffe et la consolidation immunitaire",
      "recoveryTimeline": "Prise de greffe en 3-4 semaines ; restauration immunitaire en 3-6 mois",
      "overview": "Les centres de greffe de moelle osseuse et thérapie cellulaire en Inde disposent de chambres stériles en pression positive avec filtration HEPA de classe mondiale, garantissant des taux de rémission élevés pour les leucémies, thalassémies et lymphomes en greffe allogénique, autologue et haplo-identique.",
      "conditionsTreated": [
        "Leucémies aiguës myéloïdes et lymphoblastiques (LAM, LAL)",
        "Lymphomes hodgkiniens et non hodgkiniens réfractaires ou en rechute",
        "Myélome multiple et amylose",
        "Bêta-thalassémie majeure et drépanocytose",
        "Aplasie médullaire idiopathique sévère",
        "Déficits immunitaires combinés sévères (DICS)"
      ],
      "treatmentOptions": [
        "Greffe allogénique intrafamiliale géno-identique (donneur HLA compatible)",
        "Greffe haplo-identique à 50 % de compatibilité (donneur parental)",
        "Autogreffe de cellules souches hématopoïétiques conditionnée",
        "Greffe de donneur volontaire non apparenté fichier mondial (MUD)",
        "Chambres stériles protégées avec sas et flux d'air laminaire HEPA",
        "Immunothérapie ciblée post-greffe et photophérèse extracorporelle"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Typage HLA haute résolution receveur-donneur",
          "description": "Confirmation de la compatibilité allélique sur les loci majeurs."
        },
        {
          "step": 2,
          "title": "Bilan de pré-greffe et choix du conditionnement",
          "description": "Bilan cardiaque, pulmonaire et hématologique complet."
        },
        {
          "step": 3,
          "title": "Admission en unité stérile et aphérèse",
          "description": "Conditionnement myéloablatif et recueil des cellules souches CD34+."
        },
        {
          "step": 4,
          "title": "Perfusion des cellules souches et prise de greffe",
          "description": "Surveillance de la prise de greffe (engraftment) et prévention du rejet."
        },
        {
          "step": 5,
          "title": "Consolidation immunologique et sortie",
          "description": "Suivi des chimérismes, relais médicamenteux et aptitude au vol sécurisé."
        }
      ],
      "whyIndia": [
        "Plus de 5 000 greffes de moelle réalisées avec des taux de survie comparables aux centres américains",
        "Pionniers des greffes haplo-identiques permettant à presque tout patient d'avoir un donneur",
        "Unités d'isolement stériles sous contrôle microbiologique strict",
        "Coût global jusqu'à 80 % moins onéreux qu'aux États-Unis et en Europe"
      ],
      "faqs": [
        {
          "question": "Que faire si aucun donneur compatible à 100 % n'existe dans la fratrie ?",
          "answer": "La greffe haplo-identique permet d'utiliser l'un des parents ou un enfant compatible à 50 % grâce à des protocoles immunosuppresseurs post-greffe (cyclophosphamide post-greffe) très efficaces."
        },
        {
          "question": "Quelle est la durée de séjour en chambre stérile isolée ?",
          "answer": "Le patient séjourne habituellement en chambre stérile HEPA entre 3 et 4 semaines, jusqu'à la remontée durable des neutrophiles et des plaquettes sanguines."
        }
      ]
    },
    "ru": {
      "title": "Трансплантация костного мозга (ТКМ)",
      "badge": "Стерильные боксы HEPA",
      "shortDesc": "Аутологичная и аллогенная трансплантация костного мозга при лейкозах, лимфомах и талассемии в специализированных боксах HEPA.",
      "recommendedStay": "30–60 дней в Индии для трансплантации и восстановления иммунитета",
      "recoveryTimeline": "Приживление трансплантата 3–4 недели; восстановление иммунной системы 3–6 месяцев",
      "overview": "Отделения трансплантации костного мозга и клеточной терапии клиник Индии оборудованы стерильными боксами с ламинарным потоком воздуха и HEPA-фильтрами высокой очистки. Это обеспечивает высокие показатели долгосрочной ремиссии при лейкозах, миеломе, лимфомах и талассемии как при аллогенной, так и при гаплоидентичной пересадке (от родителей).",
      "conditionsTreated": [
        "Острый миелоидный и лимфобластный лейкоз (ОМЛ, ОЛЛ)",
        "Рецидивирующие и резистентные формы лимфом Ходжкина и неходжкинских лимфом",
        "Множественная миелома",
        "Талассемия большая и серповидноклеточная анемия",
        "Тяжелая приобретенная апластическая анемия",
        "Первичные врожденные иммунодефицитные состояния"
      ],
      "treatmentOptions": [
        "Аллогенная ТКМ от родственного полностью совместимого донора",
        "Гаплоидентичная пересадка ТКМ от родителей (50% совместимости)",
        "Аутологичная трансплантация собственных гемопоэтических стволовых клеток",
        "Аллогенная трансплантация от неродственного донора из международного регистра",
        "Стерильные боксы с избыточным давлением и HEPA-фильтрацией воздуха",
        "Таргетная иммунотерапия и профилактика реакции 'трансплантат против хозяина' (РТПХ)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Высокоточное HLA-типирование пары",
          "description": "Исследование тканевой совместимости пациента и потенциальных доноров."
        },
        {
          "step": 2,
          "title": "Оценка ремиссии и подбор режима кондиционирования",
          "description": "Подбор протокола химиотерапии для подготовки костномозговой ниши."
        },
        {
          "step": 3,
          "title": "Госпитализация в бокс HEPA и аферез клеток",
          "description": "Забор стволовых клеток CD34+ у донора с помощью сепаратора клеток."
        },
        {
          "step": 4,
          "title": "Трансфузия стволовых клеток и период приживления",
          "description": "Инфузия клеток и круглосуточный мониторинг до момента приживления трансплантата."
        },
        {
          "step": 5,
          "title": "Контроль химеризма и безопасная выписка",
          "description": "Подтверждение 100% донорского кроветворения и выдача разрешения на перелет."
        }
      ],
      "whyIndia": [
        "Опыт более 5 000 успешных трансплантаций костного мозга с показателями на уровне ведущих клиник США",
        "Мировые лидеры в проведении гаплоидентичных пересадок от родителей при отсутствии донора 100%",
        "Строжайший инфекционный контроль в специализированных боксах очистки воздуха",
        "Стоимость ТКМ в Индии в 4–5 раз доступнее, чем в клиниках Германии, Израиля или США"
      ],
      "faqs": [
        {
          "question": "Что делать, если среди братьев и сестер нет донора со 100% совместимостью?",
          "answer": "В индийских центрах отработана методика гаплоидентичной трансплантации костного мозга (Haplo BMT), при которой донором может выступить любой из родителей с совместимостью 50% с отличными результатами приживления."
        },
        {
          "question": "Сколько времени длится изоляция в стерильном боксе?",
          "answer": "Пациент находится в стерильном боксе HEPA в среднем от 3 до 4 недель — до тех пор, пока донорские клетки не начнут активно вырабатывать лейкоциты и тромбоциты, снижая риск инфекций."
        }
      ]
    }
  },
  "oncology": {
    "ar": {
      "title": "علاج الأورام والسرطان",
      "badge": "رعاية تخصصية متقدمة",
      "shortDesc": "علاج متكامل ومتعدد التخصصات للأورام يشمل العلاج الإشعاعي الدقيق (CyberKnife وProton Beam) والعلاج المناعي والموجه واستئصال الأورام جراحياً.",
      "recommendedStay": "من أسبوعين إلى 3 أسابيع للجراحة؛ ومن 4 إلى 8 أسابيع لبروتوكولات الإشعاع",
      "recoveryTimeline": "يختلف حسب مرحلة الورم ونوع العلاج",
      "overview": "يتطلب علاج السرطان الحديث نهجاً شاملاً ومتكاملاً من خلال لجان الأورام متعددة التخصصات (Tumor Board). تجمع مراكز علاج السرطان المعتمدة دولياً في دلهي إن سي آر بين الجراحة الروبوتية، والعلاج الكيماوي الدقيق، والعلاج المناعي الموجه، وأحدث تقنيات الإشعاع الدقيق (مثل CyberKnife وProton Beam) تحت سقف واحد لتخصيص خطة العلاج وفقاً للجينوم الجزيئي للورم.",
      "conditionsTreated": [
        "أورام وسرطانات الجهاز الهضمي والقولون والمستقيم",
        "سرطان الثدي والأورام النسائية التناسلية",
        "أورام الرأس والعنق والغدة الدرقية",
        "سرطان الرئة وأورام الصدر",
        "أورام المسالك البولية وسرطان البروستاتا",
        "سرطانات وأمراض الدم الخبيثة (اللوكيميا، الليمفوما، المايلوما المتعددة)"
      ],
      "treatmentOptions": [
        "العلاج الإشعاعي فائق الدقة (شعاع البروتون، سايبر نايف CyberKnife، وتروبيم TrueBeam STx)",
        "جراحة الأورام بالروبوت مع الحفاظ على الأعضاء الحيوية",
        "العلاج الكيماوي الجهازي والعلاج الجزيئي الموجه",
        "العلاج المناعي بمثبطات نقاط التفتيش (Immunotherapy)",
        "العلاج الكيماوي عالي الحرارة داخل التجويف البطني (HIPEC)",
        "زراعة نخاع العظم الذاتية والتناسلية (BMT)"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "مراجعة الفحص النسيجي وأشعة PET-CT",
          "description": "مشاركة كتل الخزعة النسيجية وتقارير الصبغات المناعية وصور PET-CT لتقييمها بدقة من قبل كبار أطباء الأورام."
        },
        {
          "step": 2,
          "title": "مداولة لجنة الأورام (Tumor Board)",
          "description": "تحدد لجنة متخصصة متعددة التخصصات خطة العلاج المثلى (الجراحة الاستئصالية مقابل العلاج الكيماوي التمهيدي)."
        },
        {
          "step": 3,
          "title": "الفحوصات التأكيدية والتجهيز الطبي",
          "description": "إعادة فحص المؤشرات الجزيئية إذا لزم الأمر، وتأكيد مرحلة الورم، وتركيب منفذ العلاج الكيماوي (Chemo Port)."
        },
        {
          "step": 4,
          "title": "بدء العلاج / الاستئصال الجراحي",
          "description": "بدء دورات العلاج الإشعاعي الموجه، أو الكيماوي، أو إجراء الاستئصال الجراحي بمساعدة الروبوت بأعلى معايير الأمان."
        },
        {
          "step": 5,
          "title": "بروتوكول المتابعة والتعافي والتصريح بالسفر",
          "description": "توفير إرشادات للدورات التالية، وتقارير علاجية مفصلة لطبيبك المحلي في بلدك، ومنح شهادة اللياقة للسفر جواً."
        }
      ],
      "whyIndia": [
        "مراكز مجهزة بأحدث تقنيات شعاع البروتون (Proton Beam) وأجهزة السايبر نايف (CyberKnife) بدقة تحت المليمتر",
        "لجان أورام متعددة التخصصات تطبق أدق المعايير الدولية لشبكة NCCN والجمعية الأوروبية للأورام ESMO",
        "الحصول على أحدث أدوية السرطان الجزيئية والمناعية المعتمدة عالمياً بأسعار مؤسسية مخفضة",
        "أجنحة أورام مخصصة للمرضى الدوليين مع تمريض متخصص في العزل ومكافحة العدوى"
      ],
      "faqs": [
        {
          "question": "هل يمكنني إحضار شرائح أو كتل عينات الخزعة النسيجية معي إلى الهند؟",
          "answer": "نعم، يُوصى بشدة بإحضار كتل البارافين أو الشرائح الزجاجية لعينة الورم حتى تتمكن مختبرات التشخيص المرجعية في الهند من إجراء فحص تحقق ثانوي واختبارات نسيجية مناعية (IHC) وجينية متخصصة لتحديد أدق خطة علاج."
        },
        {
          "question": "هل يمكنني مواصلة جلسات العلاج الكيماوي في بلدي بعد الخضوع للجراحة في الهند؟",
          "answer": "نعم، يقدم أطباؤنا الاستشاريون بروتوكولات علاج كيماوي مفصلة وموثقة دولياً بأسماء الأدوية وجرعاتها وجداولها الزمنية لتمكين طبيبك المحلي في بلدك من متابعة وإعطاء الجلسات بسلاسة وأمان."
        }
      ]
    },
    "fr": {
      "title": "Oncologie et traitement du cancer",
      "badge": "Soins spécialisés",
      "shortDesc": "Oncologie multidisciplinaire intégrée : radiothérapie de précision (CyberKnife, Proton Beam), immunothérapie, thérapies ciblées et résections chirurgicales.",
      "recommendedStay": "2 à 3 semaines pour la chirurgie ; 4 à 8 semaines pour la radiothérapie",
      "recoveryTimeline": "Varie selon le stade et la modalité",
      "overview": "L'oncologie moderne exige une concertation pluridisciplinaire en comité de concertation (Tumor Board). Les centres anticancéreux d'élite en Inde regroupent chirurgie robotique, chimiothérapie de précision, immunothérapie ciblée et radiothérapie de pointe (CyberKnife, Proton Beam) pour un traitement personnalisé.",
      "conditionsTreated": [
        "Cancers gastro-intestinaux et colorectaux",
        "Cancers du sein et gynécologiques",
        "Tumeurs de la tête, du cou et de la thyroïde",
        "Cancers du poumon et thoraciques",
        "Cancers urologiques et de la prostate",
        "Hémopathies malignes (leucémie, lymphome, myélome)"
      ],
      "treatmentOptions": [
        "Radiothérapie de précision (Proton Beam, CyberKnife, TrueBeam STx)",
        "Chirurgie oncologique robotisée préservatrice d'organes",
        "Chimiothérapie systémique et thérapies moléculaires ciblées",
        "Immunothérapie par inhibiteurs de points de contrôle",
        "Chimiothérapie hyperthermique intrapéritonéale (CHIP / HIPEC)",
        "Greffes autologues et allogéniques de moelle osseuse"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Analyse histopathologique et TEP-scan",
          "description": "Transmission des blocs de biopsie et imageries TEP pour évaluation par nos comités spécialisés."
        },
        {
          "step": 2,
          "title": "Concertation pluridisciplinaire (Tumor Board)",
          "description": "Le comité pluridisciplinaire définit la stratégie thérapeutique (chirurgie première vs traitement néoadjuvant)."
        },
        {
          "step": 3,
          "title": "Bilan préopératoire et pose de cathéter",
          "description": "Confirmation du bilan d'extension, tests moléculaires complémentaires et pose de chambre implantable."
        },
        {
          "step": 4,
          "title": "Intervention chirurgicale ou début des cures",
          "description": "Mise en œuvre de la radiothérapie ciblée, des cycles de chimiothérapie ou de la chirurgie robotique."
        },
        {
          "step": 5,
          "title": "Protocole de maintenance et aptitude au vol",
          "description": "Transmission du protocole de suivi pour votre médecin local et certificat médical d'aptitude au vol."
        }
      ],
      "whyIndia": [
        "Centres équipés de protonthérapie de pointe et de systèmes CyberKnife de précision inframillimétrique",
        "Comités de concertation pluridisciplinaire appliquant les protocoles internationaux NCCN et ESMO",
        "Accès aux molécules anticancéreuses et thérapies ciblées les plus récentes à des tarifs encadrés",
        "Services d'hospitalisation dédiés aux patients internationaux avec contrôle strict des infections"
      ],
      "faqs": [
        {
          "question": "Puis-je apporter mes blocs de paraffine ou lames de biopsie en Inde ?",
          "answer": "Oui, il est fortement recommandé d'apporter vos blocs de paraffine ou lames de biopsie afin que les laboratoires de référence indiens puissent procéder à une contre-expertise et à des analyses immunohistochimiques ciblées."
        },
        {
          "question": "La chimiothérapie peut-elle être poursuivie dans mon pays après la chirurgie en Inde ?",
          "answer": "Oui, nos oncologues partenaires établissent des protocoles de chimiothérapie complets et standardisés avec formules et calendrier pour que votre médecin traitant local puisse poursuivre les cures en toute sécurité."
        }
      ]
    },
    "ru": {
      "title": "Онкология и лечение рака",
      "badge": "Специализированная помощь",
      "shortDesc": "Комплексная онкологическая помощь: прецизионная лучевая терапия (CyberKnife, Протонная терапия), иммунотерапия, таргетная терапия и роботизированные резекции.",
      "recommendedStay": "2–3 недели при хирургии; 4–8 недель при лучевой терапии",
      "recoveryTimeline": "Зависит от стадии и метода лечения",
      "overview": "Современная онкология требует комплексного подхода междисциплинарного консилиума (Tumor Board). Специализированные онкоцентры Дели NCR объединяют роботизированную хирургию, таргетную терапию, иммунотерапию и прецизионную лучевую терапию (CyberKnife, Протонная терапия) для подбора персонализированного протокола лечения.",
      "conditionsTreated": [
        "Рак желудочно-кишечного тракта и колоректальный рак",
        "Рак молочной железы и гинекологические опухоли",
        "Опухоли головы, шеи и щитовидной железы",
        "Рак легких и торакальная онкология",
        "Онкоурология и рак предстательной железы",
        "Онкогематология (лейкозы, лимфомы, множественная миелома)"
      ],
      "treatmentOptions": [
        "Прецизионная лучевая терапия (Протонная терапия, CyberKnife, TrueBeam STx)",
        "Органосохраняющая роботизированная онкохирургия",
        "Системная химиотерапия и таргетная молекулярная терапия",
        "Иммунотерапия ингибиторами контрольных точек",
        "Гипертермическая интраперитонеальная химиотерапия (HIPEC)",
        "Аутологичная и аллогенная трансплантация костного мозга"
      ],
      "treatmentPathway": [
        {
          "step": 1,
          "title": "Пересмотр гистологии и ПЭТ-КТ",
          "description": "Предоставление гистологических стекол и дисков ПЭТ-КТ для консилиума онкологов."
        },
        {
          "step": 2,
          "title": "Междисциплинарный онкоконсилиум",
          "description": "Консилиум определяет оптимальную тактику (хирургия против неоадъювантной терапии)."
        },
        {
          "step": 3,
          "title": "Подготовка и установка инфузионного порта",
          "description": "Молекулярно-генетическое профилирование опухоли и установка венозной порт-системы."
        },
        {
          "step": 4,
          "title": "Проведение операции или лучевой терапии",
          "description": "Высокоточное облучение, роботизированное удаление опухоли или курсы иммунотерапии."
        },
        {
          "step": 5,
          "title": "Протокол поддерживающей терапии и выписка",
          "description": "Выдача протокола продолжения терапии для лечащего врача дома и сертификата для перелета."
        }
      ],
      "whyIndia": [
        "Клиники оснащены протонной терапией и системами радиохирургии CyberKnife субмиллиметровой точности",
        "Междисциплинарные онкоконсилиумы, следующие международным клиническим протоколам NCCN и ESMO",
        "Доступ к новейшим таргетным и иммунопрепаратам по регулируемым государственным тарифам",
        "Специализированные онкологические отделения для иностранцев с инфекционным контролем"
      ],
      "faqs": [
        {
          "question": "Могу ли я привезти с собой в Индию парафиновые блоки или гистологические стекла биопсии?",
          "answer": "Да, настоятельно рекомендуется привезти гистологические стекла и парафиновые блоки, чтобы референс-лаборатории индийских клиник провели повторный пересмотр и специализированные иммуногистохимические (ИГХ) и генетические тесты."
        },
        {
          "question": "Можно ли продолжить курсы химиотерапии в своей стране после операции в Индии?",
          "answer": "Да, наши ведущие онкологи составляют подробные международные протоколы с точными дозировками препаратов и графиком введения, что позволяет вашему лечащему врачу на родине продолжать терапию без задержек."
        }
      ]
    }
  }
};

// Service Journey Step translations dictionary
const SERVICE_LOCALIZATIONS: Record<number, Record<string, { title: string; shortDesc: string; detailedProcess: string[] }>> = {
  "1": {
    "ar": {
      "title": "الاستفسار المبدئي واستلام الحالة الطبية",
      "shortDesc": "يستلم مدير الحالات الدولية ملفك الطبي، ويراجع تاريخك السريري، ويفتح قناة تواصل مباشرة وفورية معك عبر الواتساب أو الهاتف.",
      "detailedProcess": [
        "تعيين منسق حالات طبي شخصي يتحدث لغتك الأم (العربية)",
        "استلام سري ومحمي للتاريخ المرضي والأعراض الحالية للمريض",
        "شرح تفصيلي وواضح لمسار السفر العلاجي والجدول الزمني المتوقع"
      ]
    },
    "fr": {
      "title": "Prise de contact initiale et recueil du dossier",
      "shortDesc": "Votre coordinateur médical dédié reçoit votre dossier, étudie vos antécédents préliminaires et établit une communication directe.",
      "detailedProcess": [
        "Attribution d'un coordinateur de cas personnel multilingue dédié",
        "Recueil confidentiel de l'historique médical et des symptômes actuels",
        "Présentation claire du parcours médical et des étapes de votre prise en charge"
      ]
    },
    "ru": {
      "title": "Первичный запрос и прием медицинских данных",
      "shortDesc": "Персональный русскоязычный координатор принимает ваше обращение, изучает медицинские документы и организует прямой канал связи.",
      "detailedProcess": [
        "Назначение личного медицинского координатора на весь период лечения",
        "Конфиденциальный сбор медицинских выписок и описания симптомов",
        "Подробное разъяснение этапов поездки, сроков и организационных деталей"
      ]
    }
  },
  "2": {
    "ar": {
      "title": "جمع وتدقيق التقارير الطبية والأشعة",
      "shortDesc": "نساعدك في جمع وتنظيم ملفات الأشعة المقطعية والرنين (DICOM) وشرائح الخزعة النسيجية لتجهيزها للفحص الطبي المتخصص.",
      "detailedProcess": [
        "تحميل رقمي آمن لصور الرنين وأفلام القسطرة وتقارير فحص الأنسجة",
        "ترجمة وتلخيص التقارير غير الإنجليزية إلى ملخصات سريرية معتمدة",
        "التأكد من اكتمال وجودة جميع الفحوصات لضمان دقة الرأي الطبي"
      ]
    },
    "fr": {
      "title": "Collecte et analyse des examens médicaux",
      "shortDesc": "Nous organisons et structurons vos imageries médicales (fichiers DICOM, lames de biopsie, analyses de sang) pour l'expertise médicale.",
      "detailedProcess": [
        "Transmission numérique sécurisée des scanners, IRM et comptes-rendus",
        "Traduction médicale certifiée des documents non anglophones",
        "Vérification de la conformité des examens pour l'expertise collégiale"
      ]
    },
    "ru": {
      "title": "Сбор и систематизация медицинских выписок",
      "shortDesc": "Мы помогаем собрать, перевести и систематизировать снимки МРТ/КТ (DICOM), гистологические блоки и лабораторные анализы.",
      "detailedProcess": [
        "Безопасная цифровая загрузка дисков КТ, МРТ и протоколов биопсий",
        "Медицинский перевод заключений на английский язык для консилиума",
        "Проверка полноты документов для составления точного плана лечения"
      ]
    }
  },
  "3": {
    "ar": {
      "title": "تنسيق آراء كبار الأطباء والمستشفيات",
      "shortDesc": "نعرض حالتك الطبية بشكل متزامن على نخبة من كبار الاستشاريين ورؤساء الأقسام في كبرى مستشفيات دلهي للحصول على آراء موثقة.",
      "detailedProcess": [
        "مراجعة الحالة من كبار الاستشاريين في أبولو، ميدانتا، فورتيس وماكس",
        "جمع الخطط العلاجية المكتوبة والبدائل الجراحية المتاحة",
        "تنسيق استشارات بالفيديو عبر الإنترنت مع الجراحين عند الحاجة"
      ]
    },
    "fr": {
      "title": "Avis collégiaux multi-hôpitaux et spécialistes",
      "shortDesc": "Nous soumettons simultanément votre dossier aux professeurs référents des meilleurs hôpitaux de Delhi pour des avis écrits formels.",
      "detailedProcess": [
        "Examen par les chefs de service d'Apollo, Medanta, Fortis et Max",
        "Centralisation des protocoles chirurgicaux et thérapeutiques écrits",
        "Organisation de téléconsultations vidéo préalables avec les chirurgiens"
      ]
    },
    "ru": {
      "title": "Консилиум ведущих профессоров клиник Дели",
      "shortDesc": "Мы одновременно направляем ваши выписки ведущим хирургам аккредитованных госпиталей Дели NCR для получения письменных заключений.",
      "detailedProcess": [
        "Рассмотрение ведущими профессорами Medanta, Apollo, Fortis и Max",
        "Получение письменных протоколов лечения и хирургических заключений",
        "Организация предварительной видеоконсультации с оперирующим хирургом"
      ]
    }
  },
  "4": {
    "ar": {
      "title": "تقدير التكلفة والميزانية العلاجية المعتمدة",
      "shortDesc": "تحصل على عروض أسعار تفصيلية رسمية ومباشرة صادرة من إدارة المستشفيات لمقارنة الخيارات بكل شفافية وصفر رسوم خفية.",
      "detailedProcess": [
        "عروض أسعار مؤسسية رسمية تغطي إقامة المستشفى وأتعاب الجراحين",
        "توضيح تكاليف الدعامات والمفاصل الصناعية والأدوية والفحوصات",
        "إرشادات التحويلات البنكية الدولية والدفع الآمن داخل المستشفى"
      ]
    },
    "fr": {
      "title": "Estimations tarifaires et optimisation budgétaire",
      "shortDesc": "Recevez des devis officiels détaillés émis directement par les hôpitaux partenaires pour comparer en toute transparence.",
      "detailedProcess": [
        "Devis institutionnels officiels incluant séjour, bloc opératoire et honoraires",
        "Fourchettes budgétaires claires pour les implants, prothèses et bilans",
        "Conseils pour les virements bancaires internationaux et paiements sécurisés"
      ]
    },
    "ru": {
      "title": "Официальный расчет стоимости лечения и сметы",
      "shortDesc": "Вы получаете официальные сметы напрямую от финансовых отделов клиник для сравнения вариантов без скрытых наценок.",
      "detailedProcess": [
        "Официальные расчеты клиник, включающие пребывание, операцию и наркоз",
        "Прозрачная стоимость сертифицированных имплантов и медикаментов",
        "Консультации по международным переводам и способам оплаты в кассу клиники"
      ]
    }
  },
  "5": {
    "ar": {
      "title": "تسهيل التأشيرة الطبية الهندية مجاناً 100% (VIL)",
      "shortDesc": "نستخرج لك خطاب دعوة المستشفى الطبي الرسمي (VIL) المطلوب لسفارات الهند وبوابة التأشيرة الإلكترونية مجاناً 100% وبدون أي أتعاب.",
      "detailedProcess": [
        "إصدار فوري لخطاب دعوة المستشفى الرسمي (VIL) خلال 24–48 ساعة مجاناً",
        "إرشادات استخراج تأشيرة المريض وتأشيرات المرافقين الطبيين (Med-X)",
        "المساعدة في تعبئة طلب التأشيرة الإلكترونية الهندية وإرشادات الإقامة"
      ]
    },
    "fr": {
      "title": "Assistance visa médical pour l'Inde 100% gratuite (VIL)",
      "shortDesc": "Nous coordonnons gratuitement votre lettre officielle d'invitation hospitalière (VIL) requise par l'e-Visa médical indien sous 24 à 48 heures.",
      "detailedProcess": [
        "Émission urgente gratuite de la lettre officielle d'invitation hospitalière (VIL)",
        "Assistance documentaire pour le patient et jusqu'à deux accompagnateurs",
        "Accompagnement pour la saisie sur le portail officiel d'e-Visa indien"
      ]
    },
    "ru": {
      "title": "Бесплатная визовая поддержка и приглашение VIL (100% бесплатно)",
      "shortDesc": "Мы оформляем официальное приглашение клиники (VIL) для электронной визы или консульства Индии за 24–48 часов абсолютно бесплатно.",
      "detailedProcess": [
        "Срочное бесплатное оформление визового приглашения VIL от госпиталя",
        "Помощь с пакетом документов для пациента и двух сопровождающих (MED-X)",
        "Пошаговые инструкции по заполнению анкеты на индийскую электронную визу"
      ]
    }
  },
  "6": {
    "ar": {
      "title": "ترتيبات السفر والسكن القريب من المستشفى",
      "shortDesc": "نساعدك في اختيار شقق فندقية مفروشة ومجهزة بمطبخ أو فنادق مريحة على بعد دقائق قليلة من المستشفى لتوفير أقصى درجات الراحة.",
      "detailedProcess": [
        "حجز شقق فندقية مفروشة مناسبة للمرضى العرب ومجهزة للطهي العائلي",
        "فنادق وشقق تقع على مسافة مشي أو دقائق قليلة من بوابات المستشفى",
        "توفير معلومات أسعار مسبقة وعادلة تناسب ميزانيتك وفترة إقامتك"
      ]
    },
    "fr": {
      "title": "Organisation du voyage et de l'hébergement de proximité",
      "shortDesc": "Nous vous guidons pour réserver des appartements équipés ou des hôtels confortables situés à proximité immédiate de l'hôpital.",
      "detailedProcess": [
        "Sélection d'appart-hôtels équipés avec cuisine pour les longs séjours",
        "Hébergements situés à quelques minutes à pied ou en voiture de la clinique",
        "Tarifs préférentiels négociés et adaptés à la durée prévisionnelle"
      ]
    },
    "ru": {
      "title": "Организация перелета и подбор жилья рядом с клиникой",
      "shortDesc": "Мы подбираем уютные апартаменты с кухней или отели в шаговой доступности от госпиталя для комфортного проживания.",
      "detailedProcess": [
        "Бронирование апартаментов с кухней для удобства длительного проживания",
        "Проверенные отели в 5–10 минутах езды от медицинского центра",
        "Прозрачные цены без переплат и учет индивидуальных пожеланий семьи"
      ]
    }
  },
  "7": {
    "ar": {
      "title": "استقبال المطار الخاص والانتقال المريح",
      "shortDesc": "يستقبلك مندوبنا الدولي في صالة الوصول بمطار دلهي الدولي (DEL) بسيارة مريحة وينقلك مباشرة إلى المستشفى أو مقر سكنك.",
      "detailedProcess": [
        "استقبال في صالة الوصول بمطار أنديرا غاندي الدولي بلافتة باسم المريض",
        "سيارة خاصة مريحة لنقل المريض وعائلته وأمتعته دون عناء",
        "توفير شريحة هاتف محلية للإنترنت ومساعدتك في تبديل العملات فوراً"
      ]
    },
    "fr": {
      "title": "Accueil aéroport personnalisé et transfert",
      "shortDesc": "Notre représentant international vous accueille à l'aéroport international de Delhi (DEL) et assure votre transfert serein.",
      "detailedProcess": [
        "Accueil en salle des arrivées avec pancarte nominative à Delhi (DEL)",
        "Transfert privé direct et confortable vers votre hôtel ou l'hôpital",
        "Mise à disposition d'une carte SIM locale et assistance au change"
      ]
    },
    "ru": {
      "title": "Индивидуальная встреча в аэропорту и трансфер",
      "shortDesc": "Наш координатор встречает вас в зоне прилета международного аэропорта Дели (DEL) и организует комфортный трансфер.",
      "detailedProcess": [
        "Встреча с именной табличкой в зале прилета аэропорта им. Индиры Ганди",
        "Индивидуальный автомобиль для пациента, сопровождающих и багажа",
        "Предоставление местной SIM-карты с интернетом и помощь с обменом валюты"
      ]
    }
  },
  "8": {
    "ar": {
      "title": "التسجيل في المستشفى والاستشارة الأولى",
      "shortDesc": "يصاحبك منسق ندوة شخصياً داخل المستشفى لإتمام فتح الملف، وإجراء الفحوصات الطبية، ولقاء الجراح الاستشاري بدون أي طوابير.",
      "detailedProcess": [
        "مرافقة شخصية لفتح الملف الطبي في مكتب المرضى الدوليين بالمستشفى",
        "إتمام الفحوصات المخبرية والأشعة السينية التأكيدية بسلاسة وسرعة",
        "جلسة استشارة مفصلة ومريحة مع رئيس الفريق الجراحي بمرافقة مترجم"
      ]
    },
    "fr": {
      "title": "Accueil hospitalier et première consultation spécialiste",
      "shortDesc": "Votre coordinateur vous accompagne personnellement pour l'enregistrement, les examens préliminaires et la rencontre du chirurgien.",
      "detailedProcess": [
        "Accompagnement dédié au bureau international de l'hôpital partenaire",
        "Réalisation fluide des examens sanguins et radiologiques préopératoires",
        "Consultation approfondie avec le chirurgien référent avec interprète"
      ]
    },
    "ru": {
      "title": "Регистрация в клинике и консультация профессора",
      "shortDesc": "Координатор сопровождает вас в клинике для открытия медицинской карты, прохождения анализов и встречи с оперирующим хирургом.",
      "detailedProcess": [
        "Личное сопровождение в международном отделе клиники без очередей",
        "Быстрое прохождение предоперационных анализов и контрольных снимков",
        "Подробная консультация с ведущим профессором с участием переводчика"
      ]
    }
  },
  "9": {
    "ar": {
      "title": "إجراء العملية والعناية السريرية الفائقة",
      "shortDesc": "نتابع مسارك اليومي داخل المستشفى طوال فترة التنويم، ونتواصل مع الفريق الطبي لضمان حصولك على أرقى درجات الرعاية السريرية.",
      "detailedProcess": [
        "متابعة يومية داخل جناح التنويم وغرف العناية المركزة المتخصصة",
        "تنسيق الوجبات الغذائية الحلال والتواصل المستمر مع الطاقم التمريضي",
        "إحاطة عائلة المريض أولاً بأول بمستجدات الجراحة وتطور الحالة"
      ]
    },
    "fr": {
      "title": "Hospitalisation, intervention et suivi au chevet",
      "shortDesc": "Nous assurons une présence quotidienne durant votre hospitalisation pour vous garantir le plus haut niveau de confort et de soins.",
      "detailedProcess": [
        "Visites quotidiennes en chambre d'hospitalisation et lien avec les soignants",
        "Prise en compte des préférences diététiques et culturelles du patient",
        "Communication régulière avec la famille sur l'avancement postopératoire"
      ]
    },
    "ru": {
      "title": "Госпитализация, операция и клинический уход",
      "shortDesc": "Мы ежедневно на связи с лечащими врачами во время вашего пребывания в стационаре, контролируя все аспекты комфорта и лечения.",
      "detailedProcess": [
        "Ежедневная поддержка в палате стационара и отделении реанимации",
        "Учет пищевых предпочтений и оперативное решение бытовых вопросов",
        "Регулярное информирование родных о ходе операции и восстановлении"
      ]
    }
  },
  "10": {
    "ar": {
      "title": "مرحلة التعافي وفحوصات ما بعد العملية",
      "shortDesc": "بعد الخروج من المستشفى، ننسق مواعيد المتابعة الدورية، وتغيير الضمادات، وجلسات العلاج الطبيعي حتى اكتمال الشفاء التام.",
      "detailedProcess": [
        "تنسيق مواعيد مراجعة الجراح بعد العملية في العيادات الخارجية",
        "تنظيم جلسات العلاج الطبيعي والتأهيل الحركي المخصصة في مقر سكنك",
        "متابعة التئام الجروح والتحاليل الدورية للتأكد من زوال أي التهاب"
      ]
    },
    "fr": {
      "title": "Convalescence, soins post-opératoires et kinésithérapie",
      "shortDesc": "Après votre sortie, nous organisons les consultations de contrôle, le suivi des pansements et la rééducation jusqu'à guérison.",
      "detailedProcess": [
        "Coordination des consultations de contrôle post-opératoires",
        "Organisation des séances de kinésithérapie de réadaptation à votre hôtel",
        "Suivi biologique et contrôle rigoureux de la cicatrisation cutanée"
      ]
    },
    "ru": {
      "title": "Период реабилитации и контрольные осмотры",
      "shortDesc": "После выписки из стационара мы организуем контрольные визиты к врачу, перевязки и индивидуальный курс физиотерапии.",
      "detailedProcess": [
        "Организация контрольных консультаций хирурга в поликлинике",
        "Проведение перевязок и сеансов ЛФК и массажа для быстрой реабилитации",
        "Контрольные анализы крови для подтверждения полного заживления"
      ]
    }
  },
  "11": {
    "ar": {
      "title": "التصريح الطبي للسفر جواً والمتابعة عن بعد",
      "shortDesc": "تسليم ملفك الطبي الكامل وشهادة اللياقة للسفر جواً (Fit-to-Fly)، ومرافقتك للمطار، واستمرار المتابعة عن بعد مع أطبائك بعد عودتك.",
      "detailedProcess": [
        "استلام التقرير الطبي الختامي المفصل بالإنجليزية وشهادة اللياقة للطيران",
        "توصيل المريض وعائلته إلى مطار دلهي الدولي مع المساعدة في الأمتعة",
        "متابعة دورية مستمرة عن بعد واستشارات مجانية عبر الفيديو بعد عودتك لوطنك"
      ]
    },
    "fr": {
      "title": "Certificat de vol (Fit-to-Fly) et suivi à distance",
      "shortDesc": "Remise du dossier médical complet, certificat médical d'aptitude au vol, transfert aéroport et suivi régulier après votre retour.",
      "detailedProcess": [
        "Délivrance du compte-rendu d'hospitalisation détaillé et certificat de vol",
        "Transfert retour vers l'aéroport international de Delhi avec assistance",
        "Suivi médical continu à distance avec téléconsultations si nécessaire"
      ]
    },
    "ru": {
      "title": "Выписка, допуск к перелету (Fit-to-Fly) и поддержка дома",
      "shortDesc": "Выдача выписного эпикриза, сертификата для авиакомпании (Fit-to-Fly), проводы в аэропорт и дистанционная связь с доктором на родине.",
      "detailedProcess": [
        "Выдача подробного официального выписного эпикриза и сертификата Fit-to-fly",
        "Организация обратного трансфера в аэропорт Дели и помощь с багажом",
        "Дистанционный мониторинг и организация видеосвязи с профессором после возвращения"
      ]
    }
  }
};

// Patient Stories translations dictionary
const PATIENT_STORY_LOCALIZATIONS: Record<string, Record<string, { country: string; summaryTitle: string; patientNarrative: string; keyOutcomes: string; lengthOfStay: string }>> = {
  "case-01-cardiac-kenya": {
    "ar": {
      "country": "كينيا (نيروبي)",
      "summaryTitle": "قسطرة علاجية وزراعة دعامات معقدة لمريض يبلغ 58 عاماً من نيروبي",
      "patientNarrative": "كان المريض يعاني من ذبحة صدرية متكررة لم تستجب للعلاجات الدوائية. بعد مراجعة أفلام القسطرة عن بعد عبر ندوة للرعاية الصحية، سافر المريض إلى نيودلهي، وخلال 48 ساعة من وصوله خضع لقسطرة تاجية دقيقة وزراعة دعامات ناجحة دون أي مضاعفات، وخرج من المستشفى بعد 3 أيام بصحة ممتازة.",
      "keyOutcomes": "إعادة تروية كاملة للشرايين، وتحسن كبير في المجهود البدني عند المتابعة بعد 6 أسابيع.",
      "lengthOfStay": "8 أيام في نيودلهي"
    },
    "fr": {
      "country": "Kenya (Nairobi)",
      "summaryTitle": "Angioplastie complexe multitronculaire pour un patient de 58 ans de Nairobi",
      "patientNarrative": "Le patient souffrait d'un angor d'effort sévère réfractaire aux médicaments. Après évaluation préalable des angiographies par NHC, il a rejoint New Delhi. Une angioplastie complexe avec pose de stents actifs a été réalisée avec succès en salle de cathétérisme sous 48h.",
      "keyOutcomes": "Revascularisation complète réussie, nette amélioration de la tolérance à l'effort à 6 semaines.",
      "lengthOfStay": "8 jours à New Delhi"
    },
    "ru": {
      "country": "Кения (Найроби)",
      "summaryTitle": "Сложное многососудистое стентирование коронарных артерий у пациента 58 лет",
      "patientNarrative": "Пациент страдал тяжелой стенокардией напряжения. После дистанционного консилиума по дискам коронарографии через NHC пациент прилетел в Нью-Дели. В течение 48 часов было успешно выполнено стентирование бифуркационных поражений без осложнений с выпиской через 3 дня.",
      "keyOutcomes": "Полное восстановление коронарного кровотока, отличная переносимость физических нагрузок через 6 недель.",
      "lengthOfStay": "8 дней в Нью-Дели"
    }
  },
  "case-02-ortho-uzbekistan": {
    "ar": {
      "country": "أوزبكستان (طشقند)",
      "summaryTitle": "استبدال مفصلي الركبة بالكامل بالروبوت لمريضة تبلغ 64 عاماً",
      "patientNarrative": "أدت الخشونة المتقدمة من الدرجة الرابعة في الركبتين إلى صعوبة شديدة في الحركة لدى مريضة من طشقند. بمرافقة مترجم فوري يتحدث الروسية طوال فترة إقامتها، خضعت لاستبدال الركبتين بالروبوت وبدأت المشي بمساعدة أخصائي العلاج الطبيعي من اليوم الأول للجراحة.",
      "keyOutcomes": "تصحيح كامل لتقوس الساقين، والمشي المستقل دون ألم في استشارة الفيديو بعد 3 أشهر.",
      "lengthOfStay": "16 يوماً في دلهي إن سي آر"
    },
    "fr": {
      "country": "Ouzbékistan (Tachkent)",
      "summaryTitle": "Arthroplastie totale bilatérale du genou par robot pour une patiente de 64 ans",
      "patientNarrative": "Une gonarthrose sévère de stade IV invalidante a conduit cette patiente de Tachkent à opter pour la chirurgie robotisée en Inde. Accompagnée d'un coordinateur russophone, elle a bénéficié du remplacement des deux genoux et a remarché dès le 1er jour postopératoire.",
      "keyOutcomes": "Correction de la déformation axiale, marche autonome indolore constatée au suivi à 3 mois.",
      "lengthOfStay": "16 jours à Delhi NCR"
    },
    "ru": {
      "country": "Узбекистан (Ташкент)",
      "summaryTitle": "Двустороннее роботизированное эндопротезирование коленных суставов у пациентки 64 лет",
      "patientNarrative": "Тяжелый деформирующий гонартроз IV степени практически лишил пациентку из Ташкента возможности передвигаться. При постоянной поддержке русскоязычного координатора NHC пациентке заменили оба сустава с помощью робота, самостоятельная ходьба началась на 1-й день.",
      "keyOutcomes": "Полное исправление варусной деформации ног, безболезненная ходьба на видеоконсультации через 3 месяца.",
      "lengthOfStay": "16 дней в Дели NCR"
    }
  },
  "case-03-oncology-oman": {
    "ar": {
      "country": "سلطنة عمان (مسقط)",
      "summaryTitle": "جراحة استئصال ورم القولون بالروبوت طفيفة التوغل ووضع خطة علاج موجهة",
      "patientNarrative": "عقب تشخيص ورم موضعي في القولون السيني، تواصلت عائلة المريض مع ندوة للرعاية الصحية لعرض الحالة على لجنة الأورام (Tumor Board). أُجري الاستئصال الجراحي بالروبوت بأعلى معايير الدقة مع حواف أمان نظيفة تماماً ودون الحاجة لأي نقل دم.",
      "keyOutcomes": "حواف استئصال سليمة تماماً، وتعافٍ سريع لوظائف الأمعاء، والعودة إلى مسقط ببروتوكول علاجي مفصل.",
      "lengthOfStay": "14 يوماً في نيودلهي"
    },
    "fr": {
      "country": "Sultanat d'Oman (Mascate)",
      "summaryTitle": "Chirurgie colorectale mini-invasive robotisée et plan thérapeutique personnalisé",
      "patientNarrative": "Suite à la découverte d'une tumeur localisée du côlon sigmoïde, la famille a sollicité NHC pour un avis collégial en Tumor Board. La résection par cœlioscopie robotisée a permis des marges saines sans aucune transfusion sanguine.",
      "keyOutcomes": "Marges carcinologiques indemnes, reprise rapide du transit et retour à domicile avec protocole adapté.",
      "lengthOfStay": "14 jours à New Delhi"
    },
    "ru": {
      "country": "Султанат Оман (Маскат)",
      "summaryTitle": "Роботизированная резекция опухоли толстой кишки и персонализированная таргетная терапия",
      "patientNarrative": "После выявления опухоли сигмовидной кишки семья обратилась в NHC для организации онкоконсилиума (Tumor Board). Робот-ассистированная операция была выполнена с чистыми краями резекции и нулевой кровопотерей, пациент быстро восстановился.",
      "keyOutcomes": "Чистые хирургические края, быстрое восстановление ЖКТ и возвращение домой с четким планом химиотерапии.",
      "lengthOfStay": "14 дней в Нью-Дели"
    }
  },
  "case-04-urology-nigeria": {
    "ar": {
      "country": "نيجيريا (لاغوس)",
      "summaryTitle": "زراعة كلى ناجحة من متبرع حي من الأقارب لمريض يبلغ 42 عاماً",
      "patientNarrative": "كان المريض يخضع للغسيل الكلوي المنتظم ثلاث مرات أسبوعياً بسبب الفشل الكلوي المزمن. تبرع شقيقه الأصغر بإحدى كليتيه، ونجح فريق زراعة الكلى في استئصال الكلية بالمنظار للمتبرع وزراعتها للمريض بنجاح، وعادت وظائف الكلى والكرياتينين للمعدل الطبيعي في أيام.",
      "keyOutcomes": "مستوى كرياتينين طبيعي (1.1 mg/dL)، وتعافٍ كامل للمتبرع والمريض دون مضاعفات.",
      "lengthOfStay": "21 يوماً في دلهي إن سي آر"
    },
    "fr": {
      "country": "Nigeria (Lagos)",
      "summaryTitle": "Transplantation rénale de donneur vivant apparenté réussie pour un patient de 42 ans",
      "patientNarrative": "Sous hémodialyse trois fois par semaine pour insuffisance rénale terminale, ce patient a bénéficié d'un don de rein de son frère. La néphrectomie laparoscopique du donneur et la greffe ont permis une reprise de fonction immédiate.",
      "keyOutcomes": "Créatininémie normalisée à 1,1 mg/dL, donneur et receveur sortis en parfaite santé.",
      "lengthOfStay": "21 jours à Delhi NCR"
    },
    "ru": {
      "country": "Нигерия (Лагос)",
      "summaryTitle": "Успешная родственная трансплантация почки у пациента 42 лет",
      "patientNarrative": "Пациент находился на программном гемодиализе трижды в неделю. Младший брат выступил донором. Команда трансплантологов выполнила лапароскопический забор почки и успешную пересадку. Почка заработала на операционном столе.",
      "keyOutcomes": "Нормализация уровня креатинина до 1,1 мг/дл, полное выздоровление донора и реципиента.",
      "lengthOfStay": "21 день в Дели NCR"
    }
  },
  "case-05-neuro-bangladesh": {
    "ar": {
      "country": "بنغلاديش (دكا)",
      "summaryTitle": "استئصال ورم سحائي حميد في قاعدة الجمجمة بالمجهر العصبي لمريضة 49 عاماً",
      "patientNarrative": "كانت المريضة تعاني من نوبات صداع مزمنة وضعف تدريجي في الرؤية. أظهر الرنين المغناطيسي وجود ورم سحائي ضاغط في قاعدة الجمجمة. نجح فريق جراحة المخ والأعصاب في استئصال الورم بالكامل تحت المراقبة العصبية اللحظية، واستعادت المريضة كفاءة الرؤية تماماً.",
      "keyOutcomes": "استئصال كامل بنسبة 100% للورم مع الحفاظ التام على الأعصاب البصرية والحركية.",
      "lengthOfStay": "16 يوماً في نيودلهي"
    },
    "fr": {
      "country": "Bangladesh (Dacca)",
      "summaryTitle": "Exérèse microscopique d'un méningiome de la base du crâne pour une patiente de 49 ans",
      "patientNarrative": "Présentant des céphalées et une baisse d'acuité visuelle, la patiente a été opérée par microchirurgie sous neuronavigation pour un méningiome compressif. L'exérèse complète a permis une récupération visuelle rapide.",
      "keyOutcomes": "Exérèse tumorale complète (grade Simpson I) avec préservation intégrale des voies optiques.",
      "lengthOfStay": "16 jours à New Delhi"
    },
    "ru": {
      "country": "Бангладеш (Дакка)",
      "summaryTitle": "Микрохирургическое удаление менингиомы основания черепа у пациентки 49 лет",
      "patientNarrative": "Пациентку беспокоили постоянные головные боли и прогрессирующее снижение зрения. МРТ выявило менингиому основания черепа. Нейрохирурги полностью удалили опухоль с интраоперационным мониторингом, зрение восстановилось.",
      "keyOutcomes": "Тотальное удаление опухоли с сохранением зрительных нервов и полным регрессом симптомов.",
      "lengthOfStay": "16 дней в Нью-Дели"
    }
  },
  "case-06-gastro-iraq": {
    "ar": {
      "country": "العراق (بغداد)",
      "summaryTitle": "إزالة حصوات القناة المرارية بالمنظار ودعامات البنكرياس لمريض 52 عاماً من بغداد",
      "patientNarrative": "وصل المريض إلى دلهي وهو يعاني من يرقان انسدادي وآلام شديدة ناتجة عن حصى كبيرة بالقناة المرارية الرئيسية. تم إجراء منظار ERCP فوري وتفتيت الحصوات واستخراجها وتركيب دعامة تصريف، واختفى اليرقان والآلام خلال 48 ساعة وغادر المريض سالماً.",
      "keyOutcomes": "تنظيف كامل للقنوات المرارية، وزوال اليرقان وانخفاض البيليروبين للمعدل الطبيعي.",
      "lengthOfStay": "7 أيام في نيودلهي"
    },
    "fr": {
      "country": "Irak (Bagdad)",
      "summaryTitle": "Extraction de calculs de la voie biliaire par CPRE pour un patient de 52 ans de Bagdad",
      "patientNarrative": "Arrivé avec un ictère obstructif douloureux lié à des calculs biliaires enclavés, le patient a bénéficié d'une CPRE en urgence avec sphinctérotomie et pose d'endoprothèse. L'ictère s'est résolu en 48 heures sans chirurgie ouverte.",
      "keyOutcomes": "Voie biliaire principale libre, normalisation complète de la bilirubinémie.",
      "lengthOfStay": "7 jours à New Delhi"
    },
    "ru": {
      "country": "Ирак (Багдад)",
      "summaryTitle": "Эндоскопическое удаление камней холедоха (ЭРХПГ) у пациента 52 лет из Багдада",
      "patientNarrative": "Пациент поступил с механической желтухой и болями из-за крупного камня в общем желчном протоке. Врачами была экстренно проведена процедура ЭРХПГ, папиллосфинктеротомия и извлечение камня без полостной операции.",
      "keyOutcomes": "Полная проходимость желчевыводящих путей, нормализация билирубина и отличное самочувствие.",
      "lengthOfStay": "7 дней в Нью-Дели"
    }
  }
};

// FAQ translations dictionary
export const FAQ_LOCALIZATIONS: Record<string, Record<string, { question: string; answer: string }>> = {
  "faq-1": {
    "ar": {
      "question": "كيف تعمل السياحة العلاجية في الهند مع ندوة للرعاية الصحية؟",
      "answer": "تبدأ العملية عندما تشارك تقاريرك الطبية مع فريق ندوة. نعرض حالتك على كبار الاستشاريين في أرقى مستشفيات دلهي للحصول على الآراء الطبية وتقديرات التكلفة مجاناً. بعد اختيارك الخطة الأنسب، نساعدك في استخراج تأشيرة العلاج الرسمية واستقبال المطار وحجز السكن وتنسيق المواعيد والمتابعة المستمرة حتى عودتك سالماً."
    },
    "fr": {
      "question": "Comment fonctionne le tourisme médical en Inde avec NadwaHealthcare ?",
      "answer": "Le processus débute par la transmission de vos rapports médicaux. Notre équipe consulte les spécialistes des meilleurs hôpitaux de Delhi NCR pour obtenir avis et devis. Une fois votre choix validé, nous facilitons l'obtention du visa médical officiel, le transfert aéroport, l'hébergement et l'accompagnement personnalisé."
    },
    "ru": {
      "question": "Как организовано лечение в Индии с помощью NadwaHealthcare?",
      "answer": "Процесс начинается с отправки ваших медицинских выписок. Мы передаем их ведущим профессорам клиник Дели NCR для получения заключений и официальных смет. После согласования плана мы оформляем визовое приглашение VIL, организуем трансфер из аэропорта, проживание и координацию в клинике."
    }
  },
  "faq-2": {
    "ar": {
      "question": "كيف يمكنني طلب تقدير رسمي لتكلفة العلاج؟",
      "answer": "يمكنك تقديم طلب عبر نموذج الاستشارة على الموقع أو مراسلة مكتبنا الدولي عبر الواتساب مع إرفاق أحدث التقارير الطبية وصور الأشعة. خلال 24 إلى 48 ساعة، سنوافيك بالآراء الطبية المكتوبة وتقدير التكلفة التفصيلي الصادر مباشرة من المستشفيات المعتمدة."
    },
    "fr": {
      "question": "Comment puis-je demander une estimation de traitement ?",
      "answer": "Vous pouvez soumettre une demande via notre formulaire en ligne ou contacter notre bureau WhatsApp en joignant vos examens récents. Sous 24 à 48 heures, nous vous fournirons les avis médicaux écrits et devis détaillés émis directement par les hôpitaux partenaires."
    },
    "ru": {
      "question": "Как запросить предварительный расчет стоимости лечения?",
      "answer": "Вы можете заполнить форму на сайте или написать нам в WhatsApp, прикрепив свежие выписки и снимки. В течение 24–48 часов мы предоставим вам заключения врачей и официальные сметы от аккредитованных клиник."
    }
  },
  "faq-3": {
    "ar": {
      "question": "ما هي التقارير الطبية المطلوبة للتقييم الدقيق للحالة؟",
      "answer": "لحالات القلب: مخطط صدى القلب (إيكو) ورسم القلب وقرص القسطرة. للأورام: تقرير فحص الخزعة النسيجية وأشعة PET-CT أو الرنين. للعظام: صور أشعة سينية حديثة ورنين مغناطيسي. يفضل أن تكون جميع التقارير حديثة خلال آخر 3 إلى 6 أشهر."
    },
    "fr": {
      "question": "Quels rapports médicaux dois-je transmettre pour une évaluation précise ?",
      "answer": "En cardiologie : ECG, échocardiographie et compte-rendu de coronarographie. En oncologie : histopathologie de biopsie, marqueurs IHC et TEP-scan/IRM. En orthopédie : radiographies récentes en charge et IRM. Les examens doivent dater de moins de 3 à 6 mois."
    },
    "ru": {
      "question": "Какие медицинские выписки необходимы для точной оценки?",
      "answer": "Для кардиологии: ЭКГ, ЭхоКГ и диск коронарографии. Для онкологии: гистологическое заключение биопсии, ИГХ и диск ПЭТ-КТ/МРТ. Для ортопедии: рентген-снимки под нагрузкой и МРТ. Желательно, чтобы обследования были сделаны в течение последних 3–6 месяцев."
    }
  },
  "faq-4": {
    "ar": {
      "question": "هل يمكن لندوة مساعدتي في اختيار أفضل مستشفى وجراح لحالتي؟",
      "answer": "نعم بالتأكيد. تعمل ندوة كميسر طبي مستقل يقدم لك خيارات مقارنة غير متحيزة من أرقى مستشفيات الهند المعتمدة (JCI وNABH) مثل ميدانتا وأبولو وفورتيس وماكس، لنساعدك على اختيار الفريق الطبي والتقنية الجراحية الأنسب لحالتك."
    },
    "fr": {
      "question": "NHC peut-il m'aider à choisir le meilleur hôpital et médecin ?",
      "answer": "Absolument. NadwaHealthcare agit comme facilitateur indépendant. Nous vous présentons des options objectives parmi les hôpitaux de pointe accrédités JCI et NABH (Medanta, Apollo, Fortis, Max) afin de garantir le choix le plus éclairé."
    },
    "ru": {
      "question": "Поможет ли NadwaHealthcare выбрать лучшую клинику и врача?",
      "answer": "Да. Мы выступаем вашим независимым медицинским консультантом и предлагаем объективные варианты из ведущих госпиталей Индии с аккредитацией JCI и NABH (Меданта, Аполло, Фортис, Макс) с учетом специализации врачей и оснащения клиник."
    }
  },
  "faq-5": {
    "ar": {
      "question": "هل تقدمون مساعدة مجانية في استخراج التأشيرة الطبية وخطاب الدعوة (VIL)؟",
      "answer": "نعم، خدمات التأشيرة الطبية مجانية تماماً وبدون أي رسوم. نقوم باستخراج خطاب دعوة المستشفى الرسمي (VIL) على الأوراق الرسمية للمستشفى خلال 24 إلى 48 ساعة لتقديمه للسفارة أو بوابة التأشيرة الإلكترونية الهندية، مع شمول مرافقين اثنين."
    },
    "fr": {
      "question": "Fournissez-vous une assistance gratuite pour le visa médical et la lettre d'invitation ?",
      "answer": "Oui, 100 % gratuit. NadwaHealthcare ne facture aucun frais pour l'assistance visa. Nous coordonnons votre lettre officielle d'invitation hospitalière (VIL) sous 24 à 48 heures pour les démarches d'e-Visa médical avec jusqu'à deux accompagnateurs."
    },
    "ru": {
      "question": "Предоставляете ли вы бесплатную визовую поддержку и визовое приглашение (VIL)?",
      "answer": "Да, абсолютно бесплатно. Мы оформляем официальное медицинское приглашение (VIL) на бланке клиники в течение 24–48 часов для подачи на электронную визу Индии или в консульство, включая визы для двух сопровождающих."
    }
  },
  "faq-6": {
    "ar": {
      "question": "هل تساعد ندوة في توفير السكن والمواصلات والخدمات المحلية؟",
      "answer": "نعم، نوفر استقبالاً مجانياً من مطار دلهي الدولي، ونساعدك في حجز شقق فندقية مفروشة ومجهزة بمطبخ أو فنادق قريبة جداً من المستشفى، كما نوفر شريحة هاتف محلية وخدمات الصرافة والترجمة الفورية."
    },
    "fr": {
      "question": "Pouvez-vous organiser l'hébergement, le transport et les services locaux ?",
      "answer": "Tout à fait. Nous assurons le transfert depuis l'aéroport de Delhi vers votre hébergement ou l'hôpital, la réservation d'appartements équipés ou d'hôtels à proximité immédiate, une carte SIM locale et un accompagnement linguistique."
    },
    "ru": {
      "question": "Помогает ли NHC с проживанием, трансфером и бытовыми вопросами?",
      "answer": "Да. Мы организуем встречу в аэропорту Дели, подбираем апартаменты с кухней или отели рядом с клиникой, предоставляем местную SIM-карту, помогаем с обменом валюты и предоставляем русскоговорящего координатора."
    }
  },
  "faq-7": {
    "ar": {
      "question": "كيف يمكن للمرضى الدوليين التواصل مع ندوة للرعاية الصحية؟",
      "answer": "يمكنكم التواصل معنا على مدار 24/7 عبر الواتساب على الرقم +91 96485 78320، أو عبر البريد الإلكتروني info@nadwahealthcare.com، أو بتعبئة نموذج الاتصال على موقعنا. فريقنا يتحدث العربية والإنجليزية والفرنسية والروسية."
    },
    "fr": {
      "question": "Comment les patients internationaux peuvent-ils contacter NHC ?",
      "answer": "Vous pouvez nous joindre 24h/24 par WhatsApp au +91 96485 78320, par email à info@nadwahealthcare.com ou via notre formulaire en ligne. Notre équipe est multilingue (français, anglais, arabe, russe)."
    },
    "ru": {
      "question": "Как связаться с международным отделом NadwaHealthcare?",
      "answer": "Мы на связи 24/7 в WhatsApp по номеру +91 96485 78320, по почте info@nadwahealthcare.com или через онлайн-форму на сайте. Наши координаторы говорят на русском, английском, арабском и французском языках."
    }
  },
  "faq-8": {
    "ar": {
      "question": "هل تكاليف العلاج والنتائج الطبية مضمونة بنسبة 100%؟",
      "answer": "لا توجد في الطب ضمانات مطلقة، وأي جهة تعد بذلك غير مسؤولة. تختلف استجابة جسم الإنسان وسير المرض من مريض لآخر. تقديرات التكلفة التي نقدمها هي تقديرات مؤسسية للمدد القياسية، وقد تتغير في حال حدوث مضاعفات غير متوقعة أو حاجة لعناية مركزة إضافية. نحرص دائماً على الشفافية المالية التامة."
    },
    "fr": {
      "question": "Les coûts et résultats médicaux sont-ils garantis ?",
      "answer": "Non. Une médecine responsable ne garantit jamais d'issue absolue. Les devis sont des estimations institutionnelles basées sur un séjour standard ; d'éventuelles complications peuvent modifier la facture finale de l'hôpital. Nous privilégions une transparence totale."
    },
    "ru": {
      "question": "Гарантируются ли результаты лечения и точная стоимость?",
      "answer": "Нет. В медицине гарантии невозможны, так как организм каждого пациента индивидуален. Предварительные сметы являются официальными расчетами клиник на стандартный срок пребывания; непредвиденные осложнения могут изменить итоговый счет клиники."
    }
  },
  "faq-9": {
    "ar": {
      "question": "كيف تقارن تكلفة العلاج في الهند مع الدول الغربية ودول الخليج؟",
      "answer": "توفر مستشفيات الهند أرقى العمليات الجراحية المتقدمة بتكلفة تقل بنسبة 60% إلى 80% مقارنة بالولايات المتحدة وبريطانيا، وبنسبة 30% إلى 50% مقارنة بمستشفيات القطاع الخاص في الخليج وأوروبا، مع استخدام نفس الأجهزة الروبوتية والدعامات والمفاصل المعتمدة من FDA الأمريكية."
    },
    "fr": {
      "question": "Comment se comparent les coûts en Inde par rapport à l'Occident ou au Golfe ?",
      "answer": "Les hôpitaux indiens réalisent des chirurgies complexes à des tarifs 60 % à 80 % inférieurs à ceux des États-Unis ou de l'Europe occidentale, tout en employant les mêmes implants agréés FDA et technologies robotiques de dernière génération."
    },
    "ru": {
      "question": "Какова разница в стоимости лечения в Индии по сравнению с Европой и США?",
      "answer": "Лечение в клиниках Индии обходится на 60–80% дешевле, чем в США или Германии, и на 30–50% дешевле, чем в частных клиниках Турции или ОАЭ, при использовании точно таких же сертифицированных FDA эндопротезов, роботов da Vinci и протоколов лечения."
    }
  },
  "faq-10": {
    "ar": {
      "question": "هل تتقاضى ندوة للرعاية الصحية أي أتعاب أو رسوم من المرضى؟",
      "answer": "خدمات التنسيق الأولي من ندوة — بما في ذلك دراسة الحالة وجمع آراء المستشفيات وتقديم عروض الأسعار وتسهيل خطابات التأشيرة — مجانية 100% للمرضى وعائلاتهم. يتم سداد فواتير العلاج والفحوصات والأدوية مباشرة إلى المستشفى ومقدمي الخدمات."
    },
    "fr": {
      "question": "NadwaHealthcare facture-t-il des frais aux patients pour la coordination ?",
      "answer": "Nos services de coordination préliminaire (évaluation du dossier, avis hospitaliers, devis et lettres de visa) sont 100 % gratuits pour les patients. Les frais médicaux, examens et hébergements sont réglés directement aux prestataires."
    },
    "ru": {
      "question": "Берет ли NadwaHealthcare комиссию с пациентов за организацию лечения?",
      "answer": "Все наши предварительные услуги — рассмотрение документов, получение мнений врачей, сметы и оформление визовых писем — полностью бесплатны для пациентов. Все медицинские услуги оплачиваются напрямую в кассу клиники."
    }
  }
};

/**
 * Returns a fully localized Doctor object based on the current language
 */
export function getLocalizedDoctor(doctor: DoctorItem, lang: string) {
  const city = CITY_TRANSLATIONS[doctor.city]?.[lang] || doctor.city;
  const specialty = SPECIALTY_TRANSLATIONS[doctor.specialty]?.[lang] || doctor.specialty;
  const experienceFormatted = formatExperience(doctor.experienceYears, lang);

  const loc = DOCTOR_LOCALIZATIONS[doctor.id]?.[lang] || {};

  return {
    ...doctor,
    city,
    specialty,
    experienceFormatted,
    designation: loc.designation || doctor.designation,
    bio: loc.bio || doctor.bio,
    highlights: loc.highlights || doctor.highlights,
    faqs: loc.faqs || doctor.faqs,
  };
}

/**
 * Returns a fully localized Hospital object based on the current language
 */
export function getLocalizedHospital(hospital: HospitalItem, lang: string) {
  const city = CITY_TRANSLATIONS[hospital.city]?.[lang] || hospital.city;
  const loc = HOSPITAL_LOCALIZATIONS[hospital.id]?.[lang] || {};

  return {
    ...hospital,
    city,
    shortDesc: loc.shortDesc || hospital.shortDesc,
    bedCapacity: loc.bedCapacity || hospital.bedCapacity,
    distanceFromAirport: loc.distanceFromAirport || hospital.distanceFromAirport,
  };
}

/**
 * Returns a fully localized Treatment object based on the current language
 */
export function getLocalizedTreatment(treatment: TreatmentItem, lang: string) {
  const loc =
    TREATMENT_LOCALIZATIONS[treatment.id]?.[lang] ||
    TREATMENT_LOCALIZATIONS[treatment.slug]?.[lang] ||
    {};

  return {
    ...treatment,
    title: loc.title || treatment.title,
    badge: loc.badge || treatment.badge,
    shortDesc: loc.shortDesc || treatment.shortDesc,
    overview: loc.overview || treatment.overview,
    recommendedStay: loc.recommendedStay || treatment.recommendedStay,
    recoveryTimeline: loc.recoveryTimeline || treatment.recoveryTimeline,
    conditionsTreated: loc.conditionsTreated || treatment.conditionsTreated,
    treatmentOptions: loc.treatmentOptions || treatment.treatmentOptions,
    treatmentPathway: loc.treatmentPathway || treatment.treatmentPathway,
    whyIndia: loc.whyIndia || treatment.whyIndia,
    faqs: loc.faqs || treatment.faqs,
  };
}

/**
 * Returns a fully localized Service Journey Step object based on current language
 */
export function getLocalizedServiceStep(step: ServiceJourneyStep, lang: string): ServiceJourneyStep {
  const loc = SERVICE_LOCALIZATIONS[step.step]?.[lang];
  if (!loc) return step;

  return {
    ...step,
    title: loc.title || step.title,
    shortDesc: loc.shortDesc || step.shortDesc,
    detailedProcess: loc.detailedProcess || step.detailedProcess,
  };
}

/**
 * Returns a fully localized Patient Story object based on current language
 */
export function getLocalizedPatientStory(story: PatientStoryItem, lang: string): PatientStoryItem {
  const loc = PATIENT_STORY_LOCALIZATIONS[story.id]?.[lang];
  if (!loc) return story;

  return {
    ...story,
    country: loc.country || story.country,
    summaryTitle: loc.summaryTitle || story.summaryTitle,
    patientNarrative: loc.patientNarrative || story.patientNarrative,
    keyOutcomes: loc.keyOutcomes || story.keyOutcomes,
    lengthOfStay: loc.lengthOfStay || story.lengthOfStay,
  };
}

/**
 * Returns a fully localized FAQ item
 */
export function getLocalizedFAQ(faq: FAQItem, lang: string) {
  const loc = FAQ_LOCALIZATIONS[faq.id]?.[lang];
  return {
    ...faq,
    question: loc?.question || faq.question,
    answer: loc?.answer || faq.answer,
  };
}

export const BLOG_LOCALIZATIONS: Record<string, Record<string, {
  h1Title: string;
  category: string;
  badge: string;
  readingTime: string;
  summary?: string;
  medicalTerms?: Array<{ term: string; simpleExplanation: string }>;
  sections?: Array<{
    h2: string;
    paragraphs?: string[];
    bulletPoints?: string[];
    costTable?: Array<{ procedure: string; indiaCostUsd: string; westernCostUsd: string; savingsPercentage: string }>;
    callout?: string;
    h3List?: Array<{ h3: string; paragraphs: string[]; bulletPoints?: string[] }>;
  }>;
  faqs?: Array<{ question: string; answer: string }>;
}>> = {
  "cardiology-heart-surgery-india-cost-guide": {
    ar: {
      h1Title: "جراحة القلب في الهند: التكاليف، أفضل مستشفيات القلب ودليل التعافي للمرضى الدوليين",
      category: "أمراض وجراحة القلب",
      badge: "دليل 2026 الشامل",
      readingTime: "8 دقائق قراءة",
      summary: "اكتشف لماذا يختار آلاف المرضى من الإمارات، دول الخليج، إفريقيا وآسيا الوسطى الهند لجراحات القلب المتقدمة—بما في ذلك مجازة الشريان التاجي (CABG)، استبدال الصمامات، وجراحات عيوب القلب للأطفال بتوفير 70% إلى 85%."
    },
    ru: {
      h1Title: "Кардиохирургия в Индии: стоимость, лучшие кардиоцентры и реабилитация",
      category: "Кардиология и кардиохирургия",
      badge: "Полный гид 2026",
      readingTime: "8 мин чтения",
      summary: "Узнайте, почему тысячи пациентов из ОАЭ, стран Персидского залива, СНГ и Африки выбирают Индию для операций на сердце — включая АКШ, замену клапанов и детскую кардиохирургию по ценам на 70–85% ниже, чем на Западе."
    },
    fr: {
      h1Title: "Chirurgie cardiaque en Inde : Coûts, meilleurs hôpitaux et guide de rétablissement",
      category: "Cardiologie & Chirurgie cardiaque",
      badge: "Guide Complet 2026",
      readingTime: "8 min de lecture",
      summary: "Découvrez pourquoi des milliers de patients des pays du Golfe, d'Afrique et d'Europe choisissent l'Inde pour des interventions cardiaques de pointe : pontage aorto-coronarien (PAC), remplacements valvulaires et cardiopathies pédiatriques."
    }
  },
  "cancer-treatment-oncology-india-cost-guide": {
    ar: {
      h1Title: "علاج السرطان في الهند: أحدث تقنيات الأورام، أفضل المستشفيات وتفاصيل التكلفة للمرضى الدوليين",
      category: "علاج وأورام السرطان",
      badge: "دليل الأورام المعتمد",
      readingTime: "9 دقائق قراءة",
      summary: "يتطلب تشخيص السرطان نهجاً سريرياً متكاملاً، وبدءاً سريعاً للعلاج، والوصول لأحدث التقنيات الطبية. بفضل مجالس الأورام متعددة التخصصات (Tumor Boards)، ومسرعات TrueBeam، وجراحة السايبر نايف والعلاج المناعي CAR-T، تقدم مستشفيات الهند نسب شفاء تضاهي المعايير العالمية بتوفير 70% إلى 85%."
    },
    ru: {
      h1Title: "Лечение рака в Индии: передовая онкология, лучшие клиники и стоимость для зарубежных пациентов",
      category: "Онкология и лечение рака",
      badge: "Гид по онкологии 2026",
      readingTime: "9 мин чтения",
      summary: "Диагноз онкологии требует мультидисциплинарного подхода и быстрого начала лечения. Институциональные онкоконсилиумы (Tumor Boards), линейные ускорители TrueBeam, CyberKnife, таргетная и CAR-T клеточная терапия в Индии обеспечивают мировые стандарты выживаемости по ценам на 70–85% ниже западных."
    },
    fr: {
      h1Title: "Traitement du cancer en Inde : Oncologie de pointe, meilleurs hôpitaux et coûts pour les patients internationaux",
      category: "Cancérologie & Oncologie",
      badge: "Guide Oncologie 2026",
      readingTime: "9 min de lecture",
      summary: "Un diagnostic de cancer exige une approche clinique intégrée et un accès direct aux technologies de pointe. Grâce aux Tumor Boards multidisciplinaires, aux accélérateurs TrueBeam, au CyberKnife et à l'immunothérapie CAR-T, les centres d'oncologie en Inde offrent des soins personnalisés à des coûts 70% à 85% inférieurs aux standards occidentaux."
    }
  },
  "knee-hip-replacement-surgery-cost-india": {
    ar: {
      h1Title: "استبدال مفصل الركبة والورك في الهند: الجراحة الروبوتية، التكاليف ودليل الإقامة",
      category: "جراحة العظام والمفاصل",
      badge: "دليل استبدال المفاصل",
      readingTime: "7 دقائق قراءة",
      summary: "استعد القدرة على المشي براحة تامة مع جراحات استبدال مفصل الركبة والورك الروبوتية الموجهة بالذكاء الاصطناعي في دلهي الكبرى. مفاصل سيراميك وتيتانيوم معتمدة من FDA تدوم لأكثر من 25 عاماً بتكلفة أقل بنسبة 70% مقارنة بالدول الغربية والخليج."
    },
    ru: {
      h1Title: "Эндопротезирование коленного и тазобедренного суставов в Индии: робот-ассистированные операции и цены",
      category: "Ортопедия и замена суставов",
      badge: "Гид по ортопедии 2026",
      readingTime: "7 мин чтения",
      summary: "Верните свободу движений с помощью роботизированного эндопротезирования суставов в Дели NCR. Сертифицированные FDA титановые и керамические импланты со сроком службы 25+ лет по ценам в разы ниже западных."
    },
    fr: {
      h1Title: "Remplacement du genou et de la hanche en Inde : Chirurgie robotique et coûts",
      category: "Orthopédie & Prothèses",
      badge: "Guide Orthopédie 2026",
      readingTime: "7 min de lecture",
      summary: "Retrouvez une mobilité fluide grâce au remplacement robotisé du genou et de la hanche à Delhi NCR. Implants en titane et céramique approuvés par la FDA américaine d'une longévité de plus de 25 ans à des tarifs très compétitifs."
    }
  },
  "neurosurgery-spine-surgery-india-cost-guide": {
    ar: {
      h1Title: "جراحة المخ والأعصاب والعمود الفقري في الهند: أورام الدماغ، جراحة العمود الفقري بالمنظار والتكاليف",
      category: "جراحة المخ والأعصاب والعمود الفقري",
      badge: "دليل جراحة المخ والأعصاب",
      readingTime: "9 دقائق قراءة",
      summary: "تعرف على كيفية تحقيق جراحة المخ والأعصاب والعمود الفقري طفيفة التوغل في دلهي الكبرى لنتائج تعافٍ سريرية فائقة لحالات الانزلاق الغضروفي، أورام الدماغ، الجنف وآلام العصب الخامس بأحدث تقنيات الملاحة العصبية.",
      medicalTerms: [
        {
          term: "MISS (جراحة العمود الفقري طفيفة التوغل)",
          simpleExplanation: "جراحة للعمود الفقري تُجرى عبر شقوق متناهية الصغر (ثقب المفتاح) باستخدام أنابيب وكاميرات دقيقة، مما يقلل من تضرر عضلات الظهر ويتيح للمريض المشي خلال 24 ساعة."
        },
        {
          term: "الملاحة العصبية والرنين المغناطيسي أثناء الجراحة",
          simpleExplanation: "نظام توجيه شبيه بنظام الملاحة بالأقمار الصناعية داخل الدماغ، يتيح للجراحين استئصال الأورام الحساسة بدقة فائقة دون المساس بمراكز النطق أو الحركة الحيوية."
        }
      ],
      sections: [
        {
          h2: "أحدث التقنيات لجراحة المخ والأعصاب والعمود الفقري في دلهي الكبرى",
          paragraphs: [
            "يتطلب الدماغ البشري والحبل الشوكي دقة جراحية لا تضاهى. تتميز مستشفيات دلهي الكبرى بوحدات عناية مركزة عصبية فائقة التطور، وأنظمة مراقبة عصبية مستمرة أثناء الجراحة، وميكروسكوبات جراحية متطورة من Carl Zeiss.",
            "يحصل المرضى القادمون من دول الخليج العربي وأوزبكستان وكازاخستان على رعاية طبية عالمية لأورام العصب السمعي، أورام الغدة النخامية، الانزلاق الغضروفي القطني، وعمليات تثبيت الفقرات بجزء يسير من التكاليف العالمية."
          ]
        },
        {
          h2: "تفاصيل تكاليف جراحة المخ والأعصاب والعمود الفقري (بالدولار الأمريكي)",
          costTable: [
            {
              procedure: "استئصال الغضروف بالميكروسكوب (علاج عرق النسا والانزلاق)",
              indiaCostUsd: "$3,200 – $4,500",
              westernCostUsd: "$28,000 – $40,000",
              savingsPercentage: "85%"
            },
            {
              procedure: "دمج وتثبيت الفقرات (TLIF / دمج الفقرات العنقية ACDF)",
              indiaCostUsd: "$5,000 – $7,200",
              westernCostUsd: "$55,000 – $80,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "فتح الجمجمة واستئصال أورام الدماغ",
              indiaCostUsd: "$5,500 – $8,500",
              westernCostUsd: "$75,000 – $110,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "التحفيز العميق للدماغ (DBS لعلاج الشلل الرعاش - باركنسون)",
              indiaCostUsd: "$20,000 – $26,000",
              westernCostUsd: "$90,000 – $140,000",
              savingsPercentage: "78%"
            }
          ]
        }
      ],
      faqs: [
        {
          question: "متى يمكن للمريض المشي بعد جراحة الانزلاق الغضروفي بالمنظار؟",
          answer: "يستطيع معظم المرضى الوقوف والمشي بحزام داعم للظهر خلال 12 إلى 24 ساعة من إجراء استئصال الغضروف المجهري طفيف التوغل."
        }
      ]
    },
    ru: {
      h1Title: "Нейрохирургия и операции на позвоночнике в Индии: опухоли мозга, эндоскопия и стоимость",
      category: "Нейрохирургия и позвоночник",
      badge: "Гид по нейрохирургии 2026",
      readingTime: "9 мин чтения",
      summary: "Узнайте, как малоинвазивная нейрохирургия в Дели NCR обеспечивает быстрое восстановление при грыжах межпозвоночных дисков, опухолях головного мозга, сколиозе и невралгии тройничного нерва.",
      medicalTerms: [
        {
          term: "MISS (Малоинвазивная хирургия позвоночника)",
          simpleExplanation: "Операция через микроскопические проколы с помощью камер, позволяющая пациенту вставать и ходить уже через 24 часа."
        },
        {
          term: "Нейронавигация и интраоперационный МРТ",
          simpleExplanation: "Высокоточная GPS-навигация в головном мозге, позволяющая удалить опухоль без повреждения речевых и двигательных центров."
        }
      ],
      sections: [
        {
          h2: "Передовые нейрохирургические технологии в клиниках Дели NCR",
          paragraphs: [
            "Головной и спинной мозг требуют ювелирной точности. Клиники Дели оснащены передовыми нейро-реанимациями, мониторингом нервных путей и микроскопами Carl Zeiss.",
            "Пациенты из Узбекистана, Казахстана и стран СНГ получают высококлассную помощь при невриномах слухового нерва, аденомах гипофиза, грыжах межпозвоночных дисков и спондилодезе по доступным ценам."
          ]
        },
        {
          h2: "Ориентировочная стоимость нейрохирургии и операций на позвоночнике (USD)",
          costTable: [
            {
              procedure: "Микродискэктомия (удаление грыжи диска / радикулит)",
              indiaCostUsd: "$3,200 – $4,500",
              westernCostUsd: "$28,000 – $40,000",
              savingsPercentage: "85%"
            },
            {
              procedure: "Спондилодез позвоночника (TLIF / ACDF)",
              indiaCostUsd: "$5,000 – $7,200",
              westernCostUsd: "$55,000 – $80,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "Краниотомия и удаление опухоли головного мозга",
              indiaCostUsd: "$5,500 – $8,500",
              westernCostUsd: "$75,000 – $110,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "DBS (Глубокая стимуляция мозга при болезни Паркинсона)",
              indiaCostUsd: "$20,000 – $26,000",
              westernCostUsd: "$90,000 – $140,000",
              savingsPercentage: "78%"
            }
          ]
        }
      ],
      faqs: [
        {
          question: "Когда пациент может ходить после эндоскопической операции по удалению грыжи диска?",
          answer: "Большинство пациентов встают и ходят в поддерживающем поясе уже через 12–24 часа после малоинвазивной микродискэктомии."
        }
      ]
    },
    fr: {
      h1Title: "Neurochirurgie et chirurgie du rachis en Inde : Tumeurs cérébrales et coûts",
      category: "Neurochirurgie & Rachis",
      badge: "Guide Neurochirurgie 2026",
      readingTime: "9 min de lecture",
      summary: "Découvrez comment la neurochirurgie mini-invasive du cerveau et du rachis à Delhi NCR permet une récupération optimale pour les hernies discales, tumeurs cérébrales et névralgies.",
      medicalTerms: [
        {
          term: "MISS (Chirurgie mini-invasive du rachis)",
          simpleExplanation: "Chirurgie de la colonne réalisée par micro-incisions avec des tubes optiques, permettant au patient de remarcher dans les 24 heures."
        },
        {
          term: "Neuronavigation & IRM peropératoire",
          simpleExplanation: "Guidage GPS de haute précision dans le cerveau permettant d'enlever les tumeurs sans léser les zones de la parole et de la motricité."
        }
      ],
      sections: [
        {
          h2: "Technologies neurochirurgicales avancées à Delhi NCR",
          paragraphs: [
            "Le cerveau et la moelle épinière exigent une précision absolue. Les hôpitaux de Delhi NCR disposent d'unités de soins intensifs neuro-spécialisées et de microscopes Carl Zeiss.",
            "Les patients internationaux bénéficient d'une prise en charge de pointe pour les neurinomes, adénomes hypophysaires, hernies discales et arthrodèses à un coût très avantageux."
          ]
        },
        {
          h2: "Estimation des coûts en neurochirurgie et colonne vertébrale (en USD)",
          costTable: [
            {
              procedure: "Microdiscectomie (Hernie discale / Sciatique)",
              indiaCostUsd: "$3,200 – $4,500",
              westernCostUsd: "$28,000 – $40,000",
              savingsPercentage: "85%"
            },
            {
              procedure: "Arthrodèse vertébrale (TLIF / ACDF cervicale)",
              indiaCostUsd: "$5,000 – $7,200",
              westernCostUsd: "$55,000 – $80,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "Craniotomie pour résection de tumeur cérébrale",
              indiaCostUsd: "$5,500 – $8,500",
              westernCostUsd: "$75,000 – $110,000",
              savingsPercentage: "88%"
            },
            {
              procedure: "DBS (Stimulation cérébrale profonde - Parkinson)",
              indiaCostUsd: "$20,000 – $26,000",
              westernCostUsd: "$90,000 – $140,000",
              savingsPercentage: "78%"
            }
          ]
        }
      ],
      faqs: [
        {
          question: "Quand le patient peut-il remarcher après une chirurgie de hernie discale ?",
          answer: "La grande majorité des patients se lèvent et marchent avec une ceinture de maintien dans les 12 à 24 heures suivant la microdiscectomie."
        }
      ]
    }
  },
  "kidney-treatment-urology-cost-india-guide": {
    ar: {
      h1Title: "علاج أمراض الكلى والمسالك البولية في الهند: تفتيت الحصى بالليزر والتكاليف",
      category: "الكلى والمسالك البولية",
      badge: "دليل أمراض الكلى 2026",
      readingTime: "7 دقائق قراءة",
      summary: "اكتشف علاجات تفتيت حصوات الكلى بالليزر سريعة التعافي (RIRS / PCNL) وعلاج تضخم البروستاتا بالليزر (HoLEP) في دلهي الكبرى بدون شقوق جراحية مع خروج في نفس اليوم أو خلال 24 ساعة."
    },
    ru: {
      h1Title: "Лечение почек и урология в Индии: лазерное дробление камней, нефрология и цены",
      category: "Урология и нефрология",
      badge: "Гид по урологии 2026",
      readingTime: "7 мин чтения",
      summary: "Быстрое и безболезненное лазерное удаление камней в почках (RIRS / PCNL) и лазерная энуклеация простаты (HoLEP) в Дели NCR без разрезов и с быстрой выпиской."
    },
    fr: {
      h1Title: "Maladies rénales et urologie en Inde : Laser pour calculs et coûts",
      category: "Néphrologie & Urologie",
      badge: "Guide Urologie 2026",
      readingTime: "7 min de lecture",
      summary: "Découvrez les traitements au laser des calculs rénaux (RIRS / PCNL) et de la prostate (HoLEP) à Delhi NCR : interventions sans incision, récupération ultra-rapide et séjour hospitalier minimal."
    }
  },
  "gastroenterology-liver-treatment-india-guide": {
    ar: {
      h1Title: "أمراض الجهاز الهضمي والكبد في الهند: المناظير، علاج التليف ورعاية المرضى",
      category: "أمراض الجهاز الهضمي والكبد",
      badge: "دليل الجهاز الهضمي",
      readingTime: "8 دقائق قراءة",
      summary: "دليل شامل للرعاية المتقدمة لأمراض الجهاز الهضمي والكبد في دلهي الكبرى، بدءاً من مناظير القنوات المرارية المعقدة (ERCP) وحتى العلاج الطبي الحديث لتليف الكبد والتهابات الكبد الفيروسية."
    },
    ru: {
      h1Title: "Гастроэнтерология и заболевания печени в Индии: эндоскопия, цирроз и цены",
      category: "Гастроэнтерология и гепатология",
      badge: "Гид по гепатологии 2026",
      readingTime: "8 мин чтения",
      summary: "Комплексная диагностика и терапия заболеваний органов пищеварения и печени в Дели NCR: от сложных эндоскопических процедур ЭРХПГ до современного лечения гепатитов и цирроза."
    },
    fr: {
      h1Title: "Gastro-entérologie et maladies du foie en Inde : Endoscopie et soins",
      category: "Gastro-entérologie & Foie",
      badge: "Guide Hépatique 2026",
      readingTime: "8 min de lecture",
      summary: "Prise en charge complète des pathologies hépato-gastro-entérologiques à Delhi NCR : extraction de calculs par CPRE, endoscopies digestives avancées et protocoles thérapeutiques innovants."
    }
  },
  "ivf-fertility-treatment-in-india-cost-guide": {
    ar: {
      h1Title: "أطفال الأنابيب وعلاج العقم في الهند: تقنية الحقن المجهري ونسب النجاح للأزواج الدوليين",
      category: "أطفال الأنابيب والخصوبة",
      badge: "دليل الخصوبة الشامل",
      readingTime: "8 دقائق قراءة",
      summary: "حققوا حلم الإنجاب والأبوة مع أحدث تقنيات الإخصاب المساعد (ART) والحقن المجهري (ICSI) وزراعة الكيسة الأريمية في دلهي الكبرى بنسب نجاح تتراوح بين 65% و 75% بتكلفة اقتصادية ملائمة."
    },
    ru: {
      h1Title: "ЭКО и лечение бесплодия в Индии: ИКСИ, культивирование бластоцист и показатели успеха",
      category: "ЭКО и лечение бесплодия",
      badge: "Гид по ЭКО 2026",
      readingTime: "8 мин чтения",
      summary: "Осуществите мечту о рождении ребенка с помощью современных технологий ЭКО, ИКСИ и культивирования бластоцист в Дели NCR с показателями успеха от 65% до 75% по доступным ценам."
    },
    fr: {
      h1Title: "FIV et fertilité en Inde : ICSI, culture de blastocystes et taux de réussite",
      category: "FIV & Fertilité",
      badge: "Guide Fertilité 2026",
      readingTime: "8 min de lecture",
      summary: "Réalisez votre projet parental grâce aux technologies de procréation médicalement assistée (PMA), FIV, ICSI et culture de blastocystes à Delhi NCR avec un taux de réussite de 65% à 75%."
    }
  },
  "cosmetic-plastic-surgery-in-india-guide": {
    ar: {
      h1Title: "جراحة التجميل والترميم في الهند: تجميل الأنف، نحت القوام والجراحة التجميلية المتقدمة",
      category: "جراحة التجميل والترميم",
      badge: "دليل التجميل المعتمد",
      readingTime: "7 دقائق قراءة",
      summary: "جددي إشراقتك وجمالك الطبيعي مع نخبة من كبار جراحي التجميل المعتمدين في دلهي الكبرى. شفط الدهون بالفيزر، تجميل الأنف عالي الدقة، وعمليات شد القوام في أجنحة تعافٍ فاخرة وخاصة."
    },
    ru: {
      h1Title: "Пластическая и эстетическая хирургия в Индии: ринопластика, контурирование тела и цены",
      category: "Пластическая хирургия",
      badge: "Гид по пластике 2026",
      readingTime: "7 мин чтения",
      summary: "Преобразите внешность под руководством ведущих сертифицированных пластических хирургов Дели NCR: VASER-липосакция, ринопластика высокой точности и программы послеродового восстановления."
    },
    fr: {
      h1Title: "Chirurgie plastique et esthétique en Inde : Rhinoplastie, remodelage corporel et coûts",
      category: "Chirurgie plastique & Esthétique",
      badge: "Guide Esthétique 2026",
      readingTime: "7 min de lecture",
      summary: "Sublimez votre silhouette avec les meilleurs chirurgiens plasticiens certifiés de Delhi NCR : liposuccion VASER, rhinoplastie ultrasonique et forfaits remodelage corporel en suites de luxe."
    }
  },
  "general-laparoscopic-surgery-india-cost-guide": {
    ar: {
      h1Title: "الجراحة العامة والمنظار في الهند: الفتق، المرارة والعمليات الجراحية طفيفة التوغل",
      category: "الجراحة العامة والمنظار",
      badge: "دليل جراحة المنظار",
      readingTime: "6 دقائق قراءة",
      summary: "علاج فعال وسريع لأمراض البطن والجهاز الهضمي الشائعة بالمنظار الجراحي بدون ندبات ظاهرة في دلهي الكبرى، مع إقامة بالمستشفى من 24 إلى 48 ساعة وعودة سريعة لممارسة أنشطتك اليومية."
    },
    ru: {
      h1Title: "Общая и лапароскопическая хирургия в Индии: грыжи, желчный пузырь и цены",
      category: "Общая и лапароскопическая хирургия",
      badge: "Гид по лапароскопии 2026",
      readingTime: "6 мин чтения",
      summary: "Эффективное лечение грыж и заболеваний желчного пузыря с помощью малоинвазивной лапароскопической хирургии в Дели NCR с госпитализацией всего на 24–48 часов."
    },
    fr: {
      h1Title: "Chirurgie générale et cœlioscopie en Inde : Hernies, vésicule biliaire et coûts",
      category: "Chirurgie générale & Cœlioscopie",
      badge: "Guide Chirurgie 2026",
      readingTime: "6 min de lecture",
      summary: "Interventions abdominales rapides et sans cicatrice visible par cœlioscopie à Delhi NCR : chirurgie des hernies et de la vésicule biliaire avec seulement 24 à 48h d'hospitalisation."
    }
  },
  "neurology-treatment-in-india-care-guide": {
    ar: {
      h1Title: "رعاية أمراض الأعصاب في الهند: تأهيل السكتة الدماغية، باركنسون والصرع",
      category: "الأعصاب والسكتة الدماغية",
      badge: "دليل طب الأعصاب",
      readingTime: "7 دقائق قراءة",
      summary: "دقة تشخيصية متناهية وصالات تأهيل عصبي متطورة واستشارات تخصصية في دلهي الكبرى لمرضى السكتة الدماغية، اعتلال الأعصاب الطرفية، باركنسون واضطرابات الحركة."
    },
    ru: {
      h1Title: "Неврология в Индии: реабилитация после инсульта, лечение Паркинсона и эпилепсии",
      category: "Неврология и реабилитация",
      badge: "Гид по неврологии 2026",
      readingTime: "7 мин чтения",
      summary: "Высокоточная нейродиагностика, специализированные реабилитационные залы и консультации ведущих неврологов Дели NCR при инсультах, нейропатии и болезни Паркинсона."
    },
    fr: {
      h1Title: "Soins neurologiques en Inde : Rééducation post-AVC, Parkinson et épilepsie",
      category: "Neurologie & Rééducation",
      badge: "Guide Neurologie 2026",
      readingTime: "7 min de lecture",
      summary: "Précision diagnostique, plateaux techniques de neurorééducation robotisée et consultations de neurologues experts à Delhi NCR pour AVC, neuropathies et maladie de Parkinson."
    }
  },
  "liver-transplant-cost-in-india-complete-guide": {
    ar: {
      h1Title: "زراعة الكبد في الهند: المتبرع الحي، التكاليف، الموافقات القانونية ونسب النجاح",
      category: "زراعة الكبد",
      badge: "دليل زراعة الكبد المعتمد",
      readingTime: "9 دقائق قراءة",
      summary: "دليل العائلات الدولي الشامل لزراعة الكبد من متبرع حي في دلهي الكبرى: نسب نجاح تفوق 95%، بروتوكولات قانونية سلسة، أقصى معايير أمان للمتبرع وتكاليف شفافة بدون أي رسوم خفية."
    },
    ru: {
      h1Title: "Трансплантация печени в Индии: родственное донорство, стоимость, юридическое оформление и успех",
      category: "Трансплантация печени",
      badge: "Гид по трансплантации 2026",
      readingTime: "9 мин чтения",
      summary: "Все, что необходимо знать иностранным пациентам о родственной трансплантации печени в Дели NCR: успешность 95%+, строгие протоколы безопасности донора и прозрачные пакетные цены."
    },
    fr: {
      h1Title: "Greffe de foie en Inde : Donneur vivant, coûts, protocoles légaux et taux de succès",
      category: "Transplantation hépatique",
      badge: "Guide Greffe de Foie 2026",
      readingTime: "9 min de lecture",
      summary: "Tout ce que les familles internationales doivent savoir sur la greffe de foie avec donneur vivant à Delhi NCR : taux de succès supérieur à 95%, conformité légale et sécurité absolue du donneur."
    }
  },
  "dental-treatment-tourism-in-india-cost-guide": {
    ar: {
      h1Title: "سياحة طب الأسنان في الهند: زراعة الأسنان، ابتسامة هوليوود وإعادة تأهيل الفم بالكامل",
      category: "طب وزراعة الأسنان",
      badge: "دليل طب الأسنان 2026",
      readingTime: "6 دقائق قراءة",
      summary: "استعد ابتسامتك الواثقة مع زرعات الأسنان السويسرية والألمانية من التيتانيوم النقي، والمسح الرقمي ثلاثي الأبعاد وتيجان الزيركونيا في دلهي الكبرى بتوفير يصل إلى 70% مقارنة بالأسعار العالمية."
    },
    ru: {
      h1Title: "Стоматологический туризм в Индии: имплантация, виниры и восстановление зубов",
      category: "Стоматология и имплантация",
      badge: "Гид по стоматологии 2026",
      readingTime: "6 мин чтения",
      summary: "Восстановите идеальную улыбку с помощью швейцарских и немецких титановых имплантов, 3D-сканирования и коронок из диоксида циркония в Дели NCR со скидкой до 70%."
    },
    fr: {
      h1Title: "Tourisme dentaire en Inde : Implants, facettes et réhabilitation complète",
      category: "Soins dentaires & Implants",
      badge: "Guide Dentaire 2026",
      readingTime: "6 min de lecture",
      summary: "Retrouvez un sourire éclatant grâce aux implants dentaires suisses et allemands en titane pur, au scan 3D intra-oral et aux couronnes en zircone à Delhi NCR avec 70% d'économie."
    }
  },
  "what-is-bone-marrow-types-diseases-care-guide": {
    ar: {
      h1Title: "ما هو نخاع العظم؟ أنواعه ووظائفه وزراعته | ندوة",
      category: "أمراض الدم والأورام",
      badge: "دليل أمراض الدم 2026",
      readingTime: "9 دقائق قراءة",
      summary: "دليل شامل حول نخاع العظم الأحمر والأصفر، تكوين خلايا الدم، أمراض اللوكيميا والأنيميا اللاتنسجية، وزراعة نخاع العظم (BMT) في أفضل مستشفيات دلهي المعتمدة بتوفير حتى 85%."
    },
    fr: {
      h1Title: "La Moelle Osseuse : Types, Greffe et Soins | Nadwa",
      category: "Oncologie & Hématologie",
      badge: "Guide Hématologie 2026",
      readingTime: "9 min de lecture",
      summary: "Guide complet sur la moelle osseuse rouge et jaune, l'hématopoïèse, les maladies hématologiques (leucémie, myélome, aplasie) et la greffe de moelle osseuse en Inde avec 80% d'économie."
    },
    ru: {
      h1Title: "Костный Мозг: Виды, Функции и Пересадка | Nadwa",
      category: "Онкология и гематология",
      badge: "Гид по гематологии 2026",
      readingTime: "9 мин чтения",
      summary: "Полное клиническое руководство по костному мозгу: красный и желтый мозг, кроветворение, лейкоз, апластическая анемия, трансплантация костного мозга (ТКМ) в лучших клиниках Индии."
    }
  },
  "top-nabh-jci-accredited-hospitals-delhi-ncr": {
    ar: {
      h1Title: "أفضل مستشفيات معتمدة في دلهي إن سي آر | ندوة",
      category: "المستشفيات المعتمدة",
      badge: "دليل المستشفيات 2026",
      readingTime: "8 دقائق قراءة",
      summary: "مقارنة شاملة بين أفضل المستشفيات المعتمدة دولياً NABH و JCI في دلهي إن سي آر: ميدانتا، أبولو، فورتيس، مانيبال دواركا، وماكس، مع رأي طبي وتأشيرة مجاناً."
    },
    fr: {
      h1Title: "Hôpitaux Accrédités NABH & JCI Delhi NCR | Nadwa",
      category: "Hôpitaux Accrédités",
      badge: "Guide Hôpitaux 2026",
      readingTime: "8 min de lecture",
      summary: "Comparez les meilleurs hôpitaux accrédités NABH et JCI à Delhi NCR : Medanta, Apollo, Fortis, Max et Manipal Dwarka. Avis médical et visa gratuits."
    },
    ru: {
      h1Title: "Клиники NABH и JCI в Дели NCR: Гид 2026 | Nadwa",
      category: "Аккредитованные клиники",
      badge: "Гид по клиникам 2026",
      readingTime: "8 мин чтения",
      summary: "Сравнение ведущих клиник Дели NCR с международной аккредитацией NABH и JCI: Medanta, Apollo, Fortis, Manipal Dwarka, Max. Бесплатная консультация и визовая поддержка."
    }
  }
};

/**
 * Returns a fully localized Blog item
 */
BLOG_LOCALIZATIONS["heart-surgery-cost-in-india-guide"] = BLOG_LOCALIZATIONS["cardiology-heart-surgery-india-cost-guide"];
BLOG_LOCALIZATIONS["cancer-treatment-in-india-oncology-cost-guide"] = BLOG_LOCALIZATIONS["cancer-treatment-oncology-india-cost-guide"];

export function getLocalizedBlog(blog: BlogPost, lang: string): BlogPost {
  if (lang === 'en') return blog;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loc = (BLOG_LOCALIZATIONS[blog.id]?.[lang] || BLOG_LOCALIZATIONS[blog.slug]?.[lang]) as any;
  const contentLoc = BLOG_CONTENT_TRANSLATIONS[blog.id]?.[lang] || BLOG_CONTENT_TRANSLATIONS[blog.slug]?.[lang];

  return {
    ...blog,
    h1Title: loc?.h1Title || blog.h1Title,
    category: loc?.category || blog.category,
    badge: loc?.badge || blog.badge,
    readingTime: loc?.readingTime || blog.readingTime,
    summary: loc?.summary || blog.summary,
    medicalTerms: contentLoc?.medicalTerms || loc?.medicalTerms || blog.medicalTerms,
    sections: contentLoc?.sections || loc?.sections || blog.sections,
    faqs: contentLoc?.faqs || loc?.faqs || blog.faqs,
  };
}

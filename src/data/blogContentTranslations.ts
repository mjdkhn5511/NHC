import type { MedicalTermGlossary, BlogSection, BlogFAQ } from "./blogsData.ts";

export interface BlogContentLocalizationItem {
  medicalTerms?: MedicalTermGlossary[];
  sections?: BlogSection[];
  faqs?: BlogFAQ[];
}

export const BLOG_CONTENT_TRANSLATIONS: Record<string, Record<string, BlogContentLocalizationItem>> = {
  // 1. Cardiology and Heart Surgery
  "cardiology-heart-surgery-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "مجازة الشريان التاجي (CABG)",
          simpleExplanation: "تُعرف عادة باسم 'عملية القلب المفتوح أو تحويل مسار الشريان التاجي'. يستخدم الجراحون وعاءً دموياً سليماً من الساق أو الصدر لإنشاء مسار بديل حول الشرايين المسدودة لاستعادة تدفق الدم والأكسجين لعضلة القلب."
        },
        {
          term: "جراحة القلب الروبوتية وطفيفة التوغل (MICS)",
          simpleExplanation: "جراحة قلبية دقيقة تُجرى من خلال شقوق صغيرة تشبه ثقب المفتاح بين الأضلاع بدلاً من شق عظم القص، مما يقلل النزيف وخطر العدوى والآلام ويسرع التعافي بشكل كبير."
        },
        {
          term: "زراعة الصمام الأورطي عبر القسطرة (TAVR / TAVI)",
          simpleExplanation: "إجراء تداخلي طفيف التوغل يتم عبر قسطرة من الفخذ لاستبدال الصمام الأورطي المتضيق دون الحاجة إلى جراحة القلب المفتوح أو شق القفص الصدري."
        }
      ],
      sections: [
        {
          h2: "رعاية القلب المتقدمة في الهند للمرضى الدوليين",
          paragraphs: [
            "تُعد أمراض القلب والأوعية الدموية من أبرز التحديات الصحية عالمياً، وتتطلب تدخلاً سريعاً وبنية تحتية جراحية متطورة وجراحي قلب على أعلى مستوى من المهارة. بالنسبة للمرضى الدوليين الذين يواجهون تكاليف علاج باهظة أو فترات انتظار طويلة في بلدانهم، أصبحت الهند الوجهة العالمية الأولى للرعاية القلبية المتقدمة.",
            "تجمع المستشفيات في العاصمة نيودلهي (دلهي الكبرى)، ومومباي وتشيناي بين الاعتمادات الدولية (JCI & NABH) والنتائج السريرية الفائقة، حيث تقدم عمليات مجازة الشريان التاجي (CABG)، وإصلاح واستبدال الصمامات، وجراحات قلب الأطفال بجزء ضئيل من تكاليف المستشفيات الغربية والخليجية. ومن خلال التنسيق الطبي المنظم من ندوة للرعاية الصحية، يحصل المريض الأجنبي على دعم شامل يبدأ من مراجعة التقارير الطبية وحتى إتمام مرحلة التأهيل بعد العملية."
          ]
        },
        {
          h2: "مقارنة تكلفة جراحة القلب: الهند مقابل المعايير العالمية (بالدولار الأمريكي)",
          paragraphs: [
            "ميزة التكلفة الاقتصادية في الهند لا تأتي أبداً على حساب الجودة. تستخدم المستشفيات المعتمدة نفس الأجهزة الجراحية المتقدمة، والروبوتات، وأجهزة القلب والرئة الاصطناعية ذات المعايير الدولية المعتمدة في كبرى المراكز الأمريكية والأوروبية."
          ],
          costTable: [
            { procedure: "مجازة الشريان التاجي (CABG - القلب النابض)", indiaCostUsd: "$4,500 – $7,500", westernCostUsd: "$70,000 – $120,000", savingsPercentage: "85%" },
            { procedure: "استبدال صمام قلب أحادي (ميكانيكي / نسيجي)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$80,000 – $120,000", savingsPercentage: "82%" },
            { procedure: "استبدال الصمام المزدوج (DVR)", indiaCostUsd: "$7,500 – $9,000", westernCostUsd: "$125,000 – $160,000", savingsPercentage: "80%" },
            { procedure: "جراحات عيوب القلب الخلقية للأطفال (ASD/VSD)", indiaCostUsd: "$4,000 – $6,500", westernCostUsd: "$60,000 – $85,000", savingsPercentage: "84%" },
            { procedure: "زراعة الصمام بالقسطرة (TAVR / TAVI)", indiaCostUsd: "$22,000 – $28,000", westernCostUsd: "$65,000 – $90,000", savingsPercentage: "65%" }
          ],
          callout: "محتويات الباقة العلاجية: تشمل الباقات عادةً أتعاب الفريق الجراحي، رسوم الإقامة بالعناية المركزة (ICU)، الإقامة في غرفة المستشفى الخاصة، الفحوصات الطبية قبل الجراحة، والأدوية اللازمة أثناء فترة التنويم. في دول الخليج، تتراوح تكلفة جراحة المجازة التاجية في القطاع الخاص بين 25,000 و 40,000 دولار."
        },
        {
          h2: "أفضل مراكز القلب والابتكارات التكنولوجية الرائدة",
          paragraphs: [
            "تتميز مرافق القلب الرائدة في الهند بأحدث الابتكارات الطبية التي تضاهي وتتفوق على المعايير العالمية:"
          ],
          bulletPoints: [
            "جراحة القلب الروبوتية وطفيفة التوغل (MICS): تتيح للجراح إجراء العملية من خلال شقوق صغيرة تشبه ثقب المفتاح بين الأضلاع دون الحاجة لشق عظم الصدر، مما يقلل النزيف والآلام ومخاطر العدوى ويسرع التئام الجروح.",
            "غرف العمليات الهجينة (Hybrid Operating Theaters): مجهزة بأنظمة تصوير إشعاعي ثلاثية الأبعاد لإجراء التدخلات الجراحية المعقدة والقسطرة القلبية بالتزامن في نفس الوقت والبيئة المعقمة.",
            "شبكات المستشفيات الرائدة: فورتيس إسكورتس للقلب (FEHI)، إندرابراستا أبولو، ميدانتا ذا ميديسيتي، ومستشفيات ماكس التخصصية، حيث تضم أجنحة خاصة للمرضى الدوليين وفرق جراحة قلب وصدر حاصلة على أعلى البوردات العالمية بخبرات تمتد لعقود."
          ]
        },
        {
          h2: "الجدول الزمني للتعافي ورحلة المريض (14 إلى 21 يوماً)",
          paragraphs: [
            "تستغرق رحلة علاج القلب النموذجية في الهند ما بين 14 و 21 يوماً لضمان أفضل النتائج السريرية وسلامة المريض الكاملة:"
          ],
          h3List: [
            {
              h3: "المرحلة 1: الوصول والتقييم الطبي الشامل (الأيام 1–3)",
              paragraphs: [
                "استقبال خاص من المطار وترتيب الانتقال للمستشفى بواسطة ندوة للرعاية الصحية. استشارة سريرية أولى مع كبير جراحي القلب، يليها تصوير الأوعية التاجية (القسطرة)، مخطط صدى القلب (الإيكو)، التحاليل الشاملة، وموافقة استشاري التخدير."
              ]
            },
            {
              h3: "المرحلة 2: إجراء العملية ورعاية العناية المركزة (الأيام 4–7)",
              paragraphs: [
                "تُجرى العملية في غرف عمليات فائقة التعقيم، تليها 24 إلى 48 ساعة في وحدة العناية المركزة للقلب مع مراقبة ديناميكية لحظية على مدار الساعة، قبل الانتقال للغرفة التخصصية."
              ]
            },
            {
              h3: "المرحلة 3: بدء الحركة والتأهيل والخروج من المستشفى (الأيام 8–10)",
              paragraphs: [
                "يبدأ أخصائيو العلاج الطبيعي والتنفسي تدريب المريض على المشي الخفيف وتمارين التنفس. بعد استقرار المؤشرات الحيوية بالكامل، يُنقل المريض لمقر إقامة فندقي مريح للمتابعة."
              ]
            },
            {
              h3: "المرحلة 4: الفحص النهائي وشهادة اللياقة للسفر (الأيام 11–16)",
              paragraphs: [
                "مراجعة سريرية شاملة مع الجراح المعالج، فحص التئام الجروح، تخطيط صدى القلب النهائي، ضبط الأدوية، وإصدار شهادة 'اللياقة للطيران' الرسمية (Fit to Fly)."
              ]
            }
          ]
        },
        {
          h2: "كيف تساعدك ندوة للرعاية الصحية في رحلتك العلاجية",
          paragraphs: [
            "السفر للعلاج بالخارج يجب أن يكون خالياً من أي قلق أو تعقيدات إدارية. تقدم ندوة للرعاية الصحية مراجعة مجانية لتقاريرك مع كبار جراحي القلب، مساعدة سريعة في استخراج التأشيرة الطبية الهندية الإلكترونية، استقبالاً من المطار، فواتير مستشفى شفافة تماماً بدون أي رسوم وساطة خفية، ومترجمين طبيين معتمدين باللغة العربية يرافقونك خطوة بخطوة."
          ]
        }
      ],
      faqs: [
        {
          question: "كم يوماً يحتاج مريض القلب للبقاء في الهند لإجراء جراحة المجازة التاجية (Bypass)؟",
          answer: "تستغرق رحلة علاج القلب في الهند ما بين 14 و 21 يوماً. تشمل هذه الفترة الفحوصات والتحضير قبل العملية (1-3 أيام)، الإقامة بالمستشفى والعناية المركزة (4-7 أيام)، وفترة النقاهة والمتابعة بعد الخروج قبل إجراء فحص الإيكو النهائي وإصدار شهادة السفر بأمان."
        },
        {
          question: "هل يمكن لمرافق القدوم مع مريض القلب إلى الهند؟",
          answer: "نعم، تسمح الحكومة الهندية بمرافقين اثنين لكل مريض تحت تأشيرة المرافق الطبي (MED-X). تصدر ندوة للرعاية الصحية خطابات دعوة رسمية تشمل المريض ومرافقيه مجاناً وبسرعة."
        },
        {
          question: "هل يتحدث جراحو القلب والأطباء في دلهي اللغة العربية أو الإنجليزية؟",
          answer: "يتحدث جميع كبار الجراحين والاستشاريين الإنجليزية بطلاقة تامة، بالإضافة إلى توفير مترجمين طبيين معتمدين باللغة العربية يرافقون المريض في كل مرحلة من مراحل التشخيص والجراحة."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "АКШ (Аортокоронарное шунтирование)",
          simpleExplanation: "Хирургическая операция, при которой хирург использует здоровый сосуд из ноги или грудной клетки для создания обходного пути вокруг закупоренной артерии, восстанавливая кровоток к сердцу."
        },
        {
          term: "Роботизированная и малоинвазивная кардиохирургия (MICS)",
          simpleExplanation: "Операции на сердце через микроразрезы между ребрами без распиливания грудины, что в разы снижает кровопотерю, риск инфекций и ускоряет заживление."
        },
        {
          term: "TAVR / TAVI (Транскатетерная замена аортального клапана)",
          simpleExplanation: "Щадящая малоинвазивная катетерная процедура по замене суженного аортального клапана через прокол в бедренной артерии без остановки сердца."
        }
      ],
      sections: [
        {
          h2: "Передовая кардиология в Индии для зарубежных пациентов",
          paragraphs: [
            "Сердечно-сосудистые заболевания требуют своевременного вмешательства, высокотехнологичного оборудования и опыта лучших кардиохирургов. Для зарубежных пациентов, сталкивающихся с непомерными расходами или долгими очередями, Индия стала признанным мировым центром кардиохирургии.",
            "Ведущие клиники Дели NCR, Мумбаи и Ченнаи объединяют международную аккредитацию (JCI & NABH) с превосходными клиническими результатами. Благодаря поддержке Nadwa Healthcare иностранные пациенты получают комплексное сопровождение — от первой консультации до выписки и вылета домой."
          ]
        },
        {
          h2: "Сравнение стоимости: операции на сердце в Индии и мире (в USD)",
          paragraphs: [
            "Ценовое преимущество Индии достигается не за счет экономии на качестве. Клиники используют те же аппараты искусственного кровообращения и хирургические роботы, что и ведущие центры Европы и США."
          ],
          costTable: [
            { procedure: "Аортокоронарное шунтирование (АКШ на работающем сердце)", indiaCostUsd: "$4,500 – $7,500", westernCostUsd: "$70,000 – $120,000", savingsPercentage: "85%" },
            { procedure: "Замена одного клапана сердца (механический/биологический)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$80,000 – $120,000", savingsPercentage: "82%" },
            { procedure: "Двойная замена клапанов (DVR)", indiaCostUsd: "$7,500 – $9,000", westernCostUsd: "$125,000 – $160,000", savingsPercentage: "80%" },
            { procedure: "Детская кардиохирургия (дефекты ДМПП/ДМЖП)", indiaCostUsd: "$4,000 – $6,500", westernCostUsd: "$60,000 – $85,000", savingsPercentage: "84%" },
            { procedure: "Транскатетерная замена клапана (TAVR / TAVI)", indiaCostUsd: "$22,000 – $28,000", westernCostUsd: "$65,000 – $90,000", savingsPercentage: "65%" }
          ],
          callout: "Что входит в пакет: гонорары хирургической бригады, пребывание в отделении реанимации (ICU), палата, предоперационные анализы и медикаменты на период госпитализации. В частных клиниках ОАЭ стоимость АКШ составляет от $25,000 до $40,000."
        },
        {
          h2: "Ведущие кардиоцентры и технологии в Дели NCR",
          paragraphs: [
            "Передовые кардиоклиники Индии оснащены технологиями мирового класса:"
          ],
          bulletPoints: [
            "Роботизированная и малоинвазивная хирургия (MICS): малотравматичный доступ через межреберный разрез без рассечения грудины.",
            "Гибридные операционные залы: одновременное проведение открытых и эндоваскулярных процедур под контролем 3D-ангиографии.",
            "Флагманские госпитали: Fortis Escorts Heart Institute, Indraprastha Apollo, Medanta The Medicity и Max Healthcare с международными отделами и англо/русскоязычными координаторами."
          ]
        },
        {
          h2: "Этапы лечения и график восстановления (от 14 до 21 дня)",
          paragraphs: [
            "Типичная кардиологическая поездка в Индию длится от 14 до 21 дня, гарантируя безопасность и полноценную реабилитацию:"
          ],
          h3List: [
            {
              h3: "Этап 1: Прибытие и обследование (Дни 1–3)",
              paragraphs: [
                "Встреча в аэропорту Нью-Дели, консультация кардиохирурга, коронарография, ЭхоКГ, анализы крови и допуск анестезиолога."
              ]
            },
            {
              h3: "Этап 2: Операция и кардиореанимация (Дни 4–7)",
              paragraphs: [
                "Проведение операции и наблюдение в специализированной кардиореанимации (24–48 часов) с последующим переводом в палату."
              ]
            },
            {
              h3: "Этап 3: Активизация и выписка (Дни 8–10)",
              paragraphs: [
                "Дыхательная гимнастика, лечебная физкультура и выписка в отель для дальнейшего комфортного восстановления."
              ]
            },
            {
              h3: "Этап 4: Контрольный осмотр и разрешение на перелет (Дни 11–16)",
              paragraphs: [
                "Снятие швов, контрольное УЗИ сердца, коррекция медикаментозной терапии и выдача официального медицинского сертификата 'Fit to Fly'."
              ]
            }
          ]
        },
        {
          h2: "Помощь и организация от Nadwa Healthcare",
          paragraphs: [
            "Мы берем на себя все организационные вопросы: бесплатный консилиум с ведущими кардиохирургами, ускоренное визовое приглашение (VIL за 24–48 часов), трансфер из аэропорта, прозрачный расчет без наценок и языковое сопровождение."
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько времени занимает поездка в Индию на операцию на сердце?",
          answer: "Оптимальный срок — от 14 до 21 дня для полноценного обследования (1-3 дня), операции и реанимации (4-7 дней), восстановления и контрольного осмотра перед вылетом."
        },
        {
          question: "Может ли сопровождающий поехать с пациентом?",
          answer: "Да, индийская виза позволяет приехать двум сопровождающим (виза MED-X). Официальное приглашение от клиники оформляется Nadwa Healthcare бесплатно."
        },
        {
          question: "Говорят ли врачи в Дели на английском языке?",
          answer: "Все ведущие хирурги и медицинский персонал свободно говорят по-английски. Кроме того, международный отдел Nadwa Healthcare предоставляет русскоязычных координаторов."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Pontage aorto-coronarien (PAC / CABG)",
          simpleExplanation: "Intervention consistant à contourner une artère coronaire rétrécie à l'aide d'un vaisseau sanguin prélevé sur la jambe ou le thorax pour restaurer l'oxygénation du muscle cardiaque."
        },
        {
          term: "Chirurgie cardiaque mini-invasive & robotique (MICS)",
          simpleExplanation: "Chirurgie à cœur fermé réalisée par de petites incisions entre les côtes sans ouvrir le sternum, réduisant considérablement la douleur et les saignements."
        },
        {
          term: "Remplacement valvulaire transcathéter (TAVR / TAVI)",
          simpleExplanation: "Implantation valvulaire aortique transcathéter réalisée par ponction de l'artère fémorale sans chirurgie à cœur ouvert."
        }
      ],
      sections: [
        {
          h2: "Soins cardiaques avancés en Inde pour patients internationaux",
          paragraphs: [
            "Les maladies cardiovasculaires nécessitent une prise en charge rapide, des blocs opératoires de pointe et des chirurgiens chevronnés. Face aux délais et aux coûts excessifs en Occident, l'Inde s'est imposée comme un pôle d'excellence en cardiologie.",
            "Les hôpitaux de Delhi NCR, Mumbai et Chennai associent accréditations internationales (JCI & NABH) et taux de réussite exemplaires. Avec Nadwa Healthcare, les patients bénéficient d'une prise en charge médicale sur-mesure de l'avis initial au retour en toute sécurité."
          ]
        },
        {
          h2: "Comparatif des coûts : Chirurgie cardiaque en Inde vs standards internationaux (USD)",
          paragraphs: [
            "L'avantage tarifaire en Inde n'affecte en rien l'excellence médicale : les blocs disposent des mêmes technologies robotiques et appareils de circulation extracorporelle que les grands centres occidentaux."
          ],
          costTable: [
            { procedure: "Pontage coronarien (PAC à cœur battant)", indiaCostUsd: "$4,500 – $7,500", westernCostUsd: "$70,000 – $120,000", savingsPercentage: "85%" },
            { procedure: "Remplacement d'une valve cardiaque (mécanique/biologique)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$80,000 – $120,000", savingsPercentage: "82%" },
            { procedure: "Remplacement valvulaire double (DVR)", indiaCostUsd: "$7,500 – $9,000", westernCostUsd: "$125,000 – $160,000", savingsPercentage: "80%" },
            { procedure: "Chirurgie cardiaque pédiatrique (fermeture CIA/CIV)", indiaCostUsd: "$4,000 – $6,500", westernCostUsd: "$60,000 – $85,000", savingsPercentage: "84%" },
            { procedure: "Remplacement valvulaire transcathéter (TAVR / TAVI)", indiaCostUsd: "$22,000 – $28,000", westernCostUsd: "$65,000 – $90,000", savingsPercentage: "65%" }
          ],
          callout: "Inclusions du forfait : honoraires chirurgicaux, séjour en réanimation cardiaque (USIC), chambre d'hospitalisation, bilans préopératoires et traitements médicamenteux. Dans les cliniques privées des pays du Golfe, un pontage coûte entre 25 000 $ et 40 000 $."
        },
        {
          h2: "Grands centres cardiaques et innovations technologiques à Delhi",
          paragraphs: [
            "Les instituts cardiaques de référence en Inde disposent d'infrastructures de premier plan :"
          ],
          bulletPoints: [
            "Chirurgie cardiaque mini-invasive (MICS) : incision thoracique intercostale mini-invasive préservant le sternum.",
            "Salles d'opération hybrides : réalisation simultanée d'actes chirurgicaux et endovasculaires sous imagerie tridimensionnelle.",
            "Réseaux d'excellence : Fortis Escorts Heart Institute, Indraprastha Apollo, Medanta The Medicity et Max Healthcare avec services dédiés aux patients internationaux."
          ]
        },
        {
          h2: "Parcours de soins et calendrier de récupération (14 à 21 jours)",
          paragraphs: [
            "Un séjour cardiaque type en Inde dure de 14 à 21 jours, garantissant une sécurité et une récupération optimales :"
          ],
          h3List: [
            {
              h3: "Étape 1 : Accueil et bilan préopératoire (Jours 1–3)",
              paragraphs: [
                "Prise en charge à l'aéroport de Delhi, consultation avec le chirurgien cardiothoracique, coronarographie, échocardiographie et bilan anesthésique."
              ]
            },
            {
              h3: "Étape 2 : Chirurgie et soins intensifs (Jours 4–7)",
              paragraphs: [
                "Intervention en bloc aseptique et surveillance 24-48h en réanimation cardiaque avant transfert en chambre."
              ]
            },
            {
              h3: "Étape 3 : Récupération et sortie d'hospitalisation (Jours 8–10)",
              paragraphs: [
                "Kinésithérapie respiratoire, reprise progressive de la marche et sortie vers une résidence hôtelière à proximité."
              ]
            },
            {
              h3: "Étape 4 : Consultation de contrôle et accord de vol (Jours 11–16)",
              paragraphs: [
                "Contrôle de cicatrisation, échographie cardiaque de sortie et délivrance du certificat médical 'Fit to Fly'."
              ]
            }
          ]
        },
        {
          h2: "L'accompagnement complet par Nadwa Healthcare",
          paragraphs: [
            "Nous simplifions chaque étape de votre séjour médical : second avis gratuit sous 24-48h, lettre d'invitation visa médical (VIL), transferts aéroportuaires et coordination multilingue sans surcoût."
          ]
        }
      ],
      faqs: [
        {
          question: "Quelle est la durée requise de séjour en Inde pour une chirurgie cardiaque ?",
          answer: "Un séjour total de 14 à 21 jours est recommandé pour garantir un bilan complet (1-3 jours), l'opération et réanimation (4-7 jours), et la convalescence pré-vol."
        },
        {
          question: "Un proche peut-il m'accompagner en Inde ?",
          answer: "Oui, le visa d'accompagnateur médical (MED-X) permet à deux proches d'accompagner le patient. L'invitation hospitalière officielle est délivrée gratuitement."
        },
        {
          question: "Les équipes médicales parlent-elles anglais ?",
          answer: "Tous les chirurgiens seniors et infirmiers s'expriment couramment en anglais. Nadwa Healthcare met également à disposition des interprètes pour votre confort."
        }
      ]
    }
  },

  // 2. Cancer Treatment and Oncology
  "cancer-treatment-oncology-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "مجلس الأورام متعدد التخصصات (Tumor Board)",
          simpleExplanation: "اجتماع مؤسسي تخصصي يضم جراحي الأورام، أطباء العلاج الكيماوي، أطباء العلاج الإشعاعي، واستشاريي الأنسجة والأشعة لمراجعة صور المسح الذري والخزعات ووضع أدق خطة علاجية موحدة قبل سفر المريض."
        },
        {
          term: "السايبر نايف والعلاج الإشعاعي الدقيق (CyberKnife)",
          simpleExplanation: "تقنية جراحة إشعاعية روبوتية مجسمة فائقة الدقة (SRS) ومسرعات TrueBeam STx توجه حزماً إشعاعية مركزة نحو الورم الخبيث بدقة دون الملليمتر مع حماية تامة للأنسجة والأعضاء السليمة المجاورة."
        },
        {
          term: "العلاج المناعي والعلاج الموجه الجزيئي",
          simpleExplanation: "أحدث فئات أدوية الأورام المعتمدة من FDA التي تحفز جهاز المناعة الطبيعي أو تستهدف الطفرات الجينية للورم (مثل EGFR و ALK و PD-L1) للقضاء على الخلايا السرطانية دون الآثار الجانبية المرهقة للكيماوي التقليدي."
        },
        {
          term: "زراعة نخاع العظم والخلايا الجذعية (BMT)",
          simpleExplanation: "وحدات متطورة فائقة التعقيم بمرشحات HEPA متخصصة في الزراعة الذاتية والزراعة من متبرع متطابق (Allogeneic) لعلاج اللوكيميا، الليمفوما، والمايلوما المتعددة بنسب شفاء قياسية."
        }
      ],
      sections: [
        {
          h2: "أساليب وتقنيات علاج الأورام المتكاملة المتوفرة في الهند",
          paragraphs: [
            "تعمل مراكز الأورام الحديثة في دلهي الكبرى وكافة أنحاء الهند وفقاً للبروتوكولات السريرية الدولية الموحدة (إرشادات شبكة NCCN الأمريكية)، وتوفر رعاية متقدمة تشمل كافة التخصصات الدقيقة:"
          ],
          bulletPoints: [
            "جراحة الأورام (Surgical Oncology): استئصال الأورام مع الحفاظ التام على وظائف الأعضاء، وجراحات الأورام الروبوتية المتقدمة بنظام (da Vinci Xi)، والعمليات الترميمية المعقدة لسرطانات الرأس والرقبة، الثدي، الجهاز الهضمي، والأورام النسائية.",
            "العلاج الإشعاعي الدقيق (Precision Radiation): أحدث أجنحة الإشعاع العالمية بما في ذلك السايبر نايف (CyberKnife للجراحة الإشعاعية الروبوتية)، مسرعات TrueBeam STx، العلاج الموجه بالصور (TomoTherapy)، والعلاج بحزم البروتون (Proton Beam Therapy) لتوجيه الإشعاع بدقة متناهية دون المساس بالأنسجة السليمة.",
            "طب الأورام والعلاجات الجهازية: العلاج الكيماوي التقليدي والكيماوي عالي الحرارة داخل التجويف البريتوني (HIPEC)، العلاجات الجزيئية الموجهة، وأحدث أدوية العلاج المناعي المعتمدة عالمياً.",
            "زراعة نخاع العظم (BMT): أجنحة مخصصة ومزودة بضغط هواء إيجابي وفلاتر HEPA متخصصة في زراعة الخلايا الجذعية الذاتية ومن متبرع لسرطانات الدم (اللوكيميا والليمفوما والمايلوما)."
          ]
        },
        {
          h2: "تفاصيل وتكاليف علاج السرطان للمرضى الدوليين (بالدولار الأمريكي)",
          paragraphs: [
            "تُعد التكلفة المناسبة والمدروسة أحد أهم العوامل التي تجعل المرضى الدوليين يختارون الهند لتلقي علاج الأورام، حيث توفر المستشفيات الهندية خصومات تتراوح بين 70% إلى 85% مقارنة بالمستشفيات الأمريكية والأوروبية والخاصة في الخليج دون أدنى مساومة على معايير الأمان وجودة البروتوكول الطبي:"
          ],
          costTable: [
            { procedure: "دورة العلاج الكيماوي (شاملة البروتوكول والجرعة)", indiaCostUsd: "$450 – $1,200", westernCostUsd: "$3,000 – $8,000", savingsPercentage: "85%" },
            { procedure: "جلسات السايبر نايف / الجراحة الإشعاعية (كورس كامل)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$30,000 – $50,000", savingsPercentage: "85%" },
            { procedure: "جراحة استئصال الأورام (الجراحة الروبوتية المتقدمة)", indiaCostUsd: "$3,500 – $8,000", westernCostUsd: "$35,000 – $65,000", savingsPercentage: "88%" },
            { procedure: "زراعة نخاع العظم الذاتية (Autologous BMT)", indiaCostUsd: "$14,000 – $20,000", westernCostUsd: "$100,000 – $180,000", savingsPercentage: "88%" },
            { procedure: "زراعة نخاع العظم من متبرع متطابق (Allogeneic BMT)", indiaCostUsd: "$18,000 – $28,000", westernCostUsd: "$150,000 – $300,000", savingsPercentage: "85%" },
            { procedure: "فحص المسح الذري الكامل للجسم (PET-CT عالي الدقة)", indiaCostUsd: "$220 – $350", westernCostUsd: "$2,200 – $4,000", savingsPercentage: "90%" }
          ],
          callout: "ميزة الأدوية والبدائل الحيوية: في الدول الغربية ومستشفيات القطاع الخاص بالخليج، تتراوح تكلفة جرعة الكيماوي الواحدة بين 3,000 و 8,000 دولار. في الهند، تتراوح الجرعة بين 450 و 1,200 دولار بفضل تصنيع الهند لأرقى الأدوية الجنيسة والبدائل الحيوية (Biosimilars) المعتمدة من إدارة الغذاء والدواء الأمريكية (US-FDA) والمطابقة بنسبة 100%، مما يخفض تكلفة الدواء بأكثر من 70%."
        },
        {
          h2: "نهج مجلس الأورام المؤسسي متعدد التخصصات (Tumor Board)",
          paragraphs: [
            "عند تنسيق رحلتك العلاجية مع ندوة للرعاية الصحية، تُعرض ملفاتك التشخيصية (صور المسح الذري PET-CT، شرائح الخزعة وتحاليل الأنسجة، والفحوصات الجينية) على مجلس أورام مؤسسي متكامل.",
            "يضم هذا المجلس كبار جراحي الأورام، أطباء الأورام الباطنية، استشاريي العلاج الإشعاعي، أطباء الأنسجة، واستشاريي الأشعة التداخلية، حيث يتعاونون معاً لوضع خطة علاجية موضوعية وموحدة ومخصصة لحالتك قبل أن تغادر وطنك، لضمان بدء العلاج فور وصولك إلى دلهي دون أي تأخير."
          ]
        },
        {
          h2: "الإقامة، الدعم اللوجستي، وتنسيق التأشيرة الطبية",
          paragraphs: [
            "غالباً ما تتطلب بروتوكولات علاج الأورام إقامة تمتد من أسبوعين إلى عدة أشهر وفقاً لجدول الجرعات. تقدم ندوة للرعاية الصحية رعاية لوجستية وسريرية متكاملة تشمل:"
          ],
          h3List: [
            {
              h3: "مرونة التأشيرة الطبية الهندية الإلكترونية",
              paragraphs: [
                "تمنح التأشيرة الطبية الإلكترونية (e-Medical Visa) إمكانية الدخول المتعدد (حتى 3 مرات) بفترة صلاحية ملائمة لجلسات العلاج الكيماوي الممتدة. كما يُسمح بمرافقة اثنين من أفراد الأسرة بتأشيرة مرافق طبي رسمية (MED-X)."
              ]
            },
            {
              h3: "شقق فندقية معقمة ومجهزة",
              paragraphs: [
                "ترتب ندوة للرعاية الصحية إقامة في شقق فندقية راقية ونظيفة بالقرب من المستشفيات الكبرى في جنوب دلهي وغوروغرام، مزودة بمطابخ خاصة تتيح طهي الطعام المنزلي المعقم بما يتناسب مع خصوصية المرضى منخفضي المناعة."
              ]
            },
            {
              h3: "استمرارية الرعاية والمتابعة عن بُعد",
              paragraphs: [
                "بعد العودة إلى الوطن، يحافظ المريض على استمرارية الإشراف الطبي عبر استشارات التيليميديسين المجدولة والمتابعة الرقمية للتحاليل المخبرية بالتنسيق مع مكتبنا الدولي واستشاري الأورام المعالج."
              ]
            }
          ]
        }
      ],
      faqs: [
        {
          question: "هل يمكنني بدء العلاج الكيماوي في الهند واستكمال الجرعات المتبقية في بلدي؟",
          answer: "نعم، يسافر العديد من المرضى الدوليين لإجراء الجراحة الدقيقة أو الجرعات الأولى في الهند، ويعودون إلى بلادهم مع بروتوكول علاجي مفصل وتوصيات معتمدة من استشاري الأورام للمتابعة مع طبيبهم المحلي."
        },
        {
          question: "ما مدى سرعة بدء علاج السرطان بعد الوصول إلى نيودلهي؟",
          answer: "يبدأ العلاج عادةً خلال 48 إلى 72 ساعة. بفضل مراجعة ملفاتك مع مجلس الأورام مسبقاً قبل السفر، تبدأ الفحوصات التأكيدية والتدخلات العلاجية فور وصولك دون أي قوائم انتظار."
        },
        {
          question: "هل يُسمح للمرافقين بالسفر مع مريض السرطان إلى الهند؟",
          answer: "نعم، تسمح الحكومة الهندية بمرافقين اثنين لكل مريض تحت تأشيرة المرافق الطبي (MED-X). تصدر ندوة للرعاية الصحية خطابات دعوة تأشيرة رسمية من المستشفى للمريض ومرافقيه مجاناً وبسرعة."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Мультидисциплинарный онкоконсилиум (Tumor Board)",
          simpleExplanation: "Коллегиальное заседание ведущих хирургов-онкологов, химиотерапевтов, радиотерапевтов, патоморфологов и радиологов для изучения данных ПЭТ-КТ и биопсии и выработки единого протокола лечения до вылета пациента в Индию."
        },
        {
          term: "CyberKnife и высокоточная радиохирургия (SRS)",
          simpleExplanation: "Неинвазивное роботизированное стереотаксическое облучение и технологии TrueBeam STx, доставляющие прицельные высокие дозы радиации к опухоли с субмиллиметровой точностью, сохраняя окружающие здоровые ткани."
        },
        {
          term: "Иммунотерапия и таргетная молекулярная терапия",
          simpleExplanation: "Современные противоопухолевые препараты, одобренные FDA, обучающие иммунную систему пациента уничтожать злокачественные клетки или блокирующие генетические мутации (EGFR, ALK, PD-L1) без тяжелых токсических эффектов химиотерапии."
        },
        {
          term: "Трансплантация костного мозга (ТКМ / BMT)",
          simpleExplanation: "Высокотехнологичная пересадка кроветворных стволовых клеток (аутологичная или аллогенная от совместимого донора) в стерильных боксах с HEPA-фильтрами при лейкозах, лимфомах и миеломной болезни."
        }
      ],
      sections: [
        {
          h2: "Современные методы онкологической помощи в Индии",
          paragraphs: [
            "Флагманские онкологические центры в Дели NCR и по всей Индии работают по строгим международным протоколам (рекомендации американской сети NCCN), обеспечивая персонализированный подбор терапии:"
          ],
          bulletPoints: [
            "Хирургическая онкология: органосохраняющие резекции, роботизированные операции da Vinci Xi и сложнейшие реконструктивно-пластические вмешательства при опухолях молочной железы, ЖКТ, головы и шеи, а также гинекологических опухолях.",
            "Прецизионная лучевая терапия: современные комплексы CyberKnife, TrueBeam STx, TomoTherapy и протонная терапия (Proton Beam), доставляющие ионизирующее излучение с субмиллиметровой точностью без повреждения соседних органов.",
            "Лекарственная противоопухолевая терапия: стандартная и гипертермическая интраперитонеальная химиотерапия (HIPEC), таргетные моноклональные антитела и новейшие протоколы иммунотерапии.",
            "Трансплантация костного мозга (ТКМ): изолированные боксы со специальной вентиляцией с избыточным давлением и HEPA-фильтрами для аллогенных и аутологичных пересадок стволовых клеток при онкогематологических заболеваниях."
          ]
        },
        {
          h2: "Сравнение стоимости лечения рака: Индия против мировых клиник (в USD)",
          paragraphs: [
            "Доступная стоимость является решающим преимуществом для иностранных пациентов: лечение в аккредитованных клиниках Индии позволяет сэкономить от 70% до 85% по сравнению с клиниками США, Европы и частными госпиталями стран Персидского залива без малейших компромиссов в безопасности:"
          ],
          costTable: [
            { procedure: "Курс химиотерапии (за цикл - стандартный протокол)", indiaCostUsd: "$450 – $1,200", westernCostUsd: "$3,000 – $8,000", savingsPercentage: "85%" },
            { procedure: "Радиохирургия CyberKnife / SRS (полный курс)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$30,000 – $50,000", savingsPercentage: "85%" },
            { procedure: "Хирургическая онкология (удаление опухоли / робот)", indiaCostUsd: "$3,500 – $8,000", westernCostUsd: "$35,000 – $65,000", savingsPercentage: "88%" },
            { procedure: "Аутологичная трансплантация костного мозга (ТКМ)", indiaCostUsd: "$14,000 – $20,000", westernCostUsd: "$100,000 – $180,000", savingsPercentage: "88%" },
            { procedure: "Аллогенная трансплантация костного мозга (ТКМ)", indiaCostUsd: "$18,000 – $28,000", westernCostUsd: "$150,000 – $300,000", savingsPercentage: "85%" },
            { procedure: "ПЭТ-КТ всего тела (высокое разрешение)", indiaCostUsd: "$220 – $350", westernCostUsd: "$2,200 – $4,000", savingsPercentage: "90%" }
          ],
          callout: "Фармацевтическое преимущество Индии: в западных и частных клиниках ОАЭ стоимость одного цикла химиотерапии составляет от $3,000 до $8,000. В Индии стоимость аналогичного протокола варьируется от $450 до $1,200. Индия является мировым лидером в производстве качественных дженериков и биосимиляров с сертификацией US-FDA, снижая расходы на медикаменты более чем на 70% при 100% биологической эквивалентности."
        },
        {
          h2: "Институциональный онкологический консилиум (Tumor Board)",
          paragraphs: [
            "При организации поездки через Nadwa Healthcare диагностические материалы пациента (диски ПЭТ-КТ, парафиновые блоки биопсии и молекулярные панели) представляются институциональному консилиуму Tumor Board.",
            "В совет входят ведущие онкохирурги, химиотерапевты, радиоонкологи, патоморфологи и лучевые диагносты. Они коллегиально вырабатывают точный объективный протокол до вылета пациента, исключая потерю времени по прилете в Дели."
          ]
        },
        {
          h2: "Проживание, визовая поддержка и непрерывность лечения",
          paragraphs: [
            "Противоопухолевое лечение нередко требует нахождения в Индии от двух недель до нескольких месяцев. Nadwa Healthcare берет на себя все организационные и клинические вопросы:"
          ],
          h3List: [
            {
              h3: "Удобство медицинской визы e-Medical Visa",
              paragraphs: [
                "Электронная медицинская виза в Индию разрешает до 3 въездов со сроком действия, рассчитанным на многоэтапные курсы химиотерапии. С пациентом могут приехать до двух сопровождающих по визе MED-X."
              ]
            },
            {
              h3: "Чистые сервисные апартаменты",
              paragraphs: [
                "Мы подбираем проверенные сервисные апартаменты рядом с клиниками в Южном Дели и Гуруграме с собственной кухней для приготовления диетического питания, что критически важно для пациентов со сниженным иммунитетом."
              ]
            },
            {
              h3: "Телемедицина и ведение после возвращения",
              paragraphs: [
                "После завершения основного этапа лечения пациент остается на связи с индийским лечащим онкологом через телемедицинские консультации и цифровой мониторинг анализов."
              ]
            }
          ]
        }
      ],
      faqs: [
        {
          question: "Можно ли начать химиотерапию в Индии и завершить оставшиеся курсы дома?",
          answer: "Да. Многие зарубежные пациенты приезжают в Индию на операцию или радиохирургию CyberKnife, проходят здесь первые курсы химиотерапии и возвращаются домой с полным протоколом и схемами дозировок для своего онколога."
        },
        {
          question: "Как быстро начинается лечение после прилета в Дели?",
          answer: "Обычно в течение 48-72 часов. Благодаря предварительному рассмотрению документов на Tumor Board, контрольные анализы и терапевтические процедуры начинаются без ожидания в очередях."
        },
        {
          question: "Сколько сопровождающих может приехать с пациентом?",
          answer: "Правительство Индии разрешает до двух сопровождающих лиц по визе сопровождающего (MED-X). Nadwa Healthcare оформляет официальные приглашения клиники на пациента и его близких бесплатно."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Comité de Concertation Pluridisciplinaire (Tumor Board)",
          simpleExplanation: "Réunion collégiale réunissant chirurgiens oncologues, oncologues médicaux, radiothérapeutes, anatomopathologistes et radiologues pour évaluer les examens PET-Scan et biopsies afin d'établir un protocole sur-mesure avant le voyage."
        },
        {
          term: "CyberKnife et radiothérapie de précision (SRS)",
          simpleExplanation: "Radiochirurgie robotisée stéréotaxique non invasive et accélérateurs TrueBeam STx administrant de hautes doses de rayons directement sur la tumeur maligne avec une précision inframillimétrique, préservant les tissus sains."
        },
        {
          term: "Immunothérapie et thérapies moléculaires ciblées",
          simpleExplanation: "Médicaments anticancéreux innovants approuvés par la FDA stimulant les défenses immunitaires naturelles ou ciblant des anomalies génétiques spécifiques (EGFR, ALK, PD-L1) sans les toxicités lourdes des chimiothérapies classiques."
        },
        {
          term: "Greffe de moelle osseuse (BMT)",
          simpleExplanation: "Greffe de cellules souches hématopoïétiques (allogénique ou autologue) en chambres stériles sous flux laminaire et filtres HEPA pour traiter leucémies, lymphomes et myélomes multiples."
        }
      ],
      sections: [
        {
          h2: "Modalités complètes de cancérologie disponibles en Inde",
          paragraphs: [
            "Les centres d'excellence en oncologie à Delhi NCR appliquent rigoureusement les recommandations cliniques internationales (guides du réseau américain NCCN) :"
          ],
          bulletPoints: [
            "Chirurgie oncologique : résections conservatrices d'organes, chirurgie robotique assistée de pointe (da Vinci Xi) et reconstructions complexes pour les cancers digestifs, mammaires, gynécologiques et de la tête et du cou.",
            "Radiothérapie de haute précision : plateaux techniques équipés de CyberKnife (radiochirurgie robotisée), TrueBeam STx, TomoTherapy et protonthérapie pour une irradiation ciblée épargnant les organes voisins sensibles.",
            "Oncologie médicale et thérapies systémiques : chimiothérapie conventionnelle et intrapéritonéale hyperthermique (CHIP / HIPEC), thérapies ciblées de nouvelle génération et immunothérapies homologuées.",
            "Greffes de moelle osseuse (BMT) : unités spécialisées sous pression positive et filtration HEPA pour greffes autologues et allogéniques dans les hémopathies malignes."
          ]
        },
        {
          h2: "Comparatif des coûts des traitements du cancer pour les patients internationaux (USD)",
          paragraphs: [
            "L'accessibilité financière est un atout déterminant en Inde, permettant aux patients de bénéficier d'économies de 70% à 85% par rapport aux cliniques privées occidentales et du Golfe, sans aucun compromis sur l'excellence médicale :"
          ],
          costTable: [
            { procedure: "Cycle de chimiothérapie (par séance - protocole standard)", indiaCostUsd: "$450 – $1,200", westernCostUsd: "$3,000 – $8,000", savingsPercentage: "85%" },
            { procedure: "CyberKnife / Radiochirurgie stéréotaxique (cycle complet)", indiaCostUsd: "$5,500 – $7,500", westernCostUsd: "$30,000 – $50,000", savingsPercentage: "85%" },
            { procedure: "Chirurgie oncologique (résection tumorale / robotique)", indiaCostUsd: "$3,500 – $8,000", westernCostUsd: "$35,000 – $65,000", savingsPercentage: "88%" },
            { procedure: "Greffe autologue de moelle osseuse (BMT)", indiaCostUsd: "$14,000 – $20,000", westernCostUsd: "$100,000 – $180,000", savingsPercentage: "88%" },
            { procedure: "Greffe allogénique de moelle osseuse (BMT)", indiaCostUsd: "$18,000 – $28,000", westernCostUsd: "$150,000 – $300,000", savingsPercentage: "85%" },
            { procedure: "PET-Scan corps entier haute résolution", indiaCostUsd: "$220 – $350", westernCostUsd: "$2,200 – $4,000", savingsPercentage: "90%" }
          ],
          callout: "Avantage pharmaceutique : En Occident ou dans le Golfe, une séance de chimiothérapie coûte fréquemment entre 3 000 $ et 8 000 $. En Inde, les mêmes protocoles coûtent entre 450 $ et 1 200 $. Leader mondial des biosimilaires et génériques oncologiques certifiés par la FDA américaine, l'Inde permet de réduire les factures de pharmacie de plus de 70% à bioéquivalence égale."
        },
        {
          h2: "L'approche collégiale du Tumor Board multidisciplinaire",
          paragraphs: [
            "Grâce à la coordination de Nadwa Healthcare, vos examens (scanners TEP, blocs histopathologiques de biopsie et panels génomiques) sont soumis à un comité de concertation pluridisciplinaire (Tumor Board).",
            "Chirurgiens, oncologues médicaux, radiothérapeutes et pathologistes élaborent conjointement un protocole thérapeutique clair avant même votre départ, évitant toute perte de temps à votre arrivée en Inde."
          ]
        },
        {
          h2: "Hébergement, accompagnement et visa médical",
          paragraphs: [
            "Les traitements oncologiques nécessitent des séjours allant de deux semaines à plusieurs mois. Nadwa Healthcare assure un soutien complet :"
          ],
          h3List: [
            {
              h3: "Flexibilité du visa e-Medical",
              paragraphs: [
                "Le visa médical indien électronique autorise jusqu'à 3 entrées avec une validité adaptée aux cycles de chimiothérapie. Deux accompagnateurs peuvent obtenir un visa MED-X officiel."
              ]
            },
            {
              h3: "Appartements meublés et désinfectés",
              paragraphs: [
                "Nous réservons des résidences hôtelières hygiéniques proches des cliniques à New Delhi et Gurugram, équipées d'une cuisine privative pour préparer des repas adaptés aux patients immunodéprimés."
              ]
            },
            {
              h3: "Continuité des soins par téléconsultation",
              paragraphs: [
                "De retour dans votre pays, vous conservez un lien direct avec votre oncologue traitant grâce à des téléconsultations et un suivi biologique digitalisé."
              ]
            }
          ]
        }
      ],
      faqs: [
        {
          question: "Puis-je débuter ma chimiothérapie en Inde et la poursuivre dans mon pays ?",
          answer: "Oui. De nombreux patients internationaux effectuent l'ablation chirurgicale ou les premières séances en Inde, puis rentrent avec un protocole thérapeutique complet et les posologies détaillées pour leur cancérologue local."
        },
        {
          question: "Quel est le délai de prise en charge d'un cancer après l'arrivée à Delhi ?",
          answer: "Généralement entre 48 et 72 heures. Grâce à l'étude préalable de votre dossier par le Tumor Board, les bilans de confirmation et les soins débutent immédiatement sans file d'attente."
        },
        {
          question: "Combien d'accompagnateurs peuvent voyager avec le patient ?",
          answer: "Le gouvernement indien autorise jusqu'à deux accompagnateurs par patient sous visa MED-X. Nadwa Healthcare émet sans délai les lettres officielles d'invitation hospitalière requises."
        }
      ]
    }
  },

  // 3. Knee and Hip Replacement
  "knee-hip-replacement-surgery-cost-india": {
    ar: {
      medicalTerms: [
        {
          term: "استبدال مفصل الركبة الروبوتي الكامل (Robotic TKA)",
          simpleExplanation: "ذراع روبوتية متطورة تساعد الجراح في استئصال الأجزاء التالفة بدقة أقل من ملليمتر، مع الحفاظ على الأربطة السليمة وتقليل النزيف وتسريع التعافي."
        },
        {
          term: "استبدال مفصل الركبة الثنائي (Bilateral)",
          simpleExplanation: "إجراء عملية استبدال مفصلي الركبة اليمنى واليسرى معاً خلال فترة الإقامة نفسها في المستشفى لتقليل فترة التعافي الإجمالية."
        },
        {
          term: "غرسات السيراميك عالية الانثناء (High-Flex)",
          simpleExplanation: "مفاصل صناعية متطورة ومقاومة للتآكل تتيح مرونة انثناء أعمق للركبة، مما يسهل الجلوس على الأرض والصلاة براحة تامة بعد التأهيل."
        }
      ],
      sections: [
        {
          h2: "كيف غيّرت الجراحة الروبوتية نتائج استبدال المفاصل؟",
          paragraphs: [
            "يُمكن لخشونة المفاصل المتقدمة أن تعيق قدرة الشخص على ممارسة حياته الطبيعية، وتحول صعود الدرج أو المشي للصلاة إلى معاناة يومية شديدة.",
            "تستخدم كبرى مراكز العظام في الهند أنظمة الروبوت الجراحي المتقدمة مثل Mako و Stryker و Rosa. تحافظ هذه التقنيات على الأربطة الصليبية الطبيعية وتقلل قطع العضلات، مما يسمح للمريض بالوقوف والمشي بمساعدة في غضون 12 إلى 24 ساعة فقط بعد الجراحة."
          ]
        },
        {
          h2: "مقارنة تكاليف استبدال المفاصل (الهند مقابل أمريكا وبريطانيا والخليج)",
          paragraphs: [
            "تشمل جميع الباقات المنسقة عبر ندوة للرعاية الصحية غرسات تيتانيوم وسيراميك معتمدة من US-FDA، رسوم الملاحة الروبوتية، الإقامة في المستشفى 4-5 أيام، وجلسات العلاج الطبيعي اليومية."
          ],
          costTable: [
            { procedure: "استبدال مفصل الركبة الأحادي (ركبة واحدة)", indiaCostUsd: "$3,800 – $4,800", westernCostUsd: "$35,000 – $48,000", savingsPercentage: "86%" },
            { procedure: "استبدال الركبتين الكامل معاً (Bilateral TKR)", indiaCostUsd: "$6,500 – $8,200", westernCostUsd: "$65,000 – $85,000", savingsPercentage: "87%" },
            { procedure: "استبدال مفصل الورك الكامل (سيراميك عالي الكثافة)", indiaCostUsd: "$4,500 – $5,800", westernCostUsd: "$42,000 – $55,000", savingsPercentage: "87%" },
            { procedure: "إعادة بناء الرباط الصليبي بالمنظار (ACL)", indiaCostUsd: "$2,200 – $3,200", westernCostUsd: "$18,000 – $25,000", savingsPercentage: "85%" }
          ]
        },
        {
          h2: "الجدول الزمني للتعافي: متى يمكنك العودة إلى وطنك بأمان؟",
          paragraphs: [
            "الأيام 1 إلى 4: الإقامة في المستشفى. يساعدك أخصائي العلاج الطبيعي على الوقوف والمشي بالمشاية في اليوم الأول، وبحلول اليوم الرابع تتمكن من صعود الدرج بشكل مريح.",
            "الأيام 5 إلى 14: الإقامة في فندق مريح بالقرب من المستشفى ومواصلة جلسات العلاج الطبيعي الخارجية ومتابعة التئام الجرح.",
            "اليوم 14: إزالة الغرز الجراحية وفحص الأشعة السينية النهائي مع الجراح، ثم استلام شهادة اللياقة للسفر بالطائرة."
          ]
        }
      ],
      faqs: [
        {
          question: "كم تدوم المفاصل الصناعية الروبوتية للركبة؟",
          answer: "المفاصل الحديثة المعتمدة من FDA والمصنوعة من الكوبالت والكروم والبولي إيثيلين تدوم عادة لأكثر من 20 إلى 25 عاماً مع النشاط اليومي الطبيعي."
        },
        {
          question: "هل يمكن للمريض الدولي استبدال الركبتين في رحلة علاجية واحدة؟",
          answer: "نعم، إذا كانت صحة القلب والرئتين مستقرة، فإن استبدال الركبتين معاً آمن ويوفر تكاليف تذاكر الطيران ورسوم التأشيرة وفترة النقاهة الإجمالية."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Роботизированное эндопротезирование суставов (Robotic TKA)",
          simpleExplanation: "Роботизированная рука помогает хирургу с субмиллиметровой точностью установить имплант, сохраняя связки и сокращая кровопотерю."
        }
      ],
      sections: [
        {
          h2: "Преимущества роботизированной замены суставов в Индии",
          paragraphs: [
            "Современные системы Mako и Rosa в клиниках Дели обеспечивают идеальное позиционирование эндопротеза и подъем на ноги в первые сутки."
          ]
        },
        {
          h2: "Стоимость эндопротезирования суставов (в USD)",
          costTable: [
            { procedure: "Замена одного коленного сустава", indiaCostUsd: "$3,800 – $4,800", westernCostUsd: "$35,000 – $48,000", savingsPercentage: "86%" },
            { procedure: "Замена обоих коленных суставов (одновременно)", indiaCostUsd: "$6,500 – $8,200", westernCostUsd: "$65,000 – $85,000", savingsPercentage: "87%" },
            { procedure: "Тотальное эндопротезирование тазобедренного сустава", indiaCostUsd: "$4,500 – $5,800", westernCostUsd: "$42,000 – $55,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько служат современные коленные импланты?",
          answer: "Качественные импланты из США служат более 20-25 лет при соблюдении рекомендаций врача."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Arthroplastie robotisée du genou (TKA)",
          simpleExplanation: "Le bras robotique assure une résection osseuse au dixième de millimètre près, réduisant le traumatisme tissulaire."
        }
      ],
      sections: [
        {
          h2: "L'excellence orthopédique assistée par robot en Inde",
          paragraphs: [
            "Les systèmes robotiques Mako et Stryker permettent une récupération rapide et des premiers pas assistés sous 24 heures."
          ]
        },
        {
          h2: "Tarifs du remplacement articulaire en Inde (en USD)",
          costTable: [
            { procedure: "Prothèse totale de genou unilatérale", indiaCostUsd: "$3,800 – $4,800", westernCostUsd: "$35,000 – $48,000", savingsPercentage: "86%" },
            { procedure: "Prothèse bilatérale des deux genoux", indiaCostUsd: "$6,500 – $8,200", westernCostUsd: "$65,000 – $85,000", savingsPercentage: "87%" },
            { procedure: "Prothèse totale de hanche en céramique", indiaCostUsd: "$4,500 – $5,800", westernCostUsd: "$42,000 – $55,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Quelle est la durée de vie d'une prothèse de genou robotisée ?",
          answer: "Les prothèses modernes certifiées FDA ont une longévité éprouvée de 20 à 25 ans et plus."
        }
      ]
    }
  },

  // 4. Neurosurgery and Spine
  "neurosurgery-spine-surgery-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "جراحة العمود الفقري طفيفة التوغل (MISS)",
          simpleExplanation: "عمليات جراحية دقيقة تُجرى عبر شقوق متناهية الصغر تشبه ثقب المفتاح باستخدام أنابيب وكاميرات دقيقة، مما يمنع إتلاف عضلات الظهر ويتيح للمريض المشي خلال 24 ساعة."
        },
        {
          term: "الملاحة العصبية والرنين المغناطيسي أثناء الجراحة",
          simpleExplanation: "نظام تتبع فائق الدقة داخل الدماغ يُشبه الـ GPS الفضائي، يُمكّن الجراحين من استئصال الأورام الحساسة بدقة تامة دون المساس بمراكز النطق أو أعصاب الحركة الحيوية."
        }
      ],
      sections: [
        {
          h2: "تقنيات جراحة المخ والأعصاب والعمود الفقري المتقدمة في دلهي",
          paragraphs: [
            "يتطلب الدماغ البشري والحبل الشوكي دقة جراحية متناهية. تتميز مستشفيات دلهي الكبرى بوحدات رعاية مركزة عصبية فائقة التطور، وأجهزة مراقبة الأعصاب اللحظية أثناء الجراحة، وميكروسكوبات جراحية متطورة من Carl Zeiss الألمانية.",
            "يحصل المرضى القادمون من دول الخليج (السعودية، الإمارات، عمان، قطر، الكويت) ودول آسيا الوسطى على رعاية فائقة لأورام الدماغ، أورام الغدة النخامية، الانزلاق الغضروفي وتثبيت الفقرات بتكلفة أقل بنسبة تصل إلى 88% مقارنة بالمستشفيات الأمريكية والأوروبية."
          ]
        },
        {
          h2: "تفاصيل تكاليف جراحة المخ والأعصاب والعمود الفقري في الهند (بالدولار الأمريكي)",
          costTable: [
            { procedure: "استئصال الغضروف المجهري (علاج الانزلاق الغضروفي وعرق النسا)", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$28,000 – $40,000", savingsPercentage: "85%" },
            { procedure: "تثبيت ودمج فقرات العمود الفقري (TLIF / ACDF)", indiaCostUsd: "$5,000 – $7,200", westernCostUsd: "$55,000 – $80,000", savingsPercentage: "88%" },
            { procedure: "فتح الجمجمة المجهري لاستئصال أورام الدماغ", indiaCostUsd: "$5,500 – $8,500", westernCostUsd: "$75,000 – $110,000", savingsPercentage: "88%" },
            { procedure: "التحفيز العميق للدماغ (DBS لعلاج باركنسون والرعاش)", indiaCostUsd: "$20,000 – $26,000", westernCostUsd: "$90,000 – $140,000", savingsPercentage: "78%" }
          ]
        }
      ],
      faqs: [
        {
          question: "متى يمكن للمريض المشي بعد جراحة الانزلاق الغضروفي بالمنظار؟",
          answer: "يستطيع معظم المرضى الوقوف والمشي بمساعدة حزام داعم للظهر في غضون 12 إلى 24 ساعة فقط بعد إجراء استئصال الغضروف المجهري أو بالمنظار."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Малоинвазивная хирургия позвоночника (MISS)",
          simpleExplanation: "Операции на позвоночнике через микроразрезы без рассечения мышц спины, позволяющие пациенту вставать на ноги в первые сутки."
        },
        {
          term: "Нейронавигация и интраоперационная МРТ",
          simpleExplanation: "Спутниковая система GPS-навигации внутри мозга для безопасного удаления опухолей без повреждения центров речи и движения."
        }
      ],
      sections: [
        {
          h2: "Передовые технологии нейрохирургии в клиниках Дели NCR",
          paragraphs: [
            "Клиники Дели оснащены передовыми микроскопами Carl Zeiss и интраоперационным мониторингом для безопасного удаления опухолей мозга и коррекции деформаций позвоночника."
          ]
        },
        {
          h2: "Стоимость нейрохирургии и операций на позвоночнике (USD)",
          costTable: [
            { procedure: "Микродискэктомия (удаление грыжи диска)", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$28,000 – $40,000", savingsPercentage: "85%" },
            { procedure: "Фиксация позвонков и спондилодез (TLIF / ACDF)", indiaCostUsd: "$5,000 – $7,200", westernCostUsd: "$55,000 – $80,000", savingsPercentage: "88%" },
            { procedure: "Краниотомия и удаление опухоли головного мозга", indiaCostUsd: "$5,500 – $8,500", westernCostUsd: "$75,000 – $110,000", savingsPercentage: "88%" },
            { procedure: "Глубокая стимуляция мозга (DBS при болезни Паркинсона)", indiaCostUsd: "$20,000 – $26,000", westernCostUsd: "$90,000 – $140,000", savingsPercentage: "78%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Когда пациент может ходить после эндоскопической операции на грыже диска?",
          answer: "Большинство пациентов встают и ходят в поддерживающем корсете уже через 12-24 часа после процедуры."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Chirurgie rachidienne mini-invasive (MISS)",
          simpleExplanation: "Chirurgie du dos à travers de micro-incisions préservant les muscles rachidiens et permettant la marche sous 24h."
        },
        {
          term: "Neuronavigation & IRM peropératoire",
          simpleExplanation: "Système de guidage 3D permettant de réséquer les tumeurs cérébrales avec une précision millimétrique."
        }
      ],
      sections: [
        {
          h2: "Technologies neurochirurgicales de pointe à Delhi NCR",
          paragraphs: [
            "Les hôpitaux de Delhi NCR disposent de blocs neurochirurgicaux ultramodernes et de microscopes opératoires haute définition Carl Zeiss."
          ]
        },
        {
          h2: "Coûts de la neurochirurgie et chirurgie du dos en Inde (USD)",
          costTable: [
            { procedure: "Microdiscectomie (Hernie discale / Sciatique)", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$28,000 – $40,000", savingsPercentage: "85%" },
            { procedure: "Arthrodèse vertébrale (TLIF / ACDF cervicale)", indiaCostUsd: "$5,000 – $7,200", westernCostUsd: "$55,000 – $80,000", savingsPercentage: "88%" },
            { procedure: "Crâniotomie pour exérèse de tumeur cérébrale", indiaCostUsd: "$5,500 – $8,500", westernCostUsd: "$75,000 – $110,000", savingsPercentage: "88%" },
            { procedure: "Stimulation cérébrale profonde (DBS Parkinson)", indiaCostUsd: "$20,000 – $26,000", westernCostUsd: "$90,000 – $140,000", savingsPercentage: "78%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Quand peut-on remarcher après une chirurgie de hernie discale ?",
          answer: "La grande majorité des patients se lèvent et marchent avec une ceinture lombaire entre 12 et 24 heures après l'intervention."
        }
      ]
    }
  },

  // 5. Kidney and Urology
  "kidney-treatment-urology-cost-india-guide": {
    ar: {
      medicalTerms: [
        {
          term: "جراحة الكلى بالمنظار المرن والليزر (RIRS)",
          simpleExplanation: "منظار ألياف بصرية مرن يمر عبر المسالك البولية الطبيعية لتفتيت حصى الكلى بالليزر دون أي شق جراحي خارجي في الجلد."
        },
        {
          term: "استئصال البروستاتا بليزر الهولميوم (HoLEP)",
          simpleExplanation: "علاج لطيف بالليزر لتضخم البروستاتا الحميد لدى الرجال، يوفر راحة فورية في تدفق البول مع أقل نزيف ممكن."
        }
      ],
      sections: [
        {
          h2: "تقنيات المسالك البولية وأمراض الكلى الحديثة في دلهي",
          paragraphs: [
            "تسبب حصوات الكلى وتضخم البروستاتا آلاماً حادة والتهابات متكررة. تركز طب المسالك البولية الحديث على الحلول التداخلية بالليزر بدون جروح.",
            "تستخدم المستشفيات الشريكة في دلهي ليزر الهولميوم والثوليوم المتقدم بقوة 100 واط، مما يتيح للمسافرين الدوليين التخلص من الحصوات المعقدة في رحلة سريعة مدتها 3 إلى 5 أيام فقط."
          ]
        },
        {
          h2: "دليل تكاليف علاجات المسالك البولية وأمراض الكلى (بالدولار الأمريكي)",
          costTable: [
            { procedure: "تفتيت حصوات الكلى بالليزر (RIRS / PCNL)", indiaCostUsd: "$1,800 – $2,800", westernCostUsd: "$14,000 – $22,000", savingsPercentage: "86%" },
            { procedure: "جراحة البروستاتا بالليزر (HoLEP)", indiaCostUsd: "$2,800 – $3,800", westernCostUsd: "$20,000 – $30,000", savingsPercentage: "86%" },
            { procedure: "جلسة الغسيل الكلوي عالي الكفاءة (Hemodialysis)", indiaCostUsd: "$45 – $65", westernCostUsd: "$400 – $700", savingsPercentage: "89%" }
          ]
        }
      ],
      faqs: [
        {
          question: "كم يوماً يجب أن أقضي في الهند لجراحة حصوات الكلى بالليزر؟",
          answer: "إقامة قصيرة من 4 إلى 6 أيام كافية تماماً، حيث يستغرق التنويم بالمستشفى عادة من 24 إلى 48 ساعة فقط."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Ретроградная интраренальная хирургия (RIRS)",
          simpleExplanation: "Лазерное дробление камней в почках через естественные мочевые пути гибким эндоскопом без разрезов на коже."
        }
      ],
      sections: [
        {
          h2: "Современная урология и нефрология в Дели",
          paragraphs: [
            "Применение гольмиевых и тулиевых лазеров позволяет удалять сложные камни почек за одну короткую процедуру."
          ]
        },
        {
          h2: "Ориентировочная стоимость урологических процедур (USD)",
          costTable: [
            { procedure: "Лазерное дробление камней почек (RIRS / PCNL)", indiaCostUsd: "$1,800 – $2,800", westernCostUsd: "$14,000 – $22,000", savingsPercentage: "86%" },
            { procedure: "Лазерная энуклеация простаты (HoLEP)", indiaCostUsd: "$2,800 – $3,800", westernCostUsd: "$20,000 – $30,000", savingsPercentage: "86%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько дней нужно для лазерного удаления камней в почках?",
          answer: "Достаточно короткой поездки на 4-6 дней, госпитализация обычно занимает 1-2 дня."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Chirurgie intrarénale rétrograde au laser (RIRS)",
          simpleExplanation: "Pulvérisation des calculs rénaux par laser via un endoscope flexible sans aucune incision cutanée."
        }
      ],
      sections: [
        {
          h2: "Urologie et lithotritie laser avancée en Inde",
          paragraphs: [
            "Les lasers Holmium et Thulium permettent de traiter les calculs rénaux les plus complexes en ambulatoire ou avec une courte hospitalisation."
          ]
        },
        {
          h2: "Tarifs des soins d'urologie en Inde (en USD)",
          costTable: [
            { procedure: "Calculs rénaux au laser (RIRS / PCNL)", indiaCostUsd: "$1,800 – $2,800", westernCostUsd: "$14,000 – $22,000", savingsPercentage: "86%" },
            { procedure: "Énucléation prostatique au laser (HoLEP)", indiaCostUsd: "$2,800 – $3,800", westernCostUsd: "$20,000 – $30,000", savingsPercentage: "86%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Combien de temps rester en Inde pour un calcul rénal au laser ?",
          answer: "Un séjour de 4 à 6 jours suffit amplement, l'hospitalisation ne durant que 24 à 48 heures."
        }
      ]
    }
  },

  // 6. Liver & Gastroenterology
  "gastroenterology-liver-treatment-india-guide": {
    ar: {
      medicalTerms: [
        {
          term: "تصوير البنكرياس والقنوات الصفراوية بالمنظار (ERCP)",
          simpleExplanation: "منظار متقدم يمر عبر الجهاز الهضمي لتحديد وإزالة حصوات القنوات الصفراوية وتركيب الدعامات دون الحاجة لفتح البطن جراحياً."
        }
      ],
      sections: [
        {
          h2: "رعاية الجهاز الهضمي وأمراض الكبد المتقدمة في دلهي الكبرى",
          paragraphs: [
            "تتميز مراكز أمراض الجهاز الهضمي والكبد في دلهي بأحدث مناظير الجهاز الهضمي عالية الدقة، والسونار بالمنظار (EUS)، ووحدات مراقبة وظائف الكبد التخصصية، مما يوفر للمرضى تشخيصاً فورياً وخطة علاج دقيقة."
          ]
        },
        {
          h2: "تقديرات تكاليف علاج أمراض الجهاز الهضمي (بالدولار الأمريكي)",
          costTable: [
            { procedure: "منظار المعدة والقولون التشخيصي المتقدم", indiaCostUsd: "$250 – $450", westernCostUsd: "$2,500 – $4,500", savingsPercentage: "89%" },
            { procedure: "منظار القنوات الصفراوية مع تركيب الدعامة (ERCP)", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$14,000 – $20,000", savingsPercentage: "87%" },
            { procedure: "استئصال المرارة بالمنظار (Cholecystectomy)", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" }
          ]
        }
      ],
      faqs: [
        {
          question: "هل تُجرى مناظير الجهاز الهضمي تحت التخدير المهدئ في الهند؟",
          answer: "نعم، تُجرى جميع المناظير تحت تخدير مهدئ مريح وبدون ألم تماماً بإشراف أطباء التخدير المتخصصين في كبرى مستشفيات دلهي."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "ЭРХПГ (Эндоскопическая холангиопанкреатография)",
          simpleExplanation: "Эндоскопическое удаление камней из желчных протоков и стентирование без разрезов на животе."
        }
      ],
      sections: [
        {
          h2: "Гастроэнтерология и гепатология экспертного уровня в Индии",
          paragraphs: [
            "Институты гастроэнтерологии Дели проводят полный спектр эндоскопических и лапароскопических вмешательств на органах ЖКТ."
          ]
        },
        {
          h2: "Стоимость процедур гастроэнтерологии (USD)",
          costTable: [
            { procedure: "Гастроскопия и колоноскопия под седацией", indiaCostUsd: "$250 – $450", westernCostUsd: "$2,500 – $4,500", savingsPercentage: "89%" },
            { procedure: "Лечебная ЭРХПГ со стентированием протоков", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$14,000 – $20,000", savingsPercentage: "87%" },
            { procedure: "Лапароскопическое удаление желчного пузыря", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Проводится ли эндоскопия безболезненно?",
          answer: "Да, абсолютно все эндоскопические исследования выполняются под медикаментозным сном без малейшего дискомфорта."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "CPRE (Cholangio-pancréatographie rétrograde)",
          simpleExplanation: "Extraction endoscopique de calculs biliaires et pose de stents sans incision abdominale."
        }
      ],
      sections: [
        {
          h2: "Excellence hépato-gastroentérologique à Delhi",
          paragraphs: [
            "Les départements de gastro-entérologie de Delhi disposent des dernières technologies d'écho-endoscopie et d'endoscopie interventionnelle."
          ]
        },
        {
          h2: "Coûts des soins digestifs en Inde (USD)",
          costTable: [
            { procedure: "Endoscopie et coloscopie sous sédation", indiaCostUsd: "$250 – $450", westernCostUsd: "$2,500 – $4,500", savingsPercentage: "89%" },
            { procedure: "CPRE thérapeutique avec pose de stent", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$14,000 – $20,000", savingsPercentage: "87%" },
            { procedure: "Cholécystectomie cœlioscopique", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" }
          ]
        }
      ],
      faqs: [
        {
          question: "L'endoscopie est-elle réalisée sous anesthésie ?",
          answer: "Oui, les examens sont réalisés sous sédation légère et totalement indolore."
        }
      ]
    }
  },

  // 7. IVF & Fertility
  "ivf-fertility-treatment-in-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "الحقن المجهري للبويضة (ICSI)",
          simpleExplanation: "تقنية متطورة لأطفال الأنابيب يتم فيها حقن حيوان منوي سليم واحد مباشرة داخل البويضة الناضجة للتغلب على مشاكل ضعف الخصوبة الشديد لدى الرجال."
        },
        {
          term: "الفحص الوراثي المبكر للأجنة (PGD / PGS)",
          simpleExplanation: "فحص جيني دقيق للأجنة قبل إرجاعها إلى رحم الأم للتأكد من سلامة الكروموسومات واستبعاد الأمراض الوراثية الخطيرة."
        }
      ],
      sections: [
        {
          h2: "لماذا يختار الأزواج الدوليون نيودلهي لعلاج العقم وأطفال الأنابيب؟",
          paragraphs: [
            "تُمثل رحلة البحث عن الإنجاب تحدياً نفسياً وعاطفياً كبيراً. في كثير من الدول الغربية والخليجية، قد تتجاوز تكلفة دورة أطفال الأنابيب الواحدة 18,000 إلى 25,000 دولار مع فترات انتظار تمتد لأشهر.",
            "تضم دلهي الكبرى أحدث مختبرات علم الأجنة المجهزة بغرف ضغط إيجابي معقمة، وحاضنات ليزرية متطورة. وتعمل المراكز تحت معايير رقابية صارمة تضمن أعلى درجات الخصوصية ونسب نجاح تتجاوز 70% للفئات العمرية المناسبة."
          ]
        },
        {
          h2: "مقارنة تكاليف أطفال الأنابيب وعلاج الخصوبة (بالدولار الأمريكي)",
          costTable: [
            { procedure: "دورة أطفال أنابيب كاملة مع الحقن المجهري والأدوية", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$18,000 – $26,000", savingsPercentage: "81%" },
            { procedure: "تفقيس الجنين بالليزر ونقل الكيسة الأريمية (Blastocyst)", indiaCostUsd: "$450 – $700", westernCostUsd: "$3,000 – $5,000", savingsPercentage: "85%" },
            { procedure: "الفحص الجيني للأجنة (PGD/PGS لكل جنين)", indiaCostUsd: "$300 – $450", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "84%" },
            { procedure: "تجميد الأجنة المتطورة لمدة عام كامل", indiaCostUsd: "$400 – $600", westernCostUsd: "$2,000 – $3,500", savingsPercentage: "82%" }
          ]
        }
      ],
      faqs: [
        {
          question: "كم يوماً يحتاج الزوجان للبقاء في الهند لدورة أطفال الأنابيب؟",
          answer: "يُوصى بإقامة تتراوح بين 18 إلى 21 يوماً للزوجة، تبدأ من اليوم الثاني للدورة الشهرية لتنشيط المبايض وسحب البويضات والتخصيب وإرجاع الأجنة، بينما يمكن للزوج البقاء لمدة 5 إلى 7 أيام فقط."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "ИКСИ (Интрацитоплазматическая инъекция сперматозоида)",
          simpleExplanation: "Введение одного отобранного сперматозоида прямо в яйцеклетку для преодоления мужского фактора бесплодия."
        },
        {
          term: "ПГД / ПГС (Преимплантационная генетическая диагностика)",
          simpleExplanation: "Генетическое тестирование эмбрионов до переноса в матку для исключения хромосомных аномалий."
        }
      ],
      sections: [
        {
          h2: "Преимущества программ ЭКО в Индии для зарубежных пар",
          paragraphs: [
            "Индийские репродуктивные центры предлагают высочайшую результативность (свыше 70%) благодаря культивированию до стадии бластоцисты и ПГД."
          ]
        },
        {
          h2: "Стоимость программ ЭКО и ИКСИ в Индии (USD)",
          costTable: [
            { procedure: "Полный протокол ЭКО + ИКСИ с медикаментами", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$18,000 – $26,000", savingsPercentage: "81%" },
            { procedure: "Генетический скрининг эмбриона (ПГД/ПГС)", indiaCostUsd: "$300 – $450", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "84%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько дней нужно находиться в Индии для цикла ЭКО?",
          answer: "Супруге требуется около 18-21 дня для прохождения стимуляции, пункции и переноса эмбрионов. Супругу достаточно 5-7 дней."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "ICSI (Injection intracytoplasmique de spermatozoïde)",
          simpleExplanation: "Injection directe d'un spermatozoïde dans l'ovocyte pour pallier l'infertilité masculine."
        }
      ],
      sections: [
        {
          h2: "Pourquoi choisir l'Inde pour votre parcours de PMA et FIV",
          paragraphs: [
            "Les laboratoires d'embryologie de pointe en Inde offrent des taux d'implantation élevés avec sélection génétique préimplantatoire (DPI)."
          ]
        },
        {
          h2: "Comparatif des coûts de FIV en Inde (USD)",
          costTable: [
            { procedure: "Cycle complet de FIV avec ICSI et traitements", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$18,000 – $26,000", savingsPercentage: "81%" },
            { procedure: "Test génétique préimplantatoire (DPI)", indiaCostUsd: "$300 – $450", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "84%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Combien de temps faut-il rester en Inde pour une FIV ?",
          answer: "Un séjour de 18 à 21 jours est nécessaire pour la conjointe, contre environ une semaine pour le conjoint."
        }
      ]
    }
  },

  // 8. Cosmetic & Plastic Surgery
  "cosmetic-plastic-surgery-in-india-guide": {
    ar: {
      medicalTerms: [
        {
          term: "شفط الدهون بالموجات فوق الصوتية (VASER Lipo)",
          simpleExplanation: "تقنية متطورة ودقيقة لنحت الجسم تعتمد على موجات صوتية لطيفة لإذابة وتفتيت الدهون دون إيذاء الأوعية الدموية أو التسبب في ترهل الجلد."
        }
      ],
      sections: [
        {
          h2: "معايير الأمان والجودة العالية في جراحات التجميل بدلهي",
          paragraphs: [
            "تضم مستشفيات نيودلهي وجوروجرام المعتمدة من JCI نخبة من كبار جراحي التجميل الحاصلين على زمالات دولية، مع تجهيزات تعقيم وأمان جراحي تماثل أرقى المراكز في أوروبا وأمريكا."
          ]
        },
        {
          h2: "تفاصيل تكاليف جراحات التجميل ونحت القوام (بالدولار الأمريكي)",
          costTable: [
            { procedure: "تجميل وإعادة هيكلة الأنف المتقدمة (Rhinoplasty)", indiaCostUsd: "$2,200 – $3,200", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "82%" },
            { procedure: "شفط الدهون ونحت القوام بتقنية VASER 360", indiaCostUsd: "$2,800 – $4,000", westernCostUsd: "$15,000 – $24,000", savingsPercentage: "83%" },
            { procedure: "جراحة شد البطن الكاملة (Tummy Tuck / Abdominoplasty)", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$16,000 – $25,000", savingsPercentage: "82%" },
            { procedure: "شد وتجميل الوجه والرقبة المتقدم (Face Lift)", indiaCostUsd: "$3,500 – $4,800", westernCostUsd: "$18,000 – $28,000", savingsPercentage: "82%" }
          ]
        }
      ],
      faqs: [
        {
          question: "كم يوماً يجب أن أنتظر في الهند قبل السفر بالطائرة بعد تجميل الأنف؟",
          answer: "يُوصى بالبقاء لمدة 7 إلى 9 أيام لإزالة الجبيرة الخارجية والغرز وفحص التنفس قبل السفر بأمان."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Ультразвуковая липосакция VASER",
          simpleExplanation: "Бережное удаление жировых отложений с помощью ультразвука, обеспечивающее быстрое заживление и подтяжку кожи."
        }
      ],
      sections: [
        {
          h2: "Эстетическая хирургия высочайшего уровня в Индии",
          paragraphs: [
            "Пластические хирурги в Дели имеют международные сертификаты и используют новейшие малоинвазивные методики ринопластики и контурирования тела."
          ]
        },
        {
          h2: "Стоимость пластических операций в Индии (USD)",
          costTable: [
            { procedure: "Ринопластика (пластика носа)", indiaCostUsd: "$2,200 – $3,200", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "82%" },
            { procedure: "Липосакция VASER 360", indiaCostUsd: "$2,800 – $4,000", westernCostUsd: "$15,000 – $24,000", savingsPercentage: "83%" },
            { procedure: "Абдоминопластика (подтяжка живота)", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$16,000 – $25,000", savingsPercentage: "82%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько дней нужно находиться в Индии после ринопластики?",
          answer: "Рекомендуется оставаться 7-9 дней до снятия лангеты и контрольного осмотра хирургом."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Liposuccion ultrasonique VASER",
          simpleExplanation: "Technique d'émulsion des graisses par ultrasons préservant l'élasticité cutanée et les tissus sains."
        }
      ],
      sections: [
        {
          h2: "Chirurgie plastique et esthétique sécurisée en Inde",
          paragraphs: [
            "Les chirurgiens plasticiens à Delhi sont membres des sociétés internationales et opèrent dans des cliniques accréditées JCI."
          ]
        },
        {
          h2: "Tarifs de la chirurgie esthétique en Inde (USD)",
          costTable: [
            { procedure: "Rhinoplastie ultrasonique de précision", indiaCostUsd: "$2,200 – $3,200", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "82%" },
            { procedure: "Liposuccion haute définition VASER", indiaCostUsd: "$2,800 – $4,000", westernCostUsd: "$15,000 – $24,000", savingsPercentage: "83%" },
            { procedure: "Abdominoplastie complète", indiaCostUsd: "$3,200 – $4,500", westernCostUsd: "$16,000 – $25,000", savingsPercentage: "82%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Combien de temps rester en Inde après une rhinoplastie ?",
          answer: "Un séjour de 7 à 9 jours est recommandé pour le retrait de l'attelle et le contrôle postopératoire."
        }
      ]
    }
  },

  // 9. General & Laparoscopic Surgery
  "general-laparoscopic-surgery-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "الجراحة بالمنظار (Laparoscopy)",
          simpleExplanation: "عمليات جراحية طفيفة التوغل تُجرى من خلال ثلاثة أو أربعة ثقوب دقيقة بحجم 5 مم فقط باستخدام كاميرات عالية الدقة، مما يمنع الجروح الكبيرة المؤلمة."
        }
      ],
      sections: [
        {
          h2: "جراحات البطن طفيفة التوغل بالمنظار في دلهي الكبرى",
          paragraphs: [
            "تُمكّن تقنيات المنظار الحديثة المرضى الدوليين من إجراء عمليات المرارة، الفتق، وجراحات الجهاز الهضمي بأعلى درجات الأمان وفترات تعافي سريعة للغاية."
          ]
        },
        {
          h2: "أسعار باقات الجراحة العامة والمنظار (بالدولار الأمريكي)",
          costTable: [
            { procedure: "استئصال المرارة بالمنظار (Cholecystectomy)", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" },
            { procedure: "إصلاح الفتق الإربي بالمنظار مع الشبكة (Hernia Mesh)", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "87%" },
            { procedure: "استئصال الزائدة الدودية بالمنظار", indiaCostUsd: "$1,500 – $2,200", westernCostUsd: "$11,000 – $16,000", savingsPercentage: "86%" }
          ]
        }
      ],
      faqs: [
        {
          question: "متى يمكنني السفر بالطائرة بعد جراحة استئصال المرارة بالمنظار؟",
          answer: "يستطيع معظم المرضى السفر براحة وأمان تام في غضون 5 إلى 7 أيام فقط بعد الجراحة."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Лапароскопическая хирургия",
          simpleExplanation: "Малоинвазивные операции через миниатюрные проколы 5 мм под контролем видеокамеры высокого разрешения."
        }
      ],
      sections: [
        {
          h2: "Лапароскопия и малоинвазивная хирургия в Индии",
          paragraphs: [
            "Быстрое восстановление, минимальная боль и выписка из стационара уже через 24-48 часов."
          ]
        },
        {
          h2: "Стоимость общих лапароскопических операций (USD)",
          costTable: [
            { procedure: "Лапароскопическая холецистэктомия (желчный пузырь)", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" },
            { procedure: "Лапароскопическое удаление грыжи с сеткой", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Когда можно лететь на самолете после лапароскопии?",
          answer: "Большинство пациентов благополучно вылетают домой через 5-7 дней после операции."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Chirurgie cœlioscopique",
          simpleExplanation: "Intervention mini-invasive par micro-incisions de 5 mm sous guidage vidéo caméra HD."
        }
      ],
      sections: [
        {
          h2: "Chirurgie viscérale mini-invasive à Delhi NCR",
          paragraphs: [
            "Confort postopératoire optimal, cicatrices minimes et sortie d'hospitalisation sous 24 à 48 heures."
          ]
        },
        {
          h2: "Tarifs des chirurgies cœlioscopiques (USD)",
          costTable: [
            { procedure: "Cholécystectomie cœlioscopique", indiaCostUsd: "$1,800 – $2,600", westernCostUsd: "$15,000 – $22,000", savingsPercentage: "88%" },
            { procedure: "Cure de hernie sous cœlioscopie avec renfort prothétique", indiaCostUsd: "$1,600 – $2,400", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Quand peut-on prendre l'avion après une cœlioscopie ?",
          answer: "Le vol de retour peut être envisagé sereinement 5 à 7 jours après la chirurgie."
        }
      ]
    }
  },

  // 10. Neurology Treatment
  "neurology-treatment-in-india-care-guide": {
    ar: {
      medicalTerms: [
        {
          term: "إعادة التأهيل العصبي الشامل (Neuro-Rehab)",
          simpleExplanation: "فريق طبي متكامل يضم أخصائيي العلاج الطبيعي، النطق والتخاطب، والعلاج الوظيفي لمساعدة مرضى السكتات الدماغية والإصابات العصبية على استعادة النطق والمشي والحركة المستقلة."
        }
      ],
      sections: [
        {
          h2: "رعاية أمراض الأعصاب والسكتات الدماغية في دلهي الكبرى",
          paragraphs: [
            "تضم مستشفيات دلهي الكبرى أحدث مراكز السكتة الدماغية والصرع المعقد، وتوفر برامج تأهيل مكثفة تستخدم أجهزة الروبوت لمساعدة المرضى على استعادة الحركة وتحسين جودة الحياة."
          ]
        },
        {
          h2: "تقديرات فحوصات وعلاجات أمراض الأعصاب (بالدولار الأمريكي)",
          costTable: [
            { procedure: "تقييم الصرع المستمر وتخطيط الدماغ بالفيديو (Video EEG 24h)", indiaCostUsd: "$350 – $600", westernCostUsd: "$3,500 – $6,000", savingsPercentage: "90%" },
            { procedure: "الرنين المغناطيسي المتقدم للمخ والأعصاب (3T MRI Brain)", indiaCostUsd: "$180 – $280", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "90%" },
            { procedure: "برنامج تأهيل السكتة الدماغية المكثف (أسبوعين شاملين)", indiaCostUsd: "$1,500 – $2,200", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "88%" }
          ]
        }
      ],
      faqs: [
        {
          question: "كم يحتاج مريض السكتة الدماغية من الوقت لإعادة التأهيل في الهند؟",
          answer: "يُحقق برنامج العلاج المكثف لمدة 3 إلى 4 أسابيع نتائج ملموسة وتقدماً ملحوظاً في التوازن والمشي واستعادة الحركة اليومية المستقلة."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Нейрореабилитация",
          simpleExplanation: "Мультидисциплинарная программа физиотерапии, эрготерапии и логопедии для восстановления после инсульта и травм."
        }
      ],
      sections: [
        {
          h2: "Современная неврология и восстановление после инсульта в Индии",
          paragraphs: [
            "Комплексная диагностика причин судорог, лечение рассеянного склероза и роботизированная нейрореабилитация."
          ]
        },
        {
          h2: "Стоимость диагностики и реабилитации в неврологии (USD)",
          costTable: [
            { procedure: "Суточный видео-ЭЭГ мониторинг (24ч)", indiaCostUsd: "$350 – $600", westernCostUsd: "$3,500 – $6,000", savingsPercentage: "90%" },
            { procedure: "МРТ головного мозга 3 Тесла высокой четкости", indiaCostUsd: "$180 – $280", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "90%" },
            { procedure: "Курс нейрореабилитации после инсульта (2 недели)", indiaCostUsd: "$1,500 – $2,200", westernCostUsd: "$12,000 – $18,000", savingsPercentage: "88%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Какова оптимальная продолжительность реабилитации после инсульта?",
          answer: "Курс интенсивной терапии продолжительностью 3-4 недели дает максимальный измеримый эффект в восстановлении двигательных функций."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Neurorééducation fonctionnelle",
          simpleExplanation: "Prise en charge spécialisée pour récupérer la motricité, la parole et l'autonomie après un AVC."
        }
      ],
      sections: [
        {
          h2: "Neurologie et prise en charge des AVC à Delhi",
          paragraphs: [
            "Plateaux techniques de rééducation robotisée et unités neurovasculaires de référence internationale."
          ]
        },
        {
          h2: "Coûts de la neurologie en Inde (USD)",
          costTable: [
            { procedure: "Vidéo-EEG continu 24h", indiaCostUsd: "$350 – $600", westernCostUsd: "$3,500 – $6,000", savingsPercentage: "90%" },
            { procedure: "IRM cérébrale 3 Tesla haute résolution", indiaCostUsd: "$180 – $280", westernCostUsd: "$1,800 – $3,000", savingsPercentage: "90%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Quelle est la durée conseillée de neurorééducation en Inde ?",
          answer: "Un séjour intensif de 3 à 4 semaines permet des gains moteurs et fonctionnels majeurs."
        }
      ]
    }
  },

  // 11. Liver Transplant
  "liver-transplant-cost-in-india-complete-guide": {
    ar: {
      medicalTerms: [
        {
          term: "زراعة الكبد من متبرع حي (LDLT)",
          simpleExplanation: "يتبرع أحد أفراد الأسرة الأقرباء بجزء من كبده (حوالي 50-60%). وخلال 6 إلى 8 أسابيع، يتجدد الكبد وينمو مجدداً إلى حجمه الطبيعي الكامل لدى المتبرع والمتلقي بفضل قدرة خلايا الكبد المذهلة على التجدد."
        },
        {
          term: "لجنة تصريح زراعة الأعضاء الحكومية",
          simpleExplanation: "لجنة قانونية حكومية إلزامية تتحقق من صلة القرابة والأوراق الرسمية لمنع أي تجارة بالأعضاء وضمان أن التبرع طوعي وقانوني وآمن تماماً."
        }
      ],
      sections: [
        {
          h2: "دلهي الكبرى: الرائدة عالمياً في زراعة الكبد من متبرع حي",
          paragraphs: [
            "عندما يعاني أحد أفراد الأسرة من تليف الكبد المتقدم أو الفشل الكبدي الحاد، فإن اختيار فريق جراحي معتمد يتمتع بنسب نجاح فائقة يُعد القرار الأهم في حياة المريض.",
            "أجرى كبار الجراحين في مستشفيات ميدانتا وأبولو وماكس أكثر من 4,000 عملية زراعة كبد ناجحة من متبرع حي، مع أدنى معدلات مضاعفات للمتبرع عالمياً (أقل من 0.1%)."
          ]
        },
        {
          h2: "مقارنة تكلفة زراعة الكبد (الهند مقابل أمريكا وبريطانيا وتركيا)",
          paragraphs: [
            "في الهند، تغطي باقة زراعة الكبد الشاملة جميع فحوصات المتبرع، العملية الجراحية للمريض والمتبرع، الإقامة بالمستشفى لمدة 21 يوماً (شاملة العناية المركزة للكبد)، والأدوية بعد العملية لمدة شهر."
          ],
          costTable: [
            { procedure: "باقة زراعة الكبد الكاملة من متبرع حي", indiaCostUsd: "$28,000 – $36,000", westernCostUsd: "$350,000 – $550,000", savingsPercentage: "92%" },
            { procedure: "الفحوصات القانونية والطبية الشاملة للمتبرع قبل العملية", indiaCostUsd: "$2,200 – $3,000", westernCostUsd: "$22,000 – $35,000", savingsPercentage: "90%" }
          ]
        },
        {
          h2: "المتطلبات القانونية الإلزامية للمرضى الدوليين",
          paragraphs: [
            "بموجب قانون زراعة الأعضاء البشرية الهندي (THOA)، يُشترط للمرضى القادمين من الخارج:",
            "1. وجود متبرع حي قريب من العائلة (صلة قرابة من الدرجة الأولى أو الثانية كالأب، الأم، الأخ، الأخت، الزوج، أو الأبناء).",
            "2. شهادات صلة القرابة الرسمية، شهادات الميلاد وعقود الزواج مصدقة من وزارة الخارجية (MOFA) وسفارة الهند في بلدك.",
            "3. إجراء فحص تطابق الحمض النووي (DNA) في مختبر معتمد فور الوصول إلى نيودلهي."
          ]
        }
      ],
      faqs: [
        {
          question: "هل التبرع بجزء من الكبد آمن تماماً على صحة المتبرع؟",
          answer: "نعم، سلامة المتبرع هي الأولوية القصوى للفريق الجراحي. يمتلك الكبد قدرة فريدة على إعادة النمو السريع إلى أكثر من 90% من حجمه الطبيعي خلال 8 إلى 12 أسبوعاً، ويخرج المتبرع من المستشفى عادة خلال 7 أيام بصحة ممتازة."
        },
        {
          question: "كم يجب أن يقضي المريض في الهند بعد زراعة الكبد؟",
          answer: "يُوصى بإقامة إجمالية تتراوح بين 8 إلى 12 أسبوعاً لضمان استقرار مستويات أدوية تثبيط المناعة (Tacrolimus) وعودة وظائف الكبد إلى معدلاتها الطبيعية قبل السفر بأمان."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Трансплантация печени от живого донора (LDLT)",
          simpleExplanation: "Пересадка доли печени (50-60%) от близкого родственника. Печень полностью регенерирует у донора и реципиента за 6-8 недель."
        },
        {
          term: "Комитет по трансплантации",
          simpleExplanation: "Обязательная государственная комиссия, подтверждающая родственные связи для исключения коммерческой торговли органами."
        }
      ],
      sections: [
        {
          h2: "Дели — мировой лидер в трансплантации печени от живого донора",
          paragraphs: [
            "Хирурги в клиниках Medanta, Apollo и Max провели более 4 000 успешных пересадок с минимальным риском для донора (осложнения менее 0,1%)."
          ]
        },
        {
          h2: "Стоимость пересадки печени (Индия, США, Европа и Турция в USD)",
          costTable: [
            { procedure: "Полный пакет пересадки печени от живого донора", indiaCostUsd: "$28,000 – $36,000", westernCostUsd: "$350,000 – $550,000", savingsPercentage: "92%" },
            { procedure: "Комплексное предоперационное обследование донора", indiaCostUsd: "$2,200 – $3,000", westernCostUsd: "$22,000 – $35,000", savingsPercentage: "90%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Безопасно ли донорство части печени для родственника?",
          answer: "Да, печень полностью восстанавливается до 90%+ исходного объема за 8-12 недель. Донор выписывается из клиники уже через 7 дней."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Greffe de foie avec donneur vivant (LDLT)",
          simpleExplanation: "Don d'une partie du foie par un proche parent. Le foie se régénère entièrement chez le donneur et le receveur en 6 à 8 semaines."
        }
      ],
      sections: [
        {
          h2: "Delhi NCR : Leader mondial de la greffe hépatique",
          paragraphs: [
            "Plus de 4 000 greffes de foie réalisées avec succès dans les centres Medanta, Apollo et Max avec des protocoles stricts de sécurité."
          ]
        },
        {
          h2: "Comparatif des coûts de greffe de foie (USD)",
          costTable: [
            { procedure: "Forfait complet de transplantation hépatique", indiaCostUsd: "$28,000 – $36,000", westernCostUsd: "$350,000 – $550,000", savingsPercentage: "92%" },
            { procedure: "Bilan médical et légal complet du donneur", indiaCostUsd: "$2,200 – $3,000", westernCostUsd: "$22,000 – $35,000", savingsPercentage: "90%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Le don d'une partie de foie est-il sans danger pour le donneur ?",
          answer: "Absolument. La sécurité du donneur est la priorité numéro un, le foie retrouvant son volume normal en quelques semaines."
        }
      ]
    }
  },

  // 12. Dental Treatment Tourism
  "dental-treatment-tourism-in-india-cost-guide": {
    ar: {
      medicalTerms: [
        {
          term: "زراعة الأسنان الكاملة (All-on-4 / All-on-6)",
          simpleExplanation: "تثبيت قوس أسنان كامل ثابت ودائم على 4 أو 6 غرسات تيتانيوم مثبتة في عظم الفك، للاستغناء نهائياً وبشكل دائم عن أطقم الأسنان المتحركة."
        },
        {
          term: "تيجان وقشور الزيركونيا (Zirconia Crowns)",
          simpleExplanation: "تركيبات خزفية خالية من المعادن وتتميز بصلابة تماثل الألماس، تعكس بدقة لون وبريق الأسنان الطبيعية دون أي تصبغ."
        }
      ],
      sections: [
        {
          h2: "لماذا يختار المرضى الدوليون دلهي لعلاج وتجميل الأسنان؟",
          paragraphs: [
            "في الدول الغربية ودول الخليج، قد تصل تكلفة إعادة تأهيل الفم بالكامل إلى 20,000 - 40,000 دولار. وتوفر مراكز طب الأسنان الرائدة في دلهي أحدث استوديوهات تصميم الابتسامة الرقمية (Digital Smile Design) وأجهزة المسح ثلاثي الأبعاد CBCT مع غرسات أصلية بضمان مدى الحياة من Nobel Biocare و Straumann السويسرية بتوفير يصل إلى 85%."
          ]
        },
        {
          h2: "مقارنة تكاليف زراعة وتجميل الأسنان (بالدولار الأمريكي)",
          costTable: [
            { procedure: "زراعة سن واحدة بتيتانيوم سويسري مع التاج (Nobel / Straumann)", indiaCostUsd: "$450 – $750", westernCostUsd: "$2,800 – $4,500", savingsPercentage: "83%" },
            { procedure: "زراعة فك كامل بتقنية All-on-4 مع أسنان ثابتة دائمة", indiaCostUsd: "$3,800 – $5,500", westernCostUsd: "$18,000 – $28,000", savingsPercentage: "80%" },
            { procedure: "تاج الزيركونيا الممتاز (لكل سن)", indiaCostUsd: "$150 – $250", westernCostUsd: "$1,200 – $2,000", savingsPercentage: "87%" },
            { procedure: "تبييض الأسنان الاحترافي بالليزر", indiaCostUsd: "$180 – $280", westernCostUsd: "$800 – $1,400", savingsPercentage: "79%" }
          ]
        }
      ],
      faqs: [
        {
          question: "كم رحلة يحتاجها المريض لزراعة الأسنان في الهند؟",
          answer: "مع تقنية الزراعة والتحميل الفوري، يُكمل العديد من المرضى علاجهم في رحلة واحدة مدتها 7 إلى 10 أيام. وبالنسبة للزراعة التقليدية، يُفضل زيارتان قصيرتان تفصل بينهما 3 أشهر."
        }
      ]
    },
    ru: {
      medicalTerms: [
        {
          term: "Имплантация All-on-4 / All-on-6",
          simpleExplanation: "Несъемный зубной протез на всю челюсть, зафиксированный всего на 4 или 6 титановых имплантах."
        },
        {
          term: "Циркониевые коронки",
          simpleExplanation: "Безметалловые сверхпрочные коронки из диоксида циркония с идеальной эстетикой натуральных зубов."
        }
      ],
      sections: [
        {
          h2: "Преимущества стоматологического туризма в Индии",
          paragraphs: [
            "Применение швейцарских имплантов Straumann и Nobel Biocare с пожизненной гарантией и 3D-моделированием улыбки."
          ]
        },
        {
          h2: "Стоимость имплантации и протезирования зубов (USD)",
          costTable: [
            { procedure: "Один титановый имплант (Швейцария) с коронкой", indiaCostUsd: "$450 – $750", westernCostUsd: "$2,800 – $4,500", savingsPercentage: "83%" },
            { procedure: "Имплантация All-on-4 (вся челюсть с несъемным мостом)", indiaCostUsd: "$3,800 – $5,500", westernCostUsd: "$18,000 – $28,000", savingsPercentage: "80%" },
            { procedure: "Коронка из диоксида циркония (за 1 зуб)", indiaCostUsd: "$150 – $250", westernCostUsd: "$1,200 – $2,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Сколько поездок требуется для имплантации зубов?",
          answer: "При немедленной нагрузке достаточно одной поездки на 7-10 дней. При классической двухэтапной методике — 2 коротких визита с интервалом в 3 месяца."
        }
      ]
    },
    fr: {
      medicalTerms: [
        {
          term: "Implants All-on-4 / All-on-6",
          simpleExplanation: "Arcade dentaire complète fixe vissée sur 4 ou 6 implants en titane."
        }
      ],
      sections: [
        {
          h2: "Tourisme dentaire de haute qualité à Delhi",
          paragraphs: [
            "Implants suisses Straumann et Nobel Biocare garantis à vie et conception numérique du sourire en CFAO."
          ]
        },
        {
          h2: "Tarifs des soins dentaires en Inde (USD)",
          costTable: [
            { procedure: "Implant en titane suisse + couronne", indiaCostUsd: "$450 – $750", westernCostUsd: "$2,800 – $4,500", savingsPercentage: "83%" },
            { procedure: "All-on-4 arcade complète fixe", indiaCostUsd: "$3,800 – $5,500", westernCostUsd: "$18,000 – $28,000", savingsPercentage: "80%" },
            { procedure: "Couronne en zircone haute résistance", indiaCostUsd: "$150 – $250", westernCostUsd: "$1,200 – $2,000", savingsPercentage: "87%" }
          ]
        }
      ],
      faqs: [
        {
          question: "Combien de voyages pour une pose d'implants dentaires en Inde ?",
          answer: "Un seul séjour de 7 à 10 jours suffit avec les implants à mise en charge immédiate."
        }
      ]
    }
  }
};

// Aliases for slug compatibility
BLOG_CONTENT_TRANSLATIONS["heart-surgery-cost-in-india-guide"] = BLOG_CONTENT_TRANSLATIONS["cardiology-heart-surgery-india-cost-guide"];
BLOG_CONTENT_TRANSLATIONS["cancer-treatment-in-india-oncology-cost-guide"] = BLOG_CONTENT_TRANSLATIONS["cancer-treatment-oncology-india-cost-guide"];

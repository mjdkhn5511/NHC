import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { doctorsData } from '../data/doctorsData.ts';
import { hospitalsData } from '../data/hospitalsData.ts';
import { treatmentsData } from '../data/treatmentsData.ts';
import { blogsData } from '../data/blogsData.ts';
import { servicesJourneyData } from '../data/servicesData.ts';
import { patientStoriesData } from '../data/patientStoriesData.ts';
import { HOME_SEO_OVERVIEW, TREATMENTS_SEO_OVERVIEW } from '../data/seoContentData.ts';
import { getLocalizedTreatment, getLocalizedDoctor, getLocalizedHospital, getLocalizedHospitalName, getLocalizedBlog, getLocalizedServiceStep, getLocalizedPatientStory } from '../utils/localizedData.ts';

interface PageMetadata {
  route: string; // e.g. "/doctors/dr-anant-kumar" or "/ar/hospitals"
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schema?: object;
  lang?: 'en' | 'ar' | 'fr' | 'ru';
  dir?: 'ltr' | 'rtl';
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getCriticalHomeHtml(lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const badgeText = isAr ? 'رحلتك العلاجية بكل يسر وثقة' : isFr ? 'Votre parcours de soins, simplifié' : isRu ? 'Организация лечения в Индии — надежно и просто' : 'Your Healthcare Journey, Simplified';

  const h1Html = isAr
    ? `<span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">العلاج الطبي المتقدم في الهند</span> للمرضى الدوليين`
    : isFr
    ? `Soins médicaux de pointe en <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Inde</span> pour les patients internationaux`
    : isRu
    ? `Лечение мирового уровня в <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Индии</span> для зарубежных пациентов`
    : `World-Class <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Medical Treatment in India</span> for International Patients`;

  const subText = isAr
    ? 'شريكك الموثوق لاختيار أفضل المستشفيات المعتمدة، والتنسيق مع كبار الجراحين في دلهي، بدون أي رسوم وساطة.'
    : isFr
    ? 'Votre partenaire de confiance pour la sélection hospitalière, la coordination avec les spécialistes et un accompagnement complet en Inde.'
    : isRu
    ? 'Ваш надежный партнер по выбору аккредитованных клиник JCI и ведущих профессоров Индии с полным визовым сопровождением.'
    : 'Your trusted partner for hospital selection, doctor coordination and personalized medical assistance in India. Get help navigating your treatment journey with care and confidence.';

  const cta1 = isAr ? 'احصل على استشارة مجانية' : isFr ? 'Consultation gratuite' : isRu ? 'Бесплатная консультация' : 'Get Free Consultation';
  const cta2 = isAr ? 'استعرض التخصصات' : isFr ? 'Explorer les soins' : isRu ? 'Направления лечения' : 'Explore Treatments';

  const badgeVisa = isAr ? 'مساعدة مجانية 100% في التأشيرة الطبية' : isFr ? 'Assistance visa médical 100% gratuite' : isRu ? '100% бесплатная помощь с визой в Индию' : '100% Free Medical Visa for India Assistance';
  const badgeVil = isAr ? '⚡ خطاب دعوة المستشفى (VIL) في 24–48 ساعة' : isFr ? '⚡ Lettre officielle d\'invitation (VIL) en 24–48h' : isRu ? '⚡ Официальное приглашение клиники (VIL) за 24–48 ч' : '⚡ Fast 24–48h Hospital Invitation Letter (VIL)';
  const badgeZero = isAr ? '🛡️ بدون رسوم خدمة' : isFr ? '🛡️ Zéro frais de service' : isRu ? '🛡️ Без скрытых комиссий' : '🛡️ Zero Service Fee';

  const featSpecialtiesTitle = isAr ? 'التخصصات الطبية المميزة' : isFr ? 'Spécialités médicales de pointe' : isRu ? 'Ведущие медицинские направления' : 'Advanced Clinical Specialties';
  const featSpecialtiesSubtitle = isAr ? 'نخبة من أكثر التدخلات الجراحية والعلاجية طلباً في مستشفيات دلهي إن سي آر' : isFr ? 'Les interventions et chirurgies les plus demandées à Delhi NCR' : isRu ? 'Наиболее востребованные хирургические и терапевтические направления' : 'High-success tertiary procedures across our partner quaternary hospital network';

  const featHospitalsTitle = isAr ? 'أشهر المستشفيات الشريكة في دلهي إن سي آر' : isFr ? 'Hôpitaux partenaires d\'excellence à Delhi NCR' : isRu ? 'Ведущие аккредитованные клиники Дели NCR' : 'Premier Quaternary Hospitals in Delhi NCR';
  const featHospitalsSubtitle = isAr ? 'مستشفيات عالمية معتمدة من JCI وNABH مجهزة بأحدث تقنيات الروبوت دافنشي' : isFr ? 'Centres accrédités JCI & NABH dotés des technologies chirurgicales les plus modernes' : isRu ? 'Клиники с международной аккредитацией JCI и передовыми роботизированными системами' : 'JCI & NABH accredited quaternary medical centers with cutting-edge surgical infrastructure';

  const featDoctorsTitle = isAr ? 'كبار الجراحين ورؤساء الأقسام الطبية' : isFr ? 'Chirurgiens et chefs de département de renommée mondiale' : isRu ? 'Ведущие профессора и главные хирурги' : 'Distinguished Department Chairs & Chief Surgeons';
  const featDoctorsSubtitle = isAr ? 'أطباء معتمدون دولياً يتمتعون بخبرات تتجاوز 25 إلى 40 عاماً من النجاح السريري' : isFr ? 'Spécialistes de renommée internationale cumulant plus de 25 à 40 ans d\'expérience' : isRu ? 'Специалисты мирового уровня с клиническим стажем от 25 до 40 лет' : 'Internationally trained clinicians with 25 to 40+ years of verified quaternary surgical outcomes';

  const journeyTitle = isAr ? 'رحلتك العلاجية خطوة بخطوة' : isFr ? 'Votre parcours de soins étape par étape' : isRu ? 'Этапы организации вашего лечения' : 'Your 4-Step Medical Travel Pathway';
  const journeySubtitle = isAr ? 'تنسيق مباشر وسلس من اللحظة الأولى وحتى تمام التعافي والعودة سالماً' : isFr ? 'Une prise en charge transparente dès l\'envoi de vos dossiers jusqu\'au retour chez vous' : isRu ? 'Полное сопровождение от первой консультации до реабилитации и возвращения домой' : 'Clear, structured patient navigation from first diagnostic review to discharge follow-up';

  const storiesTitle = isAr ? 'قصص وتجارب المرضى الدوليين' : isFr ? 'Témoignages de nos patients internationaux' : isRu ? 'Отзывы и истории наших пациентов' : 'Verified International Patient Journeys';
  const storiesSubtitle = isAr ? 'تجارب واقعية لمرضى استعادوا صحتهم بعد تلقي الرعاية في كبرى مستشفيات الهند' : isFr ? 'Des histoires réelles de patients ayant retrouvé la santé dans nos hôpitaux partenaires' : isRu ? 'Реальные истории пациентов, успешно прошедших лечение в ведущих клиниках Индии' : 'Documented case studies of patients successfully treated across premier Delhi NCR hospital centers';

  const homeSeo = HOME_SEO_OVERVIEW[lang] || HOME_SEO_OVERVIEW.en;

  const featuredTreatments = treatmentsData.slice(0, 6);
  const featuredHospitals = hospitalsData.filter(h => h.featured).slice(0, 3);
  const featuredDoctors = doctorsData.filter(d => d.featured).slice(0, 3);
  const journeySteps = servicesJourneyData.slice(0, 4);
  const patientStories = patientStoriesData.slice(0, 2);

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Top Micro Bar -->
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-200">
            <a href="${prefix}/treatments" class="hover:text-teal-300 transition-colors">${isAr ? 'العلاجات' : isFr ? 'Soins' : isRu ? 'Лечение' : 'Treatments'}</a>
            <a href="${prefix}/hospitals" class="hover:text-teal-300 transition-colors">${isAr ? 'المستشفيات' : isFr ? 'Hôpitaux' : isRu ? 'Клиники' : 'Hospitals'}</a>
            <a href="${prefix}/doctors" class="hover:text-teal-300 transition-colors">${isAr ? 'الأطباء' : isFr ? 'Médecins' : isRu ? 'Врачи' : 'Doctors'}</a>
            <a href="${prefix}/services" class="hover:text-teal-300 transition-colors">${isAr ? 'الخدمات' : isFr ? 'Services' : isRu ? 'Услуги' : 'Services'}</a>
            <a href="${prefix}/blog" class="hover:text-teal-300 transition-colors">${isAr ? 'المدونة' : isFr ? 'Blog' : isRu ? 'Блог' : 'Blog'}</a>
          </nav>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/treatments" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <!-- 1. Hero Section -->
      <section class="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 bg-medical-dots">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm mb-6">
              <span>${badgeText}</span>
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              ${h1Html}
            </h1>
            <p class="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ${subText}
            </p>
            <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a href="${prefix}/treatments" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-600/25">
                <span>${cta1}</span>
              </a>
              <a href="${prefix}/treatments" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-sm">
                <span>${cta2}</span>
              </a>
            </div>
            <div class="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <span class="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300 font-bold">
                ${badgeVisa}
              </span>
              <span class="inline-flex items-center gap-1.5 text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 font-semibold">
                ${badgeVil}
              </span>
              <span class="inline-flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 font-semibold">
                ${badgeZero}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Featured Treatments Showcase Grid -->
      <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
              ${isAr ? 'التخصصات الجراحية' : isFr ? 'Chirurgies Spécialisées' : isRu ? 'Специализированная хирургия' : 'Advanced Clinical Care'}
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              ${featSpecialtiesTitle}
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-600">
              ${featSpecialtiesSubtitle}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            ${featuredTreatments.map((treat) => {
              const loc = getLocalizedTreatment(treat, lang);
              return `
                <article class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden hover:border-teal-400/60 transition-all">
                  <div class="relative h-48 w-full overflow-hidden bg-slate-100 aspect-[16/10]">
                    <img
                      src="${treat.image}"
                      alt="${loc.title}"
                      width="400"
                      height="250"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                      ${loc.badge}
                    </span>
                  </div>
                  <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 class="text-lg font-bold text-slate-900 mb-2">
                        <a href="${prefix}/treatments/${treat.slug}" class="hover:text-teal-600 transition-colors">${loc.title}</a>
                      </h3>
                      <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        ${loc.shortDesc}
                      </p>
                    </div>
                    <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-medium">${isAr ? 'الإقامة المقترحة:' : isFr ? 'Séjour :' : isRu ? 'Пребывание:' : 'Stay:'} ${treat.recommendedStay}</span>
                      <a href="${prefix}/treatments/${treat.slug}" class="font-bold text-teal-600 hover:text-teal-700">
                        ${isAr ? 'التفاصيل ←' : isFr ? 'Détails →' : isRu ? 'Подробнее →' : 'View Details →'}
                      </a>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- 3. Partner Hospitals Showcase -->
      <section class="py-16 lg:py-24 bg-slate-50/60 border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
              ${isAr ? 'المستشفيات المعتمدة' : isFr ? 'Centres Agréés' : isRu ? 'Клиники JCI' : 'Accredited Healthcare Centers'}
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              ${featHospitalsTitle}
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-600">
              ${featHospitalsSubtitle}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            ${featuredHospitals.map((hosp) => {
              const localizedHosp = getLocalizedHospital(hosp, lang);
              return `
                <article class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden hover:border-teal-400/60 transition-all">
                  <div class="relative h-52 w-full overflow-hidden bg-slate-100 aspect-[16/9]">
                    <img
                      src="${hosp.image}"
                      alt="${hosp.name}"
                      width="600"
                      height="338"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/9]"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                      ${localizedHosp.city}
                    </span>
                  </div>
                  <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 class="text-lg font-bold text-slate-900 mb-1">
                        <a href="${prefix}/hospitals/${hosp.slug}" class="hover:text-teal-600 transition-colors">${hosp.name}</a>
                      </h3>
                      <p class="text-xs font-semibold text-teal-700 mb-3">${hosp.bedCapacity} ${isAr ? 'سرير سريري' : isFr ? 'lits' : isRu ? 'коек' : 'Beds'} • ${hosp.accreditation.join(', ')}</p>
                      <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        ${hosp.fullOverview}
                      </p>
                    </div>
                    <div class="pt-4 border-t border-slate-100">
                      <a href="${prefix}/hospitals/${hosp.slug}" class="font-bold text-teal-600 hover:text-teal-700 text-xs">
                        ${isAr ? 'عرض ملف المستشفى ←' : isFr ? 'Profil de l\'hôpital →' : isRu ? 'Профиль клиники →' : 'View Hospital Profile →'}
                      </a>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
          <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="${prefix}/hospitals" class="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md">
              ${isAr ? 'عرض جميع مستشفيات دلهي إن سي آر' : isFr ? 'Voir tous les hôpitaux de Delhi NCR' : isRu ? 'Все клиники Дели NCR' : 'Explore All Delhi NCR Hospitals'}
            </a>
            <a href="${prefix}/blog/top-nabh-jci-accredited-hospitals-delhi-ncr" class="px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 hover:text-teal-700 font-bold text-xs sm:text-sm shadow-xs">
              Compare Top NABH & JCI Accredited Hospitals in Delhi NCR
            </a>
          </div>
        </div>
      </section>

      <!-- 4. Leading Specialist Doctors -->
      <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
              ${isAr ? 'نخبة الجراحين' : isFr ? 'Chirurgiens Experts' : isRu ? 'Ведущие хирурги' : 'Verified Medical Leadership'}
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              ${featDoctorsTitle}
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-600">
              ${featDoctorsSubtitle}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            ${featuredDoctors.map((doc) => {
              const locDoc = getLocalizedDoctor(doc, lang);
              return `
                <article class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden hover:border-teal-400/60 transition-all">
                  <div class="relative h-60 w-full overflow-hidden bg-slate-100 aspect-[5/6]">
                    <img
                      src="${doc.image}"
                      alt="${doc.name}"
                      width="400"
                      height="480"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 aspect-[5/6]"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                      ${locDoc.city}
                    </span>
                  </div>
                  <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 class="text-lg font-bold text-slate-900 mb-1">
                        <a href="${prefix}/doctors/${doc.slug}" class="hover:text-teal-600 transition-colors">${doc.name}</a>
                      </h3>
                      <p class="text-xs font-semibold text-teal-700 mb-1">${locDoc.designation}</p>
                      <p class="text-xs text-slate-500 mb-3">${doc.hospitalName} • ${doc.experienceYears}+ ${isAr ? 'سنوات خبرة' : isFr ? 'ans d\'expérience' : isRu ? 'лет опыта' : 'Years Experience'}</p>
                      <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        ${doc.bio}
                      </p>
                    </div>
                    <div class="pt-4 border-t border-slate-100">
                      <a href="${prefix}/doctors/${doc.slug}" class="font-bold text-teal-600 hover:text-teal-700 text-xs">
                        ${isAr ? 'عرض الملف الطبي ←' : isFr ? 'Consulter le profil →' : isRu ? 'Профиль врача →' : 'View Doctor Profile →'}
                      </a>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- 5. 4-Step Patient Journey -->
      <section class="py-16 bg-slate-50 border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ${journeyTitle}
            </h2>
            <p class="mt-3 text-sm text-slate-600">
              ${journeySubtitle}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${journeySteps.map((s) => {
              const locStep = getLocalizedServiceStep(s, lang);
              return `
                <article class="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs mb-4">
                      ${s.step}
                    </span>
                    <h3 class="text-base font-bold text-slate-900 mb-2">${locStep.title}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${locStep.shortDesc}</p>
                  </div>
                  <ul class="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
                    ${locStep.detailedProcess.slice(0, 2).map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- 6. Patient Stories -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ${storiesTitle}
            </h2>
            <p class="mt-3 text-sm text-slate-600">
              ${storiesSubtitle}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${patientStories.map((story) => {
              const locStory = getLocalizedPatientStory(story, lang);
              return `
                <article class="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-2 mb-3">
                      <span class="text-xl">${story.countryFlag}</span>
                      <span class="text-xs font-bold text-slate-700">${story.country}</span>
                      <span class="text-slate-300">•</span>
                      <span class="text-xs font-semibold text-teal-700">${story.treatmentCategory}</span>
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-3">${locStory.summaryTitle}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${locStory.patientNarrative}</p>
                  </div>
                  <div class="pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between">
                    <span>${story.hospitalName}</span>
                    <span class="font-bold text-teal-700">${story.lengthOfStay}</span>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- 7. Comprehensive Clinical SEO Overview & Knowledge Base -->
      <section class="py-16 lg:py-20 bg-slate-50/70 border-t border-slate-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
              ${homeSeo.badge}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              ${homeSeo.h2Title}
            </h2>
          </div>
          <div class="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed mb-16">
            ${homeSeo.paragraphs.map(p => `<p class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">${p}</p>`).join('')}
          </div>

          <!-- SEO FAQs Section -->
          <div class="pt-10 border-t border-slate-200">
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-8">
              ${homeSeo.faqsTitle}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${homeSeo.faqs.map(faq => `
                <article class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 class="text-sm sm:text-base font-bold text-slate-900 mb-2">${faq.question}</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${faq.answer}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Semantic Footer -->
    <footer class="bg-[#051714] text-slate-300 py-12 border-t border-teal-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs space-y-4">
        <p class="font-semibold text-slate-200">Nadwa Healthcare (NHC) • Official International Patient Coordination Desk</p>
        <p class="text-slate-400">Delhi NCR: New Delhi, Gurugram, Noida, Faridabad • 24/7 Helpline: +91 96485 78320 • info@nadwahealthcare.com</p>
        <p class="text-slate-500 text-[11px]">Independent medical tourism facilitation. Hospital opinions, visa invitation letters, and quotation services provided at zero service fees.</p>
      </div>
    </footer>
  </div>`;
}

function getCriticalTreatmentsHtml(lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';

  const bLabel = isAr ? 'العلاجات' : isFr ? 'Soins' : isRu ? 'Лечение' : 'Treatments';
  const bBadge = isAr ? 'تخصصات طبية دقيقة' : isFr ? 'Spécialités médicales avancées' : isRu ? 'Передовые медицинские направления' : 'Specialized Medical Treatments';
  const bTitle = isAr
    ? `أحدث العلاجات والعمليات الجراحية المتقدمة في <span class="text-teal-400">الهند</span>`
    : isFr
    ? `Soins médicaux de pointe et chirurgies en <span class="text-teal-400">Inde</span>`
    : isRu
    ? `Передовые методы лечения и операции в <span class="text-teal-400">Индии</span>`
    : `Advanced Medical Treatments & Surgeries in <span class="text-teal-400">India</span>`;
  const bDesc = isAr
    ? 'استكشف التخصصات الدقيقة في الأورام وجراحة القلب والعظام وزراعة الأعضاء والمسالك البولية في مستشفيات دلهي إن سي آر.'
    : isFr
    ? 'Explorez les interventions spécialisées en oncologie, cardiologie, orthopédie, neurochirurgie et greffes dans les meilleurs hôpitaux de Delhi NCR.'
    : isRu
    ? 'Комплексные программы лечения в онкологии, кардиохирургии, ортопедии, нейрохирургии и трансплантологии в клиниках Дели NCR.'
    : 'Explore specialized quaternary procedures across oncology, cardiology, orthopedics, neurosurgery, organ transplants, and IVF at JCI-accredited Delhi NCR centers.';

  const treatmentsSeo = TREATMENTS_SEO_OVERVIEW[lang] || TREATMENTS_SEO_OVERVIEW.en;

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Top Micro Bar -->
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-200">
            <a href="${prefix}/treatments" class="text-teal-400 font-semibold">${bLabel}</a>
            <a href="${prefix}/hospitals" class="hover:text-teal-300 transition-colors">${isAr ? 'المستشفيات' : isFr ? 'Hôpitaux' : isRu ? 'Клиники' : 'Hospitals'}</a>
            <a href="${prefix}/doctors" class="hover:text-teal-300 transition-colors">${isAr ? 'الأطباء' : isFr ? 'Médecins' : isRu ? 'Врачи' : 'Doctors'}</a>
            <a href="${prefix}/services" class="hover:text-teal-300 transition-colors">${isAr ? 'الخدمات' : isFr ? 'Services' : isRu ? 'Услуги' : 'Services'}</a>
            <a href="${prefix}/blog" class="hover:text-teal-300 transition-colors">${isAr ? 'المدونة' : isFr ? 'Blog' : isRu ? 'Блог' : 'Blog'}</a>
          </nav>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/contact" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <!-- Header Banner -->
      <section class="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-xs text-teal-400/80 mb-3 flex items-center gap-2">
            <a href="${prefix || '/'}" class="hover:underline">${isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home'}</a>
            <span>/</span>
            <span class="text-white font-semibold">${bLabel}</span>
          </div>
          <div class="max-w-3xl">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              ${bBadge}
            </span>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              ${bTitle}
            </h1>
            <p class="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              ${bDesc}
            </p>
          </div>
        </div>
      </section>

      <!-- All 12 Clinical Treatments Grid -->
      <section class="py-12 lg:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            ${treatmentsData.map((treat) => {
              const loc = getLocalizedTreatment(treat, lang);
              return `
                <article class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden hover:border-teal-400/60 transition-all">
                  <div class="relative h-48 w-full overflow-hidden bg-slate-100 aspect-[16/10]">
                    <img
                      src="${treat.image}"
                      alt="${loc.title}"
                      width="400"
                      height="250"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                      ${loc.badge}
                    </span>
                  </div>
                  <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 class="text-lg font-bold text-slate-900 mb-2">
                        <a href="${prefix}/treatments/${treat.slug}" class="hover:text-teal-600 transition-colors">${loc.title}</a>
                      </h2>
                      <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        ${loc.shortDesc}
                      </p>
                      <div class="text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <strong class="text-slate-800">${isAr ? 'الإقامة المقترحة:' : isFr ? 'Séjour :' : isRu ? 'Пребывание:' : 'Recommended Stay:'}</strong> ${treat.recommendedStay}
                      </div>
                    </div>
                    <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span class="text-teal-700 font-semibold">${isAr ? 'مستشفيات JCI معتمدة' : isFr ? 'Hôpitaux JCI' : isRu ? 'Клиники JCI' : 'JCI Accredited'}</span>
                      <a href="${prefix}/treatments/${treat.slug}" class="font-bold text-teal-600 hover:text-teal-700">
                        ${isAr ? 'عرض التفاصيل ←' : isFr ? 'Voir les détails →' : isRu ? 'Подробнее →' : 'View Procedure →'}
                      </a>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Treatments Clinical SEO Overview Section -->
      <section class="py-16 lg:py-20 bg-slate-50/70 border-t border-slate-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
              ${treatmentsSeo.badge}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              ${treatmentsSeo.h2Title}
            </h2>
          </div>
          <div class="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed mb-16">
            ${treatmentsSeo.paragraphs.map(p => `<p class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">${p}</p>`).join('')}
          </div>

          <!-- Treatments FAQ Section -->
          <div class="pt-10 border-t border-slate-200">
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-8">
              ${treatmentsSeo.faqsTitle}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${treatmentsSeo.faqs.map(faq => `
                <article class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h4 class="text-sm sm:text-base font-bold text-slate-900 mb-2">${faq.question}</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${faq.answer}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Semantic Footer -->
    <footer class="bg-[#051714] text-slate-300 py-12 border-t border-teal-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs space-y-4">
        <p class="font-semibold text-slate-200">Nadwa Healthcare (NHC) • Official International Patient Coordination Desk</p>
        <p class="text-slate-400">Delhi NCR: New Delhi, Gurugram, Noida, Faridabad • 24/7 Helpline: +91 96485 78320 • info@nadwahealthcare.com</p>
        <p class="text-slate-500 text-[11px]">Comprehensive clinical procedures across JCI/NABH hospitals with 100% free second opinions and visa assistance.</p>
      </div>
    </footer>
  </div>`;
}



function getCriticalAboutHtml(lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';

  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';
  const breadcrumbAbout = isAr ? 'من نحن' : isFr ? 'À propos de nous' : isRu ? 'О нас' : 'About Us';
  const badgeText = isAr ? 'هدفنا والتزامنا تجاه المرضى' : isFr ? 'Notre mission et engagement patient' : isRu ? 'Наша миссия и забота о пациентах' : 'Our Purpose & Patient Commitment';
  const aboutTitle = isAr
    ? `عن <span class="text-teal-400">ندوة للرعاية الصحية (NHC)</span>`
    : isFr
    ? `À propos de <span class="text-teal-400">NadwaHealthcare (NHC)</span>`
    : isRu
    ? `О компании <span class="text-teal-400">NadwaHealthcare (NHC)</span>`
    : `About <span class="text-teal-400">NadwaHealthcare (NHC)</span>`;

  const aboutDesc = isAr
    ? 'تمكين المرضى الدوليين من الوصول الشفاف والمستقل للرعاية الصحية في دلهي إن سي آر والهند، مع مرافقة إنسانية متكاملة.'
    : isFr
    ? 'Faciliter l\'accès aux meilleurs hôpitaux de Delhi NCR avec une coordination médicale indépendante et un accompagnement éthique.'
    : isRu
    ? 'Организация лечения зарубежных пациентов в лучших аккредитованных клиниках Дели NCR с независимой координацией и заботой.'
    : 'Empowering international patients with transparent access, independent medical coordination, and compassionate bedside assistance across Delhi NCR and India.';

  const missionTitle = isAr ? 'رسالتنا' : isFr ? 'Notre Mission' : isRu ? 'Наша миссия' : 'Our Mission';
  const missionDesc = isAr
    ? 'تبسيط وتسهيل السفر الطبي للمرضى، وبناء جسر مباشر ومحايد بين المرضى حول العالم ونخبة الأطباء المعتمدين في الهند.'
    : isFr
    ? 'Simplifier le séjour médical international pour les patients nécessitant des soins complexes, avec transparence et bienveillance.'
    : isRu
    ? 'Сделать лечение в Индии доступным, понятным и комфортным, соединяя пациентов с ведущими профессорами и клиниками.'
    : 'To simplify and humanize international medical travel for patients facing complex health conditions. We provide direct, unbiased bridge-building between patients worldwide and India\'s premier accredited healthcare specialists.';

  const visionTitle = isAr ? 'رؤيتنا' : isFr ? 'Notre Vision' : isRu ? 'Наше видение' : 'Our Vision';
  const visionDesc = isAr
    ? 'أن نكون الشريك الأكثر موثوقية في توجيه وتنسيق الرعاية الصحية في الهند، بالمعايير الأخلاقية والشفافية التامة.'
    : isFr
    ? 'Être le partenaire de confiance numéro un pour l\'orientation médicale en Inde, reconnu pour son éthique et sa clarté.'
    : isRu
    ? 'Быть самым надежным партнером по медицинскому туризму в Индии с бескомпромиссными стандартами этики и открытости.'
    : 'To be the most trusted healthcare navigation partner in India, renowned for uncompromising ethical standards, clear pricing disclosure, multilingual empathy, and seamless coordination.';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/treatments" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-400 transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="bg-white min-h-screen">
        <section class="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-3 text-xs md:text-sm text-slate-300">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li>
                  <a href="${prefix || '/'}" class="flex items-center gap-1 text-slate-300 hover:text-teal-300 font-medium">
                    <span>${breadcrumbHome}</span>
                  </a>
                </li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-white" aria-current="page">${breadcrumbAbout}</span></li>
              </ol>
            </nav>
            <div class="mt-4 max-w-3xl">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                ${badgeText}
              </span>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                ${aboutTitle}
              </h1>
              <p class="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
                ${aboutDesc}
              </p>
            </div>
          </div>
        </section>
        <section class="py-16 sm:py-20 bg-white content-auto">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="bg-teal-50/50 rounded-3xl p-8 border border-teal-200 space-y-4">
                <div class="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle><circle cx="12" cy="12" r="6" stroke-width="2"></circle><circle cx="12" cy="12" r="2" stroke-width="2"></circle></svg>
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">${missionTitle}</h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${missionDesc}</p>
              </div>
              <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
                <div class="w-12 h-12 rounded-2xl bg-[#08221E] text-teal-400 flex items-center justify-center font-bold">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3" stroke-width="2"></circle></svg>
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">${visionTitle}</h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${visionDesc}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>`;
}

function getDoctorsExtraHtml(lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const searchPlaceholder = isAr ? 'ابحث عن طبيب بالاسم أو التخصص...' : isFr ? 'Rechercher un médecin par nom ou spécialité...' : isRu ? 'Поиск врача по имени или специальности...' : 'Search doctor by name or specialty...';
  const specialtyLabel = isAr ? 'التخصص:' : isFr ? 'Spécialité :' : isRu ? 'Специальность:' : 'Specialty:';
  const cityLabel = isAr ? 'المدينة:' : isFr ? 'Ville :' : isRu ? 'Город:' : 'City:';
  const allLabel = isAr ? 'الكل' : isFr ? 'Tous' : isRu ? 'Все' : 'All';
  const showingText = isAr ? 'عرض' : isFr ? 'Affichage de' : isRu ? 'Показано' : 'Showing';
  const doctorsCountText = isAr ? 'طبيب أخصائي معتمد' : isFr ? 'médecins spécialistes vérifiés' : isRu ? 'сертифицированных врачей' : 'verified specialist doctors';
  const accreditedText = isAr ? 'أطباء معتمدون NABH / JCI' : isFr ? 'Corps médical accrédité NABH / JCI' : isRu ? 'Врачи клиник NABH / JCI' : 'NABH / JCI Hospital Faculty';

  const drAnantDesc = isAr
    ? 'أحد أبرز جراحي المسالك البولية وزراعة الكلى في الهند مع أكثر من 3500 عملية زراعة كلى ناجحة.'
    : isFr
    ? 'L\'un des urologues et chirurgiens de greffe rénale les plus renommés en Inde avec plus de 3500 greffes.'
    : isRu
    ? 'Ведущий уролог и трансплантолог Индии: более 3500 пересадок почек и роботических операций.'
    : 'One of India\'s foremost urologists and kidney transplant surgeons. Performed over 3,500 kidney transplants with international acclaim.';
  const viewDoc = isAr ? 'الملف الشخصي' : isFr ? 'Voir profil' : isRu ? 'Профиль врача' : 'View Profile';
  const reqCons = isAr ? 'طلب استشارة' : isFr ? 'Consulter' : isRu ? 'Консультация' : 'Consult Doctor';

  return `
    <section class="py-8 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div class="relative w-full lg:w-96">
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke-width="2"></circle><path stroke-width="2" d="m21 21-4.3-4.3"></path></svg>
            <input type="text" placeholder="${searchPlaceholder}" class="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm bg-white" readonly />
          </div>
          <div class="flex items-center gap-2 w-full lg:w-auto">
            <span class="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
              <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path></svg>
              ${specialtyLabel}
            </span>
            <div class="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 bg-white">${allLabel}</div>
          </div>
          <div class="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span class="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
              <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3" stroke-width="2"></circle></svg>
              ${cityLabel}
            </span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#08221E] text-teal-300 shadow-sm">${allLabel}</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">New Delhi</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Gurugram</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Noida</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Faridabad</span>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8 lg:py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <p class="text-xs sm:text-sm text-slate-600">
            ${showingText} <strong class="text-slate-900">27</strong> ${doctorsCountText}
          </p>
          <div class="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path stroke-width="2" d="m9 12 2 2 4-4"></path></svg>
            <span>${accreditedText}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden">
            <div class="relative h-60 w-full overflow-hidden bg-slate-100 aspect-[5/6]">
              <img
                src="/images/doctors/dr-anant-kumar.webp"
                alt="Dr. Anant Kumar"
                width="400"
                height="480"
                loading="eager"
                decoding="sync"
                fetchpriority="high"
                class="w-full h-full object-cover object-top aspect-[5/6]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div class="absolute top-3 left-3 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                  New Delhi
                </span>
              </div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span class="flex items-center gap-1 font-medium text-slate-200 truncate">
                  Max Super Speciality Hospital, Saket
                </span>
                <span class="text-[11px] text-teal-200 bg-black/40 px-2 py-0.5 rounded font-bold shrink-0 ml-1">
                  36+ Yrs Exp
                </span>
              </div>
            </div>
            <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <a href="${prefix}/doctors/dr-anant-kumar">
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                    Dr. Anant Kumar
                  </h3>
                </a>
                <p class="mt-1 text-xs text-teal-700 font-semibold line-clamp-1">
                  Chairman - Urology, Renal Transplant & Robotics
                </p>
                <p class="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  ${drAnantDesc}
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a href="${prefix}/doctors/dr-anant-kumar" class="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700">
                  ${viewDoc}
                </a>
                <a href="${prefix}/doctors/dr-anant-kumar" class="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold shadow-sm">
                  <span>${reqCons}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function getHospitalsExtraHtml(lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const searchPlaceholder = isAr ? 'ابحث عن مستشفى بالاسم أو المدينة...' : isFr ? 'Rechercher un hôpital par nom ou ville...' : isRu ? 'Поиск клиники по названию или городу...' : 'Search hospital by name or city...';
  const cityLabel = isAr ? 'المدينة:' : isFr ? 'Ville :' : isRu ? 'Город:' : 'City:';
  const allLabel = isAr ? 'الكل' : isFr ? 'Tous' : isRu ? 'Все' : 'All';
  const showingText = isAr ? 'عرض' : isFr ? 'Affichage de' : isRu ? 'Показано' : 'Showing';
  const hospitalsCountText = isAr ? 'مستشفى معتمد شريك' : isFr ? 'hôpitaux partenaires accrédités' : isRu ? 'аккредитованных клиник-партнеров' : 'accredited partner hospitals';
  const accreditedText = isAr ? 'مستشفيات معتمدة JCI & NABH' : isFr ? 'Centres accrédités JCI & NABH' : isRu ? 'Клиники JCI и NABH' : 'JCI & NABH Accredited Centers';

  const sanarName = isAr ? 'مستشفيات سنار الدولية' : isFr ? 'Hôpitaux Internationaux Sanar' : isRu ? 'Международная клиника Санар' : 'Sanar International Hospitals';
  const sanarCity = isAr ? 'غوروغرام' : 'Gurugram';
  const featuredTag = isAr ? 'مركز متميز' : isFr ? 'Hub d\'excellence' : isRu ? 'Ведущий центр' : 'Featured Hub';
  const sanarBeds = isAr ? '+130 سرير (35 عناية مركزة)' : isFr ? '130+ lits (35 soins intensifs)' : isRu ? '130+ коек (35 реанимация)' : '130+ Beds (35 ICU Beds)';
  const sanarDist = isAr ? 'حوالي 18 كم من المطار' : isFr ? 'Env. 18 km aéroport' : isRu ? 'Прим. 18 км от аэропорта' : 'Approx. 18 km';
  const sanarDesc = isAr
    ? 'مستشفى رعاية رباعية متطور على طريق غولف كورس بغوروغرام، متخصص في زراعة الكبد والكلى ونخاع العظم والأورام.'
    : isFr
    ? 'Hôpital de soins quaternaires à Gurugram, spécialisé en greffes hépatiques et rénales, moëlle osseuse et neurochirurgie.'
    : isRu
    ? 'Ведущий центр четвертичного уровня: трансплантация органов, онкология, кардиохирургия и нейрохирургия.'
    : 'A premier quaternary care super-speciality hospital on Golf Course Road, Gurugram, specialized in complex liver and kidney transplants, bone marrow transplants, neurosciences, and advanced oncology.';
  const viewHosp = isAr ? 'عرض المستشفى' : isFr ? 'Voir l\'hôpital' : isRu ? 'О клинике' : 'View Hospital';
  const reqCare = isAr ? 'طلب رعاية' : isFr ? 'Demande de soins' : isRu ? 'Заявка' : 'Request Care';

  return `
    <section class="bg-teal-50 border-b border-teal-200/80 py-3.5 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div class="flex items-center gap-2 text-teal-950 font-medium">
          <span>Comparing accreditations, ICU safety standards, and DEL airport distances across Delhi NCR?</span>
        </div>
        <a
          href="${prefix}/blog/top-nabh-jci-accredited-hospitals-delhi-ncr"
          class="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4 shrink-0"
        >
          <span>Compare Top NABH & JCI Accredited Hospitals in Delhi NCR</span>
        </a>
      </div>
    </section>
    <section class="py-8 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div class="relative w-full lg:w-96">
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke-width="2"></circle><path stroke-width="2" d="m21 21-4.3-4.3"></path></svg>
            <input type="text" placeholder="${searchPlaceholder}" class="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm bg-white" readonly />
          </div>
          <div class="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span class="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
              <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3" stroke-width="2"></circle></svg>
              ${cityLabel}
            </span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#08221E] text-teal-300 shadow-sm">${allLabel}</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">New Delhi</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Gurugram</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Noida</span>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">Faridabad</span>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8 lg:py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <p class="text-xs sm:text-sm text-slate-600">
            ${showingText} <strong class="text-slate-900">10</strong> ${hospitalsCountText}
          </p>
          <div class="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path stroke-width="2" d="m9 12 2 2 4-4"></path></svg>
            <span>${accreditedText}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="group bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col overflow-hidden">
            <div class="relative h-52 w-full overflow-hidden bg-slate-100 aspect-[16/9]">
              <img
                src="/images/hospitals/sanar-international-hospital.webp"
                alt="${sanarName}"
                width="600"
                height="320"
                loading="eager"
                decoding="sync"
                fetchpriority="high"
                class="w-full h-full object-cover aspect-[16/9]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute top-3 left-3 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 text-teal-300 border border-teal-500/30">
                  ${sanarCity}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-600 hover:bg-teal-700 text-white">
                  ${featuredTag}
                </span>
              </div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span class="flex items-center gap-1 font-medium text-slate-200">
                  <svg class="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path></svg>
                  ${sanarBeds}
                </span>
                <span class="text-[11px] text-teal-200 bg-black/40 px-2 py-0.5 rounded">
                  ${sanarDist}
                </span>
              </div>
            </div>
            <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap gap-1.5 mb-2.5">
                  <span class="inline-flex items-center gap-1 text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path stroke-width="2" d="m9 12 2 2 4-4"></path></svg>
                    NABH Certified
                  </span>
                  <span class="inline-flex items-center gap-1 text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path stroke-width="2" d="m9 12 2 2 4-4"></path></svg>
                    NABL Accredited
                  </span>
                </div>
                <a href="${prefix}/hospitals/sanar-international-hospital">
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                    ${sanarName}
                  </h3>
                </a>
                <p class="mt-1 text-xs text-slate-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3" stroke-width="2"></circle></svg>
                  <span class="truncate">Golf Course Road, Sector 53, Gurugram</span>
                </p>
                <p class="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  ${sanarDesc}
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a href="${prefix}/hospitals/sanar-international-hospital" class="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700">
                  ${viewHosp}
                </a>
                <a href="${prefix}/hospitals/sanar-international-hospital" class="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold shadow-sm">
                  <span>${reqCare}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function getCriticalPageHeaderHtml(
  lang: 'en' | 'ar' | 'fr' | 'ru',
  breadcrumbLabel: string,
  badgeText: string,
  titleHtml: string,
  descText: string,
  extraContentHtml: string = ''
): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/treatments" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-400 transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="bg-white min-h-screen">
        <section class="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-3 text-xs md:text-sm text-slate-300">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li>
                  <a href="${prefix || '/'}" class="flex items-center gap-1 text-slate-300 hover:text-teal-300 font-medium">
                    <span>${breadcrumbHome}</span>
                  </a>
                </li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-white" aria-current="page">${breadcrumbLabel}</span></li>
              </ol>
            </nav>
            <div class="mt-4 max-w-3xl">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
                ${badgeText}
              </span>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                ${titleHtml}
              </h1>
              <p class="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
                ${descText}
              </p>
            </div>
          </div>
        </section>
        ${extraContentHtml}
      </div>
    </main>
  </div>`;
}

function getCriticalTreatmentDetailsHtml(treat: any, lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const loc = getLocalizedTreatment(treat, lang);
  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';
  const breadcrumbTreatments = isAr ? 'العلاجات' : isFr ? 'Soins' : isRu ? 'Лечение' : 'Treatments';
  const inIndiaSuffix = isAr ? 'في الهند' : isFr ? 'en Inde' : isRu ? 'в Индии' : 'in India';
  const getEstimateText = isAr ? 'احصل على تقدير التكلفة' : isFr ? 'Estimation de coût' : isRu ? 'Расчет стоимости' : 'Get Treatment Estimate';
  const waDeskText = isAr ? 'مكتب واتساب' : isFr ? 'Bureau WhatsApp' : isRu ? 'WhatsApp отдел' : 'WhatsApp Desk';
  const recStayLabel = isAr ? 'الإقامة المقترحة:' : isFr ? 'Séjour recommandé :' : isRu ? 'Срок пребывания:' : 'Recommended Stay:';
  const recoveryLabel = isAr ? 'التعافي:' : isFr ? 'Récupération :' : isRu ? 'Восстановление:' : 'Recovery:';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/treatments" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-400 transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="bg-white min-h-screen">
        <section class="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-3 text-xs md:text-sm text-slate-300">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li><a href="${prefix || '/'}" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbHome}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><a href="${prefix}/treatments" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbTreatments}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-white" aria-current="page">${loc.title}</span></li>
              </ol>
            </nav>
            <div class="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white inline-block mb-2">
                  ${loc.badge}
                </span>
                <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${loc.title} ${inIndiaSuffix}
                </h1>
                <p class="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  ${loc.shortDesc}
                </p>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <a href="${prefix}/treatments" class="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25">
                  ${getEstimateText}
                </a>
                <span class="px-5 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>${waDeskText}</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 lg:py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div class="lg:col-span-2 space-y-12">
                <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80 relative aspect-[5/2]">
                  <img
                    src="${treat.image}"
                    alt="${loc.title}"
                    width="800"
                    height="320"
                    loading="eager"
                    fetchpriority="high"
                    decoding="sync"
                    class="w-full h-full object-cover aspect-[5/2]"
                  />
                  <div class="absolute bottom-4 left-4 right-4 bg-[#08221E]/90 p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-white text-xs">
                    <span class="flex items-center gap-2 font-bold text-teal-300">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle><polyline points="12 6 12 12 16 14" stroke-width="2"></polyline></svg>
                      <span>${recStayLabel} ${loc.recommendedStay}</span>
                    </span>
                    <span class="text-slate-200">
                      ${recoveryLabel} ${loc.recoveryTimeline || treat.recoveryTimeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>`;
}

function getCriticalDoctorDetailsHtml(doc: any, lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const loc = getLocalizedDoctor(doc, lang);
  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';
  const breadcrumbDoctors = isAr ? 'الأطباء' : isFr ? 'Médecins' : isRu ? 'Врачи' : 'Doctors';
  const consultButton = isAr ? 'استشر الأخصائي' : isFr ? 'Consulter le spécialiste' : isRu ? 'Консультация врача' : 'Consult Specialist';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/doctors" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-400 transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="bg-white min-h-screen">
        <section class="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-3 text-xs md:text-sm text-slate-300">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li><a href="${prefix || '/'}" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbHome}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><a href="${prefix}/doctors" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbDoctors}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-white" aria-current="page">${doc.name}</span></li>
              </ol>
            </nav>
            <div class="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white inline-block mb-2">
                  ${loc.specialty}
                </span>
                <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${doc.name}
                </h1>
                <p class="mt-2 text-xs sm:text-sm text-teal-300 font-medium">
                  ${loc.designation}
                </p>
                <p class="mt-1 text-xs text-slate-300 flex items-center gap-2">
                  <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path></svg>
                  <span>${doc.hospitalName} (${loc.city})</span>
                </p>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <a href="${prefix}/doctors" class="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25">
                  ${consultButton}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 lg:py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div class="lg:col-span-2 space-y-10">
                <div class="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <img
                    src="${doc.image}"
                    alt="${doc.name}"
                    width="160"
                    height="160"
                    loading="eager"
                    fetchpriority="high"
                    decoding="sync"
                    class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover object-top border-2 border-white shadow-md shrink-0 mx-auto sm:mx-0 aspect-square"
                  />
                  <div class="space-y-3 flex-1 text-center sm:text-left">
                    <h3 class="text-lg font-bold text-slate-900">${doc.name}</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">${doc.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>`;
}

function getCriticalHospitalDetailsHtml(hosp: any, lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const loc = getLocalizedHospital(hosp, lang);
  const localizedName = getLocalizedHospitalName(hosp.name, lang);
  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';
  const breadcrumbHospitals = isAr ? 'المستشفيات' : isFr ? 'Hôpitaux' : isRu ? 'Клиники' : 'Hospitals';
  const requestCare = isAr ? 'طلب المساعدة في المستشفى' : isFr ? "Demande d'assistance hospitalière" : isRu ? 'Запросить лечение в этой клинике' : 'Request Hospital Assistance';
  const waDeskText = isAr ? 'مكتب واتساب' : isFr ? 'Bureau WhatsApp' : isRu ? 'WhatsApp отдел' : 'WhatsApp Desk';
  const hubSuffix = isAr ? 'مركز' : isFr ? 'Pôle' : isRu ? 'Медицинский центр' : 'Hub';
  const capacityLabel = isAr ? 'سعة المستشفى:' : isFr ? 'Capacité :' : isRu ? 'Коечный фонд:' : 'Capacity:';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/hospitals" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-400 transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="bg-white min-h-screen">
        <section class="bg-[#08221E] text-white py-10 lg:py-14 bg-dark-dots border-b border-teal-900/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-3 text-xs md:text-sm text-slate-300">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li><a href="${prefix || '/'}" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbHome}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><a href="${prefix}/hospitals" class="text-slate-300 hover:text-teal-300 font-medium">${breadcrumbHospitals}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-white" aria-current="page">${localizedName}</span></li>
              </ol>
            </nav>
            <div class="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white">
                    ${loc.city} ${hubSuffix}
                  </span>
                  <span class="text-xs text-teal-300 font-semibold bg-teal-900/60 px-3 py-1 rounded-full border border-teal-800">
                    ${hosp.hospitalType}
                  </span>
                </div>
                <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${localizedName}
                </h1>
                <p class="mt-2 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                  <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
                  <span>${hosp.locationDetail}</span>
                </p>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <a href="${prefix}/hospitals" class="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-600/25">
                  ${requestCare}
                </a>
                <span class="px-5 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>${waDeskText}</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 lg:py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div class="lg:col-span-2 space-y-10">
                <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-96 relative aspect-[16/9]">
                  <img
                    src="${hosp.image}"
                    alt="${localizedName}"
                    width="800"
                    height="450"
                    loading="eager"
                    fetchpriority="high"
                    decoding="sync"
                    class="w-full h-full object-cover aspect-[16/9]"
                  />
                  <div class="absolute bottom-4 left-4 right-4 bg-[#08221E]/90 p-3 rounded-2xl flex items-center justify-between text-white text-xs">
                    <span class="flex items-center gap-1.5 font-bold">
                      <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path></svg>
                      <span>${capacityLabel} ${loc.bedCapacity}</span>
                    </span>
                    <span class="flex items-center gap-1.5 text-teal-300">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="m2 12 20-9-9 20-2-9-9-2Z"></path></svg>
                      <span>${loc.distanceFromAirport}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>`;
}

function getCriticalBlogDetailsHtml(blog: any, lang: 'en' | 'ar' | 'fr' | 'ru'): string {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  const isRu = lang === 'ru';
  const prefix = isAr ? '/ar' : isFr ? '/fr' : isRu ? '/ru' : '';

  const loc = getLocalizedBlog(blog, lang);
  const deskTitle = isAr ? 'مكتب السياحة العلاجية' : isFr ? 'Bureau tourisme médical' : isRu ? 'Международный отдел' : 'Medical Tourism Desk';
  const emergencyText = isAr ? 'مكتب الطوارئ 24/7: <bdi dir="ltr">+91 96485 78320</bdi>' : isFr ? 'Urgences 24/7 : +91 96485 78320' : isRu ? 'Экстренно 24/7: +91 96485 78320' : 'Emergency 24/7: +91 96485 78320';
  const ctaConsult = isAr ? 'استشارة مجانية' : isFr ? 'Consultation' : isRu ? 'Консультация' : 'Get Free Consultation';
  const breadcrumbHome = isAr ? 'الرئيسية' : isFr ? 'Accueil' : isRu ? 'Главная' : 'Home';
  const breadcrumbBlog = isAr ? 'المدونة' : isFr ? 'Blog' : isRu ? 'Блог' : 'Blog';
  const publishedText = isAr ? 'تاريخ النشر' : isFr ? 'Publié le' : isRu ? 'Опубликовано' : 'Published';
  const faqTitle = isAr ? 'الأسئلة الشائعة' : isFr ? 'Foire Aux Questions (FAQ)' : isRu ? 'Часто задаваемые вопросы (FAQ)' : 'Frequently Asked Questions (FAQs)';

  return `
  <div class="min-h-screen flex flex-col bg-white">
    <div class="relative z-50 bg-[#051714] text-slate-300 text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-teal-950/80">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-1">
        <div class="flex items-center gap-3 shrink-0">
          <span class="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${deskTitle}
          </span>
          <span class="hidden md:inline text-slate-400">|</span>
          <a href="tel:+919648578320" class="hover:text-teal-300 transition-colors">${emergencyText}</a>
        </div>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-[#08221E] border-b border-teal-900/60 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="${prefix || '/'}" class="flex items-center gap-2 sm:gap-2.5">
            <span class="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 font-black text-xs">NHC</span>
            <span class="text-base sm:text-xl font-black text-white tracking-tight">Nadwa <span class="text-teal-400">Healthcare</span></span>
          </a>
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href="${prefix}/contact" class="px-3.5 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors">
              ${ctaConsult}
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <article class="bg-white min-h-screen">
        <header class="bg-slate-50/80 border-b border-slate-200/90 py-8 lg:py-10 text-start">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" class="py-2 text-xs md:text-sm text-slate-500">
              <ol class="flex items-center flex-wrap gap-1.5">
                <li><a href="${prefix || '/'}" class="hover:text-teal-700 font-medium">${breadcrumbHome}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><a href="${prefix}/blog" class="hover:text-teal-700 font-medium">${breadcrumbBlog}</a></li>
                <li><span class="text-slate-400">/</span></li>
                <li><span class="font-semibold text-slate-800" aria-current="page">${escapeHtml(loc.badge || blog.badge)}</span></li>
              </ol>
            </nav>
            <div class="mt-4 max-w-4xl">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-900 border border-teal-200">
                  ${escapeHtml(loc.category || blog.category)}
                </span>
                <span class="text-xs text-slate-500 font-medium">
                  ${loc.readingTime || blog.readingTime}
                </span>
              </div>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                ${escapeHtml(loc.h1Title)}
              </h1>
              <p class="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                ${escapeHtml(loc.summary || blog.summary)}
              </p>
              <div class="mt-4 text-xs text-slate-500">
                <span>${publishedText}: ${blog.publishDate}</span> • <span>${blog.author}</span>
              </div>
            </div>
          </div>
        </header>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div class="max-w-4xl">
            <div class="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9]">
              <img
                src="${blog.coverImage}"
                alt="${escapeHtml(loc.h1Title)}"
                width="1200"
                height="675"
                class="w-full h-full object-cover aspect-[16/9]"
                loading="eager"
              />
            </div>

            <!-- Blog Content Sections -->
            ${(loc.sections || blog.sections || []).map((sec: any) => `
              <section class="mb-10 text-start">
                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  ${escapeHtml(sec.h2)}
                </h2>
                ${(sec.paragraphs || []).map((p: string) => `
                  <p class="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    ${escapeHtml(p)}
                  </p>
                `).join('')}

                ${sec.hospitalTable && sec.hospitalTable.length > 0 ? `
                  <div class="my-6 overflow-hidden rounded-xl border border-slate-200">
                    <table class="w-full text-start border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                          <th class="py-2.5 px-3 text-start">Hospital Name</th>
                          <th class="py-2.5 px-3 text-start">Location</th>
                          <th class="py-2.5 px-3 text-start">Accreditations</th>
                          <th class="py-2.5 px-3 text-start">Flagship Specialties</th>
                          <th class="py-2.5 px-3 text-start text-teal-800">Distance DEL Airport</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100">
                        ${sec.hospitalTable.map((hRow: any) => `
                          <tr>
                            <td class="py-2.5 px-3 font-bold text-slate-900">${escapeHtml(hRow.hospitalName)}</td>
                            <td class="py-2.5 px-3 text-slate-600">${escapeHtml(hRow.location)}</td>
                            <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-bold text-[11px]">${escapeHtml(hRow.accreditations)}</span></td>
                            <td class="py-2.5 px-3 text-slate-700">${escapeHtml(hRow.specialties)}</td>
                            <td class="py-2.5 px-3 font-semibold text-teal-700">${escapeHtml(hRow.distanceAirport)}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}

                ${sec.costTable && sec.costTable.length > 0 ? `
                  <div class="my-6 overflow-hidden rounded-xl border border-slate-200">
                    <table class="w-full text-start border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                          <th class="py-2.5 px-3 text-start">Procedure</th>
                          <th class="py-2.5 px-3 text-start text-teal-800">India Cost (Package)</th>
                          <th class="py-2.5 px-3 text-start text-slate-500">Western Benchmark</th>
                          <th class="py-2.5 px-3 text-start text-emerald-700">Savings</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100">
                        ${sec.costTable.map((cRow: any) => `
                          <tr>
                            <td class="py-2.5 px-3 font-bold text-slate-900">${escapeHtml(cRow.procedure)}</td>
                            <td class="py-2.5 px-3 font-bold text-teal-700">${escapeHtml(cRow.indiaCostUsd)}</td>
                            <td class="py-2.5 px-3 text-slate-400 line-through">${escapeHtml(cRow.westernCostUsd)}</td>
                            <td class="py-2.5 px-3 text-emerald-700 font-bold">${escapeHtml(cRow.savingsPercentage)}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}

                ${sec.bulletPoints && sec.bulletPoints.length > 0 ? `
                  <ul class="mt-4 space-y-2">
                    ${sec.bulletPoints.map((bp: string) => `
                      <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span class="text-teal-600 font-bold">•</span>
                        <span>${escapeHtml(bp)}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}

                ${sec.h3List && sec.h3List.length > 0 ? sec.h3List.map((h3: any) => `
                  <div class="mt-6 pl-4 border-l-2 border-teal-500 space-y-2">
                    <h3 class="text-base sm:text-lg font-bold text-slate-900">${escapeHtml(h3.h3)}</h3>
                    ${(h3.paragraphs || []).map((p: string) => `
                      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${escapeHtml(p)}</p>
                    `).join('')}
                  </div>
                `).join('') : ''}

                ${sec.callout ? `
                  <div class="mt-6 p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs sm:text-sm font-medium">
                    ${escapeHtml(sec.callout)}
                  </div>
                ` : ''}
              </section>
            `).join('')}

            <!-- FAQs Section -->
            ${(loc.faqs || blog.faqs || []).length > 0 ? `
              <section class="my-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-start">
                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  ${faqTitle}
                </h2>
                <div class="space-y-6">
                  ${(loc.faqs || blog.faqs || []).map((f: any) => `
                    <div class="border-b border-slate-200/80 pb-4 last:border-0 last:pb-0">
                      <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                        ${escapeHtml(f.question)}
                      </h3>
                      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        ${escapeHtml(f.answer)}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            <!-- Consultation Banner -->
            <section class="my-10 p-6 sm:p-8 rounded-3xl bg-[#08221E] text-white text-center">
              <h2 class="text-xl sm:text-2xl font-black mb-3">
                ${isAr ? 'احصل على رأي طبي وتقدير تكلفة مجاناً' : isFr ? 'Obtenez un avis médical et un devis gratuits' : isRu ? 'Бесплатное медицинское заключение и расчет стоимости' : 'Get a Free Medical Opinion & Itemized Cost Estimate'}
              </h2>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
                ${isAr ? 'شارك تقاريرك الطبية مع فريقنا الطبي المعتمد في دلهي إن سي آر وتلقى خطة علاج تفصيلية وتأشيرة علاجية خلال 24-48 ساعة.' : isFr ? 'Envoyez vos rapports médicaux pour recevoir sous 24 à 48h les avis des chefs de service et une lettre d\'invitation visa.' : isRu ? 'Отправьте медицинские выписки для получения планов лечения от ведущих профессоров Дели и визового приглашения.' : 'Share your medical records with our medical board to receive treatment plans from 2-3 senior hospital chairs and official Visa Invitation Letters within 24-48 hours.'}
              </p>
              <div class="flex flex-wrap items-center justify-center gap-3">
                <a href="${prefix}/contact" class="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-600/30">
                  ${ctaConsult}
                </a>
                <a href="https://wa.me/919648578320" class="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm">
                  WhatsApp (+91 96485 78320)
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  </div>`;
}

function renderHtml(templateHtml: string, meta: PageMetadata): string {
  let html = templateHtml;

  // Language & Direction attributes
  const lang = meta.lang || (meta.route.startsWith('/ar') ? 'ar' : meta.route.startsWith('/fr') ? 'fr' : meta.route.startsWith('/ru') ? 'ru' : 'en');
  const dir = meta.dir || (lang === 'ar' ? 'rtl' : 'ltr');

  html = html.replace(/<html\b[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);

  // 1. Replace Title (guaranteed <= 60 characters for SEO / Semrush)
  let finalTitle = escapeHtml(meta.title);
  if (finalTitle.length > 60) {
    finalTitle = finalTitle.slice(0, 60).replace(/&[a-z0-9#]*$/i, '').trim();
  }
  html = html.replace(/<title>.*?<\/title>/is, `<title>${finalTitle}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/is,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  // 3. Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/is,
    `<link rel="canonical" href="${meta.canonicalUrl}" />`
  );

  // 4. Replace OG Title and Twitter Title
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/is,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/is,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );

  // 5. Replace OG Description and Twitter Description
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/is,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/is,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );

  // 6. Replace OG URL
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/is,
    `<meta property="og:url" content="${meta.canonicalUrl}" />`
  );

  // 7. Replace OG Image if provided
  if (meta.ogImage) {
    const fullOgImage = meta.ogImage.startsWith('http')
      ? meta.ogImage
      : `https://www.nadwahealthcare.com${meta.ogImage.startsWith('/') ? meta.ogImage : '/' + meta.ogImage}`;
    html = html.replace(
      /<meta property="og:image" content=".*?" \/>/is,
      `<meta property="og:image" content="${fullOgImage}" />`
    );
    html = html.replace(
      /<meta property="og:image:secure_url" content=".*?" \/>/is,
      `<meta property="og:image:secure_url" content="${fullOgImage}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?" \/>/is,
      `<meta name="twitter:image" content="${fullOgImage}" />`
    );
    const imgType = fullOgImage.endsWith('.webp') ? 'image/webp' : fullOgImage.endsWith('.png') ? 'image/png' : 'image/jpeg';
    html = html.replace(
      /<meta property="og:image:type" content=".*?" \/>/is,
      `<meta property="og:image:type" content="${imgType}" />`
    );
  }

  // 8. Inject International Hreflang Tags
  // Remove any static homepage hreflang tags from template to avoid duplicates
  html = html.replace(/<!-- Google Multilingual Hreflang Tags -->[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*\/?>\s*/gi, '');

  const cleanRoute = meta.route.replace(/^\/(ar|fr|ru)(\/|$)/, '/');
  const normalizedRoute = cleanRoute === '/' ? '' : cleanRoute;
  const domain = 'https://www.nadwahealthcare.com';

  const hreflangTags = [
    `<!-- Google Multilingual Hreflang Tags -->`,
    `<link rel="alternate" hreflang="en" href="${domain}${normalizedRoute || '/'}" />`,
    `<link rel="alternate" hreflang="ar" href="${domain}/ar${normalizedRoute}" />`,
    `<link rel="alternate" hreflang="fr" href="${domain}/fr${normalizedRoute}" />`,
    `<link rel="alternate" hreflang="ru" href="${domain}/ru${normalizedRoute}" />`,
    `<link rel="alternate" hreflang="x-default" href="${domain}${normalizedRoute || '/'}" />`
  ].join('\n    ');

  // 9. Inject Page-Specific Structured Data Schema
  let schemaScript = '';
  if (meta.schema) {
    schemaScript = `\n    <!-- Page Specific Structured Data -->\n    <script type="application/ld+json">\n${JSON.stringify(meta.schema, null, 2)}\n    </script>`;
  }

  html = html.replace('</head>', `    ${hreflangTags}${schemaScript}\n  </head>`);

  // 10. Inject critical initial HTML & Top-of-Head Preload (Instantly eliminates LCP delay, FCP white screen & CLS)
  const cleanRoutePrefix = meta.route.replace(/^\/(ar|fr|ru)(\/|$)/, '/');

  const injectEarlyPreload = (preloadTag: string) => {
    html = html.replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      `<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    ${preloadTag}`
    );
  };

  if (cleanRoutePrefix === '/') {
    const criticalHtml = getCriticalHomeHtml(lang as 'en' | 'ar' | 'fr' | 'ru');
    html = html.replace('<div id="root"></div>', `<div id="root">${criticalHtml}</div>`);
  } else if (cleanRoutePrefix === '/about') {
    const criticalAboutHtml = getCriticalAboutHtml(lang as 'en' | 'ar' | 'fr' | 'ru');
    html = html.replace('<div id="root"></div>', `<div id="root">${criticalAboutHtml}</div>`);
  } else if (cleanRoutePrefix === '/doctors') {
    const bLabel = lang === 'ar' ? 'الأطباء' : lang === 'fr' ? 'Médecins' : lang === 'ru' ? 'Врачи' : 'Doctors';
    const bBadge = lang === 'ar' ? 'نخبة من كبار الأطباء الجراحين' : lang === 'fr' ? 'Médecins experts vérifiés' : lang === 'ru' ? 'Ведущие врачи и профессора' : 'Verified Medical Leaders';
    const bTitle = lang === 'ar'
      ? `أفضل الأطباء والجراحين الاستشاريين في <span class="text-teal-400">الهند</span>`
      : lang === 'fr'
      ? `Meilleurs médecins spécialistes et chirurgiens en <span class="text-teal-400">Inde</span>`
      : lang === 'ru'
      ? `Ведущие врачи-специалисты и хирурги في <span class="text-teal-400">Индии</span>`
      : `Leading Medical Specialists in <span class="text-teal-400">India</span>`;
    const bDesc = lang === 'ar'
      ? 'تواصل مع كبار الجراحين ورؤساء الأقسام الطبية في أشهر مستشفيات دلهي إن سي آر، مع مراجعة السير المهنية وطلب استشارات موثقة.'
      : lang === 'fr'
      ? 'Consultez les meilleurs chirurgiens et chefs de département des hôpitaux accrédités de Delhi NCR.'
      : lang === 'ru'
      ? 'Консультации с ведущими хирургами и заведующими отделениями лучших клиник Дели NCR с подтвержденным клиническим опытом.'
      : 'Connect with senior clinicians, robotic surgeons, and department chairs practicing across premier Delhi NCR hospitals. Review verified clinical backgrounds and request direct consultation opinions.';
    injectEarlyPreload(`<link rel="preload" as="image" href="/images/doctors/dr-anant-kumar.webp" type="image/webp" fetchpriority="high" />`);
    const doctorsExtra = getDoctorsExtraHtml(lang as 'en' | 'ar' | 'fr' | 'ru');
    const criticalDoctorsHtml = getCriticalPageHeaderHtml(lang as 'en' | 'ar' | 'fr' | 'ru', bLabel, bBadge, bTitle, bDesc, doctorsExtra);
    html = html.replace('<div id="root"></div>', `<div id="root">${criticalDoctorsHtml}</div>`);
  } else if (cleanRoutePrefix === '/hospitals') {
    const bLabel = lang === 'ar' ? 'المستشفيات' : lang === 'fr' ? 'Hôpitaux' : lang === 'ru' ? 'Клиники' : 'Hospitals';
    const bBadge = lang === 'ar' ? 'مستشفيات معتمدة دولياً' : lang === 'fr' ? 'Hôpitaux accrédités JCI & NABH' : lang === 'ru' ? 'Аккредитованные клиники JCI' : 'JCI & NABH Accredited Centers';
    const bTitle = lang === 'ar'
      ? `أفضل المستشفيات المعتمدة في <span class="text-teal-400">دلهي إن سي آر، الهند</span>`
      : lang === 'fr'
      ? `Meilleurs hôpitaux accrédités à <span class="text-teal-400">Delhi NCR, Inde</span>`
      : lang === 'ru'
      ? `Лучшие аккредитованные клиники в <span class="text-teal-400">Дели NCR, Индия</span>`
      : `Top Accredited Hospitals in <span class="text-teal-400">Delhi NCR, India</span>`;
    const bDesc = lang === 'ar'
      ? 'وصول مباشر لأكبر الصروح الطبية التخصصية المجهزة بأحدث تقنيات الجراحة الروبوتية والإشعاعية.'
      : lang === 'fr'
      ? 'Accès direct aux meilleurs centres de soins multispécialités équipés des dernières technologies robotiques.'
      : lang === 'ru'
      ? 'Прямой доступ к ведущим многопрофильным клиникам, оснащенным передовыми роботизированными технологиями.'
      : 'Direct access to premier multi-specialty quaternary care centers equipped with advanced robotic and surgical technologies.';
    injectEarlyPreload(`<link rel="preload" as="image" href="/images/hospitals/sanar-international-hospital.webp" type="image/webp" fetchpriority="high" />`);
    const hospitalsExtra = getHospitalsExtraHtml(lang as 'en' | 'ar' | 'fr' | 'ru');
    const criticalHospitalsHtml = getCriticalPageHeaderHtml(lang as 'en' | 'ar' | 'fr' | 'ru', bLabel, bBadge, bTitle, bDesc, hospitalsExtra);
    html = html.replace('<div id="root"></div>', `<div id="root">${criticalHospitalsHtml}</div>`);
  } else if (cleanRoutePrefix === '/treatments') {
    const criticalTreatmentsHtml = getCriticalTreatmentsHtml(lang as 'en' | 'ar' | 'fr' | 'ru');
    html = html.replace('<div id="root"></div>', `<div id="root">${criticalTreatmentsHtml}</div>`);
  } else if (cleanRoutePrefix.startsWith('/treatments/')) {
    const slug = cleanRoutePrefix.replace('/treatments/', '');
    const treat = treatmentsData.find(t => t.slug === slug);
    if (treat) {
      injectEarlyPreload(`<link rel="preload" as="image" href="${treat.image}" type="image/webp" fetchpriority="high" />`);
      const criticalHtml = getCriticalTreatmentDetailsHtml(treat, lang as 'en' | 'ar' | 'fr' | 'ru');
      html = html.replace('<div id="root"></div>', `<div id="root">${criticalHtml}</div>`);
    }
  } else if (cleanRoutePrefix.startsWith('/doctors/')) {
    const slug = cleanRoutePrefix.replace('/doctors/', '');
    const doc = doctorsData.find(d => d.slug === slug);
    if (doc) {
      injectEarlyPreload(`<link rel="preload" as="image" href="${doc.image}" type="image/webp" fetchpriority="high" />`);
      const criticalHtml = getCriticalDoctorDetailsHtml(doc, lang as 'en' | 'ar' | 'fr' | 'ru');
      html = html.replace('<div id="root"></div>', `<div id="root">${criticalHtml}</div>`);
    }
  } else if (cleanRoutePrefix.startsWith('/hospitals/')) {
    const slug = cleanRoutePrefix.replace('/hospitals/', '');
    const hosp = hospitalsData.find(h => h.slug === slug);
    if (hosp) {
      injectEarlyPreload(`<link rel="preload" as="image" href="${hosp.image}" type="image/webp" fetchpriority="high" />`);
      const criticalHtml = getCriticalHospitalDetailsHtml(hosp, lang as 'en' | 'ar' | 'fr' | 'ru');
      html = html.replace('<div id="root"></div>', `<div id="root">${criticalHtml}</div>`);
    }
  } else if (cleanRoutePrefix.startsWith('/blog/')) {
    const slug = cleanRoutePrefix.replace('/blog/', '');
    const blog = blogsData.find(b => b.slug === slug);
    if (blog) {
      injectEarlyPreload(`<link rel="preload" as="image" href="${blog.coverImage}" type="image/webp" fetchpriority="high" />`);
      const criticalHtml = getCriticalBlogDetailsHtml(blog, lang as 'en' | 'ar' | 'fr' | 'ru');
      html = html.replace('<div id="root"></div>', `<div id="root">${criticalHtml}</div>`);
    }
  }

  return html;
}

export function prerenderSSGPlugin(): Plugin {
  return {
    name: 'vite-plugin-prerender-ssg',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.warn('[SSG] dist/index.html not found, skipping pre-rendering.');
        return;
      }

      let templateHtml = fs.readFileSync(indexPath, 'utf-8');

      const pages: PageMetadata[] = [];

      // A. English Root Pages
      pages.push(
        {
          route: '/',
          title: 'Nadwa Healthcare | Medical Tourism and Doctors in India',
          description: 'Connect with India\'s premier JCI & NABH accredited hospitals and leading specialist doctors across Delhi NCR with Nadwa Healthcare. 100% free medical visa invitation assistance.',
          canonicalUrl: 'https://www.nadwahealthcare.com/',
          lang: 'en',
          dir: 'ltr'
        },
        {
          route: '/doctors',
          title: 'Best Doctors and Top Surgeons in India | Nadwa Healthcare',
          description: 'Consult renowned surgeons, cardiologists, oncologists, and organ transplant specialists across premier JCI & NABH accredited hospitals in Delhi NCR. 100% free medical visa invitation assistance.',
          canonicalUrl: 'https://www.nadwahealthcare.com/doctors'
        },
        {
          route: '/hospitals',
          title: 'Top JCI and NABH Hospitals in Delhi NCR | Nadwa',
          description: 'Discover premier multi-specialty hospitals in Delhi NCR including Medanta, Apollo, Fortis, and Max. Get zero-fee hospital coordination.',
          canonicalUrl: 'https://www.nadwahealthcare.com/hospitals'
        },
        {
          route: '/treatments',
          title: 'World-Class Medical Treatments in India | Nadwa Healthcare',
          description: 'Explore advanced treatments in India across cardiology, oncology, orthopedics, neurosurgery, and IVF at JCI-accredited hospitals.',
          canonicalUrl: 'https://www.nadwahealthcare.com/treatments'
        },
        {
          route: '/blog',
          title: 'Medical Tourism and Surgery Cost Guides | Nadwa',
          description: 'Authoritative guides on medical tourism in India, surgery cost comparisons, medical visa application steps, and patient recovery journeys for international medical travelers.',
          canonicalUrl: 'https://www.nadwahealthcare.com/blog'
        },
        {
          route: '/services',
          title: 'International Patient Services | Nadwa Healthcare',
          description: 'End-to-end medical tourism support: free hospital opinions, doctor video consults, official hospital visa invitation letters (VIL) in 24-48 hrs, airport transfers, and translation.',
          canonicalUrl: 'https://www.nadwahealthcare.com/services'
        },
        {
          route: '/patient-stories',
          title: 'International Patient Success Stories | Nadwa Healthcare',
          description: 'Read real medical journey stories and reviews from patients worldwide who received successful treatment across top Delhi NCR hospitals with Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/patient-stories'
        },
        {
          route: '/about',
          title: 'About Nadwa Healthcare | Medical Tourism Partner in India',
          description: 'Nadwa Healthcare empowers patients from the Middle East, CIS, Africa, and Western nations to access world-class quaternary hospitals in Delhi NCR with zero coordination fees.',
          canonicalUrl: 'https://www.nadwahealthcare.com/about'
        },
        {
          route: '/contact',
          title: 'Contact 24/7 International Patient Desk | Nadwa Healthcare',
          description: 'Reach Nadwa Healthcare 24/7 International Desk via WhatsApp (+91 96485 78320) or email info@nadwahealthcare.com for immediate medical opinion, cost estimate, and visa letter.',
          canonicalUrl: 'https://www.nadwahealthcare.com/contact'
        },
        {
          route: '/faqs',
          title: 'Medical Tourism in India FAQs | Nadwa Healthcare Answers',
          description: 'Clear answers to common questions about Indian medical visas, hospital admissions, treatment costs, and post-surgery travel clearances for foreign patients.',
          canonicalUrl: 'https://www.nadwahealthcare.com/faqs'
        },
        {
          route: '/privacy-policy',
          title: 'Privacy Policy | Nadwa Healthcare',
          description: 'Privacy Policy and health information confidentiality standards at Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/privacy-policy'
        },
        {
          route: '/terms-and-conditions',
          title: 'Terms and Conditions | Nadwa Healthcare',
          description: 'Terms of service and patient facilitation policies for Nadwa Healthcare medical tourism desk.',
          canonicalUrl: 'https://www.nadwahealthcare.com/terms-and-conditions'
        },
        {
          route: '/medical-disclaimer',
          title: 'Medical Disclaimer | Nadwa Healthcare',
          description: 'Medical and healthcare information disclaimer for Nadwa Healthcare international patient services.',
          canonicalUrl: 'https://www.nadwahealthcare.com/medical-disclaimer'
        }
      );

      // B. Arabic Dedicated Hub Pages (/ar)
      pages.push(
        {
          route: '/ar',
          title: 'العلاج الطبي في الهند للمرضى الدوليين | ندوة للرعاية',
          description: 'أفضل المستشفيات المعتمدة دولياً في الهند وكبار الأطباء الجراحين. مساعدة مجانية 100% في استخراج التأشيرة الطبية وخطاب الدعوة الرسمي (VIL) واستقبال المطار.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/hospitals',
          title: 'أفضل مستشفيات الهند المعتمدة JCI | ندوة للرعاية الصحية',
          description: 'تعرف على أفضل المستشفيات في دلهي وجوروجرام مثل ميدانتا، أبولو، ماكس، وفورتيس. تنسيق طبي مجاني ومباشر.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/hospitals',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/doctors',
          title: 'كبار الأطباء والجراحين في الهند | ندوة للرعاية الصحية',
          description: 'استشارات مع أشهر جراحي القلب، زراعة الكبد، جراحة العظام، وجراحة المخ والأعصاب في الهند. رأي طبي مجاني خلال 24 ساعة.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/doctors',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/treatments',
          title: 'العلاجات والعمليات الجراحية في الهند | ندوة للرعاية',
          description: 'دليل العلاجات المتقدمة في الهند: جراحة القلب، علاج الأورام، زراعة الأعضاء، وعلاج العقم بأفضل الأسعار وبأعلى معايير الجودة العالمية.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/treatments',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/services',
          title: 'خدمات المرضى الدوليين والتأشيرة | ندوة للرعاية الصحية',
          description: 'خدمات شاملة للمرضى العرب: تأشيرة طبية سريعة، مترجم فوري عربي، استقبال وتوديع في المطار، وتوفير خيارات السكن.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/services',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/about',
          title: 'من نحن | خدمات السياحة العلاجية في الهند | ندوة',
          description: 'ندوة للرعاية الصحية شريكك المعتمد لرحلة علاج ناجحة في أرقى مستشفيات الهند بدون أي رسوم وساطة.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/about',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/contact',
          title: 'اتصل بنا | مكتب المرضى الدوليين 24/7 | ندوة للرعاية الصحية',
          description: 'تواصل مباشرة عبر واتساب مع منسق الحالات الطبية للمرضى العرب للحصول على تقييم فوري وتكلفة العلاج.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/contact',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/faqs',
          title: 'الأسئلة الشائعة حول العلاج في الهند | ندوة للرعاية',
          description: 'إجابات شاملة لجميع استفسارات المرضى حول التأشيرة الطبية الهندية، تكاليف السفر، وفترة النقاهة.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/faqs',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/blog',
          title: 'دليل وتكاليف السياحة العلاجية بالهند | ندوة للرعاية',
          description: 'أدلة طبية متخصصة ومحدثة لعام 2026 للمرضى الدوليين. قارن تكاليف جراحة القلب، علاج الأورام، استبدال المفاصل وزراعة الأعضاء في الهند مع مساعدة مجانية في التأشيرة.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/blog',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/patient-stories',
          title: 'قصص وتجارب المرضى الدوليين في الهند | ندوة للرعاية',
          description: 'قصص وتجارب واقعية لمرضى من مختلف الدول العربية تلقوا علاجهم بنجاح في أرقى مستشفيات الهند مع ندوة للرعاية الصحية.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/patient-stories',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/privacy-policy',
          title: 'سياسة الخصوصية | ندوة للرعاية الصحية',
          description: 'تعرف على سياسة الخصوصية ومعايير حماية البيانات وسرية المعلومات الطبية للمرضى لدى ندوة للرعاية الصحية.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/privacy-policy',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/terms-and-conditions',
          title: 'الشروط والأحكام | ندوة للرعاية الصحية',
          description: 'الشروط والأحكام الخاصة بخدمات التنسيق الطبي الدولي وتسهيل العلاج في الهند من ندوة للرعاية الصحية.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/terms-and-conditions',
          lang: 'ar',
          dir: 'rtl'
        },
        {
          route: '/ar/medical-disclaimer',
          title: 'إخلاء المسؤولية الطبية | ندوة للرعاية الصحية',
          description: 'إخلاء المسؤولية الطبية والمعلومات الصحية الخاصة بخدمات واستشارات ندوة للرعاية الصحية للمرضى الدوليين.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/medical-disclaimer',
          lang: 'ar',
          dir: 'rtl'
        }
      );

      // C. French Dedicated Hub Pages (/fr)
      pages.push(
        {
          route: '/fr',
          title: 'Soins Médicaux en Inde | Nadwa Healthcare',
          description: 'Accédez aux meilleurs hôpitaux accrédités JCI et aux chirurgiens éminents en Inde. Assistance visa médical 100% gratuite et coordination francophone.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/hospitals',
          title: 'Hôpitaux Accrédités JCI en Inde | Nadwa Healthcare',
          description: 'Découvrez les plus grands hôpitaux d excellence à Delhi NCR : Medanta, Apollo, Fortis et Max. Zéro frais de coordination.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/hospitals',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/doctors',
          title: 'Meilleurs Médecins & Chirurgiens en Inde | Nadwa',
          description: 'Consultez les plus grands professeurs en cardiologie, oncologie, orthopédie et greffes d organes en Inde. Avis médical sous 24h.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/doctors',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/treatments',
          title: 'Soins Médicaux & Chirurgies en Inde | Nadwa Healthcare',
          description: 'Chirurgie cardiaque, oncologie robotique, prothèses de genou et greffes à des tarifs très abordables en Inde.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/treatments',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/services',
          title: 'Services Internationaux & Visa Médical | Nadwa',
          description: 'Prise en charge complète : invitation officielle VIL sous 24-48h, accueil à l aéroport de Delhi et accompagnement.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/services',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/about',
          title: 'À Propos de Nadwa Healthcare | Soins en Inde',
          description: 'Nadwa Healthcare guide les patients africains et internationaux vers les meilleurs centres médicaux de Delhi NCR sans aucun frais d agence.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/about',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/contact',
          title: 'Contactez Notre Bureau Médical 24/7 | Nadwa Healthcare',
          description: 'Contactez notre équipe via WhatsApp pour une estimation gratuite et rapide de votre traitement médical en Inde.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/contact',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/faqs',
          title: 'FAQ Traitement Médical en Inde | Nadwa Healthcare',
          description: 'Toutes les réponses sur les visas médicaux pour l Inde, les coûts d hospitalisation et l organisation de votre séjour.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/faqs',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/blog',
          title: 'Guides de Voyage Médical en Inde | Nadwa Healthcare',
          description: 'Guides médicaux complets 2026 pour patients internationaux. Comparez les coûts de chirurgie cardiaque, cancérologie, prothèse du genou et greffes en Inde avec visa gratuit.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/blog',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/patient-stories',
          title: 'Témoignages de Patients en Inde | Nadwa Healthcare',
          description: 'Découvrez les récits et avis réels de patients internationaux soignés avec succès dans les meilleurs hôpitaux de Delhi NCR.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/patient-stories',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/privacy-policy',
          title: 'Politique de Confidentialité | Nadwa Healthcare',
          description: 'Politique de confidentialité et protection des données médicales des patients chez Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/privacy-policy',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/terms-and-conditions',
          title: 'Conditions Générales d\'Utilisation | Nadwa Healthcare',
          description: 'Conditions générales et règles d\'accompagnement médical pour les patients internationaux en Inde.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/terms-and-conditions',
          lang: 'fr',
          dir: 'ltr'
        },
        {
          route: '/fr/medical-disclaimer',
          title: 'Avis de Non-Responsabilité Médicale | Nadwa Healthcare',
          description: 'Mentions légales et avertissement médical concernant les informations fournies par Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/medical-disclaimer',
          lang: 'fr',
          dir: 'ltr'
        }
      );

      // D. Russian Dedicated Hub Pages (/ru)
      pages.push(
        {
          route: '/ru',
          title: 'Лечение в Индии для Иностранных Пациентов | Nadwa',
          description: 'Ведущие аккредитованные клиники JCI и лучшие профессора Индии. 100% бесплатная медицинская виза (VIL) и русскоязычные координаторы.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/hospitals',
          title: 'Клиники Индии с Аккредитацией JCI | Nadwa Healthcare',
          description: 'Ведущие многопрофильные клиники Дели: Меданта, Аполло, Фортис и Макс. Бесплатный подбор клиники и организация лечения.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/hospitals',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/doctors',
          title: 'Ведущие Врачи и Хирурги в Индии | Nadwa Healthcare',
          description: 'Консультации и операции у лучших кардиохирургов, онкологов, ортопедов и трансплантологов Индии. Второе медицинское мнение за 24 часа.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/doctors',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/treatments',
          title: 'Лечение и Операции в Индии: Цены | Nadwa Healthcare',
          description: 'Операции на сердце, роботизированная онкология, замена суставов и трансплантация органов в Индии по доступным ценам.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/treatments',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/services',
          title: 'Услуги для Пациентов и Виза в Индию | Nadwa Healthcare',
          description: 'Полный комплекс услуг: оформление визового приглашения VIL за 24-48 часов, трансфер из аэропорта и русскоязычный переводчик.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/services',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/about',
          title: 'О Компании Nadwa Healthcare | Лечение в Индии',
          description: 'Nadwa Healthcare — надежный партнер для пациентов из СНГ и Центральной Азии по организации лечения в клиниках Дели без комиссии.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/about',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/contact',
          title: 'Контакты Отдела Пациентов 24/7 | Nadwa Healthcare',
          description: 'Свяжитесь с нами через WhatsApp для быстрого расчета стоимости и консультации врача по вашим медицинским выпискам.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/contact',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/faqs',
          title: 'Частые Вопросы о Лечении в Индии | Nadwa Healthcare',
          description: 'Ответы на популярные вопросы: получение медицинской визы в Индию, стоимость лечения, проживание и сроки пребывания.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/faqs',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/blog',
          title: 'Гид и Цены на Лечение в Индии | Nadwa Healthcare',
          description: 'Подробные медицинские руководства 2026 для пациентов из СНГ. Сравнение цен на кардиохирургию, онкологию, эндопротезирование суставов и трансплантацию в клиниках Индии.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/blog',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/patient-stories',
          title: 'Истории Пациентов о Лечении в Индии | Nadwa',
          description: 'Реальные истории и видеоотзывы пациентов из стран СНГ, прошедших успешное лечение в лучших клиниках Индии.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/patient-stories',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/privacy-policy',
          title: 'Политика Конфиденциальности | Nadwa Healthcare',
          description: 'Политика конфиденциальности и стандарты защиты персональных медицинских данных пациентов в Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/privacy-policy',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/terms-and-conditions',
          title: 'Условия и Положения Обслуживания | Nadwa Healthcare',
          description: 'Правила координации, визовой поддержки и медицинского сопровождения иностранных пациентов в Индии.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/terms-and-conditions',
          lang: 'ru',
          dir: 'ltr'
        },
        {
          route: '/ru/medical-disclaimer',
          title: 'Медицинский Отказ от Ответственности | Nadwa Healthcare',
          description: 'Правовая информация и медицинское предупреждение относительно консультационных материалов Nadwa Healthcare.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/medical-disclaimer',
          lang: 'ru',
          dir: 'ltr'
        }
      );

      // E. All 27 Doctors (Dynamic Profiles)
      doctorsData.forEach((doc) => {
        const hospShort = doc.hospitalName.split('–')[0].trim();
        pages.push({
          route: `/doctors/${doc.slug}`,
          title: `${doc.name} - ${doc.specialty} in India | Nadwa`.slice(0, 58),
          description: `Consult ${doc.name} (${doc.designation} at ${hospShort}). Get free medical opinion, surgery cost estimate & fast appointment booking in India.`,
          canonicalUrl: `https://www.nadwahealthcare.com/doctors/${doc.slug}`,
          ogImage: doc.image,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'Physician',
            'name': doc.name,
            'medicalSpecialty': doc.specialty,
            'hospitalAffiliation': doc.hospitalName,
            'description': doc.bio,
            'url': `https://www.nadwahealthcare.com/doctors/${doc.slug}`,
            'image': doc.image.startsWith('http') ? doc.image : `https://www.nadwahealthcare.com${doc.image}`
          }
        });
      });

      // F. All 10 Hospitals (Dynamic Profiles)
      hospitalsData.forEach((hosp) => {
        pages.push({
          route: `/hospitals/${hosp.slug}`,
          title: `${hosp.name} - ${hosp.city} | Nadwa Healthcare`.slice(0, 58),
          description: `${hosp.name} in ${hosp.locationDetail}. ${hosp.bedCapacity} beds, accredited by ${hosp.accreditation.join(', ')}. Free patient coordination and medical visa assistance.`,
          canonicalUrl: `https://www.nadwahealthcare.com/hospitals/${hosp.slug}`,
          ogImage: hosp.image,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'Hospital',
            'name': hosp.name,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': hosp.locationDetail,
              'addressLocality': hosp.city,
              'addressCountry': 'India'
            },
            'description': hosp.fullOverview,
            'url': `https://www.nadwahealthcare.com/hospitals/${hosp.slug}`,
            'image': hosp.image.startsWith('http') ? hosp.image : `https://www.nadwahealthcare.com${hosp.image}`
          }
        });
      });

      // G. All 12 Treatments (Dynamic Treatment Guides)
      treatmentsData.forEach((treat) => {
        pages.push({
          route: `/treatments/${treat.slug}`,
          title: `${treat.title} in India | Nadwa Healthcare`.slice(0, 58),
          description: `${treat.shortDesc} Compare accredited hospitals in Delhi NCR, top specialist surgeons, stay: ${treat.recommendedStay}, and get 100% free Medical Visa assistance.`,
          canonicalUrl: `https://www.nadwahealthcare.com/treatments/${treat.slug}`,
          ogImage: treat.image,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'MedicalProcedure',
            'name': treat.title,
            'description': treat.overview,
            'bodyLocation': treat.title,
            'url': `https://www.nadwahealthcare.com/treatments/${treat.slug}`,
            'image': treat.image.startsWith('http') ? treat.image : `https://www.nadwahealthcare.com${treat.image}`
          }
        });
      });

      // G2. Localized Treatments (/ar/treatments/:slug, /fr/treatments/:slug, /ru/treatments/:slug)
      const nonEnLangs: Array<'ar' | 'fr' | 'ru'> = ['ar', 'fr', 'ru'];
      nonEnLangs.forEach((lang) => {
        treatmentsData.forEach((treat) => {
          const loc = getLocalizedTreatment(treat, lang);
          const inIndiaSuffix = lang === 'ar' ? 'في الهند' : lang === 'fr' ? 'en Inde' : 'в Индии';
          pages.push({
            route: `/${lang}/treatments/${treat.slug}`,
            title: `${loc.title} ${inIndiaSuffix} | Nadwa`.slice(0, 58),
            description: `${loc.shortDesc}`,
            canonicalUrl: `https://www.nadwahealthcare.com/${lang}/treatments/${treat.slug}`,
            ogImage: treat.image,
            lang: lang,
            dir: lang === 'ar' ? 'rtl' : 'ltr',
          });
        });

        hospitalsData.forEach((hosp) => {
          const loc = getLocalizedHospital(hosp, lang);
          const inIndiaTitle = lang === 'ar' ? `مستشفى ${hosp.name} في ${loc.city}` : lang === 'fr' ? `${hosp.name} à ${loc.city}` : `${hosp.name} в г. ${loc.city}`;
          pages.push({
            route: `/${lang}/hospitals/${hosp.slug}`,
            title: `${inIndiaTitle} | Nadwa`.slice(0, 58),
            description: `${loc.shortDesc}`,
            canonicalUrl: `https://www.nadwahealthcare.com/${lang}/hospitals/${hosp.slug}`,
            ogImage: hosp.image,
            lang: lang,
            dir: lang === 'ar' ? 'rtl' : 'ltr',
          });
        });

        doctorsData.forEach((doc) => {
          const loc = getLocalizedDoctor(doc, lang);
          const hospShort = doc.hospitalName.split('–')[0].split(',')[0].trim();
          let title = `${doc.name} - ${doc.specialty} in India | Nadwa`.slice(0, 56);
          let description = `Consult ${doc.name} (${loc.designation} at ${hospShort}). Get free medical opinion, surgery cost estimate & fast appointment booking in India.`;

          if (lang === 'fr') {
            title = `${doc.name} - Spécialiste en Inde | Nadwa`.slice(0, 56);
            description = `Consultez le ${doc.name} (${loc.designation} à ${hospShort}). Obtenez un avis médical gratuit, estimation du coût et prise de rendez-vous rapide.`;
          } else if (lang === 'ar') {
            title = `${doc.name} - استشاري في الهند | ندوة للرعاية`.slice(0, 56);
            description = `احجز موعداً واستشارة مجانية مع ${doc.name} (${loc.designation} في ${hospShort}). تقييم التقارير الطبية وتكلفة العلاج بدون أي رسوم.`;
          } else if (lang === 'ru') {
            title = `${doc.name} - Врач в Индии | Nadwa Healthcare`.slice(0, 56);
            description = `Консультация с ${doc.name} (${loc.designation} в ${hospShort}). Бесплатное второе мнение и расчет стоимости лечения в Индии.`;
          }

          pages.push({
            route: `/${lang}/doctors/${doc.slug}`,
            title,
            description,
            canonicalUrl: `https://www.nadwahealthcare.com/${lang}/doctors/${doc.slug}`,
            ogImage: doc.image,
            lang: lang,
            dir: lang === 'ar' ? 'rtl' : 'ltr',
          });
        });
      });

      // H. All Blogs (Dynamic Treatment & Comparison Blogs)
      blogsData.forEach((blog) => {
        const rawTitle = blog.metaTitle.includes('|')
          ? blog.metaTitle
          : (blog.metaTitle.length > 50 ? blog.metaTitle : `${blog.metaTitle} | Nadwa`);
        const safeTitle = rawTitle.length <= 56 ? rawTitle : rawTitle.slice(0, 56);

        pages.push({
          route: `/blog/${blog.slug}`,
          title: safeTitle,
          description: blog.metaDescription,
          canonicalUrl: `https://www.nadwahealthcare.com/blog/${blog.slug}`,
          ogImage: blog.coverImage,
          schema: {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BlogPosting',
                'headline': blog.h1Title,
                'description': blog.metaDescription,
                'author': {
                  '@type': 'Organization',
                  'name': blog.author
                },
                'publisher': {
                  '@type': 'Organization',
                  'name': 'Nadwa Healthcare',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.nadwahealthcare.com/images/brand-logo-square.png'
                  }
                },
                'datePublished': '2026-10-28',
                'url': `https://www.nadwahealthcare.com/blog/${blog.slug}`,
                'image': blog.coverImage.startsWith('http') ? blog.coverImage : `https://www.nadwahealthcare.com${blog.coverImage}`
              },
              ...(blog.faqs && blog.faqs.length > 0 ? [{
                '@type': 'FAQPage',
                'mainEntity': blog.faqs.map((f: any) => ({
                  '@type': 'Question',
                  'name': f.question,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': f.answer
                  }
                }))
              }] : [])
            ]
          }
        });

        // Localized Blog Pre-rendering (/ar, /fr, /ru)
        (['ar', 'fr', 'ru'] as const).forEach((lang) => {
          const loc = getLocalizedBlog(blog, lang);
          const rawLocTitle = loc.h1Title.includes('|')
            ? loc.h1Title
            : (loc.h1Title.length > 50 ? loc.h1Title : `${loc.h1Title} | Nadwa`);
          pages.push({
            route: `/${lang}/blog/${blog.slug}`,
            title: rawLocTitle.slice(0, 56),
            description: blog.metaDescription,
            canonicalUrl: `https://www.nadwahealthcare.com/${lang}/blog/${blog.slug}`,
            ogImage: blog.coverImage,
            lang: lang,
            dir: lang === 'ar' ? 'rtl' : 'ltr',
          });
        });
      });

      // H2. Static entry for alternative heart surgery slug & medical visa guide requested in GSC
      pages.push(
        {
          route: '/blog/heart-surgery-india-cost-guide',
          title: 'Heart Surgery in India: Cost & Top Hospitals | Nadwa',
          description: '2026 international guide to heart surgery in India. Compare CABG & valve surgery costs, top Delhi cardiac surgeons, and get free medical visa assistance.',
          canonicalUrl: 'https://www.nadwahealthcare.com/blog/heart-surgery-india-cost-guide',
        },
        {
          route: '/ar/blog/heart-surgery-india-cost-guide',
          title: 'تكلفة جراحة القلب في الهند وأفضل المستشفيات | ندوة',
          description: 'دليل جراحة القلب في الهند لعام 2026. مقارنة تكاليف مجازة الشريان التاجي والصمامات في أفضل مستشفيات نيودلهي مع مساعدة مجانية في التأشيرة.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/blog/heart-surgery-india-cost-guide',
          lang: 'ar',
          dir: 'rtl',
        },
        {
          route: '/fr/blog/heart-surgery-india-cost-guide',
          title: 'Chirurgie Cardiaque en Inde: Coûts & Hôpitaux | Nadwa',
          description: 'Guide 2026 de chirurgie cardiaque en Inde. Comparez les coûts de pontage et valves dans les meilleurs hôpitaux de Delhi.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/blog/heart-surgery-india-cost-guide',
          lang: 'fr',
          dir: 'ltr',
        },
        {
          route: '/ru/blog/heart-surgery-india-cost-guide',
          title: 'Кардиохирургия в Индии: Цены и Клиники | Nadwa',
          description: 'Гид 2026 по кардиохирургии в Индии. Сравнение цен на АКШ и замену клапанов в лучших клиниках Дели.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/blog/heart-surgery-india-cost-guide',
          lang: 'ru',
          dir: 'ltr',
        },
        {
          route: '/blog/cancer-treatment-india-oncology-cost-guide',
          title: 'Cancer Treatment in India: Cost & Oncology | Nadwa',
          description: 'Comprehensive guide to cancer treatment in India. Explore surgical oncology, CyberKnife radiation, chemotherapy costs, and top Delhi NCR hospitals with free visa help.',
          canonicalUrl: 'https://www.nadwahealthcare.com/blog/cancer-treatment-india-oncology-cost-guide',
        },
        {
          route: '/ar/blog/cancer-treatment-india-oncology-cost-guide',
          title: 'علاج السرطان في الهند: التكاليف وأفضل المراكز | ندوة',
          description: 'دليل علاج السرطان في الهند لعام 2026 للمرضى الدوليين. مقارنة تكاليف الجراحة الروبوتية، السايبر نايف، والكيماوي في أفضل مستشفيات نيودلهي مع تأشيرة مجانية.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ar/blog/cancer-treatment-india-oncology-cost-guide',
          lang: 'ar',
          dir: 'rtl',
        },
        {
          route: '/fr/blog/cancer-treatment-india-oncology-cost-guide',
          title: 'Traitement du Cancer en Inde: Coûts & Soins | Nadwa',
          description: 'Guide 2026 du traitement du cancer en Inde. Comparez les coûts de chirurgie robotique, CyberKnife et chimiothérapie avec assistance visa.',
          canonicalUrl: 'https://www.nadwahealthcare.com/fr/blog/cancer-treatment-india-oncology-cost-guide',
          lang: 'fr',
          dir: 'ltr',
        },
        {
          route: '/ru/blog/cancer-treatment-india-oncology-cost-guide',
          title: 'Лечение Рака в Индии: Цены и Клиники | Nadwa',
          description: 'Гид 2026 по лечению онкологии в Индии. Сравнение цен на роботизированные операции, CyberKnife и химиотерапию с бесплатной визовой поддержкой.',
          canonicalUrl: 'https://www.nadwahealthcare.com/ru/blog/cancer-treatment-india-oncology-cost-guide',
          lang: 'ru',
          dir: 'ltr',
        },
        {
          route: '/blog/complete-guide-indian-medical-visa-international-patients',
          title: 'Indian Medical Visa Guide for Patients | Nadwa Healthcare',
          description: 'Comprehensive guide for international patients applying for an Indian Medical Visa (MED) and Medical Attendant Visa (MED-X). Official 24-48h Hospital Invitation Letters.',
          canonicalUrl: 'https://www.nadwahealthcare.com/blog/complete-guide-indian-medical-visa-international-patients',
        }
      );

      // Generate static HTML files
      let createdCount = 0;
      for (const page of pages) {
        const relativeDir = page.route.replace(/^\//, '');
        const targetDir = path.join(distDir, relativeDir);
        fs.mkdirSync(targetDir, { recursive: true });

        const targetFile = path.join(targetDir, 'index.html');
        const rendered = renderHtml(templateHtml, page);
        fs.writeFileSync(targetFile, rendered, 'utf-8');
        createdCount++;
      }

      // Generate comprehensive sitemap.xml covering all 305 pre-rendered pages with hreflang alternates
      const today = new Date().toISOString().split('T')[0];
      const domain = 'https://www.nadwahealthcare.com';

      const sitemapEntries = pages.map((page) => {
        const loc = `${domain}${page.route === '/' ? '/' : page.route}`;
        const cleanRoute = page.route.replace(/^\/(ar|fr|ru)(\/|$)/, '/');
        const norm = cleanRoute === '/' ? '' : cleanRoute;

        // Determine priority based on page type
        let priority = '0.7';
        let changefreq = 'monthly';
        if (page.route === '/' || page.route === '/ar' || page.route === '/fr' || page.route === '/ru') {
          priority = '1.0';
          changefreq = 'weekly';
        } else if (page.route.includes('/treatments') || page.route.includes('/hospitals') || page.route.includes('/doctors')) {
          priority = page.route.split('/').length > 3 || (!page.route.match(/^\/(ar|fr|ru)/) && page.route.split('/').length > 2) ? '0.85' : '0.9';
          changefreq = 'weekly';
        } else if (page.route.includes('/blog')) {
          priority = '0.8';
          changefreq = 'monthly';
        }

        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}${norm || '/'}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${domain}/ar${norm}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${domain}/fr${norm}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${domain}/ru${norm}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${norm || '/'}" />
  </url>`;
      });

      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join('\n')}
</urlset>
`;

      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
      fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
      console.log(`🗺️ [Sitemap] Successfully wrote ${pages.length} URLs to dist/sitemap.xml and public/sitemap.xml!`);

      console.log(`\n🎉 [SSG Pre-rendering] Successfully generated ${createdCount} static SEO pages with unique Titles, Meta Descriptions, Hreflangs, and Schemas!`);
    }
  };
}

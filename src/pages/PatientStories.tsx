import React, { useState } from "react";
import { Compass, ShieldCheck, FileCheck, ArrowRight, Clock, Building, HeartHandshake } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { patientStoriesData, type PatientStoryItem } from "../data/patientStoriesData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedPatientStory, getLocalizedHospitalName, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";

interface PatientStoriesProps {
  onOpenConsultation: () => void;
}

export const PatientStories: React.FC<PatientStoriesProps> = ({ onOpenConsultation }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<PatientStoryItem | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="International Patient Stories & Experiences | NadwaHealthcare"
        description="Authentic case summaries and medical journeys of international patients who received treatment across accredited Delhi NCR hospitals through NadwaHealthcare."
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/patient-stories')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: t("nav.patientStories", "Patient Stories") }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Compass className="w-3.5 h-3.5" />
              {t("homeStories.badge", "Documented Patient Journeys")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("homeStories.title", "International Patient")}{" "}
              <span className="text-teal-400">{t("homeStories.titleHighlight", "Case Studies")}</span>
            </h1>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {t("homeStories.desc", "Transparent, factual accounts of international patients treated at accredited Delhi NCR medical centers. We do not invent reviews or publish unverified testimonials.")}
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Transparency Note */}
      <div className="bg-emerald-50 border-b border-emerald-200 py-3.5 px-4 text-xs text-emerald-800 text-center">
        <span className="font-bold flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          {currentLang === "ar" ? "التزام أخلاقي كامل بخصوصية المرضى: جميع ملخصات الحالات تخضع لموافقة المرضى الرسمية ولا ننشر أي تقييمات غير واقعية." : currentLang === "fr" ? "Engagement éthique de confidentialité : tous les récits de cas respectent le consentement des patients sans avis artificiels." : currentLang === "ru" ? "Этические стандарты конфиденциальности: все описания медицинских случаев публикуются с согласия пациентов без вымышленных отзывов." : "Ethical Patient Privacy Commitment: All case narratives adhere strictly to patient privacy consent standards. No fabricated star ratings or commercial endorsements."}
        </span>
      </div>

      {/* Case Studies Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {patientStoriesData.map((rawStory) => {
              const story = getLocalizedPatientStory(rawStory, currentLang);
              const categoryLabel = SPECIALTY_TRANSLATIONS[story.treatmentCategory]?.[currentLang] || story.treatmentCategory;
              const hospitalLabel = getLocalizedHospitalName(story.hospitalName.split(",")[0], currentLang);

              return (
                <div
                  key={story.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top metadata tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
                        <span className="text-base">{story.countryFlag}</span>
                        <span>{story.country}</span>
                      </span>
                      <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                        {categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {story.summaryTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      "{story.patientNarrative}"
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-slate-700">
                        <Building className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>{currentLang === "ar" ? "المستشفى:" : currentLang === "fr" ? "Hôpital :" : currentLang === "ru" ? "Клиника:" : "Hospital:"}</strong> {hospitalLabel}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700">
                        <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>{currentLang === "ar" ? "مدة الإقامة:" : currentLang === "fr" ? "Durée de séjour :" : currentLang === "ru" ? "Срок пребывания:" : "Duration of Stay:"}</strong> {story.lengthOfStay}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700">
                        <FileCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>{currentLang === "ar" ? "النتيجة السريرية:" : currentLang === "fr" ? "Résultat clinique :" : currentLang === "ru" ? "Клинический результат:" : "Clinical Summary:"}</strong> {story.keyOutcomes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {currentLang === "ar" ? "دراسة حالة علاجية موثقة" : currentLang === "fr" ? "Cas clinique patient documenté" : currentLang === "ru" ? "Задокументированный клинический случай" : story.verificationStatus}
                    </span>
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <span>{t("common.exploreDetails", "View Case Summary")}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Your Story / Future Patient Records Section */}
          <div className="mt-16 p-8 rounded-3xl bg-teal-50/60 border border-teal-200 text-center max-w-2xl mx-auto space-y-4">
            <HeartHandshake className="w-10 h-10 text-teal-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">
              {currentLang === "ar" ? "هل تلقيت علاجك في الهند سابقاً عبر ندوة؟" : currentLang === "fr" ? "Avez-vous déjà été soigné en Inde via NadwaHealthcare ?" : currentLang === "ru" ? "Вы проходили лечение в Индии с помощью NadwaHealthcare?" : "Are You a Former Patient Who Received Care in India?"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentLang === "ar" ? "إذا تلقيت الرعاية الطبية في أحد مستشفياتنا الشريكة، يمكنك مشاركة تجربتك لمساعدة مرضى آخرين يبحثون عن الأمل والعلاج." : currentLang === "fr" ? "Si NadwaHealthcare vous a accompagné, vous pouvez nous transmettre votre témoignage pour aider d'autres patients dans leur démarche." : currentLang === "ru" ? "Если вы проходили лечение через нашу службу, вы можете оставить отзыв, чтобы помочь другим пациентам сделать правильный выбор." : "If NadwaHealthcare or our partner hospitals assisted your treatment journey, you can voluntarily submit your feedback for our quality committee to publish after verified authorization."}
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              {currentLang === "ar" ? "مشاركة تجربة العلاج" : currentLang === "fr" ? "Partager mon expérience" : currentLang === "ru" ? "Поделиться отзывом" : "Share Patient Feedback"}
            </button>
          </div>
        </div>
      </section>

      {/* Case Details Modal */}
      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-teal-100 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                {selectedStory.country} • {selectedStory.year}
              </span>
              <button
                onClick={() => setSelectedStory(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {selectedStory.summaryTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              "{selectedStory.patientNarrative}"
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5 text-xs text-slate-700">
              <p><strong>{currentLang === "ar" ? "التخصص الطبي:" : currentLang === "fr" ? "Spécialité :" : currentLang === "ru" ? "Направление:" : "Specialty:"}</strong> {SPECIALTY_TRANSLATIONS[selectedStory.treatmentCategory]?.[currentLang] || selectedStory.treatmentCategory}</p>
              <p><strong>{currentLang === "ar" ? "المستشفى:" : currentLang === "fr" ? "Hôpital :" : currentLang === "ru" ? "Клиника:" : "Hospital:"}</strong> {getLocalizedHospitalName(selectedStory.hospitalName, currentLang)}</p>
              <p><strong>{currentLang === "ar" ? "مدة الإقامة:" : currentLang === "fr" ? "Durée de séjour :" : currentLang === "ru" ? "Срок пребывания:" : "Length of Stay:"}</strong> {selectedStory.lengthOfStay}</p>
              <p><strong>{currentLang === "ar" ? "النتيجة والمتابعة:" : currentLang === "fr" ? "Résultat et suivi :" : currentLang === "ru" ? "Результат:" : "Follow-Up:"}</strong> {selectedStory.keyOutcomes}</p>
            </div>

            <p className="text-[11px] text-slate-400 italic">
              {currentLang === "ar" ? "تنويه: تنشر هذه الملخصات لأغراض التثقيف وتوضيح الجدول الزمني للسفر الطبي فقط. النتائج السابقة لا تضمن نتائج مستقبلية متطابقة." : currentLang === "fr" ? "Notice : publié uniquement à des fins d'information sur les délais du parcours de soins. Les résultats passés ne garantissent pas de résultat absolu." : currentLang === "ru" ? "Примечание: опубликовано исключительно для демонстрации сроков организации лечения. Результаты прошлых пациентов индивидуальны." : "Notice: Published solely for educational demonstration of clinical travel coordination timelines. Past outcomes do not guarantee future medical results."}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setSelectedStory(null)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                {currentLang === "ar" ? "إغلاق الملخص" : currentLang === "fr" ? "Fermer" : currentLang === "ru" ? "Закрыть" : "Close Summary"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

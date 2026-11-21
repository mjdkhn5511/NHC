import React from "react";
import { ShieldAlert, AlertTriangle, Stethoscope, HeartPulse } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export const MedicalDisclaimer: React.FC = () => {
  const { localizeUrl } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Medical Disclaimer | NadwaHealthcare (NHC)"
        description="Official medical disclaimer of NadwaHealthcare (NHC). Important clinical information regarding medical travel facilitation, lack of medical practice, and liability limits."
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/medical-disclaimer')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Medical Disclaimer" }]} />
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              Essential Healthcare Notice
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Medical Disclaimer & Clinical Notice
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Please read this notice carefully prior to seeking healthcare services through NadwaHealthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {/* Important Highlight Box */}
          <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-300/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>NadwaHealthcare is Not a Medical Provider</span>
            </div>
            <p className="text-amber-950/90 leading-relaxed">
              NadwaHealthcare ("NHC") is an independent international patient facilitation agency and medical concierge service provider based in Delhi NCR, India. NHC does not own, operate, or control any medical facilities, nor does it employ doctors, surgeons, nurses, or medical practitioners.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              1. No Doctor-Patient Relationship
            </h2>
            <p>
              Information communicated through this website, by email, phone, or WhatsApp does not constitute medical advice, diagnosis, or clinical recommendation, nor does it establish a doctor-patient relationship between you and NadwaHealthcare.
            </p>
            <p>
              Preliminary medical opinions and treatment estimates provided through NHC are direct opinions rendered by third-party licensed doctors and surgeons practicing at accredited partner hospitals. Any formal doctor-patient relationship is established exclusively between the patient and the licensed treating physician in India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-teal-600" />
              2. No Medical Guarantees or Warranties
            </h2>
            <p>
              Medicine and surgery are not exact sciences. Due to variations in individual human biology, disease progression, immune responses, and pre-existing medical conditions, <strong>no medical outcome, surgical result, or cure can be guaranteed.</strong>
            </p>
            <p>
              NadwaHealthcare explicitly rejects any claim of guaranteed success rates, 100% cure, or complications-free treatments. All prospective surgical and medical interventions involve intrinsic clinical risks that should be thoroughly discussed directly with the operating surgeon.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Requirement for Direct Medical Consultation
            </h2>
            <p>
              Remote evaluations conducted using scans, digital DICOM files, or pathology reports are preliminary. The final diagnosis, surgical plan, and treatment suitability can only be confirmed after in-person clinical examination, secondary diagnostic validations, and anesthetic workups conducted at the hospital in India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Emergency Healthcare Warning
            </h2>
            <p>
              This website and our international intake channels are not designed for life-threatening acute medical emergencies. If you or a loved one is experiencing severe acute chest pain, uncontrolled hemorrhage, loss of consciousness, or sudden respiratory distress in your home country, please contact your local emergency services or nearest hospital emergency room immediately.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
            For further clarification on our operational structure, please write to our legal desk at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-teal-600 font-semibold underline">
              {siteConfig.email}
            </a>.
          </div>
        </div>
      </section>
    </div>
  );
};

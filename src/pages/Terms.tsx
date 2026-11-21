import React from "react";
import { FileText, ShieldAlert } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

export const Terms: React.FC = () => {
  const { localizeUrl } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Terms and Conditions | Medical Tourism Facilitation | NadwaHealthcare"
        description="Terms and conditions governing medical tourism facilitation and patient coordination services provided by NadwaHealthcare (NHC)."
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/terms-and-conditions')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Terms and Conditions" }]} />
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <FileText className="w-3.5 h-3.5" />
              Service Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Effective Date: October 2026 • NadwaHealthcare (NHC)
            </p>
          </div>
        </div>
      </section>

      {/* Legal Text Body */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              By accessing our website or utilizing our medical facilitation coordination services, you acknowledge and agree to the following terms and conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Nature of Services
            </h2>
            <p>
              NadwaHealthcare ("NHC") is a medical travel facilitator, liaison, and patient concierge coordinator operating in India. <strong>NHC is not a healthcare provider, hospital, clinic, or licensed physician.</strong>
            </p>
            <p>
              We do not examine, diagnose, prescribe, or perform surgeries. All medical treatments, procedures, diagnostics, and prescriptions are administered solely by independent hospitals and licensed healthcare professionals in India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. Estimates and Financial Terms
            </h2>
            <p>
              All treatment cost estimates provided by NHC are institutional approximations issued directly by partner hospitals based on initial report assessments. These estimates are non-binding. Actual hospital charges may vary depending on:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>In-person clinical findings and secondary diagnostic confirmations upon arrival in India.</li>
              <li>Surgical complexity, choice of specialized implants or prosthetic devices.</li>
              <li>Extended ICU stays, unexpected medical complications, or management of pre-existing co-morbidities.</li>
            </ul>
            <p>
              All payments for medical procedures, diagnostics, and hospital room stays are paid directly to the respective hospital or clinic. NHC does not charge patients a coordination fee for standard facilitation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Travel & Visa Disclaimers
            </h2>
            <p>
              NHC assists in acquiring official Hospital Medical Visa Invitation Letters (VIL). However, <strong>visa approval, rejection, or delays are determined exclusively by the Government of India and its respective diplomatic missions abroad.</strong> NHC cannot guarantee visa approval or entry permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, NadwaHealthcare and its officers shall not be held liable for any clinical malpractice, treatment outcomes, surgical complications, hospital billing disputes, or transportation disruptions. The contract for clinical care exists exclusively between the patient and the treating hospital/doctor.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute shall be subject to the exclusive jurisdiction of the competent courts of New Delhi, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

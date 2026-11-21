import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export const PrivacyPolicy: React.FC = () => {
  const { localizeUrl } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Privacy Policy | Patient Data Confidentiality | NadwaHealthcare"
        description="Privacy policy of NadwaHealthcare (NHC). How we handle patient medical records, diagnostic scans, contact information, and ensure HIPAA/GDPR-aligned confidentiality."
        canonicalUrl={`https://www.nadwahealthcare.com${localizeUrl('/privacy-policy')}`}
      />

      {/* Header Banner */}
      <section className="bg-[#08221E] text-white py-12 lg:py-16 bg-dark-dots border-b border-teal-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
              <Lock className="w-3.5 h-3.5" />
              Patient Confidentiality Commitment
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy & Medical Data Protection
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Last Updated: October 2026 • NadwaHealthcare (NHC)
            </p>
          </div>
        </div>
      </section>

      {/* Legal Text Body */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 flex items-start gap-3 text-teal-900">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <p>
              NadwaHealthcare ("NHC", "we", "us", or "our") considers medical privacy paramount. We treat all diagnostic imaging, pathology notes, clinical summaries, and patient contact identifiers with the utmost discretion and confidentiality.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Information We Collect
            </h2>
            <p>
              When international patients or authorized caregivers use our website, online consultation forms, or WhatsApp channel, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Personal Identifiers:</strong> Patient full legal name, date of birth, age, gender, nationality, country of residence, passport copy (only when issuing Medical Visa Invitation Letters).</li>
              <li><strong>Contact Details:</strong> WhatsApp number, telephone number, email address, emergency contact numbers.</li>
              <li><strong>Medical Diagnostic Records:</strong> Clinical history notes, pathology biopsy blocks, MRI/CT/PET scan DICOM imaging, blood test reports, operative notes from treating physicians in your home country.</li>
              <li><strong>Travel & Logistics Information:</strong> Flight schedules, medical companion details, dietary requirements, and wheelchair/mobility needs.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. How We Use Collected Patient Information
            </h2>
            <p>
              Your data is utilized strictly for medical coordination purposes, specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Transmitting clinical records to accredited hospital partner tumor boards, department chairs, and senior specialists across Delhi NCR for expert medical opinion and cost estimation.</li>
              <li>Requesting official Hospital Medical Visa Invitation Letters (VIL) required for Indian visa issuance.</li>
              <li>Coordinating dedicated airport transfers, guest accommodation, and local transport.</li>
              <li>Facilitating continuous care communication between Indian hospitals and your family.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. Information Sharing & Third-Party Disclosures
            </h2>
            <p>
              <strong>We never sell, rent, or commercialize patient information.</strong> Information is shared solely with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Accredited partner hospitals (e.g. Medanta, Apollo, Fortis, Max) and their licensed medical staff evaluating your case.</li>
              <li>Indian diplomatic missions, embassies, and FRRO immigration authorities exclusively for medical visa verification.</li>
              <li>Verified third-party service providers (such as airport ambulance operators or dedicated accommodation hosts) strictly to the extent required to execute your requested service.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) for data transmission. Access to medical files within NHC is restricted on a strict need-to-know basis to assigned patient care coordinators.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Patient Rights
            </h2>
            <p>
              Patients retain the right to request a copy of their stored case files, rectify inaccurate information, or request the deletion of non-regulatory records by emailing our Data Protection Desk at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-teal-600 font-semibold underline">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

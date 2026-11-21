import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { MedicalDisclaimer } from "./pages/MedicalDisclaimer";
import { NotFound } from "./pages/NotFound";
import { Doctors } from "./pages/Doctors";
import { Hospitals } from "./pages/Hospitals";
import { Treatments } from "./pages/Treatments";
import { TreatmentDetails } from "./pages/TreatmentDetails";
import { DoctorDetails } from "./pages/DoctorDetails";
import { HospitalDetails } from "./pages/HospitalDetails";

// Lazy load secondary routes with code splitting
const EnquiryModal = lazy(() => import("./components/EnquiryModal").then(m => ({ default: m.EnquiryModal })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const PatientStories = lazy(() => import("./pages/PatientStories").then(m => ({ default: m.PatientStories })));
const FAQs = lazy(() => import("./pages/FAQs").then(m => ({ default: m.FAQs })));
const Blogs = lazy(() => import("./pages/Blogs").then(m => ({ default: m.Blogs })));
const BlogDetails = lazy(() => import("./pages/BlogDetails").then(m => ({ default: m.BlogDetails })));

// Layout-preserving skeleton matching dark header banner to eliminate CLS (Cumulative Layout Shift)
const PageLoader: React.FC = () => (
  <div className="w-full bg-white" style={{ minHeight: "calc(100vh - 160px)" }}>
    <div className="bg-[#08221E] py-12 lg:py-16 border-b border-teal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-4 w-32 bg-teal-900/40 rounded mb-4" />
        <div className="h-10 w-3/4 max-w-lg bg-teal-900/50 rounded mb-3" />
        <div className="h-4 w-full max-w-md bg-teal-900/30 rounded" />
      </div>
    </div>
  </div>
);

interface AppShellProps {
  onOpenConsultation: (topic?: string) => void;
}

const AppShell: React.FC<AppShellProps> = ({ onOpenConsultation }) => {
  // Define standard subpath route descriptors
  const createRoutesForPrefix = (prefix = "") => [
    <Route key={`${prefix}/`} path={`${prefix}/`} element={<Home onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/hospitals`} path={`${prefix}/hospitals`} element={<Hospitals onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/hospitals/:slug`} path={`${prefix}/hospitals/:slug`} element={<HospitalDetails onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/doctors`} path={`${prefix}/doctors`} element={<Doctors onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/doctors/:slug`} path={`${prefix}/doctors/:slug`} element={<DoctorDetails onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/treatments`} path={`${prefix}/treatments`} element={<Treatments onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/treatments/:slug`} path={`${prefix}/treatments/:slug`} element={<TreatmentDetails onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/services`} path={`${prefix}/services`} element={<Services onOpenConsultation={() => onOpenConsultation("General Patient Services Inquiry")} />} />,
    <Route key={`${prefix}/patient-stories`} path={`${prefix}/patient-stories`} element={<PatientStories onOpenConsultation={() => onOpenConsultation("Patient Experience Review")} />} />,
    <Route key={`${prefix}/about`} path={`${prefix}/about`} element={<About onOpenConsultation={() => onOpenConsultation("General Coordination Inquiry")} />} />,
    <Route key={`${prefix}/faqs`} path={`${prefix}/faqs`} element={<FAQs onOpenConsultation={() => onOpenConsultation("Medical Travel Question")} />} />,
    <Route key={`${prefix}/blog`} path={`${prefix}/blog`} element={<Blogs onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/blog/:slug`} path={`${prefix}/blog/:slug`} element={<BlogDetails onOpenConsultation={onOpenConsultation} />} />,
    <Route key={`${prefix}/contact`} path={`${prefix}/contact`} element={<Contact />} />,
    <Route key={`${prefix}/privacy-policy`} path={`${prefix}/privacy-policy`} element={<PrivacyPolicy />} />,
    <Route key={`${prefix}/terms-and-conditions`} path={`${prefix}/terms-and-conditions`} element={<Terms />} />,
    <Route key={`${prefix}/medical-disclaimer`} path={`${prefix}/medical-disclaimer`} element={<MedicalDisclaimer />} />,
  ];

  return (
    <Routes>
      {/* 1. Default Root English Routes (Preserves 100% of existing Google Indexing) */}
      {createRoutesForPrefix("")}

      {/* 2. Arabic Dedicated Routes (/ar) */}
      {createRoutesForPrefix("/ar")}

      {/* 3. French Dedicated Routes (/fr) */}
      {createRoutesForPrefix("/fr")}

      {/* 4. Russian Dedicated Routes (/ru) */}
      {createRoutesForPrefix("/ru")}

      {/* 404 Catch-All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const App: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedConsultationTopic, setSelectedConsultationTopic] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (topic?: string) => {
    setSelectedConsultationTopic(topic);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
    setSelectedConsultationTopic(undefined);
  };

  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-600 selection:text-white">
          {/* Navigation Bar */}
          <Navbar onOpenConsultation={() => handleOpenConsultation()} />

          {/* Dynamic Route Pages with Suspense */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <AppShell onOpenConsultation={handleOpenConsultation} />
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp Action Button */}
          <WhatsAppFloating />

          {/* Global Consultation / Enquiry Modal (Loaded on-demand only when opened) */}
          {isConsultationModalOpen && (
            <Suspense fallback={null}>
              <EnquiryModal
                isOpen={isConsultationModalOpen}
                onClose={handleCloseConsultation}
                preselectedTreatment={selectedConsultationTopic}
                modalTitle={
                  selectedConsultationTopic
                    ? `Get Free Consultation - ${selectedConsultationTopic}`
                    : "Get Free Medical Consultation & Estimate"
                }
              />
            </Suspense>
          )}
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;

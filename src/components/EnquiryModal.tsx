import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";
import { useLanguage } from "../context/LanguageContext";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
  modalTitle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
  modalTitle
}) => {
  const { t } = useLanguage();

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const displayTitle = modalTitle || t("common.freeConsultationModal", "Get Free Medical Consultation & Estimate");

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-teal-100 overflow-hidden my-8 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#08221E] px-6 py-5 text-white flex items-center justify-between shrink-0 border-b border-teal-900/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {t("common.internationalDesk", "NadwaHealthcare International Desk")}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              {displayTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-xs text-slate-500 mb-5">
            {t("form.subtitle", "Submit medical reports for top specialist review and transparent hospital treatment cost estimate within 24 hours.")}
          </p>
          <EnquiryForm
            preselectedTreatment={preselectedTreatment}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

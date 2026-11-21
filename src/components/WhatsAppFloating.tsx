import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export const WhatsAppFloating: React.FC = () => {
  const { currentLang, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickMessages = currentLang === "ar" ? [
    "مرحباً، أود الحصول على استشارة ورأي طبي مجاني.",
    "أحتاج إلى تقدير تكلفة جراحة أو علاج في دلهي.",
    "هل يمكنكم المساعدة في خطابات دعوة التأشيرة الطبية الهندية؟",
    "لدي تقارير وفحوصات طبية أود إرسالها لتقييم الطبيب."
  ] : currentLang === "fr" ? [
    "Bonjour, j'aimerais obtenir un avis médical gratuit.",
    "J'ai besoin d'une estimation de coût pour une chirurgie à Delhi NCR.",
    "Pouvez-vous m'aider avec les lettres d'invitation pour le visa médical ?",
    "J'ai des rapports médicaux à partager pour évaluation."
  ] : currentLang === "ru" ? [
    "Здравствуйте, я хотел бы получить бесплатное второе медицинское мнение.",
    "Мне нужен расчет стоимости лечения/операции в клиниках Дели.",
    "Помогаете ли вы с визовыми приглашениями для медицинской визы в Индию?",
    "У меня есть медицинские выписки для оценки индийскими врачами."
  ] : [
    "Hello NHC, I would like to get a free medical opinion.",
    "I need a cost estimate for cardiac/heart surgery in Delhi NCR.",
    "Can you assist with Indian medical visa invitation letters?",
    "I have diagnostic reports to share for doctor evaluation."
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl(customMsg || undefined);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setCustomMsg("");
  };

  const handleQuickSelect = (text: string) => {
    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-6 z-50 flex flex-col ${isRTL ? "left-6 items-start" : "right-6 items-end"}`}>
      {/* Mini Chat Card Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-teal-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#08221E] px-4 py-3.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-teal-500/30 flex items-center justify-center border border-teal-400/40">
                  <MessageCircle className="w-5 h-5 text-teal-300" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-[#08221E]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {t("whatsapp.supportTitle", "NadwaHealthcare Support")}
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                </h4>
                <p className="text-[11px] text-teal-200">{t("whatsapp.supportSub", "24/7 International Desk • Delhi NCR")}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 shadow-sm leading-relaxed">
              👋 <strong>{t("whatsapp.welcome", "Welcome to NadwaHealthcare!")}</strong>
              <p className="mt-1">
                {t("whatsapp.welcomeText", "How can we assist your medical journey to India today? Connect directly with our patient care coordinators.")}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{t("whatsapp.quickInquiries", "Quick Inquiries:")}</p>
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickSelect(msg)}
                  className="w-full text-left text-xs bg-white hover:bg-teal-50 hover:text-teal-900 border border-slate-200 hover:border-teal-300 px-3 py-2 rounded-lg transition-all text-slate-700 flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <Send className={`w-3 h-3 text-slate-400 group-hover:text-teal-600 shrink-0 ml-1 ${isRTL ? "rotate-180" : ""}`} />
                </button>
              ))}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleSendCustom} className="pt-1 flex gap-2">
              <input
                id="wa-custom-msg"
                name="customQuestion"
                type="text"
                placeholder={t("whatsapp.placeholder", "Type your question...")}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-xl transition-colors shrink-0"
                aria-label="Send via WhatsApp"
              >
                <Send className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 pt-1">
              <span>{t("whatsapp.directWa", "Direct WhatsApp:")} <bdi dir="ltr">{siteConfig.whatsappDisplay}</bdi></span>
              <span className="text-emerald-700 font-semibold">{t("whatsapp.repliesQuickly", "● Usually replies in 15 mins")}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-sm shadow-lg border border-slate-200/80 text-xs font-semibold text-slate-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {t("whatsapp.chatCoordinator", "Chat with Medical Coordinator")}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Open WhatsApp conversation"
        >
          <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 text-[9px] font-bold text-white items-center justify-center shadow-xs">
              1
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_LANGUAGES, LANGUAGE_CODES } from '../config/languages';

interface LanguageSelectorProps {
  variant?: 'topbar' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'topbar',
  className = '',
}) => {
  const { currentLang, switchLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click/touch outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const activeLang = SUPPORTED_LANGUAGES[currentLang];

  // Mobile Grid View (inside slide-down hamburger drawer)
  if (variant === 'mobile') {
    return (
      <div className={`pt-3 border-t border-teal-900/60 ${className}`}>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
          <Globe className="w-3.5 h-3.5 text-teal-400" />
          <span>Select Language:</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {LANGUAGE_CODES.map((code) => {
            const lang = SUPPORTED_LANGUAGES[code];
            const isSelected = code === currentLang;
            return (
              <button
                key={code}
                type="button"
                onClick={() => switchLanguage(code)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm'
                    : 'bg-[#051714] text-slate-200 hover:bg-teal-900/40 border border-teal-900/60'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#08221E]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Topbar Dropdown View (Desktop / Header)
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-950/60 hover:bg-teal-900/70 border border-teal-800/60 text-slate-200 hover:text-white transition-all text-[11px] font-medium shadow-xs cursor-pointer select-none"
        aria-expanded={isOpen}
        aria-label="Change Language"
      >
        <Globe className="w-3 h-3 text-teal-400 shrink-0" />
        <span className="text-sm leading-none">{activeLang.flag}</span>
        <span className="font-semibold tracking-wide">{activeLang.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 text-teal-300/80 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isRTL ? 'left-0' : 'right-0'
          } mt-1.5 w-48 rounded-2xl bg-[#08221E] border border-teal-700/60 shadow-2xl shadow-black/80 py-1.5 z-[100] animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="px-3 py-1 text-[10px] uppercase font-bold text-teal-400/80 tracking-wider border-b border-teal-900/60 mb-1">
            Languages / اللغات
          </div>
          {LANGUAGE_CODES.map((code) => {
            const lang = SUPPORTED_LANGUAGES[code];
            const isSelected = code === currentLang;
            return (
              <button
                key={code}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  switchLanguage(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500/20 text-teal-300 font-bold'
                    : 'text-slate-200 hover:bg-teal-900/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{lang.flag}</span>
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-[10px] text-slate-400">({lang.name})</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-teal-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

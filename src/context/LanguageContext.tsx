import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  type SupportedLanguage,
  SUPPORTED_LANGUAGES,
  getLanguageFromPath,
  localizePath,
} from '../config/languages';
import { getTranslation } from '../locales';

interface LanguageContextType {
  currentLang: SupportedLanguage;
  dir: 'ltr' | 'rtl';
  t: (key: string, fallback?: string) => string;
  switchLanguage: (lang: SupportedLanguage) => void;
  localizeUrl: (path: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Detect language from the URL path first
  const pathLang = useMemo(() => getLanguageFromPath(location.pathname), [location.pathname]);
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(pathLang);

  // Sync state if URL changes externally (e.g. back/forward navigation)
  useEffect(() => {
    if (pathLang !== currentLang) {
      setCurrentLang(pathLang);
    }
  }, [pathLang]);

  // Direction: Arabic is 'rtl', others are 'ltr'
  const dir = SUPPORTED_LANGUAGES[currentLang]?.dir || 'ltr';
  const isRTL = dir === 'rtl';

  // Apply lang and dir to <html> root element
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = dir;
    if (isRTL) {
      document.documentElement.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
    }
    // Remember preference
    try {
      localStorage.setItem('nhc_preferred_lang', currentLang);
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [currentLang, dir, isRTL]);

  // Translation helper
  const t = (key: string, fallback?: string): string => {
    return getTranslation(currentLang, key, fallback);
  };

  // Helper to switch language and update URL seamlessly
  const switchLanguage = (newLang: SupportedLanguage) => {
    if (newLang === currentLang) return;
    setCurrentLang(newLang);
    const targetUrl = localizePath(location.pathname, newLang) + location.search + location.hash;
    navigate(targetUrl);
  };

  // Helper to construct links matching current active language
  const localizeUrl = (path: string): string => {
    return localizePath(path, currentLang);
  };

  const value = useMemo(
    () => ({
      currentLang,
      dir,
      t,
      switchLanguage,
      localizeUrl,
      isRTL,
    }),
    [currentLang, dir, isRTL, location.pathname]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type SupportedLanguage = 'en' | 'ar' | 'fr' | 'ru';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  prefix: string;
}

export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    prefix: '',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    prefix: '/ar',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    prefix: '/fr',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
    prefix: '/ru',
  },
};

export const LANGUAGE_CODES: SupportedLanguage[] = ['en', 'ar', 'fr', 'ru'];

/**
 * Extracts language code from a URL path.
 * e.g. "/ar/treatments" -> "ar"
 *      "/fr/hospitals" -> "fr"
 *      "/treatments" -> "en"
 */
export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const match = pathname.match(/^\/(ar|fr|ru)(\/|$)/);
  if (match) {
    return match[1] as SupportedLanguage;
  }
  return 'en';
}

/**
 * Removes the language prefix from a path if present.
 * e.g. "/ar/treatments" -> "/treatments"
 *      "/ru" -> "/"
 *      "/treatments" -> "/treatments"
 */
export function stripLangPrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(ar|fr|ru)(\/|$)/, '/');
  return stripped === '' ? '/' : stripped;
}

/**
 * Prepends the appropriate language prefix to a path.
 * e.g. localizePath('/treatments', 'ar') -> "/ar/treatments"
 *      localizePath('/treatments', 'en') -> "/treatments"
 *      localizePath('/', 'ar') -> "/ar"
 */
export function localizePath(path: string, lang: SupportedLanguage): string {
  const clean = stripLangPrefix(path);
  if (lang === 'en') {
    return clean;
  }
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

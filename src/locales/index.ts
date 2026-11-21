import { en } from './en';
import { ar } from './ar';
import { fr } from './fr';
import { ru } from './ru';
import type { SupportedLanguage } from '../config/languages';

export const translations: Record<SupportedLanguage, typeof en> = {
  en,
  ar,
  fr,
  ru,
};

/**
 * Nested key lookup with dot notation:
 * e.g. getTranslation('ar', 'hero.titlePart1') -> "أفضل خدمات"
 */
export function getTranslation(lang: SupportedLanguage, key: string, fallback?: string): string {
  const dict = translations[lang] || translations.en;
  const parts = key.split('.');
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = dict;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // Fallback to English
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let enCurrent: any = translations.en;
      for (const enPart of parts) {
        if (enCurrent && typeof enCurrent === 'object' && enPart in enCurrent) {
          enCurrent = enCurrent[enPart];
        } else {
          return fallback || key;
        }
      }
      return typeof enCurrent === 'string' ? enCurrent : (fallback || key);
    }
  }

  return typeof current === 'string' ? current : (fallback || key);
}

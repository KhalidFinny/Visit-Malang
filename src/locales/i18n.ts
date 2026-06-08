import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import id from './id/translation.json';
import zh from './zh/translation.json';
import ja from './ja/translation.json';
import ko from './ko/translation.json';
import fr from './fr/translation.json';
import nl from './nl/translation.json';
import de from './de/translation.json';
import ru from './ru/translation.json';
import es from './es/translation.json';

export const resources = {
  en: { translation: en },
  id: { translation: id },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  fr: { translation: fr },
  nl: { translation: nl },
  de: { translation: de },
  ru: { translation: ru },
  es: { translation: es },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

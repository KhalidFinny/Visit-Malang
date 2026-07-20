import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Only eagerly load Indonesian (primary + fallback). All other languages
// are loaded on demand via the i18next-chained-backend or dynamic import.
//
// This drops ~200KB from the main bundle (9 unused locale files).

import id from './id/translation.json';

// Map of language → dynamic import for on-demand loading
const localeLoaders: Record<string, () => Promise<unknown>> = {
  en: () => import('./en/translation.json'),
  zh: () => import('./zh/translation.json'),
  ja: () => import('./ja/translation.json'),
  ko: () => import('./ko/translation.json'),
  fr: () => import('./fr/translation.json'),
  nl: () => import('./nl/translation.json'),
  de: () => import('./de/translation.json'),
  ru: () => import('./ru/translation.json'),
  es: () => import('./es/translation.json'),
};

// Custom backend that loads locale files on demand
const lazyBackend = {
  type: 'backend' as const,
  init() {},
  read(language: string, _namespace: string, callback: (err: Error | null, data: unknown) => void) {
    const loader = localeLoaders[language];
    if (!loader) {
      // Unknown language — fall back to Indonesian (already loaded)
      callback(null, {});
      return;
    }
    loader()
      .then((mod) => {
        const data = (mod && typeof mod === 'object' && 'default' in mod) ? mod.default : mod;
        callback(null, data);
      })
      .catch((err) => {
        console.warn(`Failed to load locale "${language}", falling back to Indonesian`, err);
        callback(null, {});
      });
  },
};
const initialLanguage =
  typeof window !== 'undefined'
    ? localStorage.getItem('malangLanguage')?.split('-')[0] || 'id'
    : 'id';

i18n
  .use(lazyBackend)
  .use(initReactI18next)
  .init({
    // Seed with Indonesian so it's available immediately
    resources: {
      id: { translation: id },
    },
    lng: initialLanguage,
    fallbackLng: 'id',
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

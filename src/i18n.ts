import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Locales/en.json';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  type LanguageCode,
} from './Constants/languages';

/**
 * Only English ships in the main bundle. The other locales are ~150 KB of JSON
 * combined, so they are fetched as separate chunks the first time they are used.
 */
const lazyResources: Record<Exclude<LanguageCode, 'en'>, () => Promise<{ default: object }>> = {
  ru: () => import('./Locales/ru.json'),
  pl: () => import('./Locales/pl.json'),
};

const readStoredLanguage = (): LanguageCode => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isSupportedLanguage(stored)) return stored;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — ignore it.
  }

  const fromBrowser = navigator.language?.slice(0, 2);
  return isSupportedLanguage(fromBrowser) ? fromBrowser : DEFAULT_LANGUAGE;
};

const initialLanguage = readStoredLanguage();

i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

export const loadLanguage = async (language: LanguageCode) => {
  if (language !== 'en' && !i18n.hasResourceBundle(language, 'translation')) {
    const { default: translation } = await lazyResources[language]();
    i18n.addResourceBundle(language, 'translation', translation);
  }

  await i18n.changeLanguage(language);
  document.documentElement.lang = language;
};

if (initialLanguage !== DEFAULT_LANGUAGE) {
  void loadLanguage(initialLanguage);
}

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Locales/en.json';
import ru from './Locales/ru.json';
import pl from './Locales/pl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      pl: { translation: pl },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
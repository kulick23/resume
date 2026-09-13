import { useCallback } from 'react';
import { loadLanguage } from '../i18n';
import { LANGUAGE_STORAGE_KEY, type LanguageCode } from '../Constants/languages';

export function useLanguage() {
  return useCallback((language: LanguageCode) => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Persisting the choice is a nice-to-have, never a reason to fail.
    }

    void loadLanguage(language);
  }, []);
}

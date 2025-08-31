import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';
import { LANGUAGES } from '../../Constants/languages';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {LANGUAGES.map(lang => (
        <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss'; 

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <button onClick={() => changeLanguage('pl')}>PL</button>
    </div>
  );
};

export default LanguageSwitcher;
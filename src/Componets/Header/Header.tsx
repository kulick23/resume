import React from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, SOCIALS, STAR_IDS, CONTACTS } from '../../Constants';
import { useLanguage } from '../../Hooks';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const changeLanguage = useLanguage();

  return (
    <header className="header">
      <div className="header__languageSwitcher">
        {LANGUAGES.map((lang, idx) => (
          <React.Fragment key={lang.code}>
            <span onClick={() => changeLanguage(lang.code)} className="header__language">
              {lang.label}
            </span>
            {idx < LANGUAGES.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </div>

      {STAR_IDS.map((id) => (
        <div key={id} id={id}></div>
      ))}

      <div className="header__card">
        <p className="header__text">{t('header.greeting')}</p>
        <div className="header__web">
          <h1 className="header__text">{t('header.web')}</h1>
          <div className="header__favicons">
            {SOCIALS.map((social) => (
              <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                <img className="header__favicons--img" src={social.img} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
        <h1 className="header__text">{t('header.developer')}</h1>
        <div className="header__contact">
          {CONTACTS.map(({ href, label, props }, idx) => (
            <a key={idx} href={href} {...props}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

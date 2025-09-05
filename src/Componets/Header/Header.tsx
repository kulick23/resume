import React from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, SOCIALS, CONTACTS, NAV_LINKS_KEYS } from '../../Constants';
import { useLanguage, useHeader } from '../../Hooks';
import { Link } from 'react-scroll';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = useLanguage();
  const currentLang = i18n.language;
  const { scrolled, isHidden, activeSection } = useHeader();

  const navLinks = NAV_LINKS_KEYS.map((link) => ({ ...link, label: t(link.key) }));

  return (
    <>
      <div className={`header__nav ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hide' : 'show'}`}>
        <div className="header__nav-container">
          <div className="header__nav-logo">
            <h4>Kulinkovich Danila</h4>
          </div>

          <div className="header__nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className={`header__nav-link${activeSection === link.to ? ' header__nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="header__nav-widgets">
            <div className="header__nav-lang">
              {LANGUAGES.map((lang, idx) => (
                <React.Fragment key={lang.code}>
                  <button
                    onClick={() => changeLanguage(lang.code)}
                    className={`header__nav-lang-btn${currentLang === lang.code ? ' header__nav-lang-btn--active' : ''}`}
                  >
                    {lang.label}
                  </button>
                  {idx < LANGUAGES.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header__card">
          <p className="header__text">{t('header.greeting')}</p>
          <div className="header__web">
            <h1 className="header__text">{t('header.web')}</h1>
            <div className="header__favicons">
              {SOCIALS.map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img
                    className="header__favicons--img"
                    src={social.img || '/placeholder.svg'}
                    alt={social.alt}
                  />
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
      </div>
    </>
  );
};

export default Header;

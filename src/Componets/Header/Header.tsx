import React, { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = NAV_LINKS_KEYS.map((link) => ({ ...link, label: t(link.key) }));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`header__nav ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hide' : 'show'}`}>
        <div className="header__nav-container">
          <div className="header__nav-logo">
            <h4>Kulinkovich Danila</h4>
          </div>

          <button
            className={`header__nav-burger ${isMobileMenuOpen ? 'header__nav-burger--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`header__nav-links ${isMobileMenuOpen ? 'header__nav-links--mobile-open' : ''}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className={`header__nav-link${activeSection === link.to ? ' header__nav-link--active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}

            {/* Добавлено: языки внутри мобильного меню */}
            <div className="header__nav-lang header__nav-lang--mobile">
              {LANGUAGES.map((lang, idx) => (
                <React.Fragment key={lang.code}>
                  <button
                    onClick={() => {
                      changeLanguage(lang.code);
                      handleLinkClick();
                    }}
                    className={`header__nav-lang-btn${currentLang === lang.code ? ' header__nav-lang-btn--active' : ''}`}
                  >
                    {lang.label}
                  </button>
                  {idx < LANGUAGES.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
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

      {isMobileMenuOpen && (
        <div className="header__nav-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}

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

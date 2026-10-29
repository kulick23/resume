import React, { useEffect, useState } from 'react';
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const languageButtons = (modifier?: string) => (
    <div className={`header__nav-lang${modifier ? ` ${modifier}` : ''}`}>
      {LANGUAGES.map((lang, idx) => (
        <React.Fragment key={lang.code}>
          <button
            type="button"
            lang={lang.code}
            aria-pressed={currentLang === lang.code}
            onClick={() => {
              changeLanguage(lang.code);
              closeMobileMenu();
            }}
            className={`header__nav-lang-btn${
              currentLang === lang.code ? ' header__nav-lang-btn--active' : ''
            }`}
          >
            {lang.label}
          </button>
          {idx < LANGUAGES.length - 1 && <span aria-hidden="true">|</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <header className={`header__nav ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hide' : 'show'}`}>
        <div className="header__nav-container">
          <div className="header__nav-logo">
            <span>Danila Kulinkovich</span>
          </div>

          <button
            type="button"
            className={`header__nav-burger ${isMobileMenuOpen ? 'header__nav-burger--active' : ''}`}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={t('nav.toggleMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <nav
            id="primary-navigation"
            className={`header__nav-links ${
              isMobileMenuOpen ? 'header__nav-links--mobile-open' : ''
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                href={`#${link.to}`}
                className={`header__nav-link${
                  activeSection === link.to ? ' header__nav-link--active' : ''
                }`}
                aria-current={activeSection === link.to ? 'true' : undefined}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}

            {languageButtons('header__nav-lang--mobile')}
          </nav>

          <div className="header__nav-widgets">{languageButtons()}</div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="header__nav-overlay" onClick={closeMobileMenu} aria-hidden="true" />
      )}

      <div className="header">
        <div className="header__card">
          <h1 className="header__title" aria-label={`${t('header.web')} ${t('header.developer')}`}>
            <span className="header__title-copy header__title-copy--top">
              <span>{t('header.web')}</span>
              <span>{t('header.developer')}</span>
            </span>
            <span className="header__title-copy header__title-copy--bottom" aria-hidden="true">
              <span>{t('header.web')}</span>
              <span>{t('header.developer')}</span>
            </span>
          </h1>
          <div className="header__footer">
            <p>{t('header.subtitle')}</p>
            <div className="header__actions">
              <div className="header__favicons">
                {SOCIALS.map((social) => (
                  <a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                  >
                    <img
                      className="header__favicons--img"
                      src={social.img}
                      alt=""
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
              <div className="header__contact">
                {CONTACTS.map(({ href, label, props }) => (
                  <a key={href} href={href} {...props}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

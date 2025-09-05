import React, { useState, useEffect } from "react"
import "./Header.scss"
import { useTranslation } from "react-i18next"
import { LANGUAGES, SOCIALS, STAR_IDS, CONTACTS } from "../../Constants"
import { useLanguage } from "../../Hooks"
import { Link } from "react-scroll"

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation() // Добавлено i18n
  const changeLanguage = useLanguage()
  const currentLang = i18n.language // Текущий язык
  const [scrolled, setScrolled] = useState(false)
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up")
  const [pastThreshold, setPastThreshold] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("header")

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 0)
      if (y > 150) {
        setPastThreshold(true)
        setScrollDir(y > lastY ? "down" : "up")
      } else {
        setPastThreshold(false)
      }
      lastY = y
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["header", "skills", "projects", "experience", "footer", "contact"]
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const isHidden = pastThreshold && scrollDir === "down"

  return (
    <>
      <div className={`header__nav ${scrolled ? "scrolled" : ""} ${isHidden ? "hide" : "show"}`}>
        <div className="header__nav-container">
          <div className="header__nav-logo">
            <h4>Kulinkovich Danila</h4>
          </div>

          <div className="header__nav-links">
            <Link
              to="header"
              spy={true}
              smooth={true}
              duration={500}
              className={`header__nav-link${activeSection === "header" ? " header__nav-link--active" : ""}`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className={`header__nav-link${activeSection === "skills" ? " header__nav-link--active" : ""}`}
            >
              {t("nav.skills")}
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className={`header__nav-link${activeSection === "projects" ? " header__nav-link--active" : ""}`}
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className={`header__nav-link${activeSection === "experience" ? " header__nav-link--active" : ""}`}
            >
              {t("nav.experience")}
            </Link>
               <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className={`header__nav-link${activeSection === "contact" ? " header__nav-link--active" : ""}`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          <div className="header__nav-widgets">
            <div className="header__nav-lang">
              {LANGUAGES.map((lang, idx) => (
                <React.Fragment key={lang.code}>
                  <button
                    onClick={() => changeLanguage(lang.code)}
                    className={`header__nav-lang-btn${currentLang === lang.code ? " header__nav-lang-btn--active" : ""}`}
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

      <header className="header">
        {STAR_IDS.map((id) => (
          <div key={id} id={id}></div>
        ))}

        <div className="header__card">
          <p className="header__text">{t("header.greeting")}</p>
          <div className="header__web">
            <h1 className="header__text">{t("header.web")}</h1>
            <div className="header__favicons">
              {SOCIALS.map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img className="header__favicons--img" src={social.img || "/placeholder.svg"} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
          <h1 className="header__text">{t("header.developer")}</h1>
          <div className="header__contact">
            {CONTACTS.map(({ href, label, props }, idx) => (
              <a key={idx} href={href} {...props}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

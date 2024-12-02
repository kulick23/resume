import React from "react";
import './header.css';
import LinkedIn from '../../Assets/Icons/linkedin.svg';
import Github from '../../Assets/Icons/github.svg';
import Telegram from '../../Assets/Icons/telegram.svg';
import CV from '../../Assets/CV/cv.pdf'; 
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    React.useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <header className='header'>
            <div className="header__languageSwitcher">
                <span onClick={() => changeLanguage('en')} className="header__language">EN</span> | 
                <span onClick={() => changeLanguage('ru')} className="header__language">RU</span> | 
                <span onClick={() => changeLanguage('pl')} className="header__language">PL</span>
            </div>

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className='header__card'>
                <p className='header__text'>{t('header.greeting')}</p>
                <div className='header__web'>
                    <h1 className='header__text'>{t('header.web')}</h1>
                    <div className='header__favicons'>
                        <a href="https://github.com/kulick23" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={Github} alt="Github" />
                        </a>
                        <a href="https://t.me/chik_chiv" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={Telegram} alt="Telegram" />
                        </a>
                        <a href="https://www.linkedin.com/in/danila-kulinkovich/" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={LinkedIn} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <h1 className='header__text'>{t('header.developer')}</h1>
                <div className='header__contact'>
                    <a href="mailto:danek200326@gmail.com">danek200326@gmail.com</a>
                    <a href={CV} download>CV</a> 
                </div>
            </div>
        </header>
    )
}

export default Header;
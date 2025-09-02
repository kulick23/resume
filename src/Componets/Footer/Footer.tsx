import React from "react";
import './Footer.scss';
import NaboImg from '../../Assets/PngImg/nabo.png';
import { useTranslation } from 'react-i18next';
import { useScrollToSection, useAOS } from '../../Hooks';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const scrollToSection = useScrollToSection();

    useAOS();

    const scrollToTop = () => {
      scrollToSection('header');
    };

    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className="footer__image-container">
                    <img 
                        src={NaboImg} 
                        alt="Nabo" 
                        className='footer__image' 
                        data-aos="fade-up" 
                        onClick={scrollToTop} 
                    />
                    <span className="footer__tooltip">{t('footer.clue')}</span>
                </div>
                <h1 data-aos="fade-up">{t('footer.thankYou')}</h1>
                <h2 data-aos="fade-up">{t('footer.connect')}</h2>
            </div>
        </footer>
    );
}

export default Footer;
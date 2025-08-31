import React, { useEffect } from "react";
import './Footer.scss';
import NaboImg from '../../Assets/PngImg/nabo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const scrollToTop = () => {
        scroller.scrollTo('header', {
            smooth: true,
            duration: 500,
        });
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
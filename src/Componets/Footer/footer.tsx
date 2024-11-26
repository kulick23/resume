import React, { useEffect } from "react";
import './footer.css';
import NaboImg from '../../Assets/nabo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { scroller } from 'react-scroll';

const Footer: React.FC = () => {
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
                <img 
                    src={NaboImg} 
                    alt="Nabo" 
                    className='footer__image' 
                    data-aos="fade-up" 
                    onClick={scrollToTop} 
                />
                <h1 data-aos="fade-up">Thank you for watching</h1>
                <h2 data-aos="fade-up">Looking forward to working together</h2>
            </div>
        </footer>
    );
}

export default Footer;
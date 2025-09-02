import React from 'react';
import './About.scss';
import { useTranslation } from 'react-i18next';
import { ABOUT_IMAGES } from '../../Constants';

export const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='about' data-aos="fade-up">
            <div className='about__right'>
                <p className='about__text'>
                    {t('about.description').split('\n').map((line: string, index: number) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
            {ABOUT_IMAGES.map(img => (
                <img key={img.alt} src={img.src} alt={img.alt} className={img.className} />
            ))}
        </div>
    )
}

export default About;
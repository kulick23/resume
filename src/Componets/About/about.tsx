import React from 'react';
import './About.scss';
import clouds from '../../Assets/PngImg/clouds.png';
import lars from '../../Assets/PngImg/lars.png';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
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
            <img src={clouds} alt="Clouds" className='clouds' />
            <img src={lars} alt="Lars" className='lars' />
        </div>
    )
}

export default About;
import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import aboutImage from '../../Assets/Img/IMG_5400.png';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__container">
        <h1>{t('about.title')}</h1>
        <h3>{t('about.subtitle')}</h3>
        <br />
        <small>{t('about.text1')}</small>
        <br />
        <br />
        <small>{t('about.text2')}</small>
      </div>
      <img src={aboutImage} alt="about" />
    </section>
  );
};

export default About;
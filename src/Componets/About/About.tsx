import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import { use3DEffect } from '../../Hooks';
import { ABOUT_IMAGE, MAX_ROTATE } from '../../Constants';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const { imgRef, handleMouseMove, handleMouseLeave } = use3DEffect(MAX_ROTATE);

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
      <img
        src={ABOUT_IMAGE}
        alt="about"
        ref={imgRef}
        className="about__image-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        draggable={false}
      />
    </section>
  );
};

export default About;

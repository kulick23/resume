import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import aboutImage from '../../Assets/Img/IMG_5400.png';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 15; // max 15deg
    const rotateX = -((y - centerY) / centerY) * 15;
    img.style.setProperty('--rotateX', `${rotateX}deg`);
    img.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (img) {
      img.style.setProperty('--rotateX', `0deg`);
      img.style.setProperty('--rotateY', `0deg`);
    }
  };

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
        src={aboutImage}
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
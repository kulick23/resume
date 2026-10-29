import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import AboutPortrait from '../../Assets/Img/IMG_5400.webp';

const METRIC_KEYS = ['experience', 'commercial', 'stack', 'availability'] as const;

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__content">
        <h1 data-aos="fade-up" data-aos-delay="100">
          {t('about.title')}
        </h1>
        <p className="about__lead" data-aos="fade-up" data-aos-delay="200">
          {t('about.subtitle')}
        </p>
        <div className="about__metrics" aria-label={t('about.metricsLabel')}>
          {METRIC_KEYS.map((key, index) => (
            <div
              className="about__metric"
              key={key}
              data-aos="fade-up"
              data-aos-delay={350 + index * 70}
            >
              <strong>{t(`about.metrics.${key}.value`)}</strong>
              <span>{t(`about.metrics.${key}.label`)}</span>
            </div>
          ))}
        </div>
        <div className="about__text" data-aos="fade-up" data-aos-delay="300">
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
        </div>
      </div>

      <aside className="about__media" data-aos="fade-left" data-aos-delay="250">
        <img
          src={AboutPortrait}
          alt={t('about.imageAlt')}
          className="about__image"
          width={875}
          height={1094}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </aside>
    </section>
  );
};

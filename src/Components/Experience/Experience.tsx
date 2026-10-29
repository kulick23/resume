import React from 'react';
import './Experience.scss';
import experienceStore from '../../Stores/experienceStore';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="experience experience--work">
        <div className="experience__header">
          <h1 data-aos="fade-up">{t('experience.workTitle')}</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="experience__work-list" data-aos="fade-up" data-aos-delay="150">
          {experienceStore.experiences.map((item) => (
            <article className="experience__work-card" key={item.id}>
              <span className={`experience__work-logo experience__work-logo--${item.iconAlt?.toLowerCase() ?? 'company'}`}>
                {item.icon && <img src={item.icon} alt={item.iconAlt ?? ''} loading="lazy" />}
              </span>
              <div className="experience__work-card-title">
                <h3>{t(item.position)}</h3>
                <p>{item.company}</p>
              </div>
              <small>{item.duration}</small>
              <p className="experience__work-description">{t(item.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience experience--education">
        <div className="experience__header">
          <h1 data-aos="fade-up">{t('experience.educationTitle')}</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            {t('experience.educationPill')}
          </p>
        </div>
        <div className="experience__education-grid" data-aos="fade-up" data-aos-delay="120">
          {experienceStore.education.map((item) => (
            <article className="experience__education-card" key={item.id}>
              <div
                className={`experience__education-logo experience__education-logo--${item.iconAlt?.toLowerCase() ?? 'school'}`}
              >
                {item.icon && <img src={item.icon} alt={item.iconAlt ?? ''} loading="lazy" />}
              </div>
              <div>
                <h3>{t(item.position)}</h3>
                <p>{item.company}</p>
                <small>{item.duration}</small>
              </div>
              <p>{t(item.description)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

import React from 'react';
import './Experience.scss';
import experienceStore from '../../Stores/experienceStore';
import { useTranslation } from 'react-i18next';
import { ExperienceItem } from '../ExperienceItem';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="experience">
      <div className="experience__header">
        <h1 data-aos="fade-up">{t('experience.title')}</h1>
      </div>

      <div className="experience__content">
        <div className="experience__column">
          <div className="experience__column-header">
            <h2 data-aos="fade-left">{t('experience.educationTitle')}</h2>
          </div>
          <div className="experience__timeline" data-aos="fade-left">
            {experienceStore.education.map((item) => (
              <ExperienceItem key={`education-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        <div className="experience__column">
          <div className="experience__column-header">
            <h2 data-aos="fade-right">{t('experience.workTitle')}</h2>
          </div>
          <div className="experience__timeline" data-aos="fade-right">
            {experienceStore.experiences.map((item) => (
              <ExperienceItem key={`work-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

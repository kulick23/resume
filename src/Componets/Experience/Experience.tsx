import React from 'react';
import './Experience.scss';
import ExperienceStore from '../../Stores/experienceStore';
import { useTranslation } from 'react-i18next';
import ExperienceItem from '../ExperienceItem';

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
            {ExperienceStore.education.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="experience__column">
          <div className="experience__column-header">
            <h2 data-aos="fade-right">{t('experience.workTitle')}</h2>
          </div>
          <div className="experience__timeline" data-aos="fade-right">
            {ExperienceStore.experiences.map((item, idx) => (
              <ExperienceItem key={item.id ?? idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

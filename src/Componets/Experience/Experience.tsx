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
        <h2 className="experience__title">{t('experience.title')}</h2>
      </div>

      <div className="experience__content">
        <div className="experience__column">
          <div className="experience__column-header">
            <h3>{t('experience.educationTitle')}</h3>
          </div>
          <div className="experience__timeline">
            {ExperienceStore.education.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="experience__column">
          <div className="experience__column-header">
            <h3>{t('experience.workTitle')}</h3>
          </div>
          <div className="experience__timeline">
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

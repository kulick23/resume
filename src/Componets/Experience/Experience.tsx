import React from 'react';
import './Experience.scss';
import ExperienceStore from '../../Stores/experienceStore';
import { useTranslation } from 'react-i18next';

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
              <div className="experience__item" key={idx}>
                <div className="experience__item-header">
                  <div className="experience__icon-wrapper">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.iconAlt || ''}
                        className="experience__icon"
                      />
                    )}
                  </div>
                  <div className="experience__item-info">
                    <h4 className="experience__item-title">{t(item.position)}</h4>
                    <p className="experience__item-subtitle">{item.company}</p>
                  </div>
                </div>
                <div className="experience__item-info">
                  <span className="experience__item-period">{item.duration}</span>
                  <p className="experience__item-description">{t(item.description)}</p>
                </div>{' '}
              </div>
            ))}
          </div>
        </div>

        <div className="experience__column">
          <div className="experience__column-header">
            <h3>{t('experience.workTitle')}</h3>
          </div>
          <div className="experience__timeline">
            {ExperienceStore.experiences.map((item, idx) => (
              <div className="experience__item" key={item.id ?? idx}>
                <div className="experience__item-header">
                  <div className="experience__icon-wrapper">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.iconAlt || ''}
                        className="experience__icon"
                      />
                    )}
                  </div>
                  <div className="experience__item-info">
                    <h4 className="experience__item-title">{t(item.position)}</h4>
                    <p className="experience__item-subtitle">{item.company}</p>
                  </div>
                </div>
                <div className="experience__item-info">
                  <span className="experience__item-period">{item.duration}</span>
                  <p className="experience__item-description">{t(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

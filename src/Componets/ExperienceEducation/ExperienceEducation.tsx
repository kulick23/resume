import React from "react";
import "./ExperienceEducation.scss";
import ExperienceStore from "../../Stores/experienceStore";
import { useTranslation } from 'react-i18next';

export const ExperienceEducation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="experience-education">
      <div className="experience-education__header">
        <h2 className="experience-education__title">{t('experience.title')}</h2>
      </div>

      <div className="experience-education__content">
        <div className="experience-education__column">
          <div className="experience-education__column-header">
            <h3>{t('experience.educationTitle')}</h3>
          </div>
          <div className="experience-education__timeline">
            {ExperienceStore.education.map((item, idx) => (
              <div className="experience-education__item" key={idx}>
                <div className="experience-education__item-header">
                  <div className="experience-education__icon-wrapper">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.iconAlt || ''}
                        className="experience-education__icon"
                      />
                    )}
                  </div>
                  <div className="experience-education__item-info">
                    <h4 className="experience-education__item-title">{t(item.position)}</h4>
                    <p className="experience-education__item-subtitle">{item.company}</p>
                  </div>
                </div>
   <div className="experience-education__item-info">
                  <span className="experience-education__item-period">{item.duration}</span>
                  <p className="experience-education__item-description">{t(item.description)}</p>
                </div>              </div>
            ))}
          </div>
        </div>

        <div className="experience-education__column">
          <div className="experience-education__column-header">
            <h3>{t('experience.workTitle')}</h3>
          </div>
          <div className="experience-education__timeline">
            {ExperienceStore.experiences.map((item, idx) => (
              <div className="experience-education__item" key={item.id ?? idx}>
                <div className="experience-education__item-header">
                  <div className="experience-education__icon-wrapper">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.iconAlt || ''}
                        className="experience-education__icon"
                      />
                    )}
                  </div>
                  <div className="experience-education__item-info">
                    <h4 className="experience-education__item-title">{t(item.position)}</h4>
                    <p className="experience-education__item-subtitle">{item.company}</p>
                  </div>
                </div>
                <div className="experience-education__item-info">
                  <span className="experience-education__item-period">{item.duration}</span>
                  <p className="experience-education__item-description">{t(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;

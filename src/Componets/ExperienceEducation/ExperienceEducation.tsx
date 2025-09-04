import React from "react";
import "./ExperienceEducation.scss";
import ExperienceStore from "../../Stores/experienceStore";

export const ExperienceEducation: React.FC = () => (
  <section className="experience-education">
    <div className="experience-education__header">
      <h2 className="experience-education__title">Опыт и образование</h2>
      <p className="experience-education__subtitle">Мой путь в разработке</p>
    </div>

    <div className="experience-education__content">
      <div className="experience-education__column">
        <div className="experience-education__column-header">
          <h3>Образование</h3>
        </div>
        <div className="experience-education__timeline">
          {ExperienceStore.education.map((item, idx) => (
            <div className="experience-education__item" key={idx}>
              <div className="experience-education__item-header">
                <div className="experience-education__icon-wrapper">
                  {/* Можно добавить иконку, если появится */}
                </div>
                <div className="experience-education__item-info">
                  <h4 className="experience-education__item-title">{item.position}</h4>
                  <p className="experience-education__item-subtitle">{item.company}</p>
                  <span className="experience-education__item-period">{item.duration}</span>
                </div>
              </div>
              <p className="experience-education__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-education__column">
        <div className="experience-education__column-header">
          <h3>Опыт работы</h3>
        </div>
        <div className="experience-education__timeline">
          {ExperienceStore.experiences.map((item, idx) => (
            <div className="experience-education__item" key={item.id ?? idx}>
              <div className="experience-education__item-header">
                <div className="experience-education__icon-wrapper">
                  {/* Можно добавить иконку, если появится */}
                </div>
                <div className="experience-education__item-info">
                  <h4 className="experience-education__item-title">{item.position}</h4>
                  <p className="experience-education__item-subtitle">{item.company}</p>
                  <span className="experience-education__item-period">{item.duration}</span>
                </div>
              </div>
              <p className="experience-education__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceEducation;

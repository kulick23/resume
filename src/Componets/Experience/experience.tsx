import React from "react";
import { observer } from "mobx-react-lite";
import workExperienceStore from "../../Stores/experienceStore";
import "./Experience.scss";
import { useTranslation } from 'react-i18next';

const Experience: React.FC = observer(() => {
    const { t } = useTranslation();
    const sortedExperiences = [...workExperienceStore.experiences].sort((a, b) => a.id - b.id);
    const total = sortedExperiences.length;

    return (
        <div data-aos="fade-up" className="experience">
            <h1 >{t('experience.title')}</h1>
            <div className="experince__block">
            <div  className="experience__timeline" />
            {sortedExperiences.map((experience, index) => (
                <div
                    key={experience.id}
                    className={`experience__item ${index % 2 === 0 ? 'experience__item--top' : 'experience__item--bottom'}`}
                    style={{ left: `${(index + 1) * (80 / (total + 1))}%` }}
                >
                    <div className="experience__content">
                        <h3 className="experience__company">{experience.company}</h3>
                        <p className="experience__position">{t(experience.position)}</p>
                        <p className="experience__duration">{experience.duration}</p>
                        <p className="experience__description">{t(experience.description)}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
});

export default Experience;
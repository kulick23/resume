import React from "react";
import { observer } from "mobx-react-lite";
import skillsStore from "../../Stores/skillsStore";
import './Skills.scss';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = observer(() => {
    const { t } = useTranslation();

    return (
        <div className="skills">
            <h1 data-aos="fade-up">{t('skills.title')}</h1>
            <div className="skills__categories">
                {Object.entries(skillsStore.skills).map(([category, skills]) => (
                    <div key={category} className="skills__category" data-aos="fade-up">
                        <h3 className="skills__category--title">{t(`skills.${category.replace(' ', '').toLowerCase()}`)}</h3>
                        <ul className="skills__category--list" data-aos="fade-left">
                            {skills.map((skill) => (
                                <li key={skill} className="skills__category--item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Skills;
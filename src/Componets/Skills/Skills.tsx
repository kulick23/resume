import React from 'react';
import { observer } from 'mobx-react-lite';
import { skillsStore } from '../../Stores';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

const CATEGORY_COLORS: Record<string, string> = {
  techSkills: '#ff7101',
  softSkills: '#019b95',
  Tools: '#34C759',
  Languages: '#e94560',
};

export const Skills: React.FC = observer(() => {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <h1 data-aos="fade-up">{t('skills.title')}</h1>
      <div className="skills__categories">
        {Object.entries(skillsStore.skills).map(([category, skills]) => {
          const color = CATEGORY_COLORS[category] || '#FF7111';
          return (
            <div
              key={category}
              className="skills__category"
              data-aos="fade-up"
              style={{ '--category-color': color } as React.CSSProperties}
            >
              <h3
                className="skills__category--title"
                style={{ color }}
              >
                {t(`skills.${category.replace(' ', '').toLowerCase()}`)}
              </h3>
              <ul className="skills__category--list" data-aos="fade-left">
                {skills.map((skill) => (
                  <li key={skill} className="skills__category--item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Skills;

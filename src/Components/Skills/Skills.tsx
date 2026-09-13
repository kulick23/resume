import React from 'react';
import { observer } from 'mobx-react-lite';
import { skillsStore } from '../../Stores';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

const CATEGORY_COLORS: Record<string, string> = {
  techSkills: 'rgb(231,216,197)',
  softSkills: '#a5907b',
  language: '#a5907b',
};

const FALLBACK_COLOR = '#FF7111';

// Categories whose entries are translation keys rather than plain labels.
const TRANSLATED_CATEGORIES = new Set(['softSkills', 'language']);

export const Skills: React.FC = observer(() => {
  const { t } = useTranslation();

  return (
    <section className="skills">
      <h1 data-aos="fade-up">{t('skills.title')}</h1>
      <div className="skills__categories">
        {Object.entries(skillsStore.skills).map(([category, skills]) => {
          const color = CATEGORY_COLORS[category] ?? FALLBACK_COLOR;

          return (
            <div
              key={category}
              className="skills__category"
              data-aos="fade-up"
              style={{ '--category-color': color } as React.CSSProperties}
            >
              <h3 className="skills__category--title" style={{ color }}>
                {t(`skills.${category.toLowerCase()}`)}
              </h3>
              <ul className="skills__category--list" data-aos="fade-left">
                {skills.map((skill) => (
                  <li key={skill} className="skills__category--item">
                    {TRANSLATED_CATEGORIES.has(category) ? t(skill) : skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
});

import React from 'react';
import { observer } from 'mobx-react-lite';
import { skillsStore } from '../../Stores';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
const TRANSLATED_CATEGORIES = new Set(['language']);

export const Skills: React.FC = observer(() => {
  const { t } = useTranslation();
  const entries = Object.entries(skillsStore.skills);

  return (
    <section className="skills">
      <div className="skills__header" data-aos="fade-up">
        <h1>{t('skills.title')}</h1>
        <p>{t('skills.subtitle')}</p>
      </div>

      <div className="skills__list" data-aos="fade-up" data-aos-delay="120">
        {entries.map(([category, skills]) => (
          <article className="skills__group" key={category}>
            <h3>{t(`skills.${category.toLowerCase()}`)}</h3>
            <ul>
              {skills.slice(0, 8).map((skill) => (
                <li key={skill}>{TRANSLATED_CATEGORIES.has(category) ? t(skill) : skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
});

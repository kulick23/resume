import React from 'react';
import { observer } from 'mobx-react-lite';
import { skillsStore } from '../../Stores';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
import FrontendIcon from '../../Assets/Icons/skill-frontend.svg';
import SapIcon from '../../Assets/Icons/skill-sap.svg';
import LanguageIcon from '../../Assets/Icons/skill-language.svg';

const CATEGORY_META: Record<string, { color: string; icon: string }> = {
  frontend: { color: '#55b84a', icon: FrontendIcon },
  sapBackend: { color: '#2f80ed', icon: SapIcon },
  language: { color: '#e7d8c5', icon: LanguageIcon },
};

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

      <div className="skills__top-grid" data-aos="fade-up" data-aos-delay="120">
        {entries.map(([category, skills]) => (
          <div className="skills__top-item" key={category}>
            <ul>
              {skills.slice(0, 8).map((skill) => (
                <li key={skill}>{TRANSLATED_CATEGORIES.has(category) ? t(skill) : skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills__cards">
        {entries.map(([category], index) => {
          const meta = CATEGORY_META[category] ?? CATEGORY_META.frontend;

          return (
            <article
              key={category}
              className="skills__card"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              style={
                {
                  '--skill-color': meta.color,
                  '--skill-icon': `url(${meta.icon})`,
                } as React.CSSProperties
              }
            >
              <span className="skills__card-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="skills__card-icon" aria-hidden="true" />
              <h3>{t(`skills.${category.toLowerCase()}`)}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
});

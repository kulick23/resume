import type React from 'react';
import { observer } from 'mobx-react-lite';
import projectsStore from '../../Stores/projectsStore';
import { Laptop } from '../Laptop';
import { useTranslation } from 'react-i18next';
import { FILTERS } from '../../Constants';
import './Project.scss';
import type { Project as ProjectType, ProjectCategory } from '../../types';

interface ProjectProps {
  onNDAClick?: (project: ProjectType) => void;
}

export const Project: React.FC<ProjectProps> = observer(({ onNDAClick }) => {
  const { t } = useTranslation();
  const filteredProjects = projectsStore.filteredProjects;
  const selectedCategory = projectsStore.selectedCategory;

  const handleFilterChange = (category: ProjectCategory) => {
    projectsStore.setSelectedCategory(category);
  };

  return (
    <section className="project" data-aos="fade-up">
      <div className="project__header">
        <p>{t('projects.subtitle')}</p>
        <h1 className="project__title">{t('projects.title')}</h1>
      </div>

      <div className="project__filters" role="group" aria-label={t('projects.title')}>
        {FILTERS.map((filter) => (
          <button
            type="button"
            key={filter.key}
            aria-pressed={selectedCategory === filter.key}
            className={`project__filter-btn ${
              selectedCategory === filter.key ? 'project__filter-btn--active' : ''
            }`}
            onClick={() => handleFilterChange(filter.key)}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>

      <div className="project__container">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.title}
            className="project__item"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <Laptop
              project={project}
              onInfoClick={onNDAClick}
              showCodeButton={project.category !== 'business'}
              enableProjectLink={project.category !== 'business' || Boolean(project.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
});

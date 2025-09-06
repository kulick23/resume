import type React from 'react';
import { observer } from 'mobx-react-lite';
import projectsStore from '../../Stores/projectsStore';
import Laptop from '../Laptop';
import BusinessLaptop from '../BusinessLaptop';
import { useTranslation } from 'react-i18next';
import { FILTERS } from '../../Constants';
import type { BusinessProject } from '../../types';
import './Project.scss';

interface ProjectProps {
  onNDAClick: (project: BusinessProject) => void;
}

export const Project: React.FC<ProjectProps> = observer(({ onNDAClick }) => {
  const filteredProjects = projectsStore.filteredProjects;
  const selectedCategory = projectsStore.selectedCategory;
  const { t } = useTranslation();

  const handleFilterChange = (category: 'pet' | 'business') => {
    console.log('Filter changed to:', category);
    projectsStore.setSelectedCategory(category);
  };

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">{t('projects.title')}</h1>

      <div className="project__filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            className={`project__filter-btn ${selectedCategory === filter.key ? 'project__filter-btn--active' : ''}`}
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
            data-aos-delay={idx * 200}
          >
            {project.category === 'business' || project.isNDA ? (
              <BusinessLaptop project={project} onNDAClick={onNDAClick} />
            ) : (
              <Laptop project={project} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Project;

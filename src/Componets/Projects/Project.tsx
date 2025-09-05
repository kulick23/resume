import type React from 'react';
import { observer } from 'mobx-react-lite';
import { projectsStore } from '../../Stores';
import Laptop from '../Laptop';
import { useTranslation } from 'react-i18next';
import './Project.scss';

export const Project: React.FC = observer(() => {
  const { filteredProjects, selectedCategory, setSelectedCategory } = projectsStore;
  const { t } = useTranslation();

  const handleFilterChange = (category: 'all' | 'commercial' | 'pet') => {
    setSelectedCategory(category);
  };

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">{t('projects.title')}</h1>

      <div className="project__filters">
        <button
          className={`project__filter-btn ${selectedCategory === 'all' ? 'project__filter-btn--active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          Все проекты
        </button>
        <button
          className={`project__filter-btn ${selectedCategory === 'commercial' ? 'project__filter-btn--active' : ''}`}
          onClick={() => handleFilterChange('commercial')}
        >
          Коммерческие
        </button>
        <button
          className={`project__filter-btn ${selectedCategory === 'pet' ? 'project__filter-btn--active' : ''}`}
          onClick={() => handleFilterChange('pet')}
        >
          Pet проекты
        </button>
      </div>

      {/* Один блок для всех проектов */}
      <div className="project__container" data-aos="fade-up">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project__item">
            <Laptop project={project} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Project;

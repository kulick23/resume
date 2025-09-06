import type React from 'react';
import { observer } from 'mobx-react-lite';
import projectsStore from '../../Stores/projectsStore';
import Laptop from '../Laptop';
import BusinessLaptop from '../BusinessLaptop';
import NDAModal from '../NDAModal';
import { useTranslation } from 'react-i18next';
import { FILTERS } from '../../Constants';
import { useState } from 'react';
import './Project.scss';

export const Project: React.FC = observer(() => {
  const filteredProjects = projectsStore.filteredProjects;
  const selectedCategory = projectsStore.selectedCategory;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleFilterChange = (category: 'pet' | 'business') => {
    console.log('Filter changed to:', category);
    projectsStore.setSelectedCategory(category);
  };

  const handleNDAClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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

      <div className="project__container" data-aos="fade-up">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project__item">
            {project.category === 'business' || project.isNDA ? (
              <BusinessLaptop project={project} onNDAClick={() => handleNDAClick(project)} />
            ) : (
              <Laptop project={project} />
            )}
          </div>
        ))}
      </div>

      <NDAModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
    </div>
  );
});

export default Project;

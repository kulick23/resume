import { useState } from 'react';
import type { BusinessProject } from '../types';

export const useNDAModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<BusinessProject | null>(null);

  const handleNDAClick = (project: BusinessProject) => {
    console.log('handleNDAClick called with:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    isModalOpen,
    selectedProject,
    handleNDAClick,
    handleCloseModal,
  };
};
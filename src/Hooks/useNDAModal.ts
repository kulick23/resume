import { useCallback, useState } from 'react';
import type { Project } from '../types';

export const useNDAModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNDAClick = useCallback((project: Project) => {
    console.log('handleNDAClick called with:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  return {
    isModalOpen,
    selectedProject,
    handleNDAClick,
    handleCloseModal,
  };
};

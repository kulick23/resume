export interface Project {
  title: string;
  projectImg: string;
  mobileImg?: string;
  description?: string;
  stack: string[];
  link: string;
  repoLink: string;
  category: 'pet' | 'business';
  isNDA?: boolean;
  ndaDescription?: string;
}

export interface BusinessProject extends Project {
  category: 'business';
  isNDA?: boolean;
  ndaDescription?: string;
}

export interface LaptopProps {
  project: Project;
  onInfoClick?: (project: Project) => void;
  showCodeButton?: boolean;
  enableProjectLink?: boolean;
}

export interface BusinessLaptopProps {
  project: Project;
  onNDAClick: (project: Project) => void; // Изменено на Project
}

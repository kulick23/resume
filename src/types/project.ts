export type ProjectCategory = 'pet' | 'business';

export interface Project {
  title: string;
  projectImg: string;
  gallery?: string[];
  featured?: boolean;
  role?: string;
  description?: string;
  stack: string[];
  link: string;
  repoLink: string;
  category: ProjectCategory;
  isNDA?: boolean;
  ndaDescription?: string;
}

export interface LaptopProps {
  project: Project;
  onInfoClick?: (project: Project) => void;
  showCodeButton?: boolean;
  enableProjectLink?: boolean;
}

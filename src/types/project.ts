export interface Project {
  title: string;
  projectImg: string;
  mobileImg?: string;
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
}

export interface BusinessLaptopProps {
  project: Project;
  onNDAClick: (project: Project) => void; // Изменено на Project
}

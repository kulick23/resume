export interface Project {
  title: string;
  projectImg: string;
  mobileImg?: string;
  stack: string[];
  link: string;
  repoLink: string;
  category: 'commercial' | 'pet'; // добавляем категорию в интерфейс
}

export interface LaptopProps {
  project: Project;
}

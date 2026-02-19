import { makeAutoObservable } from 'mobx';

interface Project {
  title: string;
  link: string;
  repoLink: string;
  stack: string[];
  projectImg: string;
  mobileImg?: string;
  category: 'pet' | 'business';
  isNDA?: boolean;
  ndaDescription?: string;
}

type PreviewSize = 'desktop' | 'mobile';

const linkToPreviewKey = (link: string): string => {
  try {
    const url = new URL(link);
    const host = url.hostname.replace(/^www\./, '');
    const pathname = url.pathname.replace(/\/+$/, '');
    const rawKey = `${host}${pathname}`;

    return rawKey
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  } catch {
    return encodeURIComponent(link).toLowerCase();
  }
};

const getPreviewPath = (link: string, size: PreviewSize = 'desktop'): string => {
  return `/previews/${linkToPreviewKey(link)}-${size}.jpg`;
};

const createPetProject = (project: Omit<Project, 'projectImg' | 'mobileImg' | 'category'>): Project => ({
  ...project,
  projectImg: getPreviewPath(project.link, 'desktop'),
  mobileImg: getPreviewPath(project.link, 'mobile'),
  category: 'pet',
});

class ProjectsStore {
  projects: Project[] = [
    createPetProject({
      title: 'London Grill',
      repoLink: 'https://github.com/kulick23/food',
      link: 'https://london-grill.vercel.app/',
      stack: ['React', 'TS', 'Redux', 'Firebase'],
    }),
    createPetProject({
      title: 'CyberX',
      repoLink: 'https://github.com/kulick23/menu-tg',
      link: 'https://cyber-x-seven.vercel.app/menu',
      stack: ['React', 'TS'],
    }),
    createPetProject({
      title: 'Pet',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://pet-ten-sigma.vercel.app/',
      stack: ['HTML', 'CSS'],
    }),
    createPetProject({
      title: 'Beats',
      repoLink: 'https://github.com/kulick23/beats',
      link: 'https://beats-ashen.vercel.app/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
    }),
    createPetProject({
      title: 'Energo',
      repoLink: 'https://github.com/kulick23/EnergyConstruction',
      link: 'https://kulick23.github.io/EnergyConstruction/',
      stack: ['HTML', 'CSS', 'OWL carousel'],
    }),
    createPetProject({
      title: 'Nike',
      repoLink: 'https://github.com/kulick23/slider_nike',
      link: 'https://kulick23.github.io/slider_nike/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
    }),
    createPetProject({
      title: 'Indonesia',
      repoLink: 'https://kulick23.github.io/Indonesia/',
      link: 'https://kulick23.github.io/Indonesia/',
      stack: ['HTML', 'CSS'],
    }),
        createPetProject({
      title: 'Building',
      repoLink: 'https://kulick23.github.io/Indonesia/',
      link: 'https://kulick23.github.io/building/',
      stack: ['HTML', 'CSS'],
    }),
  ];

  businessProjects: Project[] = [
    {
      title: 'businessProjects.gameItemsStore.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'SCSS', 'MobX', 'Email JS'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.gameItemsStore.description',
    },
    {
      title: 'businessProjects.companyWebsite.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'SCSS', 'Redux', 'RTK Query'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.companyWebsite.description',
    },
    {
      title: 'businessProjects.nftMarketplace.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.nftMarketplace.description',
    },
    {
      title: 'businessProjects.companyWebsite2.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.companyWebsite2.description',
    },
    {
      title: 'businessProjects.telegramMiniApp.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query', 'Telegram API'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.telegramMiniApp.description',
    },
    {
      title: 'businessProjects.performanceSystem.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query'],
      projectImg: '',
      category: 'business',
      isNDA: true,
      ndaDescription: 'businessProjects.performanceSystem.description',
    },
  ];

  selectedCategory: 'pet' | 'business' = 'pet';

  constructor() {
    makeAutoObservable(this);
  }

  get filteredProjects() {
    if (this.selectedCategory === 'pet') {
      return this.petProjects;
    }
    if (this.selectedCategory === 'business') {
      return this.businessProjects;
    }
    return this.petProjects;
  }

  setSelectedCategory(category: 'pet' | 'business') {
    this.selectedCategory = category;
  }

  get petProjects() {
    return this.projects.filter((project) => project.category === 'pet');
  }

  get businessProjectsList() {
    return this.businessProjects;
  }
}

const projectsStore = new ProjectsStore();

export default projectsStore;

import { makeAutoObservable } from 'mobx';
import beteraDesktopImg from '../Assets/Screenshot/betera-desktop.png';
import cyberXDesktopImg from '../Assets/Screenshot/cyberX-desktop.png';
import cyberXMobileImg from '../Assets/Screenshot/cyberX-mobile.png';
import pavepoDesktopImg from '../Assets/Screenshot/pavepo-desktop.png';
import pavepoMobileImg from '../Assets/Screenshot/pavepo-mobile.png';
import pixelVigorDesktopImg from '../Assets/Screenshot/PixelVigor-desktop.png';
import pixelVigorMobileImg from '../Assets/Screenshot/PixelVigor-mobile.png';
import primeNetDesktopImg from '../Assets/Screenshot/primeNet-desktop.png';
import primeNetMobileImg from '../Assets/Screenshot/primeNet-mobile.png';
import rentalSkinDesktopImg from '../Assets/Screenshot/rentalSkin-desktop.png';
import rentalSkinMobileImg from '../Assets/Screenshot/rentalSkin-mobile.png';
import xeraDesktopImg from '../Assets/Screenshot/xera-desktop.png';
import xeraMobileImg from '../Assets/Screenshot/xera-mobile.png';

interface Project {
  title: string;
  link: string;
  repoLink: string;
  stack: string[];
  projectImg: string;
  mobileImg?: string;
  description?: string;
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

const createBusinessProject = (
  project: Omit<Project, 'category'> & { mobileImg?: string }
): Project => ({
  ...project,
  category: 'business',
});

class ProjectsStore {
  projects: Project[] = [
    createPetProject({
      title: 'London Grill',
      description: 'petProjects.londonGrill.description',
      repoLink: 'https://github.com/kulick23/food',
      link: 'https://london-grill.vercel.app/',
      stack: ['React', 'React Router', 'CSS', 'MobX', 'Vite', 'Firebase', 'Vercel'],
    }),
         createPetProject({
      title: 'Vinyl Store',
      description: 'petProjects.vinylStore.description',
      repoLink: 'https://github.com/SDC-Team-Projects/IBM-team-project',
      link: 'https://ibm-team-project-wwrs.vercel.app/',
      stack: ['React', 'React Router', 'SCSS', 'RTQ', 'Vite', 'Postgres','Vercel/Railway'],
    }),
    createPetProject({
      title: 'Pet',
      description: 'petProjects.pet.description',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://pet-ten-sigma.vercel.app/',
      stack: ['React', 'TS', 'SCSS', 'Vite', 'Swiper', 'Vercel'],
    }),
    createPetProject({
      title: 'Beats',
      description: 'petProjects.beats.description',
      repoLink: 'https://github.com/kulick23/beats',
      link: 'https://beats-ashen.vercel.app/',
      stack: ['React', 'TS', 'CSS', 'Vite', 'Swiper', 'Vercel'],
    }),
       createPetProject({
      title: 'Nike',
      description: 'petProjects.nike.description',
      repoLink: 'https://github.com/kulick23/slider_nike',
      link: 'https://kulick23.github.io/slider_nike/',
      stack: ['HTML', 'CSS', 'JS', 'Vite', 'gh-pages'],
    }),
    createPetProject({
      title: 'Energo',
      description: 'petProjects.energo.description',
      repoLink: 'https://github.com/kulick23/EnergyConstruction',
      link: 'https://kulick23.github.io/EnergyConstruction/',
      stack: ['HTML', 'CSS', 'JS', 'jQuery', 'Owl Carousel', 'gh-pages'],
    }),
 
    createPetProject({
      title: 'Indonesia',
      description: 'petProjects.indonesia.description',
      repoLink: 'https://github.com/kulick23/Indonesia',
      link: 'https://kulick23.github.io/Indonesia/',
      stack: ['HTML', 'CSS', 'gh-pages'],
    }),
        createPetProject({
      title: 'Building',
      description: 'petProjects.building.description',
      repoLink: 'https://github.com/kulick23/building',
      link: 'https://kulick23.github.io/building/',
      stack: ['HTML', 'CSS', 'gh-pages'],
    }),
  ];

  businessProjects: Project[] = [
     createBusinessProject({
      title: 'CyberX Menu',
      link: 'https://cyber-x-seven.vercel.app/menu',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'Firebase', 'RTQ', 'Vercel', 'i18'],
      projectImg: cyberXDesktopImg,
      mobileImg: cyberXMobileImg,
      isNDA: false,
      ndaDescription: 'businessProjects.telegramMiniApp.description',
    }),
      createBusinessProject({
      title: 'Betera Document Platform',
      link: '',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'React Router', 'MUI', 'RTK Query', 'i18', 'Zustand', 'SCSS', 'PDF.js', 'Docker'],
      projectImg: beteraDesktopImg,
      isNDA: false,
      ndaDescription: 'businessProjects.companyWebsite2.description',
    }),
     createBusinessProject({
      title: 'Prime Network',
      link: '',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'SCSS', 'Telegram Mini Apps SDK', 'RTK Query', 'DnD Kit', 'date-fns', 'QRCode'],
      projectImg: primeNetDesktopImg,
      mobileImg: primeNetMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.companyWebsite.description',
    }),
     createBusinessProject({
      title: 'TheXera NFT Art Platform',
      link: '',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'SCSS', 'Lottie React', 'React Anchor Link', 'React Scroll', 'Smooth Scrollbar + Simplebar'],
      projectImg: xeraDesktopImg,
      mobileImg: xeraMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.designSystem.description',
    }),
   
    createBusinessProject({
      title: 'businessProjects.nftMarketplace.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query'],
      projectImg: pixelVigorDesktopImg,
      mobileImg: pixelVigorMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.nftMarketplace.description',
    }),
  
   
    createBusinessProject({
      title: 'businessProjects.performanceSystem.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'Scss', 'Redux', 'RTK Query'],
      projectImg: pavepoDesktopImg,
      mobileImg: pavepoMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.performanceSystem.description',
    }),
        createBusinessProject({
      title: 'businessProjects.gameItemsStore.title',
      link: '',
      repoLink: '',
      stack: ['React', 'TypeScript', 'Vite', 'SCSS', 'MobX', 'Email JS'],
      projectImg: rentalSkinDesktopImg,
      mobileImg: rentalSkinMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.gameItemsStore.description',
    }),
   
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

import { makeAutoObservable } from 'mobx';
import type { Project, ProjectCategory } from '../types';
import beteraDesktopImg from '../Assets/Screenshot/betera-desktop.webp';
import cyberXDesktopImg from '../Assets/Screenshot/cyberX-desktop.webp';
import cyberXMobileImg from '../Assets/Screenshot/cyberX-mobile.webp';
import pavepoDesktopImg from '../Assets/Screenshot/pavepo-desktop.webp';
import pavepoMobileImg from '../Assets/Screenshot/pavepo-mobile.webp';
import pixelVigorDesktopImg from '../Assets/Screenshot/PixelVigor-desktop.webp';
import pixelVigorMobileImg from '../Assets/Screenshot/PixelVigor-mobile.webp';
import primeNetDesktopImg from '../Assets/Screenshot/primeNet-desktop.webp';
import primeNetMobileImg from '../Assets/Screenshot/primeNet-mobile.webp';
import rentalSkinDesktopImg from '../Assets/Screenshot/rentalSkin-desktop.webp';
import rentalSkinMobileImg from '../Assets/Screenshot/rentalSkin-mobile.webp';
import xeraDesktopImg from '../Assets/Screenshot/xera-desktop.webp';
import xeraMobileImg from '../Assets/Screenshot/xera-mobile.webp';

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

// Previews live in /public, so they need the deployment base prefix.
const getPreviewPath = (link: string, size: PreviewSize = 'desktop'): string =>
  `${import.meta.env.BASE_URL}previews/${linkToPreviewKey(link)}-${size}.webp`;

const createPetProject = (
  project: Omit<Project, 'projectImg' | 'mobileImg' | 'category'>,
): Project => ({
  ...project,
  projectImg: getPreviewPath(project.link, 'desktop'),
  mobileImg: getPreviewPath(project.link, 'mobile'),
  category: 'pet',
});

const createBusinessProject = (
  project: Omit<Project, 'category'> & { mobileImg?: string },
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
      stack: ['React', 'React Router', 'SCSS', 'RTQ', 'Vite', 'Postgres', 'Vercel/Railway'],
    }),
    createPetProject({
      title: 'Pet',
      description: 'petProjects.pet.description',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://pet-ten-sigma.vercel.app/',
      stack: ['React', 'TS', 'SCSS', 'Vite', 'Swiper', 'Vercel'],
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
      stack: [
        'React',
        'TS',
        'Vite',
        'React Router',
        'MUI',
        'RTK Query',
        'i18',
        'Zustand',
        'SCSS',
        'PDF.js',
        'Docker',
      ],
      projectImg: beteraDesktopImg,
      isNDA: false,
      ndaDescription: 'businessProjects.companyWebsite2.description',
    }),
    createBusinessProject({
      title: 'Prime Network',
      link: '',
      repoLink: '',
      stack: [
        'React',
        'TS',
        'Vite',
        'SCSS',
        'Telegram Mini Apps SDK',
        'RTK Query',
        'DnD Kit',
        'date-fns',
        'QRCode',
      ],
      projectImg: primeNetDesktopImg,
      mobileImg: primeNetMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.companyWebsite.description',
    }),
    createBusinessProject({
      title: 'TheXera NFT Art Platform',
      link: '',
      repoLink: '',
      stack: [
        'React',
        'TS',
        'Vite',
        'SCSS',
        'Lottie React',
        'React Anchor Link',
        'React Scroll',
        'Smooth Scrollbar + Simplebar',
      ],
      projectImg: xeraDesktopImg,
      mobileImg: xeraMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.designSystem.description',
    }),

    createBusinessProject({
      title: 'PixelVigor Corporate Website',
      link: '',
      repoLink: '',
      stack: [
        'React',
        'TS',
        'Vite',
        'SCSS',
        'MobX',
        'Swiper',
        'React Fast Marquee',
        'React Dropzone',
        'Rollup',
      ],
      projectImg: pixelVigorDesktopImg,
      mobileImg: pixelVigorMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.nftMarketplace.description',
    }),

    createBusinessProject({
      title: 'Pavepo IT Company Corporate Website',
      link: '',
      repoLink: '',
      stack: [
        'React',
        'TS',
        'Vite',
        'SCSS',
        'MobX',
        'i18',
        'Axios',
        'EmailJS',
        'AOS',
        'Swiper',
        'Rollup',
      ],
      projectImg: pavepoDesktopImg,
      mobileImg: pavepoMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.performanceSystem.description',
    }),
    createBusinessProject({
      title: 'RentalSkins',
      link: '',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'SCSS', 'MobX', 'EmailJS', 'i18', 'Swiper'],
      projectImg: rentalSkinDesktopImg,
      mobileImg: rentalSkinMobileImg,
      isNDA: true,
      ndaDescription: 'businessProjects.gameItemsStore.description',
    }),
  ];

  selectedCategory: ProjectCategory = 'business';

  constructor() {
    makeAutoObservable(this);
  }

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'business' ? this.businessProjects : this.petProjects;
  }

  setSelectedCategory(category: ProjectCategory) {
    this.selectedCategory = category;
  }

  get petProjects(): Project[] {
    return this.projects.filter((project) => project.category === 'pet');
  }
}

const projectsStore = new ProjectsStore();

export default projectsStore;

import { makeAutoObservable } from 'mobx';
import type { Project, ProjectCategory } from '../types';
import beteraDesktopImg from '../Assets/Screenshot/betera-desktop.webp';
import cyberXDesktopImg from '../Assets/Screenshot/cyberX-desktop.webp';
import koryagaDesktopImg from '../Assets/Screenshot/koryaga-desktop.webp';
import lavandaDesktopImg from '../Assets/Screenshot/lavanda-desktop.webp';
import monopolyGameImg from '../Assets/Screenshot/monopoly-game.webp';
import monopolyHomeImg from '../Assets/Screenshot/monopoly-home.webp';
import monopolyLobbyImg from '../Assets/Screenshot/monopoly-lobby.webp';
import monopolyProfileImg from '../Assets/Screenshot/monopoly-profile.webp';
import monopolyShopImg from '../Assets/Screenshot/monopoly-shop.webp';
import pavepoDesktopImg from '../Assets/Screenshot/pavepo-desktop.webp';
import playerCrmDesktopImg from '../Assets/Screenshot/player-crm-desktop.webp';
import playerOrdersDesktopImg from '../Assets/Screenshot/player-orders-desktop.webp';
import pixelVigorDesktopImg from '../Assets/Screenshot/PixelVigor-desktop.webp';
import primeNetDesktopImg from '../Assets/Screenshot/primeNet-desktop.webp';
import rentalSkinDesktopImg from '../Assets/Screenshot/rentalSkin-desktop.webp';
import xeraDesktopImg from '../Assets/Screenshot/xera-desktop.webp';

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
const getPreviewPath = (link: string): string =>
  `${import.meta.env.BASE_URL}previews/${linkToPreviewKey(link)}-desktop.webp`;

const createPetProject = ({
  projectImg,
  ...project
}: Omit<Project, 'projectImg' | 'category'> & { projectImg?: string }): Project => ({
  ...project,
  projectImg: projectImg ?? getPreviewPath(project.link),
  category: 'pet',
});

const createBusinessProject = (project: Omit<Project, 'category'>): Project => ({
  ...project,
  category: 'business',
});

class ProjectsStore {
  projects: Project[] = [
    createPetProject({
      title: 'Pulse',
      description: 'petProjects.pulse.description',
      repoLink: 'https://github.com/kulick23/Pulse',
      link: 'https://pulse-five-smoky-95.vercel.app/',
      stack: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'MobX',
        'React Router',
        'i18next',
        'Vitest',
        'SCSS',
      ],
    }),
    createPetProject({
      title: 'London Grill',
      description: 'petProjects.londonGrill.description',
      repoLink: 'https://github.com/kulick23/food',
      link: 'https://london-grill.vercel.app/',
      stack: [
        'React',
        'JavaScript',
        'React Router',
        'MobX',
        'Firebase Auth',
        'Firestore',
        'CSS Modules',
        'Vite',
      ],
    }),
    createPetProject({
      title: 'Vinyl Store',
      description: 'petProjects.vinylStore.description',
      repoLink: 'https://github.com/SDC-Team-Projects/IBM-team-project',
      link: 'https://vinyl-store-teal.vercel.app/',
      stack: ['React', 'React Router', 'SCSS', 'RTQ', 'Vite', 'Postgres', 'Vercel/Railway'],
    }),
    createPetProject({
      title: 'Betera Green',
      description: 'petProjects.pet.description',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://pet-ten-sigma.vercel.app/',
      stack: [
        'React',
        'TypeScript',
        'React Router',
        'SCSS',
        'Vitest',
        'LocalStorage',
        'Vite',
        'i18n',
      ],
    }),
    createPetProject({
      title: 'Player Orders',
      description: 'petProjects.playerOrders.description',
      repoLink: 'https://github.com/kulick23/player-orders',
      link: '',
      stack: [
        'SAP CAP',
        'TypeScript',
        'SAPUI5',
        'OData V4',
        'SAP HANA Cloud',
        'XSUAA',
        'SAP BTP',
        'Integration Tests',
      ],
      projectImg: playerOrdersDesktopImg,
    }),
    createPetProject({
      title: 'Player CRM',
      description: 'petProjects.playerCrm.description',
      repoLink: 'https://github.com/kulick23/player-crm',
      link: '',
      stack: [
        'SAP CAP',
        'SAP CDS',
        'SAP Fiori Elements',
        'SAPUI5',
        'OData V4',
        'SAP HANA',
        'CAP Draft',
        'OPA5',
      ],
      projectImg: playerCrmDesktopImg,
    }),
  ];

  businessProjects: Project[] = [
    createBusinessProject({
      title: 'Monopoly — Telegram Game',
      link: 'https://t.me/MonopolyTgBot/play?startapp=ref_u_qxXIDUmR',
      repoLink: '',
      stack: [
        'Telegram Mini App',
        'React',
        'TypeScript',
        'Responsive UI',
        'Real-time Multiplayer',
        'Telegram Stars',
        'Product Analytics',
        'Admin Panel',
      ],
      projectImg: monopolyHomeImg,
      gallery: [
        monopolyHomeImg,
        monopolyLobbyImg,
        monopolyShopImg,
        monopolyProfileImg,
        monopolyGameImg,
      ],
      featured: true,
      role: 'businessProjects.monopoly.role',
      isNDA: false,
      ndaDescription: 'businessProjects.monopoly.description',
    }),
    createBusinessProject({
      title: 'Lavanda E-commerce & CMS',
      link: 'https://lavandabel.by/',
      repoLink: '',
      stack: [
        'Next.js 16',
        'React',
        'TypeScript',
        'Supabase',
        'Supabase Auth',
        'Supabase Storage',
        'Tailwind CSS',
        'Telegram Bot API',
      ],
      projectImg: lavandaDesktopImg,
      isNDA: false,
      ndaDescription: 'businessProjects.lavanda.description',
    }),
    createBusinessProject({
      title: 'KORYAGA Florist E-commerce',
      link: 'https://koryaga.vercel.app/',
      repoLink: '',
      stack: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'Tailwind CSS',
        'Radix UI',
        'EmailJS',
        'Vite',
        'JSON Catalog',
      ],
      projectImg: koryagaDesktopImg,
      isNDA: false,
      ndaDescription: 'businessProjects.koryaga.description',
    }),
    createBusinessProject({
      title: 'CyberX Menu',
      link: 'https://cyber-x-seven.vercel.app/menu',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'Firebase', 'RTQ', 'Vercel', 'i18'],
      projectImg: cyberXDesktopImg,
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
      isNDA: true,
      ndaDescription: 'businessProjects.performanceSystem.description',
    }),
    createBusinessProject({
      title: 'RentalSkins',
      link: '',
      repoLink: '',
      stack: ['React', 'TS', 'Vite', 'SCSS', 'MobX', 'EmailJS', 'i18', 'Swiper'],
      projectImg: rentalSkinDesktopImg,
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

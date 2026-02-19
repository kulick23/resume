import { makeAutoObservable } from 'mobx';
import barImg from '../Assets/Screenshot/bar.png';
import beatsImg from '../Assets/Screenshot/beats.png';
import beatsMobImg from '../Assets/Screenshot/beatsmob.png';
import compoImg from '../Assets/Screenshot/compo.png';
import cyberImg from '../Assets/Screenshot/cyber.png';
import cyberMobImg from '../Assets/Screenshot/cybermob.jpg';
import energoImg from '../Assets/Screenshot/energo.png';
import energoMobImg from '../Assets/Screenshot/energomob.png';
import esdeImg from '../Assets/Screenshot/esde.png';
import foodImg from '../Assets/Screenshot/food.png';
import musicImg from '../Assets/Screenshot/music.png';
import nikeImg from '../Assets/Screenshot/nike.png';
import petImg from '../Assets/Screenshot/pet.png';
import petMobImg from '../Assets/Screenshot/petmob.png';
import qweryImg from '../Assets/Screenshot/qwery.png';

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

class ProjectsStore {
  projects: Project[] = [
    {
      title: 'Food market',
      repoLink: 'https://github.com/kulick23/food',
      link: 'https://london-grill.vercel.app/',
      stack: ['React', 'TS', 'Redux', 'Firebase'],
      projectImg: foodImg,
      category: 'pet',
    },
    {
      title: 'Telegram mini-app',
      repoLink: 'https://github.com/kulick23/menu-tg',
      link: 'https://t.me/gethoroscope_bot/menu',
      stack: ['React', 'TS'],
      projectImg: cyberImg,
      mobileImg: cyberMobImg,
      category: 'pet',
    },
    {
      title: 'Bar',
      repoLink: 'https://github.com/kulick23/project_bar',
      link: 'https://kulick23.github.io/project_bar/',
      stack: ['React', 'JS', 'MobX', 'Firebase'],
      projectImg: barImg,
      category: 'pet',
    },
    {
      title: 'Pet',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://kulick23.github.io/pet/',
      stack: ['HTML', 'CSS'],
      projectImg: petImg,
      mobileImg: petMobImg,
      category: 'pet',
    },
    {
      title: 'Beats',
      repoLink: 'https://github.com/kulick23/beats',
      link: 'https://kulick23.github.io/beats/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: beatsImg,
      mobileImg: beatsMobImg,
      category: 'pet',
    },
    {
      title: 'Energo',
      repoLink: 'https://github.com/kulick23/EnergyConstruction',
      link: 'https://kulick23.github.io/EnergyConstruction/',
      stack: ['HTML', 'CSS', 'OWL carousel'],
      projectImg: energoImg,
      mobileImg: energoMobImg,
      category: 'pet',
    },
    {
      title: 'Nike',
      repoLink: 'https://github.com/kulick23/slider_nike',
      link: 'https://kulick23.github.io/slider_nike/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: nikeImg,
      category: 'pet',
    },
    {
      title: 'Simo',
      repoLink: 'https://github.com/kulick23/simo',
      link: 'https://kulick23.github.io/simo/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: musicImg,
      category: 'pet',
    },
    {
      title: 'ESDE',
      repoLink: 'https://github.com/kulick23/esde',
      link: 'https://kulick23.github.io/esde/',
      stack: ['React', 'JS'],
      projectImg: esdeImg,
      category: 'pet',
    },
    {
      title: 'Compo',
      repoLink: 'https://github.com/kulick23/compo',
      link: 'https://kulick23.github.io/compo/',
      stack: ['React', 'JS', 'CSS'],
      projectImg: compoImg,
      category: 'pet',
    },
    {
      title: 'Qwery',
      repoLink: 'https://github.com/kulick23/qwery',
      link: 'https://kulick23.github.io/qwery/',
      stack: ['HTML', 'CSS'],
      projectImg: qweryImg,
      category: 'pet',
    },
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

  // Изменено: только pet и business
  selectedCategory: 'pet' | 'business' = 'pet';

  constructor() {
    makeAutoObservable(this);
  }

  get filteredProjects() {
    if (this.selectedCategory === 'pet') {
      return this.petProjects;
    } else if (this.selectedCategory === 'business') {
      return this.businessProjects;
    }
    return this.petProjects; // Fallback to pet projects
  }

  // Изменено: только pet и business
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

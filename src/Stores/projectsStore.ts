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
  category: 'commercial' | 'pet'; // добавляем категорию проекта
}

class ProjectsStore {
  projects: Project[] = [
    {
      title: 'Food market',
      repoLink: 'https://github.com/kulick23/food',
      link: 'https://kulick23.github.io/food/',
      stack: ['React', 'TS', 'Redux', 'Firebase'],
      projectImg: foodImg,
      category: 'commercial', // добавляем категорию
    },
    {
      title: 'Telegram mini-app',
      repoLink: 'https://github.com/kulick23/menu-tg',
      link: 'https://t.me/gethoroscope_bot/menu',
      stack: ['React', 'TS'],
      projectImg: cyberImg,
      mobileImg: cyberMobImg,
      category: 'commercial', // добавляем категорию
    },
    {
      title: 'Bar',
      repoLink: 'https://github.com/kulick23/project_bar',
      link: 'https://kulick23.github.io/project_bar/',
      stack: ['React', 'JS', 'MobX', 'Firebase'],
      projectImg: barImg,
      category: 'commercial', // добавляем категорию
    },
    {
      title: 'Pet',
      repoLink: 'https://github.com/kulick23/pet',
      link: 'https://kulick23.github.io/pet/',
      stack: ['HTML', 'CSS'],
      projectImg: petImg,
      mobileImg: petMobImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'Beats',
      repoLink: 'https://github.com/kulick23/beats',
      link: 'https://kulick23.github.io/beats/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: beatsImg,
      mobileImg: beatsMobImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'Energo',
      repoLink: 'https://github.com/kulick23/EnergyConstruction',
      link: 'https://kulick23.github.io/EnergyConstruction/',
      stack: ['HTML', 'CSS', 'OWL carousel'],
      projectImg: energoImg,
      mobileImg: energoMobImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'Nike',
      repoLink: 'https://github.com/kulick23/slider_nike',
      link: 'https://kulick23.github.io/slider_nike/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: nikeImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'Simo',
      repoLink: 'https://github.com/kulick23/simo',
      link: 'https://kulick23.github.io/simo/',
      stack: ['JS', 'HTML', 'CSS', 'Vite'],
      projectImg: musicImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'ESDE',
      repoLink: 'https://github.com/kulick23/esde',
      link: 'https://kulick23.github.io/esde/',
      stack: ['React', 'JS'],
      projectImg: esdeImg,
      category: 'commercial', // добавляем категорию
    },
    {
      title: 'Compo',
      repoLink: 'https://github.com/kulick23/compo',
      link: 'https://kulick23.github.io/compo/',
      stack: ['React', 'JS', 'CSS'],
      projectImg: compoImg,
      category: 'pet', // добавляем категорию
    },
    {
      title: 'Qwery',
      repoLink: 'https://github.com/kulick23/qwery',
      link: 'https://kulick23.github.io/qwery/',
      stack: ['HTML', 'CSS'],
      projectImg: qweryImg,
      category: 'pet', // добавляем категорию
    },
  ];

  selectedLanguage = '';
  selectedCategory: 'all' | 'commercial' | 'pet' = 'all'; // добавляем фильтр по категориям

  constructor() {
    makeAutoObservable(this);
  }

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.selectedCategory);
  }

  setSelectedCategory(category: 'all' | 'commercial' | 'pet') {
    this.selectedCategory = category;
  }

  get commercialProjects() {
    return this.projects.filter((project) => project.category === 'commercial');
  }

  get petProjects() {
    return this.projects.filter((project) => project.category === 'pet');
  }
}

const projectsStore = new ProjectsStore();

export default projectsStore;

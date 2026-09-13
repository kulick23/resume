import { makeAutoObservable } from 'mobx';

class SkillsStore {
  skills = {
    frontend: [
      'React',
      'TypeScript',
      'JavaScript',
      'Vite',
      'SCSS',
      'Redux Toolkit',
      'RTK Query',
      'MobX',
      'MUI',
      'Responsive UI',
    ],
    sapBackend: [
      'SAP CAP',
      'SAP BTP',
      'Cloud Foundry',
      'Node.js',
      'REST API',
      'SQL',
      'SAP HANA',
      'CDS',
      'Railway',
      'Vercel',
    ],
    language: [
      'skills.languages.english',
      'skills.languages.russian',
      'skills.languages.polish',
      'skills.languages.belarusian',
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const skillsStore = new SkillsStore();

export default skillsStore;

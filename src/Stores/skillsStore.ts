import { makeAutoObservable } from 'mobx';

class SkillsStore {
  skills = {
    techSkills: [
      'HTML',
      'CSS/SCSS/TAILWIND',
      'JS/TS',
      'React',
      'SQL',
      'Node',
      'Vite',
      'Redux/MobX',
      'Rest API',
      'Cloud',
    ],
    softSkills: [
      'skills.softSkills.teamwork',
      'skills.softSkills.communication',
      'skills.softSkills.workWithCustomers',
      'skills.softSkills.developmentMethodologies',
      'skills.softSkills.timeManagement',
      'skills.softSkills.adaptability',
      'skills.softSkills.creativity',
      'skills.softSkills.criticalThinking',
      'skills.softSkills.attentionToDetail',
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

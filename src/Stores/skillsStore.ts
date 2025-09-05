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
      'Teamwork',
      'Communication',
      'Work with customers',
      'Development methodologies',
      'Time management',
      'Adaptability',
      'Creativity',
      'Critical thinking',
      'Attention to detail',
    ],
    Languages: ['English', 'Russian', 'Polish', 'Belarusian'],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const skillsStore = new SkillsStore();

export default skillsStore;

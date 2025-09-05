import { makeAutoObservable } from 'mobx';
import CyberIcon from '../Assets/Icons/cyber.png';
import EsdeIcon from '../Assets/Icons/esde.png';
import IseiIcon from '../Assets/Icons/isei.png';
import PavepoIcon from '../Assets/Icons/pavepo.png';
import StepIcon from '../Assets/Icons/step.png';
class WorkExperienceStore {
  experiences = [
    {
      id: 3,
      company: 'PAVEPO',
      position: 'experience.work.3.position',
      duration: '07.2024 - 08.2025',
      description: 'experience.work.3.description',
      icon: PavepoIcon,
      iconAlt: 'Pavepo',
    },
    {
      id: 2,
      company: 'CyberX',
      position: 'experience.work.2.position',
      duration: '04.2024 - 07.2025',
      description: 'experience.work.2.description',
      icon: CyberIcon,
      iconAlt: 'CyberX',
    },
    {
      id: 1,
      company: 'Epam ESDE',
      position: 'experience.work.1.position',
      duration: '12.2023 - 03.2024',
      description: 'experience.work.1.description',
      icon: EsdeIcon,
      iconAlt: 'Esde',
    },
  ];
  education = [
    {
      id: 3,
      company: 'EHU / EPAM School of Digital Engineering',
      position: 'experience.education.3.position',
      duration: '10.2022 - 02.2026',
      description: 'experience.education.3.description',
      icon: EsdeIcon,
      iconAlt: 'Esde',
    },
    {
      id: 2,
      company: 'IT STEP',
      position: 'experience.education.2.position',
      duration: '09.2018 - 06.2022',
      description: 'experience.education.2.description',
      icon: StepIcon,
      iconAlt: 'Step',
    },
    {
      id: 1,
      company: 'International Sakharov Environmental University',
      position: 'experience.education.1.position',
      duration: '08.2021 - 08.2022',
      description: 'experience.education.1.description',
      icon: IseiIcon,
      iconAlt: 'Isei',
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

const ExperienceStore = new WorkExperienceStore();
export default ExperienceStore;

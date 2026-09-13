import { makeAutoObservable } from 'mobx';
import type { ExperienceEntry } from '../types';
import CyberIcon from '../Assets/Icons/cyber.webp';
import EsdeIcon from '../Assets/Icons/esde.webp';
import BeteraIcon from '../Assets/Icons/betera.webp';
import PavepoIcon from '../Assets/Icons/pavepo.webp';
import InnowiseIcon from '../Assets/Icons/innowise-white.png';
import StepIcon from '../Assets/Icons/step.webp';

class WorkExperienceStore {
  experiences: ExperienceEntry[] = [
    {
      id: 5,
      company: 'Innowise',
      position: 'experience.work.5.position',
      duration: '06.2026 - Present',
      description: 'experience.work.5.description',
      icon: InnowiseIcon,
      iconAlt: 'Innowise',
    },
    {
      id: 4,
      company: 'PAVEPO',
      position: 'experience.work.3.position',
      duration: '02.2025 - 03.2026',
      description: 'experience.work.3.description',
      icon: PavepoIcon,
      iconAlt: 'Pavepo',
    },
    {
      id: 1,
      company: 'EPAM School of Digital Engineering',
      position: 'experience.work.1.position',
      duration: '10.2022 - 02.2026',
      description: 'experience.work.1.description',
      icon: EsdeIcon,
      iconAlt: 'Esde',
    },
    {
      id: 3,
      company: 'Betera',
      position: 'experience.work.4.position',
      duration: '10.2025 - 11.2025',
      description: 'experience.work.4.description',
      icon: BeteraIcon,
      iconAlt: 'Betera',
    },
    {
      id: 2,
      company: 'CyberX',
      position: 'experience.work.2.position',
      duration: '04.2024 - 11.2024',
      description: 'experience.work.2.description',
      icon: CyberIcon,
      iconAlt: 'CyberX',
    },
  ];
  education: ExperienceEntry[] = [
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
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const ExperienceStore = new WorkExperienceStore();
export default ExperienceStore;

import './Styles/App.scss';
import {
  Contact,
  About,
  Skills,
  Project,
  Header,
  Experience,
  ScrollToTop,
  NDAModal,
} from './Componets';
import { Element } from 'react-scroll';
import { useAOS, useStars, useScrollToTop } from './Hooks';
import { SECTIONS_DATA, SECTIONS_NAMES } from './Constants/sections';
import { useState } from 'react';
import type { BusinessProject } from './types';

function App() {
  useAOS();
  const { starsRef, stars } = useStars();
  const { showPopup, isFlying, handleFlyUp } = useScrollToTop();

  // Состояние для NDAModal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<BusinessProject | null>(null);

  const handleNDAClick = (project: BusinessProject) => {
    console.log('handleNDAClick called with:', project); // Добавлено
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Объект с компонентами
  const components = {
    header: Header,
    about: About,
    skills: Skills,
    projects: () => <Project onNDAClick={handleNDAClick} />, // Передаем пропс
    experience: Experience,
    contact: Contact,
  };

  // Массив секций с компонентами, взятый из sections.ts
  const sections = SECTIONS_NAMES.map((name) => ({
    name,
    component: components[name as keyof typeof components],
  }));

  return (
    <div className="App">
      {/* Фон со звездами для всего сайта */}
      <div className="stars-container" ref={starsRef}>
        {stars.map((id) => (
          <div key={id} id={id}></div>
        ))}
      </div>

      {/* Рендер секций без дублирования */}
      {sections.map(({ name, component: Component }) => (
        <Element name={name} id={name} key={name}>
          <Component data-aos={SECTIONS_DATA[name as keyof typeof SECTIONS_DATA]?.aos} />
        </Element>
      ))}

      {/* Глобальная NDAModal */}
      <NDAModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />

      {/* Поп-ап для скролла наверх */}
      <ScrollToTop showPopup={showPopup} isFlying={isFlying} handleFlyUp={handleFlyUp} />
    </div>
  );
}

export default App;

import './Styles/App.scss';
import { Element } from 'react-scroll';
import {
  About,
  Contact,
  Experience,
  Header,
  NDAModal,
  Project,
  ScrollToTop,
  Skills,
} from './Components';
import { useAOS, useNDAModal, useScrollToTop, useStars } from './Hooks';

function App() {
  useAOS();
  const { starsRef, stars } = useStars();
  const { showPopup, isFlying, handleFlyUp } = useScrollToTop();
  const { isModalOpen, selectedProject, handleNDAClick, handleCloseModal } = useNDAModal();

  return (
    <div className="App">
      <div className="stars-container" ref={starsRef} aria-hidden="true">
        {stars.map((id) => (
          <div key={id} id={id} />
        ))}
      </div>

      <Element name="header" id="header">
        <Header />
      </Element>

      <Element name="about" id="about">
        <About />
      </Element>

      <Element name="skills" id="skills">
        <Skills />
      </Element>

      <Element name="experience" id="experience">
        <Experience />
      </Element>

      <Element name="projects" id="projects">
        <Project onNDAClick={handleNDAClick} />
      </Element>

      <Element name="contact" id="contact">
        <Contact />
      </Element>

      <NDAModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />

      <ScrollToTop showPopup={showPopup} isFlying={isFlying} handleFlyUp={handleFlyUp} />
    </div>
  );
}

export default App;

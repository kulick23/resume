import { useState, useMemo } from 'react';
import './App.scss';
import {About, Skills, Project, Experience, Header, Footer,Sidebar} from "./Componets";
import { Element } from 'react-scroll';
import { useAOS } from './Hooks';
import useScrollHandler from './useScrollHandler';
import { SECTIONS } from './Constants';

function App() {
  useAOS();

  const sections = useMemo(() => SECTIONS, []);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useScrollHandler(sections, currentSectionIndex, setCurrentSectionIndex);

  const handleSetActive = (section: string) => {
    const index = sections.indexOf(section);
    if (index !== -1) {
      setCurrentSectionIndex(index);
    }
  };

  return (
    <div className="App">
      <Sidebar onSetActive={handleSetActive} />
      <Element name="header">
        <Header data-aos="fade-down" />
      </Element>
      <Element name="about">
        <About data-aos="fade-right" />
      </Element>
      <Element name="skills">
        <Skills data-aos="fade-left" />
      </Element>
      <Element name="projects">
        <Project data-aos="fade-up" />
      </Element>
      <Element name="experience">
        <Experience data-aos="zoom-in" />
      </Element>
      <Element name="footer">
        <Footer data-aos="zoom-out" />
      </Element>
    </div>
  );
}

export default App;
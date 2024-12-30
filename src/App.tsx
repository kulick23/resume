import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/project";
import Experience from "./Componets/Experience/experience";
import Header from './Componets/Header/header';
import Footer from './Componets/Footer/footer';
import SidebarNav from './Componets/Sidebar/Sidebar';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useScrollHandler from './useScrollHandler';

function App() {
  const sections: string[] = useMemo(
    () => ['header', 'about', 'skills', 'projects', 'experience', 'footer'],
    []
  );

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Hook to handle scroller logic
  useScrollHandler(sections, currentSectionIndex, setCurrentSectionIndex);

  const handleSetActive = (section: string) => {
    const index = sections.indexOf(section);
    if (index !== -1) {
      setCurrentSectionIndex(index);
    }
  };

  return (
    <div className="App">
      <SidebarNav onSetActive={handleSetActive} />
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
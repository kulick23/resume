import React, { useEffect, useState } from 'react';
import './App.css';
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/project";
import Experience from "./Componets/Experience/experience";
import Header from './Componets/Header/header';
import Footer from './Componets/Footer/footer';
import SidebarNav from './Componets/Sidebar/Sidebar'; 
import { Element, scroller, Events } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const sections = ['header', 'about', 'skills', 'projects', 'experience', 'footer'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentProjectRow, setCurrentProjectRow] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    Events.scrollEvent.register('end', function(to, element) {
      const index = sections.indexOf(to);
      if (index !== -1) {
        setCurrentSectionIndex(index);
        setCurrentProjectRow(0); 
      }
    });

    return () => {
      Events.scrollEvent.remove('end');
    };
  }, [sections]);

  const handleSetActive = (section: string) => {
    const index = sections.indexOf(section);
    if (index !== -1) {
      setCurrentSectionIndex(index);
      setCurrentProjectRow(0); 
    }
  };

  const scrollToSection = (index: number) => {
    const section = sections[index];
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
    setCurrentSectionIndex(index);
  };

  const handleWheel = (event: WheelEvent) => {
    if (window.innerWidth <= 768) return; 

    if (isScrolling) return;

    if (currentSectionIndex === 3) { 
      const projectRows = document.querySelectorAll('.project__row');
      if (event.deltaY > 0 && currentProjectRow < projectRows.length - 1) {
        setIsScrolling(true);
        setCurrentProjectRow(currentProjectRow + 1);
        projectRows[currentProjectRow + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (event.deltaY < 0 && currentProjectRow > 0) {
        setIsScrolling(true);
        setCurrentProjectRow(currentProjectRow - 1);
        projectRows[currentProjectRow - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (event.deltaY > 0 && currentProjectRow === projectRows.length - 1) {
        setIsScrolling(true);
        scrollToSection(currentSectionIndex + 1);
      } else if (event.deltaY < 0 && currentProjectRow === 0) {
        setIsScrolling(true);
        scrollToSection(currentSectionIndex - 1);
      }
    } else {
      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        setIsScrolling(true);
        scrollToSection(currentSectionIndex + 1);
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        setIsScrolling(true);
        scrollToSection(currentSectionIndex - 1);
      }
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 600); 
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSectionIndex, isScrolling, currentProjectRow]);

  useEffect(() => {
    if (currentSectionIndex !== 3) {
      setCurrentProjectRow(0);
    }
  }, [currentSectionIndex]);

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
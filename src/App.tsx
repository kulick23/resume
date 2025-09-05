import './App.scss';
import { Contact, About, Skills, Project, Header, Footer } from './Componets';
import { Element } from 'react-scroll';
import { useAOS } from './Hooks';
import ExperienceEducation from './Componets/ExperienceEducation/ExperienceEducation';

function App() {
  useAOS();

  return (
    <div className="App">
      <Element name="header" id="header">
        <Header data-aos="fade-down" />
      </Element>
      <Element name="about" id="about">
        <About data-aos="fade-left" />
      </Element>
      <Element name="skills" id="skills">
        <Skills data-aos="fade-left" />
      </Element>
      <Element name="projects" id="projects">
        <Project data-aos="fade-up" />
      </Element>
      <Element name="experience" id="experience">
        <ExperienceEducation data-aos="zoom-in" />
      </Element>
      <Element name="footer" id="footer">
        <Footer data-aos="zoom-out" />
      </Element>
            <Element name="contact" id="contact">
        <Contact data-aos="fade-right" />
      </Element>
    </div>
  );
}

export default App;

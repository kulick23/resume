import './App.scss';
import { About, Skills, Project, Header, Footer } from './Componets';
import { Element } from 'react-scroll';
import { useAOS } from './Hooks';
import ExperienceEducation from './Componets/ExperienceEducation/ExperienceEducation';

function App() {
  useAOS();

 



  return (
    <div className="App">
      <Element name="header">
        <Header data-aos="fade-down" />
      </Element>

      <Element name="skills">
        <Skills data-aos="fade-left" />
      </Element>
      <Element name="projects">
        <Project data-aos="fade-up" />
      </Element>
      <Element name="experience">
        <ExperienceEducation data-aos="zoom-in" />
      </Element>
      <Element name="footer">
        <Footer data-aos="zoom-out" />
      </Element>
            <Element name="about">
        <About data-aos="fade-right" />
      </Element>
    </div>
  );
}

export default App;

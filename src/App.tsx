import React from 'react';
import './App.css';
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/project";
import Experience from "./Componets/Experience/experience";
import Header from './Componets/Header/header';
import Footer from './Componets/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
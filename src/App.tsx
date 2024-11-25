import React from 'react';
import './App.css';
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
// import Project from "./Componets/Projects/projects";
import Experience from "./Componets/Experience/experience";
import Header from './Componets/Header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
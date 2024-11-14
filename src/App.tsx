import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componets/Header/header'
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/projects"
import Experience from "./Componets/Experience/experience";


function App() {
  return (
    <div className="App">
     <Header  />
        <Routes>
            <Route path='/resume' element={ <About/>}/>
            <Route path='/skills' element={ <Skills/>}/>
            <Route path='/projects' element={ <Project/>}/>
            <Route path='/experience' element={ <Experience/>}/>
        </Routes>

    </div>
  );
}

export default App;

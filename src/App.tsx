import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componets/Header/header'
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/projects"


function App() {
  return (
    <div className="App">
     <Header  />
        <Routes>
            <Route path='/' element={ <About/>}/>
            <Route path='/skills' element={ <Skills/>}/>
            <Route path='/projects' element={ <Project/>}/>
        </Routes>

    </div>
  );
}

export default App;

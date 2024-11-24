import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from "./Componets/About/about";
import Skills from "./Componets/Skills/skills";
import Project from "./Componets/Projects/projects"
import Experience from "./Componets/Experience/experience";
import Header from './Componets/Header/header';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={ <Header/>}/>
            <Route path='/about' element={ <About/>}/>
            <Route path='/skills' element={ <Skills/>}/>
            <Route path='/projects' element={ <Project/>}/>
            <Route path='/experience' element={ <Experience/>}/>
        </Routes>

    </div>
  );
}

export default App;

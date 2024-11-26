import React from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "./laptop/laptop"; 
import "./project.css"; 

const Project: React.FC = observer(() => {
    const { projects } = projectsStore;

    return (
      <div className="project">
        <h1 className="project__title">My Projects</h1>
        <div className="project__container">
            {projects.map((project) => (
                <Laptop key={project.title} project={project} />
            ))}
        </div>
        </div>
    );
});

export default Project;
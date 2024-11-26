import React from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "./laptop/laptop"; 
import "./project.css"; 

const Project: React.FC = observer(() => {
    const { projects } = projectsStore;

    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
        rows.push(projects.slice(i, i + 3));
    }

    return (
      <div className="project">
        <h1 className="project__title" data-aos="fade-up">My Projects</h1>
        <div className="project__container">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="project__row" data-aos="fade-up">
                    {row.map((project) => (
                        <Laptop key={project.title} project={project} />
                    ))}
                </div>
            ))}
        </div>
      </div>
    );
});

export default Project;
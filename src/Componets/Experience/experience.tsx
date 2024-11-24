// experience.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "./laptop/laptop"; // Adjust the import path as needed
import "./experience.css"; // Optional: your CSS file

const Experience: React.FC = observer(() => {
    const { projects } = projectsStore;

    return (
      <div className="experience">
        <h1>My Projects</h1>
        <div className="experience-container">
            {projects.map((project) => (
                <Laptop key={project.title} project={project} />
            ))}
        </div>
        </div>
    );
});

export default Experience;
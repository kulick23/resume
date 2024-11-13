import React from "react";
import { observer } from "mobx-react-lite";
import ProjectsStore from "../../Stores/projectsStore";
import "./projects.css";

const Projects: React.FC = observer(() => {
    const languages = ["All", ...Array.from(new Set(ProjectsStore.projects.flatMap((project) => project.languages)))];

    const handleLanguageSelect = (language: string) => {
        ProjectsStore.setLanguage(language === "All" ? "" : language);
    };

    return (
        <div className="project">
            <div className="project__filter">
                {languages.map((language) => (
                    <button
                        key={language}
                        className={`project__filter--buttons ${
                            ProjectsStore.selectedLanguage === language ? "active" : ""
                        }`}
                        onClick={() => handleLanguageSelect(language)}
                    >
                        {language}
                    </button>
                ))}
            </div>
            <div className="project__container">

            {ProjectsStore.filteredProjects.map((project, index) => (
                <div className="project__card" key={index}>
                    <h2 className="project__card--title">{project.title}</h2>
                    <p className="project__card--description">{project.description}</p>
                    <a
                        className="project__card--link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Git
                    </a>
                    <p className="project__card--languages">
                        Languages: {project.languages.join(", ")}
                    </p>
                </div>
            ))}
            </div>
        </div>
    );
});

export default Projects;
import React from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "./laptop/laptop";
import { useTranslation } from "react-i18next";
import "./project.css";

const Project: React.FC = observer(() => {
  const { projects } = projectsStore;
  const { t } = useTranslation();

  const displayedProjects = projects.slice(1);

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">
        {t("projects.title")}
      </h1>
      <div className="project__container">
        {displayedProjects.map((project) => (
          <div key={project.title} className="project__row">
            <Laptop project={project} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Project;
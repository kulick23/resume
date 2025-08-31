import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "../Laptop/Laptop";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import "./Project.scss";
import { useChunkProjects } from "../../Hooks/useChunkProjects";
import { Project as ProjectType } from "../../types/project";

const getChunkSize = () => (window.innerWidth >= 1024 ? 3 : 2);

const Project: React.FC = observer(() => {
  const { projects } = projectsStore;
  const { t } = useTranslation();
  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedProjects = useChunkProjects<ProjectType>(projects, chunkSize);

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">{t("projects.title")}</h1>
      {chunkedProjects.map((row, rowIndex) => (
        <Element
          key={rowIndex}
          name={`project-row-${rowIndex + 1}`}
          className="project__row"
          data-aos="fade-up"
        >
          {row.map((project) => (
            <div key={project.title} className="project__item">
              <Laptop project={project} />
            </div>
          ))}
        </Element>
      ))}
    </div>
  );
});

export default Project;
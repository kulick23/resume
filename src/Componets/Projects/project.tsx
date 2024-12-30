import React from "react";
import { observer } from "mobx-react-lite";
import projectsStore from "../../Stores/projectsStore";
import Laptop from "./laptop/laptop";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import "./project.css";

const Project: React.FC = observer(() => {
  const { projects } = projectsStore;
  const { t } = useTranslation();

  const chunkProjects = (array: any[], size: number) => {
    const results = [];
    for (let i = 0; i < array.length; i += size) {
      results.push(array.slice(i, i + size));
    }
    return results;
  };

  const chunkSize = window.innerWidth >= 1024 ? 3 : 2;
  const chunkedProjects = chunkProjects(projects, chunkSize);

  console.log("chunkedProjects:", chunkedProjects);

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">{t("projects.title")}</h1>
      {chunkedProjects.map((row, rowIndex) => (
        <Element
          key={rowIndex}
          name={`project-row-${rowIndex + 1}`}
          className="project__row"
        >
          {row.map((project: any) => (
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
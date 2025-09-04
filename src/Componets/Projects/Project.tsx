import type React from "react"
import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { projectsStore } from "../../Stores"
import Laptop from "../Laptop"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"
import "./Project.scss"
import { useChunkProjects } from "../../Hooks"
import type { Project as ProjectType } from "../../types"

const getChunkSize = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)

export const Project: React.FC = observer(() => {
  const { filteredProjects, selectedCategory, setSelectedCategory } = projectsStore // используем отфильтрованные проекты
  const { t } = useTranslation()
  const [chunkSize, setChunkSize] = useState(getChunkSize())

  useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const chunkedProjects = useChunkProjects<ProjectType>(filteredProjects, chunkSize) // используем отфильтрованные проекты

  const handleFilterChange = (category: "all" | "commercial" | "pet") => {
    setSelectedCategory(category)
  }

  return (
    <div className="project" data-aos="fade-up">
      <h1 className="project__title">{t("projects.title")}</h1>

      <div className="project__filters">
        <button
          className={`project__filter-btn ${selectedCategory === "all" ? "project__filter-btn--active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          Все проекты
        </button>
        <button
          className={`project__filter-btn ${selectedCategory === "commercial" ? "project__filter-btn--active" : ""}`}
          onClick={() => handleFilterChange("commercial")}
        >
          Коммерческие
        </button>
        <button
          className={`project__filter-btn ${selectedCategory === "pet" ? "project__filter-btn--active" : ""}`}
          onClick={() => handleFilterChange("pet")}
        >
          Pet проекты
        </button>
      </div>

      {chunkedProjects.map((row, rowIndex) => (
        <Element key={rowIndex} name={`project-row-${rowIndex + 1}`} className="project__row" data-aos="fade-up">
          {row.map((project) => (
            <div key={project.title} className="project__item">
              <Laptop project={project} />
            </div>
          ))}
        </Element>
      ))}
    </div>
  )
})

export default Project

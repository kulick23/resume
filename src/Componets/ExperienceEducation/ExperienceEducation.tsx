import type React from "react"
import "./ExperienceEducation.scss"
import UniversityIcon from "../../Assets/Icons/github.svg"
import CoursesIcon from "../../Assets/Icons/github.svg"
import DeveloperIcon from "../../Assets/Icons/github.svg"
import DesignerIcon from "../../Assets/Icons/github.svg"

type TimelineItem = {
  icon: string
  iconAlt: string
  title: string
  subtitle: string
  description: string
  period: string // добавляем период
}

const education: TimelineItem[] = [
  {
    icon: UniversityIcon,
    iconAlt: "University",
    title: "МГТУ им. Н. Э. Баумана",
    subtitle: "Магистр технических наук",
    period: "2014-2020", // добавляем период
    description:
      "Изучение современных технологий разработки, алгоритмов и структур данных. Получение фундаментальных знаний в области программирования и системного анализа.",
  },
  {
    icon: CoursesIcon,
    iconAlt: "Courses",
    title: "Профессиональные курсы",
    subtitle: "Frontend разработка",
    period: "2020-2022", // добавляем период
    description:
      "Углубленное изучение React, TypeScript, современных инструментов разработки. Практическое применение знаний в реальных проектах.",
  },
]

const work: TimelineItem[] = [
  {
    icon: DeveloperIcon,
    iconAlt: "Developer",
    title: "Frontend Developer",
    subtitle: "Коммерческая разработка",
    period: "2022-2024", // добавляем период
    description:
      "Разработка современных веб-приложений с использованием React, TypeScript, Redux. Работа в команде, код-ревью, оптимизация производительности.",
  },
  {
    icon: DesignerIcon,
    iconAlt: "Design",
    title: "Fullstack Developer",
    subtitle: "Freelance проекты",
    period: "2021-настоящее время", // добавляем период
    description:
      "Создание полноценных веб-приложений от концепции до деплоя. Работа с базами данных, API, современными фреймворками и инструментами.",
  },
]

export const ExperienceEducation: React.FC = () => (
  <section className="experience-education">
    <div className="experience-education__header">
      <h2 className="experience-education__title">Опыт и образование</h2>
      <p className="experience-education__subtitle">Мой путь в разработке</p>
      <div className="experience-education__divider"></div>
    </div>

    <div className="experience-education__content">
      <div className="experience-education__column">
        <div className="experience-education__column-header">
          <h3>Образование</h3>
        </div>
        <div className="experience-education__timeline">
          {education.map((item, idx) => (
            <div className="experience-education__item" key={idx}>
              <div className="experience-education__item-header">
                <div className="experience-education__icon-wrapper">
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.iconAlt}
                    className="experience-education__icon"
                  />
                </div>
                <div className="experience-education__item-info">
                  <h4 className="experience-education__item-title">{item.title}</h4>
                  <p className="experience-education__item-subtitle">{item.subtitle}</p>
                  <span className="experience-education__item-period">{item.period}</span>
                </div>
              </div>
              <p className="experience-education__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-education__column">
        <div className="experience-education__column-header">
          <h3>Опыт работы</h3>
        </div>
        <div className="experience-education__timeline">
          {work.map((item, idx) => (
            <div className="experience-education__item" key={idx}>
              <div className="experience-education__item-header">
                <div className="experience-education__icon-wrapper">
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.iconAlt}
                    className="experience-education__icon"
                  />
                </div>
                <div className="experience-education__item-info">
                  <h4 className="experience-education__item-title">{item.title}</h4>
                  <p className="experience-education__item-subtitle">{item.subtitle}</p>
                  <span className="experience-education__item-period">{item.period}</span>
                </div>
              </div>
              <p className="experience-education__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default ExperienceEducation

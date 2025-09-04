import type React from "react"
import "./About.scss"
import { useTranslation } from "react-i18next"
import { ABOUT_IMAGES } from "../../Constants"
import { ContactForm } from "../ContactForm"

export const About: React.FC = () => {
  const { t } = useTranslation()

  const handleContactSubmit = (data: any) => {
    console.log("Contact form submitted:", data)
    // Here you can add actual form submission logic
  }

  return (
    <div className="about" data-aos="fade-up">
      <div className="about__right">
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
      {ABOUT_IMAGES.map((img) => (
        <img key={img.alt} src={img.src || "/placeholder.svg"} alt={img.alt} className={img.className} />
      ))}
    </div>
  )
}

export default About

import type React from "react"
import { useState } from "react"
import "./ContactForm.scss"
import { useTranslation } from "react-i18next"

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
}

interface ContactFormData {
  name: string
  email: string
  message: string
  privacy: boolean
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      privacy: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">{t("contact.title")}</h3>
      <h2 className="contact-form__subtitle">{t("contact.subtitle")}</h2>

      <p className="contact-form__description">{t('footer.connect')}</p>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">{t("contact.name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">{t("contact.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              required
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">{t("contact.message")}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            required
          />
        </div>
        <button type="submit" className="contact-form__button" title={t("contact.send")}>
          {t("contact.send")}
        </button>
      </form>
    </div>
  )
}

export default ContactForm

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
import lars from "../../Assets/PngImg/lars.png";
import telegram from  "../../Assets/Icons/telegram.svg";
import linkedin from "../../Assets/Icons/linkedin.svg";
import mail from "../../Assets/Icons/mail.svg";



export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Добавьте логику отправки формы (например, через API)
  };

  return (
    <section className="contact">
      <img src={lars} alt="photo" className="contact__image" />
      <div className="contact__form">
        <h3 className="text-with-circle">{t("contact.title")}</h3>
        <h2>{t("contact.subtitle")}</h2>

        <p>{t("contact.description")}</p>
        <div className="contact__links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img className="contact__icon" src={telegram} alt="Facebook" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            <img className="contact__icon" src={linkedin} alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img className="contact__icon" src={mail} alt="Instagram" />
          </a>
        </div>
        <p>{t("contact.formText")}</p>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="form__line">
            <div className="form__item">
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__item">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form__item">
            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="contact__button" type="submit">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
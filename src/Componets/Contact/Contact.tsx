import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import { useContactForm } from '../../Hooks';
import { CONTACT_IMAGE, SOCIAL_LINKS, FIELD_CONFIGS } from '../../Constants';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { formData, handleChange, handleSubmit } = useContactForm();

  const fields = FIELD_CONFIGS.map((config) => ({
    ...config,
    label: t(config.labelKey),
    placeholder: t(config.placeholderKey),
    value: formData[config.name as keyof typeof formData],
  }));

  return (
    <section className="contact">
      <img src={CONTACT_IMAGE} alt="photo" className="contact__image" data-aos="fade-left" />
      <div className="contact__form">
        <h1 data-aos="fade-up">{t('contact.title')}</h1>
        <h3 data-aos="fade-up" data-aos-delay="200">
          {t('contact.subtitle')}
        </h3>

        <p data-aos="fade-up" data-aos-delay="400">
          {t('contact.description')}
        </p>
        <div className="contact__links" data-aos="fade-up" data-aos-delay="600">
          {SOCIAL_LINKS.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <img className="contact__icon" src={link.icon} alt={link.alt} />
            </a>
          ))}
        </div>
        <p data-aos="fade-up" data-aos-delay="800">
          {t('contact.formText')}
        </p>
        <form
          className="form__container"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="form__line">
            {fields.slice(0, 2).map((field) => (
              <div key={field.id} className="form__item">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={
                    typeof field.value === 'boolean' ? (field.value ? 'true' : '') : field.value
                  }
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>
          {fields.slice(2).map((field) => (
            <div key={field.id} className="form__item">
              <label htmlFor={field.id}>{field.label}</label>
              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={typeof field.value === 'boolean' ? (field.value ? 'true' : '') : field.value}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="contact__button" type="submit">
            {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

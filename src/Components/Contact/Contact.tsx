import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import { CONTACT_IMAGE, SOCIAL_LINKS, FIELD_CONFIGS } from '../../Constants';
import { useContactForm } from '../../Hooks';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();

  const fields = FIELD_CONFIGS.map((config) => ({
    ...config,
    label: t(config.labelKey),
    placeholder: t(config.placeholderKey),
    value: formData[config.name],
  }));

  const [nameField, emailField] = fields;
  const messageFields = fields.slice(2);

  return (
    <section className="contact">
      <img
        src={CONTACT_IMAGE}
        alt=""
        className="contact__image"
        width={900}
        height={1350}
        loading="lazy"
        decoding="async"
        data-aos="fade-left"
      />
      <div className="contact__form">
        <h1 data-aos="fade-up">{t('contact.title')}</h1>
        <h3 data-aos="fade-up" data-aos-delay="200">
          {t('contact.subtitle')}
        </h3>

        <p data-aos="fade-up" data-aos-delay="400">
          {t('contact.description')}
        </p>
        <div className="contact__links" data-aos="fade-up" data-aos-delay="600">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
            >
              <img className="contact__icon" src={link.icon} alt="" decoding="async" />
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
            {[nameField, emailField].map((field) => (
              <div key={field.id} className="form__item">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>
          {messageFields.map((field) => (
            <div key={field.id} className="form__item">
              <label htmlFor={field.id}>{field.label}</label>
              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="contact__button" type="submit" disabled={isLoading}>
            {isLoading ? t('contact.sending') : t('contact.send')}
          </button>
          <p className="form__status" role="status" aria-live="polite">
            {status === 'success' && <span className="success">{t('contact.success')}</span>}
            {status === 'error' && <span className="error">{t('contact.error')}</span>}
          </p>
        </form>
      </div>
    </section>
  );
};

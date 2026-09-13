import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import { SOCIAL_LINKS, FIELD_CONFIGS } from '../../Constants';
import { useContactForm } from '../../Hooks';

const CONTACT_POINT_KEYS = ['role', 'location', 'format'] as const;

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
      <div className="contact__aside" data-aos="fade-right">
        <p className="contact__eyebrow">{t('contact.eyebrow')}</p>
        <h1>{t('contact.title')}</h1>
        <h3>{t('contact.subtitle')}</h3>
        <div className="contact__points">
          {CONTACT_POINT_KEYS.map((key) => (
            <div className="contact__point" key={key}>
              <strong>{t(`contact.points.${key}.value`)}</strong>
              <span>{t(`contact.points.${key}.label`)}</span>
            </div>
          ))}
        </div>
        <p>{t('contact.description')}</p>
        <div className="contact__links">
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
      </div>

      <div className="contact__form" data-aos="fade-left">
        <p>{t('contact.formText')}</p>
        <form className="form__container" onSubmit={handleSubmit}>
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

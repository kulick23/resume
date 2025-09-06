import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { CONTACT_IMAGE, SOCIAL_LINKS, FIELD_CONFIGS } from '../../Constants';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_7qzl5cq', // Замените на ваш Service ID из EmailJS
        'template_fp6p7nm', // Замените на ваш Template ID из EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'a5A-M4e76FCivSK_k', // Замените на ваш Public Key из EmailJS
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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
                  value={field.value}
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
                value={field.value}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="contact__button" type="submit" disabled={isLoading}>
            {isLoading ? t('contact.sending') : t('contact.send')}
          </button>
          {status === 'success' && <p className="success">{t('contact.success')}</p>}
          {status === 'error' && <p className="error">{t('contact.error')}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

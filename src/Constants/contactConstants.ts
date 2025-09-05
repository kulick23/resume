import lars from '../Assets/PngImg/lars.png';
import telegram from '../Assets/Icons/telegram.svg';
import linkedin from '../Assets/Icons/linkedin.svg';
import mail from '../Assets/Icons/mail.svg';

export const CONTACT_IMAGE = lars;
export const ICONS = {
  telegram,
  linkedin,
  mail,
};

export const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/', icon: ICONS.telegram, alt: 'Facebook' },
  { href: 'https://telegram.org/', icon: ICONS.linkedin, alt: 'Telegram' },
  { href: 'https://www.instagram.com/', icon: ICONS.mail, alt: 'Instagram' },
];

export const FIELD_CONFIGS = [
  {
    labelKey: 'contact.name',
    type: 'text',
    id: 'name',
    name: 'name',
    placeholderKey: 'contact.namePlaceholder',
  },
  {
    labelKey: 'contact.email',
    type: 'email',
    id: 'email',
    name: 'email',
    placeholderKey: 'contact.emailPlaceholder',
  },
  {
    labelKey: 'contact.message',
    type: 'textarea',
    id: 'message',
    name: 'message',
    placeholderKey: 'contact.messagePlaceholder',
  },
];

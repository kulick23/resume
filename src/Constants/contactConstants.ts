import lars from '../Assets/PngImg/lars.webp';
import telegram from '../Assets/Icons/telegram.svg';
import linkedin from '../Assets/Icons/linkedin.svg';
import mail from '../Assets/Icons/mail.svg';

export const CONTACT_IMAGE = lars;

export const SOCIAL_LINKS = [
  { href: 'https://t.me/chik_chiv', icon: telegram, alt: 'Telegram' },
  {
    href: 'https://www.linkedin.com/in/danila-kulinkovich/',
    icon: linkedin,
    alt: 'LinkedIn',
  },
  { href: 'mailto:danek200326@gmail.com', icon: mail, alt: 'Mail' },
];

export const FIELD_CONFIGS = [
  {
    labelKey: 'contact.name',
    type: 'text',
    id: 'name',
    name: 'name',
    autoComplete: 'name',
    placeholderKey: 'contact.namePlaceholder',
  },
  {
    labelKey: 'contact.email',
    type: 'email',
    id: 'email',
    name: 'email',
    autoComplete: 'email',
    placeholderKey: 'contact.emailPlaceholder',
  },
  {
    labelKey: 'contact.message',
    type: 'textarea',
    id: 'message',
    name: 'message',
    autoComplete: 'off',
    placeholderKey: 'contact.messagePlaceholder',
  },
] as const;

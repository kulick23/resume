import LinkedIn from '../Assets/Icons/linkedin.svg';
import Github from '../Assets/Icons/github.svg';
import Telegram from '../Assets/Icons/telegram.svg';

export const SOCIALS = [
  {
    href: 'https://github.com/kulick23',
    img: Github,
    alt: 'Github',
  },
  {
    href: 'https://t.me/kulick03',
    img: Telegram,
    alt: 'Telegram',
  },
  {
    href: 'https://www.linkedin.com/in/danila-kulinkovich/',
    img: LinkedIn,
    alt: 'LinkedIn',
  },
];

export const CONTACTS = [
  {
    href: 'mailto:danek200326@gmail.com',
    label: 'danek200326@gmail.com',
    props: {},
  },
  {
    href: `${import.meta.env.BASE_URL}?view=cv`,
    label: 'CV ⤓',
    props: { target: '_blank', rel: 'noopener noreferrer' },
  },
];

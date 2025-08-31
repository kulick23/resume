import LinkedIn from '../Assets/Icons/linkedin.svg';
import Github from '../Assets/Icons/github.svg';
import Telegram from '../Assets/Icons/telegram.svg';
import CV from '../Assets/CV/cv.pdf';

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'pl', label: 'PL' },
];

export const SOCIALS = [
  {
    href: "https://github.com/kulick23",
    img: Github,
    alt: "Github"
  },
  {
    href: "https://t.me/chik_chiv",
    img: Telegram,
    alt: "Telegram"
  },
  {
    href: "https://www.linkedin.com/in/danila-kulinkovich/",
    img: LinkedIn,
    alt: "LinkedIn"
  }
];

export const STAR_IDS = ["stars", "stars2", "stars3"];

export const CONTACTS = [
  {
    href: "mailto:danek200326@gmail.com",
    label: "danek200326@gmail.com",
    props: {},
  },
  {
    href: CV,
    label: "CV ⤓",
    props: { download: true },
  },
];
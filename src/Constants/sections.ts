// Общий объект секций с всеми свойствами
export const SECTIONS_DATA = {
  header: { aos: 'fade-down', navKey: 'nav.home' },
  about: { aos: 'fade-left', navKey: 'nav.about' },
  skills: { aos: 'fade-left', navKey: 'nav.skills' },
  experience: { aos: 'zoom-in', navKey: 'nav.experience' },
  projects: { aos: 'fade-up', navKey: 'nav.projects' },
  contact: { aos: 'fade-right', navKey: 'nav.contact' },
};

// Для обратной совместимости
export const SECTIONS_NAMES = Object.keys(SECTIONS_DATA) as (keyof typeof SECTIONS_DATA)[];
export const SECTIONS = SECTIONS_NAMES;
export const NAV_LINKS_KEYS = SECTIONS_NAMES.map((name) => ({
  to: name,
  key: SECTIONS_DATA[name].navKey,
}));
export const SECTIONS_CONFIG = SECTIONS_NAMES.map((name) => ({
  name,
  aos: SECTIONS_DATA[name].aos,
}));

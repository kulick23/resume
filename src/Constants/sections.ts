// Общий объект секций с всеми свойствами
export const SECTIONS_DATA = {
  header: { aos: 'fade-down', navKey: 'nav.home' },
  about: { aos: 'fade-left', navKey: 'nav.about' },
  skills: { aos: 'fade-left', navKey: 'nav.skills' },
  projects: { aos: 'fade-up', navKey: 'nav.projects' },
  experience: { aos: 'zoom-in', navKey: 'nav.experience' },
  contact: { aos: 'fade-right', navKey: 'nav.contact' },
};

// Для обратной совместимости
export const SECTIONS = Object.keys(SECTIONS_DATA);
export const NAV_LINKS_KEYS = SECTIONS.map((name) => ({
  to: name,
  key: SECTIONS_DATA[name].navKey,
}));
export const SECTIONS_CONFIG = SECTIONS.map((name) => ({ name, aos: SECTIONS_DATA[name].aos }));
export const SECTIONS_NAMES = Object.keys(SECTIONS_DATA);

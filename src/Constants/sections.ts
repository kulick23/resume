export const SECTIONS_DATA = {
  header: { navKey: 'nav.home' },
  about: { navKey: 'nav.about' },
  skills: { navKey: 'nav.skills' },
  experience: { navKey: 'nav.experience' },
  projects: { navKey: 'nav.projects' },
  contact: { navKey: 'nav.contact' },
} as const;

export type SectionName = keyof typeof SECTIONS_DATA;

export const SECTIONS_NAMES = Object.keys(SECTIONS_DATA) as SectionName[];

export const NAV_LINKS_KEYS = SECTIONS_NAMES.map((name) => ({
  to: name,
  key: SECTIONS_DATA[name].navKey,
}));

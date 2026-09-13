export interface ExperienceEntry {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  icon?: string;
  iconAlt?: string;
}

export interface ExperienceItemProps {
  item: ExperienceEntry;
}

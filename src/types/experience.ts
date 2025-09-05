export interface ExperienceItemProps {
  item: {
    id?: number;
    company: string;
    position: string;
    duration: string;
    description: string;
    icon?: string;
    iconAlt?: string;
  };
}

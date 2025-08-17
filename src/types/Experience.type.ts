export interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  mode: string; // Job Mode
  colorClass: string; // Border CSS
  titleColor: string; // title CSS
  tagStyle: string;
  description: string[]; 
  links?: { label: string; href: string }[];
}
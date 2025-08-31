export interface Experience {
  company: string;
  role: string;
  period: string;
  mode: string;
  colorClass: string;
  titleColor: string;
  tagStyle: string;
  description: string[];
  links?: { label: string; href: string }[];
}
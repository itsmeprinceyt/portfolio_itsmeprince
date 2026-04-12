export interface Experience {
  company: string;
  role: string;
  period: string;
  mode: string;
  description: string[];
  links?: { label: string; href: string }[];
}

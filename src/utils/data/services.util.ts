import { Code2, Globe, Heart, LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  label: string;
  description: string;
  note: string;
};

const services: Service[] = [
  {
    icon: Code2,
    label: "Coding & Guidance",
    description:
      "Stuck on a bug you've been staring at for 3 hours? Unsure which tech stack to pick? Or just need someone to tell you your approach is wrong before you go too deep — I can help with that. Code reviews, architecture advice, or just talking through a problem.",
    note: "Any stack, any level.",
  },
  {
    icon: Globe,
    label: "Web & Mobile Development",
    description:
      "Need a web app or mobile app built? I can take it from idea to shipped — frontend, backend, database, deployment. Or if you have something half-built and need it finished properly, that works too.",
    note: "Full-stack. Clean code. No mess left behind.",
  },
  {
    icon: Heart,
    label: "Life & Work Balance",
    description:
      "Sometimes it's not about the code. If you're burning out, losing direction, or just can't figure out how to balance work and everything else — I've been there. Not a therapist, just someone who'll actually listen and be real with you.",
    note: "No judgment. Just honest conversation.",
  },
];

export default services;

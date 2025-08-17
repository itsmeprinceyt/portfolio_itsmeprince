import { Experience } from "@/types/Experience.type";
import { getTagStyle } from "./ExperienceCSS.util";

export const experiences: Experience[] = [
  {
    company: "RagyaTech",
    role: "Full Stack MERN Developer",
    period: "Aug 2025 – Present",
    mode: "On-Site",
    colorClass: "border-blue-500",
    titleColor: "text-blue-400",
    tagStyle: getTagStyle("blue"),
    description: [
      "Developed and deployed end-to-end full stack applications to meet client and service requirements.",
      "Managed the entire project lifecycle, from database design and migrations to scalable deployment.",
      "Designed and implemented user-friendly, high-performance UI/UX that balances aesthetics with speed and efficiency.",
    ],
    links: [{ label: "Official Website", href: "https://ragyatech.in/" }],
  },
  {
    company: "Mazoku",
    role: "Discord Bot Developer",
    period: "Mar 2025 – Present",
    mode: "Remote",
    colorClass: "border-yellow-500",
    titleColor: "text-yellow-400",
    tagStyle: getTagStyle("yellow"),
    description: [
      "Developed backend services, commands, and API integrations for Mazoku Bot.",
      "Collaborated on design improvements for better player engagement and UI flow.",
      "Worked closely with team to ensure scalability and uptime under heavy load.",
    ],
    links: [
      { label: "Mazoku Website", href: "https://mazoku.cc/" },
      { label: "Mazoku Discord Server", href: "https://discord.gg/mazoku" },
    ],
  },
];

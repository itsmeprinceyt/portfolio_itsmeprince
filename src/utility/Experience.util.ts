import { Experience } from "@/types/Experience.type";
import { getTagStyle } from "./ExperienceCSS.util";

export const experiences: Experience[] = [
  {
    company: "RagyaTech",
    role: "Full Stack MERN Developer",
    period: "Aug 2025 – Present",
    mode: "On-Site",
    colorClass: "border-blue-500/20",
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
    colorClass: "border-yellow-500/20",
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
  {
    company: "Nezuware",
    role: "Web Development Intern",
    period: "Apr 2025 – May 2025",
    mode: "Remote",
    colorClass: "border-emerald-500/20",
    titleColor: "text-emerald-400",
    tagStyle: getTagStyle("emerald"),
    description: [
      "Developed a full-stack web application called ShareAway, enabling users to post and share thoughts anonymously for a secure and seamless experience.",
      "Built both the frontend and backend from scratch using modern technologies such as Next.js, Express.js, and MySQL.",
      "Created and refined to showcase skills in full-stack development and UI/UX design.",
      "Certificate ID: CNO5202040101"
    ],
    links: [
      { label: "Share Away", href: "projects/shareaway" },
    ]
  },
  {
    company: "Apna Competitive Corner",
    role: "Web Development Intern",
    period: "Oct 2024 – Nov 2024",
    mode: "Remote",
    colorClass: "border-emerald-500/20",
    titleColor: "text-emerald-400",
    tagStyle: getTagStyle("emerald"),
    description: [
      "Collaborated with a skilled team to develop an innovative Watch Party Video Sharing Platform.",
      "Contributed to full-stack development, covering front-end, back-end, and UI/UX design in Figma to ensure a seamless user experience.",
      "Received hands-on training in Web3 fundamentals, exploring blockchain technologies and decentralized applications to expand technical expertise."
    ]
  },
  {
    company: "GrapplTech",
    role: "Web Development Intern",
    period: "Sep 2024 – Oct 2024",
    mode: "Remote",
    colorClass: "border-emerald-500/20",
    titleColor: "text-emerald-400",
    tagStyle: getTagStyle("emerald"),
    description: [
      "Leveraged Next.js and Tailwind CSS to develop polished website.",
      "Designed and implemented a Hero Section for a Food Shop website, focusing on elegant, clean, and responsive web design.",
      "Engineered dynamic menu browsing functionality, optimizing user experience and visual appeal through intuitive navigation."
    ],
    links: [
      { label: "Official Website", href: "https://grappltech.in/" },
      { label: "Food Store Landing Page", href: "https://food-shop-nextjs.vercel.app/" },
    ],
  },
  {
    company: "TechnoHacks EduTech",
    role: "Web Development Intern",
    period: "Aug 2024 – Sep 2024",
    mode: "Remote",
    colorClass: "border-emerald-500/20",
    titleColor: "text-emerald-400",
    tagStyle: getTagStyle("emerald"),
    description: [
      "Developed modern web applications using Next.js and Tailwind CSS, gaining expertise in responsive web design and component-based architecture.",
      "Completed project-based tasks focusing on full-stack development, API integration, and user interface optimization.",
      "Enhanced skills in building scalable and efficient web interfaces through hands-on experience with industry-standard technologies.",
      "Certificate ID: TH06427"
    ],
    links: [
      { label: "Official Website", href: "https://technohacks.co.in/" },
      { label: "Project Showcase", href: "https://technohacksinternship.vercel.app/" },
    ],
  }

];

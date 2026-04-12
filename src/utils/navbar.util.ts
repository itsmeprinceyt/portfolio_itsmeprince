const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Support", href: "/support" },
  { label: "Surprise", href: "/surprise" },
  { label: "Contact", href: "/contact" },
] as const;

const STAGGER_DELAYS = [
  "delay-[60ms]",
  "delay-[120ms]",
  "delay-[180ms]",
  "delay-[240ms]",
  "delay-[300ms]",
] as const;

export { NAV_ITEMS, STAGGER_DELAYS };

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Services", href: "#" },
  { label: "Support", href: "#" },
  { label: "Surprise", href: "#" },
  { label: "Contact", href: "#" },
] as const;

const STAGGER_DELAYS = [
  "delay-[60ms]",
  "delay-[120ms]",
  "delay-[180ms]",
  "delay-[240ms]",
  "delay-[300ms]",
] as const;

export { NAV_ITEMS, STAGGER_DELAYS };

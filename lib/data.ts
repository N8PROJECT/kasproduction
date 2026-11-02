export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const serviceNames = [
  "Tent",
  "Stage",
  "Rigging",
  "Exhibition Booth",
  "Sound & Lighting",
  "Multimedia",
  "Genset",
  "Air Conditioning",
];

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: serviceNames.map((label) => ({ label, href: "#services" })),
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** `image` is a path inside /public, e.g. "/images/tent.jpg", or direct URL like Unsplash. */
export type Service = {
  title: string;
  description: string;
  image: string | null;
  tone: string;
};

export const services: Service[] = [
  {
    title: "Tent",
    description:
      "Event-ready tent infrastructure for exhibitions, festivals, corporate events, and large outdoor gatherings.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    tone: "",
  },
  {
    title: "Stage",
    description:
      "Professional stage structures built around audience visibility, event flow, and production needs.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
    tone: "g3",
  },
  {
    title: "Rigging",
    description:
      "Reliable rigging for lighting, audio, displays, signage, and production infrastructure.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200",
    tone: "g4",
  },
  {
    title: "Exhibition Booth",
    description:
      "Custom booth environments that present brands professionally and draw attention.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    tone: "g2",
  },
  {
    title: "Sound & Lighting",
    description:
      "Integrated audio and lighting systems that create clarity, atmosphere, and impact.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200",
    tone: "g3",
  },
  {
    title: "Multimedia",
    description:
      "LED displays, presentation systems, event screens, and live content support.",
    image:
      "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200",
    tone: "g4",
  },
  {
    title: "Genset",
    description:
      "Dependable power for temporary venues, production equipment, and critical operations.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200",
    tone: "g2",
  },
  {
    title: "Air Conditioning",
    description:
      "Temporary climate control that keeps enclosed event spaces comfortable.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
    tone: "",
  },
];

export const gallery = [
  {
    label: "Tent setup",
    alt: "Event tent setup",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    tone: "g2",
  },
  {
    label: "Stage & truss",
    alt: "Stage and truss build",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
    tone: "",
  },
  {
    label: "Exhibition booth",
    alt: "Exhibition booth",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    tone: "g4",
  },
  {
    label: "Sound & lighting",
    alt: "Sound and lighting rig",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200",
    tone: "g3",
  },
];

export const capabilities = [
  {
    title: "Event infrastructure",
    text: "Tents, exhibition booths and venue setup, built to the layout your event needs.",
  },
  {
    title: "Stage & rigging",
    text: "Stage structures and rigging for lighting, audio and displays.",
  },
  {
    title: "Sound, lighting & multimedia",
    text: "Integrated audio, lighting and screens operated by technical crew.",
  },
  {
    title: "Power & comfort",
    text: "Genset power and air conditioning for temporary venues.",
  },
];

export type Project = {
  name: string;
  meta: string;
  services: string;
  image: string | null;
  tone: string;
};

export const projects: Project[] = [
  {
    name: "Karate-do Gojukai",
    meta: "Sporting event · Jakarta · 2025",
    services: "Tent · Stage · Sound · Lighting",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200",
    tone: "g2",
  },
  {
    name: "Soundscape Music Fest",
    meta: "Music Festival · Bali · 2025",
    services: "Stage · Sound · Lighting · Genset",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
    tone: "g4",
  },
  {
    name: "Tech Expo & Convention",
    meta: "Corporate Expo · Jakarta · 2024",
    services: "Exhibition Booth · Multimedia · AC",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    tone: "g3",
  },
];

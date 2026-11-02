type P = { className?: string };
const base = { viewBox: "0 0 24 24", "aria-hidden": true, className: "i" } as const;

export const Arrow = ({ className }: P) => (
  <svg {...base} className={`i ${className ?? ""}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Chevron = ({ className }: P) => (
  <svg {...base} width={14} height={14} className={`i ${className ?? ""}`}><path d="M6 9l6 6 6-6" /></svg>
);
export const MenuIcon = ({ className }: P) => (
  <svg {...base} className={`i ${className ?? ""}`}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Instagram = ({ className }: P) => (
  <svg {...base} className={`i ${className ?? ""}`}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5v.01" />
  </svg>
);

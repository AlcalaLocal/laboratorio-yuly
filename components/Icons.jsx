const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const paths = {
  blood: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
      <path d="M12 14h3M13.5 12.5v3" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-4.6 8A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 20h12M9 20a6 6 0 0 0 7-6" />
      <path d="m8 15-2-2 5-5 2 2-5 5Z" />
      <path d="m12 6 2-2 2 2-2 2M14 20v-2" />
    </>
  ),
  dna: (
    <>
      <path d="M8 3c0 4 8 5 8 9s-8 5-8 9M16 3c0 4-8 5-8 9s8 5 8 9" />
      <path d="M9 6h6M9 18h6M10.5 9h3M10.5 15h3" />
    </>
  ),
  iv: (
    <>
      <rect x="8.5" y="3" width="7" height="10" rx="2.5" />
      <path d="M12 13v5a2 2 0 0 0 2 2M12 7h3.5" />
      <path d="M14 20h3" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.5c0 3.5 3.5 7 7 7 .6 0 1.2-.6 1.2-1.2 0-.3-.1-.5-.3-.6l-1.6-.8c-.3-.1-.6 0-.8.2l-.4.5c-1-.4-2-1.4-2.4-2.4l.5-.4c.2-.2.3-.5.2-.8l-.8-1.6c-.1-.2-.4-.4-.7-.4-.6 0-1.6.5-1.6 1.1Z" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L20 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4V3Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  facebook: (
    <>
      <path d="M14.5 8.5H17V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3.5H11V21h3.5v-6.5H17l.6-3.5h-3.1V9a.5.5 0 0 1 .5-.5Z" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="m12 4 2.3 4.8 5.2.7-3.8 3.6.9 5.2L12 16.6 7.4 18.3l.9-5.2L4.5 9.5l5.2-.7L12 4Z" />
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v8H3zM13 10h4l3 3v2h-7" />
      <circle cx="7" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5M17 19a5.5 5.5 0 0 0-3-5" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6", strokeWidth }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      {...base}
      strokeWidth={strokeWidth ?? base.strokeWidth}
      aria-hidden="true"
    >
      {paths[name] ?? paths.drop}
    </svg>
  );
}

export function Logo({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#lg)" />
      <path
        d="M32 14s13 13.5 13 23a13 13 0 1 1-26 0c0-9.5 13-23 13-23Z"
        fill="#ffffff"
        opacity="0.96"
      />
      <path
        d="M32 30v12M26 36h12"
        stroke="#0f766e"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = [
  <g key="shield">
    <path d="M12 3l7 2.5V11c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V5.5L12 3z" strokeLinejoin="round" />
    <path d="M9 11.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </g>,
  <g key="umbrella">
    <path d="M12 3a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8z" strokeLinejoin="round" />
    <path d="M12 11v6a2 2 0 0 0 4 0" strokeLinecap="round" />
  </g>,
  <g key="heart">
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" strokeLinejoin="round" />
    <path d="M7 12h3l1-2 2 4 1-2h3" strokeLinecap="round" strokeLinejoin="round" />
  </g>,
  <g key="car">
    <path d="M5 16H4v-4l2-5h12l2 5v4h-1" strokeLinejoin="round" />
    <circle cx="7.5" cy="16.5" r="1.8" />
    <circle cx="16.5" cy="16.5" r="1.8" />
    <path d="M9.5 16.5h5" strokeLinecap="round" />
  </g>,
  <g key="ship">
    <path d="M4 13l8-3 8 3-2 6H6l-2-6z" strokeLinejoin="round" />
    <path d="M12 10V5M8 5h8" strokeLinecap="round" />
  </g>,
  <g key="plane">
    <path d="M3 11l18-7-7 18-3-8-8-3z" strokeLinejoin="round" />
  </g>,
  <g key="briefcase">
    <rect height="12" rx="2" width="18" x="3" y="7" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" strokeLinecap="round" />
  </g>,
  <g key="home">
    <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v10h14V10" strokeLinejoin="round" />
  </g>,
];

export function CardIcon({ index }: { index: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {icons[index % icons.length]}
    </svg>
  );
}

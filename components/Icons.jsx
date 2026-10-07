// Shared SVG icon set used across the site.
// Keeping icons in one place avoids duplicating markup in Header, Footer,
// Contact, TourCard, etc. All icons inherit currentColor for theming.

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TiktokIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4c1 2 3 3 5 3" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.86 9.66c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.86-.84 1.04-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.14.18 1.88 2.87 4.55 4.02.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.32z" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2l2.9 6.26 6.85.55-5.2 4.53 1.56 6.66L12 16.9l-6.11 3.1 1.56-6.66-5.2-4.53 6.85-.55z" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Map icon keys (used by About "values") to SVG components.
export function ValueIcon({ name, ...props }) {
  switch (name) {
    case "leaf":
      return (
        <svg {...base} {...props}>
          <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16z" />
          <path d="M4 20c2-4 5-7 9-9" />
        </svg>
      );
    case "users":
      return (
        <svg {...base} {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "compass":
      return (
        <svg {...base} {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
        </svg>
      );
    default:
      return null;
  }
}

// Map icon keys (used by Stay With Us "amenities") to SVG components.
export function AmenityIcon({ name, ...props }) {
  switch (name) {
    case "mountain":
      return (
        <svg {...base} {...props}>
          <path d="M3 20l5-9 4 6 3-4 6 7z" />
          <path d="M14 4l3 3" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...base} {...props}>
          <path d="M5 12.55a11 11 0 0 1 14 0" />
          <path d="M8.5 16.1a6 6 0 0 1 7 0" />
          <path d="M2 8.82a16 16 0 0 1 20 0" />
          <circle cx="12" cy="20" r="0.5" fill="currentColor" />
        </svg>
      );
    case "shower":
      return (
        <svg {...base} {...props}>
          <path d="M4 4l16 5" />
          <path d="M7 9v3a5 5 0 0 0 5 5 5 5 0 0 0 5-5V9" />
          <path d="M8 21l1-2M12 21l1-2M16 21l1-2" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...base} {...props}>
          <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
          <path d="M17 9h2a2 2 0 0 1 0 4h-2" />
          <path d="M7 2v2M11 2v2" />
        </svg>
      );
    case "sun":
      return (
        <svg {...base} {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
        </svg>
      );
    case "parking":
      return (
        <svg {...base} {...props}>
          <rect x="4" y="3" width="16" height="18" rx="3" />
          <path d="M10 8h3a2.5 2.5 0 0 1 0 5h-3V8zm0 0v8" />
        </svg>
      );
    case "users":
      return (
        <svg {...base} {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "meal":
      return (
        <svg {...base} {...props}>
          <path d="M5 3v8a2 2 0 0 0 2 2h0V3M7 13v8M9 3v8M3 3v6a2 2 0 0 0 2 2" />
          <path d="M17 3c-1.5 0-3 1.5-3 4s1.5 4 3 4v10" />
        </svg>
      );
    default:
      return null;
  }
}

// Convenience map for social icons by key.
export const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
};

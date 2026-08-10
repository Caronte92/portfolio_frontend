export const font = {
  family: {
    sans: "var(--font-work-sans), 'Work Sans', system-ui, -apple-system, sans-serif",
    mono: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
  },
  size: {
    display: {
      fontSize: '2.5rem',
      lineHeight: 'normal',
    },
    h1: {
      fontSize: '2.25rem',
      lineHeight: 'normal',
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: 'normal',
    },
    h3: {
      fontSize: '1.375rem',
      lineHeight: 'normal',
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: 'normal',
    },
    bodyLarge: {
      fontSize: '1.125rem',
      lineHeight: 'normal',
    },
    body: {
      fontSize: '1rem',
      lineHeight: 'normal',
    },
    bodySmall: {
      fontSize: '0.875rem',
      lineHeight: 'normal',
    },
    caption: {
      fontSize: '0.8125rem',
      lineHeight: 'normal',
    },
    tag: {
      fontSize: '0.75rem',
      lineHeight: 'normal',
    },
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

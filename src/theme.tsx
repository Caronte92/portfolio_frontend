// Colours
const primary = {
  50: 'oklch(0.97 0.02 200)',
  100: 'oklch(0.94 0.04 200)',
  200: 'oklch(0.88 0.07 200)',
  300: 'oklch(0.82 0.10 200)',
  400: 'oklch(0.76 0.13 200)',
  500: 'oklch(0.72 0.16 200)',
  600: 'oklch(0.66 0.16 200)',
  700: 'oklch(0.58 0.14 200)',
  800: 'oklch(0.48 0.11 200)',
  900: 'oklch(0.38 0.08 200)',
  950: 'oklch(0.28 0.05 200)',
};

const neutral = {
  50: 'oklch(0.98 0.01 250)',
  100: 'oklch(0.95 0.01 250)',
  200: 'oklch(0.88 0.01 250)',
  300: 'oklch(0.78 0.015 250)',
  400: 'oklch(0.65 0.02 250)',
  500: 'oklch(0.55 0.02 250)',
  600: 'oklch(0.40 0.02 250)',
  700: 'oklch(0.28 0.02 250)',
  800: 'oklch(0.18 0.02 250)',
  900: 'oklch(0.12 0.02 250)',
  950: 'oklch(0.08 0.02 250)',
};

const destructive = {
  50: 'oklch(0.97 0.02 25)',
  100: 'oklch(0.92 0.05 25)',
  200: 'oklch(0.85 0.09 25)',
  300: 'oklch(0.78 0.13 25)',
  400: 'oklch(0.72 0.18 25)',
  500: 'oklch(0.68 0.20 25)',
  600: 'oklch(0.60 0.19 25)',
  700: 'oklch(0.52 0.16 25)',
  800: 'oklch(0.44 0.13 25)',
  900: 'oklch(0.36 0.10 25)',
  950: 'oklch(0.28 0.07 25)',
};

interface Palette {
  [key: number]: string;
}

// Devices
export interface Devices {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

interface ITheme {
  breakpoints: Devices;
  colors: {
    primary: Palette;
    neutral: Palette;
    destructive: Palette;
    background: string;
    foreground: string;
    card: string;
    border: string;
    ring: string;
  };
}

export const theme: ITheme = {
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  },
  colors: {
    primary,
    neutral,
    destructive,
    background: neutral[950],
    foreground: neutral[200],
    card: neutral[900],
    border: neutral[800],
    ring: primary[500],
  },
};

// Colours
const primary = {
  50: 'oklch(0.98 0.01 308)',
  100: 'oklch(0.90 0.06 307)',
  200: 'oklch(0.83 0.11 306)',
  300: 'oklch(0.72 0.18 306)',
  400: 'oklch(0.63 0.23 304)',
  500: 'oklch(0.54 0.25 293)',
  600: 'oklch(0.49 0.24 293)',
  700: 'oklch(0.43 0.21 293)',
  800: 'oklch(0.38 0.18 294)',
  900: 'oklch(0.29 0.14 303)',
  950: 'oklch(0.28 0.14 291)',
};

const neutral = {
  50: 'oklch(0.98 0.009 286)',
  100: 'oklch(0.91 0.02 286)',
  200: 'oklch(0.82 0.03 286)',
  300: 'oklch(0.74 0.03 286)',
  400: 'oklch(0.64 0.05 285)',
  500: 'oklch(0.49 0.04 285)',
  600: 'oklch(0.30 0.05 283)',
  700: 'oklch(0.23 0.04 283)',
  800: 'oklch(0.19 0.02 284)',
  900: 'oklch(0.17 0.02 284)',
  950: 'oklch(0.14 0.02 284)',
};

const accent = {
  50: 'oklch(0.98 0.02 201)',
  100: 'oklch(0.96 0.04 203)',
  200: 'oklch(0.92 0.08 205)',
  300: 'oklch(0.87 0.12 207)',
  400: 'oklch(0.80 0.13 212)',
  500: 'oklch(0.71 0.13 215)',
  600: 'oklch(0.61 0.11 222)',
  700: 'oklch(0.52 0.09 223)',
  800: 'oklch(0.45 0.08 224)',
  900: 'oklch(0.40 0.07 227)',
  950: 'oklch(0.30 0.05 230)',
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

export interface ITheme {
  breakpoints: Devices;
  colors: {
    primary: Palette;
    neutral: Palette;
    accent: Palette;
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
    accent,
  },
};

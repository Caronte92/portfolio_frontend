// ─── Color Palettes ─────────────────────────────────────────

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

// ─── Types ──────────────────────────────────────────────────

interface Palette {
  [key: number]: string;
}

interface ButtonVariantTokens {
  color: string;
  background: string;
  borderColor: string;
  hover: {
    color?: string;
    background?: string;
    borderColor?: string;
  };
  active: {
    color?: string;
    background?: string;
    borderColor?: string;
  };
}

interface ButtonSizeTokens {
  gap: string;
  paddingY: string;
  paddingX: string;
  fontSize: string;
  iconSize: string;
}

export interface ITheme {
  colors: {
    primary: Palette;
    neutral: Palette;
    accent: Palette;
    background: string;
    surface: string;
    surfaceHover: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    brand: string;
    brandHover: string;
    brandSubtle: string;
    accentLabel: string;
    accentText: string;
  };
  font: {
    family: {
      sans: string;
      mono: string;
    };
    size: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    weight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeight: {
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: {
    [key: number]: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  components: {
    button: {
      variants: {
        primary: ButtonVariantTokens;
        ghost: ButtonVariantTokens;
        link: ButtonVariantTokens;
      };
      sizes: {
        sm: ButtonSizeTokens;
        md: ButtonSizeTokens;
        lg: ButtonSizeTokens;
        xl: ButtonSizeTokens;
      };
    };
  };
}

// ─── Theme ──────────────────────────────────────────────────

export const theme: ITheme = {
  colors: {
    primary,
    neutral,
    accent,

    // Semantic aliases
    background: neutral[950],
    surface: neutral[900],
    surfaceHover: neutral[800],
    border: neutral[700],
    textPrimary: neutral[50],
    textSecondary: neutral[300],
    textMuted: neutral[500],
    brand: primary[500],
    brandHover: primary[400],
    brandSubtle: primary[950],
    accentLabel: accent[400],
    accentText: accent[300],
  },

  font: {
    family: {
      sans: "var(--font-work-sans), 'Work Sans', system-ui, -apple-system, sans-serif",
      mono: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
    32: '8rem',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  components: {
    button: {
      variants: {
        primary: {
          color: neutral[50],
          background: primary[500],
          borderColor: primary[500],
          hover: {
            background: primary[400],
            borderColor: primary[400],
          },
          active: {
            background: primary[600],
            borderColor: primary[600],
          },
        },
        ghost: {
          color: neutral[50],
          background: 'transparent',
          borderColor: neutral[700],
          hover: {
            background: neutral[800],
            borderColor: neutral[600],
          },
          active: {
            background: neutral[900],
            borderColor: neutral[500],
          },
        },
        link: {
          color: neutral[500],
          background: 'transparent',
          borderColor: 'transparent',
          hover: {
            color: neutral[50],
            borderColor: 'transparent',
          },
          active: {
            color: neutral[50],
          },
        },
      },
      sizes: {
        sm: {
          gap: '0.25rem',
          paddingY: '0.25rem',
          paddingX: '0.75rem',
          fontSize: '0.75rem',
          iconSize: '0.875rem',
        },
        md: {
          gap: '0.5rem',
          paddingY: '0.5rem',
          paddingX: '1rem',
          fontSize: '0.875rem',
          iconSize: '1rem',
        },
        lg: {
          gap: '0.5rem',
          paddingY: '0.75rem',
          paddingX: '1.5rem',
          fontSize: '1rem',
          iconSize: '1.125rem',
        },
        xl: {
          gap: '0.75rem',
          paddingY: '1rem',
          paddingX: '2rem',
          fontSize: '1.125rem',
          iconSize: '1.25rem',
        },
      },
    },
  },
};

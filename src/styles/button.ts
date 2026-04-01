import { colors } from '@/styles/colors';

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

export interface ButtonTokens {
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
}

export const button: ButtonTokens = {
  variants: {
    primary: {
      color: colors.neutral.black,
      background: colors.main.primary,
      borderColor: colors.main.primary,
      hover: {
        background: colors.main.hover,
        borderColor: colors.main.hover,
      },
      active: {
        background: '',
        borderColor: '',
      },
    },
    ghost: {
      color: colors.accent.primary,
      background: 'transparent',
      borderColor: 'transparent',
      hover: {
        color: colors.accent.hover,
        borderColor: colors.accent.hover,
      },
      active: {
        background: '',
        borderColor: '',
      },
    },
    link: {
      color: '',
      background: 'transparent',
      borderColor: 'transparent',
      hover: {
        color: '',
        borderColor: 'transparent',
      },
      active: {
        color: '',
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
};

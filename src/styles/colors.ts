export const colors = {
  main: {
    primary: 'oklch(0.7971 0.1339 211.53)',
    hover: 'oklch(0.70 0.1339 211.53)',
  },
  accent: {
    primary: 'oklch(0.7025 0.1519 299.8)',
    hover: 'oklch(0.60 0.1519 299.8)',
  },
  neutral: {
    bg: 'oklch(0.1436 0.0152 284.32)',
    white: 'oklch(1 0 0)',
    black: 'oklch(0 0 0)',
    grey: 'oklch(0.8853 0 0)',
  },
  support: {
    danger: 'oklch(0.58 0.196 25)',
    error: 'oklch(0.53 0.201 25)',
    warning: 'oklch(0.63 0.162 60)',
    success: 'oklch(0.61 0.158 143)',
    info: 'oklch(0.52 0.243 264)',
  },
} as const;

export type ColorsType = typeof colors;

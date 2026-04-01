export interface HeaderTokens {
  background: string;
  scrolled: {
    background: string;
    borderColor: string;
  };
}

export const header: HeaderTokens = {
  background: 'transparent',
  scrolled: {
    background: 'oklch(0% 0 0 / 0.4)',
    borderColor: 'oklch(100% 0 0 / 0.1)',
  },
};

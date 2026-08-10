import { breakpoints } from '@/styles/breakpoints';
import { colors, ColorsType } from '@/styles/colors';
import { dropdown, DropdownTokens } from '@/styles/dropdown';
import { font } from '@/styles/font';
import { header, HeaderTokens } from '@/styles/header';
import { iconSizes } from '@/styles/icons';
import { spacing } from '@/styles/spacing';

// ─── Types ──────────────────────────────────────────────────

export interface ITheme {
  colors: ColorsType;
  font: typeof font;
  icons: typeof iconSizes;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
  components: {
    dropdown: DropdownTokens;
    header: HeaderTokens;
  };
}

// ─── Theme ──────────────────────────────────────────────────

export const theme: ITheme = {
  colors,
  font,
  icons: iconSizes,
  spacing,
  breakpoints,
  components: {
    dropdown,
    header,
  },
};

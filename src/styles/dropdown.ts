import { colors } from '@/styles/colors';

export interface DropdownTokens {
  trigger: {
    color: string;
    background: string;
    borderColor: string;
    hover: {
      color: string;
      background: string;
      borderColor: string;
    };
    focus: {
      color: string;
      borderColor: string;
    };
    active: {
      color: string;
      borderColor: string;
      background: string;
    };
  };
  menu: {
    background: string;
    borderColor: string;
    shadow: string;
  };
  item: {
    color: string;
    hover: {
      color: string;
      background: string;
    };
    active: {
      color: string;
    };
  };
}

export const dropdown: DropdownTokens = {
  trigger: {
    color: colors.text.muted,
    background: 'transparent',
    borderColor: '#64748b80',
    hover: {
      color: colors.neutral.grey,
      background: '',
      borderColor: '#64748b80',
    },
    focus: {
      color: colors.accent.cyan,
      borderColor: colors.accent.cyan,
    },
    active: {
      color: colors.accent.cyan,
      borderColor: colors.accent.cyan,
      background: 'oklch(0.7971 0.1339 211.53 / 10%)',
    },
  },
  menu: {
    background: '',
    borderColor: '',
    shadow: '',
  },
  item: {
    color: '',
    hover: {
      color: colors.neutral.grey,
      background: '',
    },
    active: {
      color: '',
    },
  },
};

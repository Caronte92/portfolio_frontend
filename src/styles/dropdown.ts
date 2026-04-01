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
    color: '',
    background: 'transparent',
    borderColor: '',
    hover: {
      color: colors.neutral.grey,
      background: '',
      borderColor: '',
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

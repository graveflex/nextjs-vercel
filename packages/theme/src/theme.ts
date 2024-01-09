import { theme } from '@refract-ui/sc';

import satoshi from '../fonts';

const textSizes = {
  '-1': 0.75, // 12px
  '0': 0.875, // 14px
  '1': 1, // 16px
  '2': 1.125, // 18px
  '3': 1.5, // 24px
  '4': 2, // 32px
  '5': 2.5, // 40px
  '6': 3, // 48px
  '7': 4
};

const defaultTheme = theme({
  fontStacks: {
    sans: [satoshi.style.fontFamily]
  },
  textSizes,
  textVariants: {
    menuLink: {
      stack: 'sans',
      color: 'white',
      weight: '400',
      size: 1
    }
  },
  colors: {
    yellow: '#FEF600',
    gray: '#3A3A3A',
    black: '#000',
    white: '#FFF'
  },
  themeColors: ({ colors }) => ({
    primary: colors.yellow
  }),
  fontVariants: {
    heading1: {
      fontSize: '5.75rem',
      lineHeight: 5.689375
    },
    heading2: {
      fontSize: '3.75rem',
      lineHeight: 3
    },
    heading3: {
      fontSize: '2.8125rem',
      lineHeight: 3
    },
    body: {
      fontSize: '1.5rem',
      lineHeight: 1.5625
    }
  }
});

export type RefractTheme = typeof defaultTheme;

export default defaultTheme;

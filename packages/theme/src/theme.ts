import { theme } from '@refract-ui/sc';

import satoshi from '../fonts';

import borders from './borders';
import elements from './elements';

const textSizes = {
  '-1': 0.75, // 12px
  '0': 0.875, // 14px
  '1': 1, // 16px
  '2': 1.125, // 18px
  '3': 1.5, // 24px
  '4': 2, // 32px
  '5': 2.5, // 40px
  '6': 3, // 48px
  '7': 4,
  display1: 4.0625, // 65px
  h1: 2.875, // 46px
  h2: 2, // 32px
  h3: 1.5, // 24px
  h4: 1.125, // 18px
  h5: 1, // 16px
  h6: 0.875 // 14px
};

const defaultTheme = theme({
  fontStacks: {
    sans: [satoshi.style.fontFamily]
  },
  textSizes,
  colors: {
    black: '#000',
    white: '#FFF'
  },
  colorTokens: ({ colors }) => ({
    bg: colors.white,
    fg: colors.black
  }),
  themeColors: {
    primary: '#3A41E3',
    secondary: '#7A7A7A',
    warning: '#F0AD00',
    success: '#1AB96D',
    danger: '#FD0505'
  },
  borders: ({ borders: defaultBorders }) => ({
    ...defaultBorders,
    ...borders
  }),
  elements: ({ elements: defaultElements }) => ({
    ...defaultElements,
    ...elements
    // '.sb-story': defaultElements.body
  })
});

export type RefractTheme = typeof defaultTheme;

export default defaultTheme;

export const themeList: Record<string, RefractTheme> = {
  light: defaultTheme
};

/// <reference types="csstype" />

import { theme } from '@refract-ui/sc';

import colors from './colors';
import fontStacks from './fontStacks';
import textVariants from './typography';

export default theme({
  fontStacks,
  textVariants,
  luminance: {
    range: [1.0, 0.9, 0.8, 0.1]
  },
  themeColors: {
    primary: '#5164AD',
    primaryLight: '#7889C9',
    secondary: '#F0C82D',
    secondaryLight: '#FBE386',
    info: colors.blue,
    warning: colors.orange,
    danger: colors.red,
    success: colors.green,
    dark: colors.black,
    light: colors.white
  },
  colorTokens: {
    bg: ({ themeColors }) => themeColors.primary,
    bgLight: '#FAF6F1',
    fg: colors.white,
    textSubtle: colors.white,
    color1: ({ themeColors }) => themeColors.dark,
    color2: ({ themeColors }) => themeColors.light,
    color3: colors.neutral,
    color4: colors.offWhite
  }
});

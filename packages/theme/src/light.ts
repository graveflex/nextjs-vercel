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
    primary: colors.blue,
    primaryLight: colors.lightBlue,
    secondary: colors.yellow,
    secondaryLight: colors.lightYellow,
    info: colors.blue,
    warning: colors.orange,
    danger: colors.red,
    success: colors.green,
    plain: colors.black,
    dark: colors.black,
    light: colors.white
  },
  colorTokens: {
    bg: ({ themeColors }) => themeColors.dark,
    fg: ({ themeColors }) => themeColors.light,
    color1: ({ themeColors }) => themeColors.dark,
    color2: ({ themeColors }) => themeColors.light,
    color3: colors.neutral,
    color4: colors.offWhite
  }
});

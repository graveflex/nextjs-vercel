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
    primary: '#F0C82D',
    primaryLight: '#FBE386',
    secondary: '#5164AD',
    secondaryLight: '#7889C9',
    info: colors.blue,
    warning: colors.orange,
    danger: colors.red,
    success: colors.green,
    plain: colors.black,
    dark: colors.black,
    light: colors.white
  },
  colorTokens: {
    bg: '#F5EDE2',
    bgLight: '#FAF6F1',
    fg: colors.black,
    textSubtle: '#696969',
    color1: ({ themeColors }) => themeColors.dark,
    color2: ({ themeColors }) => themeColors.light,
    color3: colors.neutral,
    color4: colors.offWhite
  }
});

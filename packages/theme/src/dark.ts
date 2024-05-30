import { theme } from '@refract-ui/sc';

import satoshi from '../fonts';

import textVariants from './typography';

export default theme({
  fontStacks: {
    sans: [satoshi.style.fontFamily]
  },
  textVariants,
  luminance: {
    range: [1.0, 0.9, 0.8, 0.1]
  },
  colors: {
    black: '#0C0E0F',
    white: '#FEFFFA0',
    green: '#3E660A'
  },
  themeColors: {
    primary: '#3E660A', // ADA #3E660A
    
    secondary: '#182C03', // ADA #F2F2EB
    info: '#95D0E8',
    warning: '#FFC857',
    danger: '#D94B36',
    success: '#C1ED8A',
    plain: ({ colors }) => colors.black,
    // dark: '#182C03',
    borderDefault: '#3E660A',
    focus: '#70A430',
    hover: '#03384D',
    textDefault: '#F2F2EB', // ADA #0C0E0F
  }
});

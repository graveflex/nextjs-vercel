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

const textVariants = {
  display1: {
    stack: 'sans',
    weight: '600',
    size: 'display1'
  },
  h1: {
    stack: 'sans',
    weight: '600',
    size: 'h1'
  },
  h2: {
    stack: 'sans',
    weight: '600',
    size: 'h2'
  },
  h3: {
    stack: 'sans',
    weight: '600',
    size: 'h3',
    height: '1.35'
  },
  h4: {
    stack: 'sans',
    weight: '600',
    size: 'h4'
  },
  h5: {
    stack: 'sans',
    weight: '600',
    size: 'h5'
  },
  h6: {
    stack: 'sans',
    weight: '600',
    size: 'h6'
  },
  paragraphBigBold: {
    stack: 'sans',
    weight: '600',
    height: '1.35',
    size: 1
  },
  paragraphBig: {
    stack: 'sans',
    weight: '400',
    height: '1.35',
    size: 1
  },
  paragraphBold: {
    stack: 'sans',
    weight: '600',
    height: '1.18',
    size: 0
  },
  p: {
    stack: 'sans',
    weight: '400',
    height: '1.18',
    size: 0
  },
  paragraph: {
    stack: 'sans',
    weight: '400',
    height: '1.18',
    size: 0
  },
  paragraphSmallBold: {
    stack: 'sans',
    weight: '600',
    height: '1.35',
    size: -1
  },
  paragraphSmall: {
    stack: 'sans',
    weight: '400',
    height: '1.35',
    size: -1
  },
  menuLink: {
    stack: 'sans',
    weight: '400',
    size: 1
  }
};

const defaultTheme = theme(
  {
    fontStacks: {
      sans: [satoshi.style.fontFamily]
    },
    textSizes,
    textVariants: ({ textVariants: defaultVariants }) => {
      return {
        ...defaultVariants,
        ...textVariants
      };
    },
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
    })
  },
  {
    sm: {
      textVariants
    }
  }
);

export type RefractTheme = typeof defaultTheme;

export const darkTheme = theme(
  {
    fontStacks: {
      sans: [satoshi.style.fontFamily]
    },
    textSizes,
    textVariants: ({ textVariants: defaultVariants }) => {
      return {
        ...defaultVariants,
        ...textVariants
      };
    },
    colors: {
      black: '#000',
      white: '#FFF'
    },
    colorTokens: ({ colors }) => ({
      bg: colors.black,
      fg: colors.white
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
    })
  },
  {
    sm: {
      textVariants
    }
  }
);

export default defaultTheme;

export const themeList: Record<string, RefractTheme> = {
  light: defaultTheme,
  dark: darkTheme
};

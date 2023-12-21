import { theme } from '@refract-ui/sc';

const defaultTheme = theme({
  colors: () => ({
    yellow: '#FEF600',
    gray: '#3A3A3A',
    black: '#000',
    white: '#FFF'
  }),
  themeColors: ({ colors }) => ({
    primary: colors.yellow
  }),
  fontVariants: () => ({
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
  })
});

export type RefractTheme = typeof defaultTheme;

export default defaultTheme;

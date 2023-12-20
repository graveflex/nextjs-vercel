import { theme } from '@refract-ui/sc';

const defaultTheme = theme({
  themeColors: {
    primary: '#FAFF00'
  }
});

export type RefractTheme = typeof defaultTheme;

export default defaultTheme;

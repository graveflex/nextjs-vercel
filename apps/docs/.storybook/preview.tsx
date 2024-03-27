import { themeList } from '@mono/theme/src/theme';
import { configureGlobalTypes, withRefract } from '@refract-ui/stories';

const { light, dark } = themeList;

const themes = [
  { title: 'light', value: light },
  { title: 'dark', value: dark }
];

export const globalTypes = {
  ...configureGlobalTypes(themes)
};

export const parameters = {
  backgrounds: {
    default: 'light'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [withRefract];

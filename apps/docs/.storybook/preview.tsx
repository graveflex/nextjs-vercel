import { storybookThemes } from '@mono/theme/src/storybook';
import { configureGlobalTypes, withRefract } from '@refract-ui/stories';
import type { Decorator } from '@storybook/react';

export const globalTypes = {
  ...configureGlobalTypes(storybookThemes)
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

export const decorators = [withRefract] as Decorator[];

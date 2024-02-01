import React from 'react';
import SubTheme from '@refract-ui/sc/components/SubTheme';
import configureGlobalTypes from '@refract-ui/stories/configureGlobalTypes';
import type { Args, Decorator } from '@storybook/react';

import { themeList } from 'theme/src/theme';

const { light, dark } = themeList;

const withRefract: Decorator<Args> = (Story, c) => {
  const theme =
    c.globals.allRefractThemes[c.globals.currentRefractTheme] ||
    c.globals.allRefractThemes.light;

  return (
    <SubTheme theme={theme}>
      <Story {...c} />
    </SubTheme>
  );
};

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

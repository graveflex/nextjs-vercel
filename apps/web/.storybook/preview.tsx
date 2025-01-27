import '../../web/src/app/global.css';

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
  },

  // necessary for react 19
  reactOptions: {
    legacyRootApi: false,
    strictMode: false
  }
};

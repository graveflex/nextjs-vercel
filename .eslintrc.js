module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  ignorePatterns: ['./migrations/*.ts'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
};

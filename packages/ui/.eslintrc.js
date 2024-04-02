module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
        project: ['**/tsconfig.json']
      }
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off'
  }
};

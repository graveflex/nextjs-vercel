module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    'react/require-default-props': 'off'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};

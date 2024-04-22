module.exports = {
  root: true,
  extends: ['custom'],
  ignorePatterns: ['src/migrations/*.ts', 'src/app/(payload)/'],
  rules: {
    'react/require-default-props': 'off'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.stories.*', '**/__tests__/**/*.*'],
            peerDependencies: true
          }
        ]
      }
    }
  ]
};

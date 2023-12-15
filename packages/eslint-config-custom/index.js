module.exports = {
  extends: [
    'next/core-web-vitals',
    'turbo',
    'prettier',
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    curly: ['error', 'all'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'none' }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^next', '^@?\\w'],
          ['^(ui|cms|web|theme|settings)(/.*|$)'],
          ['^\\u0000'],
          ['^@(ui|web)(/.*|$)', '^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};

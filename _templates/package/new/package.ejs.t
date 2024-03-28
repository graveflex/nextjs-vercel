---
to: packages/<%= name %>/package.json
---

{
  "name": "<%= name %>",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "clean": "rm -rf -- ./.turbo ./dist ./coverage",
    "lint": "eslint . --ext js,jsx,ts,tsx"
  },
  "devDependencies": {
    "eslint-config-custom": "*",
    "@mono/tsconfig": "*"
  }
}

---
to: packages/<%= name %>/package.json
---

{
  "name": "<%= name %>",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "clean": "rm -rf -- ./.turbo ./dist ./coverage",
    "lint": "eslint \"**/*.ts*\" --fix"
  },
  "devDependencies": {
    "eslint-config-custom": "*",
    "tsconfig": "*"
  }
}

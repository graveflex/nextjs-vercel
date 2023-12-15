---
to: packages/<%= name %>/tsconfig.json
---
{
  "extends": "tsconfig/<%= ts_base %>.json",
  "include": ["."],
  "exclude": ["dist", "build", "node_modules"]
}

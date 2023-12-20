---
to: "<%= isPayloadBlock ? 'apps/web/src/payload/blocks/index.ts' : null %>" 
inject: true
after: export const schemas = {
skip_if: "<%= name %>Schema"
---
<%= name %>Schema,


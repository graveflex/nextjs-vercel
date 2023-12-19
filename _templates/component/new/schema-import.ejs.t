---
to: "<%= isPayloadBlock ? 'apps/web/src/payload/blocks/index.ts' : null %>" 
inject: true
before: export const schemas = {
skip_if: "import <%= name %>Schema"
---
import <%= name %>Schema from './<%= name %>';


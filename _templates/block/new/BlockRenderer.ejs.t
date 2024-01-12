---
inject: true
to: <%= app_name %>/components/BlocksRenderer/index.tsx
after: InsertBlockDict
---
<%= h.changeCase.camel(name) %>: dynamic(() => import('@web/blocks/<%= name %>'), { ...defaultOpts }),

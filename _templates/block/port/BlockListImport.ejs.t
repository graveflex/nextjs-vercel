---
inject: true
to: <%= app_name %>/lib/blockList.ts
after: InsertBlockConfigImports
---
import <%= name %> from '@mono/web/blocks/<%= name %>/<%= name %>.config';
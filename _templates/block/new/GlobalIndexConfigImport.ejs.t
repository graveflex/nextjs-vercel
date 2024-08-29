---
inject: true
to: <%= app_name %>/globals/BlogIndex/BlogIndex.config.ts
after: InsertBlockConfigs
---
import <%= name %> from '@mono/web/blocks/<%= name %>/<%= name %>.config';
---
inject: true
to: <%= app_name %>/collections/Pages.ts
after: InsertBlockConfigs
---
import <%= name %> from '@mono/web/blocks/<%= name %>/<%= name %>.config';

---
inject: true
to: <%= app_name %>/globals/Home/Homepage.config.ts
after: InsertBlockConfigs
---
import <%= name %> from '@mono/web/blocks/<%= name %>/<%= name %>.config';

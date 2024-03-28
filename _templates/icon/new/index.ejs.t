---
inject: true
to: packages/ui/icons/<%= icon_group %>/index.tsx
after: InsertIconDict
---
  <%= name %>: dynamic(() => import('@mono/ui/icons/<%= icon_group %>/<%= name %>')),
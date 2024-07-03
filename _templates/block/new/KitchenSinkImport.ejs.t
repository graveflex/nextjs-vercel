---
inject: true
to: apps/web/bin/seed_kitchen-sink.ts
after: ImportBlockSchema
---

import { <%= name %>Schema } from '@mono/web/blocks/<%= name %>/<%= name %>Seed';
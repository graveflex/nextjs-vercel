---
inject: true
to: apps/web/bin/seed_kitchen-sink.ts
after: ResolveBlockSchema
---

  const <%= h.changeCase.lcFirst(name) %> = await <%= name %>Schema();
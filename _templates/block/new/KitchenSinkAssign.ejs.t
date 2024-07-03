---
inject: true
to: apps/web/bin/seed_kitchen-sink.ts
after: AddBlock
---

        <%= h.changeCase.lcFirst(name) %>,
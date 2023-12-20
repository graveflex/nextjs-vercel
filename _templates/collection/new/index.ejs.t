---
to: apps/web/src/payload/collections/<%= name %>.ts 
---

import type { CollectionConfig } from 'payload/types';

const <%= name %>: CollectionConfig = {
    slug: '<%= name %>',
    fields: []
}

export default <%= name %>


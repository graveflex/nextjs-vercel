---
to: "<%= isPayloadBlock ? `apps/web/src/payload/blocks/${name}.ts` : null %>" 
---

import { Block } from 'payload/types';

const Schema: Block = {
    slug: '<%= name %>',
    labels: {
        singular: '<%= name %>',
        plural: '<%= name %>s'
    },
    fields: []
}

export default Schema;


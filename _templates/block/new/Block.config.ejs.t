---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.config.ts
---

import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload/types';

const <%= name %>: Block = {
  slug: '<%= h.changeCase.camel(name) %>',
  interfaceName: '<%= name %>T',
  fields: [
    BlockConfig(),
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    }
  ]
};

export default <%= name %>;

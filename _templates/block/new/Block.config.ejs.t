---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.config.ts
---

import type { Block } from 'payload/types';
import BlockConfig from '@web/payload/fields/BlockConfig';

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

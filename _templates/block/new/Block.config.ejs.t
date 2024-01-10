---
to: <%= app_name %>/blocks/<%= name %>/<%= name$>.config.ts
---

import type { Block } from 'payload/types';

const <%= name %>: Block = {
  slug: '<%= h.changeCase.camel(name) %>',
  interfaceName: '<%= name %>T',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    }
  ]
};

export default HeroBlock;

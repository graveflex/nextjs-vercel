---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.config.ts
---

import type { Block } from 'payload';
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';

const <%= name %> = (prefix: string): Block => ({
  slug: '<%= h.changeCase.camel(name) %>',
  interfaceName: '<%= name %>T',
  dbName: `${prefix}<%= name %>`,
  fields: [
    BlockConfig(),
    MakeVariations(<%= variants || 1 %>, prefix, '<%= name %>')
  ]
});

export default <%= name %>;
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
    <%_ for (field of fields) { -%>
      {
        name: '<%= field.fieldName %>',
        label: '<%= field.fieldName %>',
        type: '<%= field.fieldType %>',
        <%_ if (field.fieldType === 'upload') { -%>
          relationTo: '<%= field.fieldRelation %>',
        <%_ } -%>
        required: false
      },
    <%_ } -%>
  ]
};

export default <%= name %>;

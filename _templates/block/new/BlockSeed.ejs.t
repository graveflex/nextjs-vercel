---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>Seed.ts
---

import { faker } from '@faker-js/faker';
import type { <%= name %>T } from '@mono/types/payload-types';
<% for (path of mockImportPaths) { -%>
<%- path %>
<% } -%>

export const <%= name %>Schema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: '<%= name %>',
    blockType: '<%= h.changeCase.lcFirst(name) %>',
  <% for (field of fields) { -%>
    <%- field.fieldName %>: <%- field.mock %>,
  <% } -%>
  } as <%= name %>T;
};

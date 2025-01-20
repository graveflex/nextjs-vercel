---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
import React from 'react';
import type { <%= name %>T as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
<% for (path of componentImportPaths) { -%>
<%- path %>
<% } -%>

export type <%= name %>Type = Omit<PayloadType, 'blockType'>;

function <%= name %>({ 
<% for (field of fields) { -%>
  <%- field.fieldName -%>,
<% } -%>
  blockConfig
  }: <%= name %>Type) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>
        <h1><%= name %></h1>
        <%_ for (field of fields) { -%>
          <div>
            <h1><%- field.fieldName %>-</h1>
            <%- field.rendered %>
          </div>
        <%_ } -%>
      </div>
    </Wrapper>
  );
}

export default <%= name %>;

---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.stories.tsx
---
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
<% for (path of mockImportPaths) { -%>
<%- path %>
<% } -%>

import type { <%= name %>Type } from '.';
import <%= name %> from '.';

const meta: Meta<<%= name %>Type> = {
  title: 'blocks/<%= name %>',
  component: <%= name %>,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<<%= name %>Type>;

export const Defaults: Story = {
  args: {
  <% for (field of fields) { -%>
    <%- field.fieldName %>: <%- field.mock %>,
  <% } -%>
  }
};

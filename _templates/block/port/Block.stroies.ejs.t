---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import type { <%= name %>Type } from '.';
import <%= name %> from '.';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<<%= name %>Type> = {
  title: 'blocks/<%= name %>',
  component: <%= name %>,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(<%= variants || 1 %>)
  }
};


export default meta;
type Story = StoryObj<<%= name %>Type>;

<%_ for (variant of Array.from({length: variants || 1}, (_, i) => i + 1)) { -%>
export const Variant<%= variant %>: Story = {
  args: {
    variant: '<%= variant %>'
  }
};
<%_ } -%>

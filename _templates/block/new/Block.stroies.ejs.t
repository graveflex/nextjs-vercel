---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';

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
    placeholder: '<%= name %>'
  }
};

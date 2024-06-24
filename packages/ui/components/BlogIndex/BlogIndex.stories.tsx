import type { Meta, StoryObj } from '@storybook/react';

import type { BlogIndexType } from '.';
import BlogIndex from '.';

const meta: Meta<BlogIndexType> = {
  title: 'ui/BlogIndex',
  component: BlogIndex,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BlogIndexType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

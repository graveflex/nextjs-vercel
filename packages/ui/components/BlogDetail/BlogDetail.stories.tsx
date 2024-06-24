import type { Meta, StoryObj } from '@storybook/react';

import type { BlogDetailType } from '.';
import BlogDetail from '.';

const meta: Meta<BlogDetailType> = {
  title: 'ui/BlogDetail',
  component: BlogDetail,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BlogDetailType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

import type { Meta, StoryObj } from '@storybook/react';

import type { LayoutType } from '.';
import Layout from '.';

const meta: Meta<LayoutType> = {
  title: 'web/Layout',
  component: Layout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LayoutType>;

export const Defaults: Story = {
  args: {}
};

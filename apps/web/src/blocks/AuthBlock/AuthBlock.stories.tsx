import type { Meta, StoryObj } from '@storybook/react';

import type { AuthBlockType } from '.';
import AuthBlock from '.';

const meta: Meta<AuthBlockType> = {
  title: 'blocks/AuthBlock',
  component: AuthBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AuthBlockType>;

export const Defaults: Story = {
  args: {}
};

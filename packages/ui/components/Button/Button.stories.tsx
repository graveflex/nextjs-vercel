import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadButtonProps } from '../../primitives/PayloadButton';

import Button from '.';

const meta: Meta<PayloadButtonProps> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PayloadButtonProps>;

export const Defaults: Story = {
  args: {}
};

export const Submit: Story = {
  args: {
    type: 'submit'
  }
};

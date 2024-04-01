import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '.';
import Button from '.';

const meta: Meta<ButtonProps> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Defaults: Story = {
  args: {}
};

export const Submit: Story = {
  args: {
    type: 'submit'
  }
};

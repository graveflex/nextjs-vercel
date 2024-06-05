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
  args: {
    icon: { name: 'ArrowRight', color: 'currentColor' }
  }
};

export const Submit: Story = {
  args: {
    type: 'submit',
    icon: { name: 'ArrowRight', color: 'currentColor' }
  }
};

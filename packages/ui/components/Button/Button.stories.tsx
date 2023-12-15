import { Meta, StoryObj } from '@storybook/react';

import type { ButtonType } from '.';
import Button from '.';

const meta: Meta<ButtonType> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonType>;

export const Defaults: Story = {
  args: {}
};

export const Submit: Story = {
  args: {
    type: 'submit'
  }
};

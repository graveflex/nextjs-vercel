import type { PayloadButtonProps } from '@mono/web/src/primitives/primitives';
import type { Meta, StoryObj } from '@storybook/react';

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

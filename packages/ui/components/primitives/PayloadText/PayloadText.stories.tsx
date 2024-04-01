import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadTextProps as PayloadTextType } from '../types/PayloadText';

import PayloadText from '.';

const meta: Meta<PayloadTextType> = {
  title: 'ui/PayloadText',
  component: PayloadText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PayloadTextType>;

export const Defaults: Story = {
  args: {
    content: 'Enter text here'
  }
};

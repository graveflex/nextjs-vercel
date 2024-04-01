import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadDateProps as PayloadDateType } from '@ui/primitives/PayloadDate';

import PayloadDate from '.';

const meta: Meta<PayloadDateType> = {
  title: 'ui/PayloadDate',
  component: PayloadDate,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PayloadDateType>;

export const Defaults: Story = {
  args: {
    input: new Date().toISOString(),
    format: 'dd mm yyyy'
  }
};

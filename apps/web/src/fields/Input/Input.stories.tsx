import type { Meta, StoryObj } from '@storybook/react';

import type { InputType } from '@web/payload/payload-types';

import Input from '.';

const meta: Meta<InputType> = {
  title: 'web/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<InputType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};
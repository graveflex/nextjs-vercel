import type { Meta, StoryObj } from '@storybook/react';

import type { TextInputType } from '.';
import TextInput from '.';

const meta: Meta<TextInputType> = {
  title: 'ui/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TextInputType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

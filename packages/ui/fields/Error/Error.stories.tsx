import type { Meta, StoryObj } from '@storybook/react';

import type { ErrorType } from '.';
import Error from '.';

const meta: Meta<ErrorType> = {
  title: 'ui/Error',
  component: Error,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ErrorType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

import type { Meta, StoryObj } from '@storybook/react';

import type { HeaderType } from '.';
import Header from '.';

const meta: Meta<HeaderType> = {
  title: 'ui/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeaderType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

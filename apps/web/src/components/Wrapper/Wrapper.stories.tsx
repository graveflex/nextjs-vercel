import type { Meta, StoryObj } from '@storybook/react';

import type { WrapperProps } from '.';
import Wrapper from '.';

const meta: Meta<WrapperProps> = {
  title: 'web/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<WrapperProps>;

export const Defaults: Story = {
  args: {}
};

import type { Meta, StoryObj } from '@storybook/react';

import type { IconProps } from '.';
import RenderIcon from '.';

const meta: Meta<IconProps> = {
  title: 'icons/RenderIcon',
  component: RenderIcon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<IconProps>;

export const Defaults: Story = {
  args: {}
};

export const ArrowNesting: Story = {
  args: {
    name: 'ArrowNesting'
  }
};

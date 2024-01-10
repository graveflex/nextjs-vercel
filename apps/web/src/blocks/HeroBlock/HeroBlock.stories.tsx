import type { Meta, StoryObj } from '@storybook/react';

import type { HeroBlockType } from '.';
import HeroBlock from '.';

const meta: Meta<HeroBlockType> = {
  title: 'block/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroBlockType>;

export const Defaults: Story = {
  args: {
    title: 'Hero block'
  }
};

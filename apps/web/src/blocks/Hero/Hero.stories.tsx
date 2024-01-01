import type { Meta, StoryObj } from '@storybook/react';

import type { HeroType } from '.';
import Hero from '.';

const meta: Meta<HeroType> = {
  title: 'web/Hero',
  component: Hero,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeroRevealBlockType } from '.';
import HeroRevealBlock from '.';

const meta: Meta<HeroRevealBlockType> = {
  title: 'blocks/HeroRevealBlock',
  component: HeroRevealBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroRevealBlockType>;

export const Defaults: Story = {
  args: {
    title: faker.lorem.text()
  }
};

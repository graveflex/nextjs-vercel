import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeroSectionsBlockType } from '.';
import HeroSectionsBlock from '.';

const meta: Meta<HeroSectionsBlockType> = {
  title: 'blocks/HeroSectionsBlock',
  component: HeroSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroSectionsBlockType>;

export const One: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '1'
  }
};

export const Two: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '2'
  }
};

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

export const Three: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '3'
  }
};

export const Four: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '4'
  }
};

export const Five: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '5'
  }
};

export const Six: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '6'
  }
};

export const Seven: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '7'
  }
};

export const Eight: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '8'
  }
};

export const Nine: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '9'
  }
};

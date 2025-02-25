import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeaderSectionBlockType } from '.';
import HeaderSectionBlock from '.';

const meta: Meta<HeaderSectionBlockType> = {
  title: 'blocks/HeaderSectionBlock',
  component: HeaderSectionBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeaderSectionBlockType>;

export const Defaults: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '1'
  }
};

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

import { faker } from '@faker-js/faker';
import { ctaSection1MockData } from '@mono/web/components/RichText/richTextMockData';
import type { Meta, StoryObj } from '@storybook/react';

import type { CtaSectionsBlockType } from '.';
import CtaSectionsBlock from '.';

const meta: Meta<CtaSectionsBlockType> = {
  title: 'blocks/CtaSectionsBlock',
  component: CtaSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CtaSectionsBlockType>;

export const Defaults: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '1',
    content: ctaSection1MockData.data
  }
};

export const One: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '1',
    content: ctaSection1MockData.data
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

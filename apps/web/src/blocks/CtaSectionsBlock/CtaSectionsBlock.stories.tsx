import { faker } from '@faker-js/faker';
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
    title: faker.lorem.words(5)
  }
};

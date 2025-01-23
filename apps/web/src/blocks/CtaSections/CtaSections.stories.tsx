import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { CtaSectionsType } from '.';
import CtaSections from '.';

const meta: Meta<CtaSectionsType> = {
  title: 'blocks/CtaSections',
  component: CtaSections,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CtaSectionsType>;

export const Defaults: Story = {
  args: {
    title: faker.lorem.words(5)
  }
};

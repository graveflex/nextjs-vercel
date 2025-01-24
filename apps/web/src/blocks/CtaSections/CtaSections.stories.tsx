// @ts-ignore
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import CtaSections from '.';

const meta: Meta = {
  title: 'blocks/CtaSections',
  component: CtaSections,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

export const Defaults: Story = {
  args: {
    title: faker.lorem.words(5)
  }
};

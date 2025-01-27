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
    title: faker.lorem.words(5)
  }
};

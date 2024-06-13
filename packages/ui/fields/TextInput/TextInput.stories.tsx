import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { TextInputType } from '.';
import TextInput from '.';

const meta: Meta<TextInputType> = {
  title: 'fields/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TextInputType>;

export const Defaults: Story = {
  args: {
    placeholder: faker.lorem.words(3),
    label: faker.lorem.words(2),
    required: true
  }
};

export const Warning: Story = {
  args: {
    placeholder: faker.lorem.words(4),
    label: faker.lorem.words(3),
    required: true,
    errorMessage: faker.lorem.words(5)
  }
};

export const TooMuchText: Story = {
  args: {
    placeholder: faker.lorem.words(14),
    label: faker.lorem.words(14),
    required: true
  }
};

export const TooLittleText: Story = {
  args: {
    placeholder: faker.lorem.words(1),
    label: faker.lorem.words(1),
    required: false
  }
};

export const ErrorMessage: Story = {
  args: {
    placeholder: faker.lorem.words(3),
    label: faker.lorem.words(3),
    required: true,
    errorMessage: faker.lorem.words(7)
  }
};

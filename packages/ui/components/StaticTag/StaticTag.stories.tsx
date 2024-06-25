import type { Meta, StoryObj } from '@storybook/react';

import type { StaticTagType } from '.';
import StaticTag from '.';

const meta: Meta<StaticTagType> = {
  title: 'ui/StaticTag',
  component: StaticTag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<StaticTagType>;

export const Defaults: Story = {
  args: {
    label: 'Education'
  }
};

export const TagButton: Story = {
  args: {
    label: 'Education',
    isButton: true
  }
};

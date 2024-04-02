import type { Meta, StoryObj } from '@storybook/react';

import type { QuoteType } from '.';
import Quote from '.';

const meta: Meta<QuoteType> = {
  title: 'ui/Quote',
  component: Quote,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<QuoteType>;

export const Defaults: Story = {
  args: {
    copy: 'Lorem ipsum dolor sit amet consectetur the quick brown fox jumps over the lazy dog.'
  }
};

export const LargeText: Story = {
  args: {
    copy: 'Lorem ipsum dolor sit amet consectetur the quick brown fox jumps over the lazy dog.',
    isLarge: true,
    iconProps: {
      width: '40',
      height: '40',
      color: '#3E660A'
    }
  }
};

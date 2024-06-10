import type { Meta, StoryObj } from '@storybook/react';

import type { FooterType } from '.';
import Footer from '.';

const meta: Meta<FooterType> = {
  title: 'ui/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FooterType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};

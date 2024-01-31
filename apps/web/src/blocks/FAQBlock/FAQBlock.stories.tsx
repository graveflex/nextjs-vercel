import type { Meta, StoryObj } from '@storybook/react';

import type { FAQBlockType } from '.';
import FAQBlock from '.';

const meta: Meta<FAQBlockType> = {
  title: 'blocks/FAQBlock',
  component: FAQBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FAQBlockType>;

export const Defaults: Story = {
  args: {
    placeholder: 'FAQBlock'
  }
};

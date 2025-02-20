import type { Meta, StoryObj } from '@storybook/react';
import type { PricingSectionsBlockType } from '.';
import PricingSectionsBlock from '.';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<PricingSectionsBlockType> = {
  title: 'blocks/PricingSectionsBlock',
  component: PricingSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(4)
  }
};

export default meta;
type Story = StoryObj<PricingSectionsBlockType>;

export const Variant1: Story = {
  args: {
    variant: '1'
  }
};
export const Variant2: Story = {
  args: {
    variant: '2'
  }
};
export const Variant3: Story = {
  args: {
    variant: '3'
  }
};
export const Variant4: Story = {
  args: {
    variant: '4'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import type { FourOhFourBlockType } from '.';
import FourOhFourBlock from '.';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<FourOhFourBlockType> = {
  title: 'blocks/FourOhFourBlock',
  component: FourOhFourBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(3)
  }
};

export default meta;
type Story = StoryObj<FourOhFourBlockType>;

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

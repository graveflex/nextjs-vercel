import type { Meta, StoryObj } from '@storybook/react';
import type { FaqSectionsBlockType } from '.';
import FaqSectionsBlock from '.';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<FaqSectionsBlockType> = {
  title: 'blocks/FaqSectionsBlock',
  component: FaqSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(4)
  }
};

export default meta;
type Story = StoryObj<FaqSectionsBlockType>;

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

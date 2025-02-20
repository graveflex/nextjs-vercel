import type { Meta, StoryObj } from '@storybook/react';
import type { ContactSectionsBlockType } from '.';
import ContactSectionsBlock from '.';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<ContactSectionsBlockType> = {
  title: 'blocks/ContactSectionsBlock',
  component: ContactSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(6)
  }
};

export default meta;
type Story = StoryObj<ContactSectionsBlockType>;

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
export const Variant5: Story = {
  args: {
    variant: '5'
  }
};
export const Variant6: Story = {
  args: {
    variant: '6'
  }
};

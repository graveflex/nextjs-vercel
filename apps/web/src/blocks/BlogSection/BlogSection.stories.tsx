import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { BlogSectionType } from '.';
import BlogSection from '.';

// Helpers
import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<BlogSectionType> = {
  title: 'blocks/BlogSection',
  component: BlogSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(5)
  }
};

export default meta;
type Story = StoryObj<BlogSectionType>;

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

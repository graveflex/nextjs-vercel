// Types
type Story = StoryObj<FeatureSectionType>;
import type { Meta, StoryObj } from '@storybook/react';
import type { FeatureSectionType } from '.';

// Components
import FeatureSection from '.';

// Helpers
import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

// Constants
const VARIATIONS = 14;

const meta: Meta<FeatureSectionType> = {
  title: 'blocks/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(VARIATIONS)
  }
};

export default meta;

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

export const Variant7: Story = {
  args: {
    variant: '7'
  }
};

export const Variant8: Story = {
  args: {
    variant: '8'
  }
};

export const Variant9: Story = {
  args: {
    variant: '9'
  }
};

export const Variant10: Story = {
  args: {
    variant: '10'
  }
};

export const Variant11: Story = {
  args: {
    variant: '11'
  }
};

export const Variant12: Story = {
  args: {
    variant: '12'
  }
};

export const Variant13: Story = {
  args: {
    variant: '13'
  }
};

export const Variant14: Story = {
  args: {
    variant: '14'
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import heroSectionsMockData, {
  heroSections6_9MockData,
  imgMockData
} from './HeroSectionsMockData';

import type { HeroSectionsBlockType } from '.';
import HeroSectionsBlock from '.';

const meta: Meta<HeroSectionsBlockType> = {
  title: 'blocks/HeroSectionsBlock',
  component: HeroSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroSectionsBlockType>;

export const Defaults: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '1'
  }
};

// Story name corresponds to variant number:
export const One: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '1'
  }
};

export const Two: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '2'
  }
};

export const Three: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '3'
  }
};

export const Four: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '4'
  }
};

export const Five: Story = {
  args: {
    content: heroSectionsMockData.data,
    variant: '5'
  }
};

export const Six: Story = {
  args: {
    content: heroSections6_9MockData.data,
    image: imgMockData,
    variant: '6'
  }
};

export const Seven: Story = {
  args: {
    content: heroSectionsMockData.data,
    image: imgMockData,
    variant: '7'
  }
};

export const Eight: Story = {
  args: {
    content: heroSections6_9MockData.data,
    variant: '8'
  }
};

export const Nine: Story = {
  args: {
    content: heroSections6_9MockData.data,
    variant: '9'
  }
};

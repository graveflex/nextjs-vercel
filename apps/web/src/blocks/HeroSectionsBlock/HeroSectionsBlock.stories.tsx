import type { Meta, StoryObj } from '@storybook/react';
import heroSectionsMockData, {
  heroSections6_9MockData,
  heroSectionsListMockData,
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
  argTypes: {
    imagePosition: {
      control: 'select',
      options: ['left', 'right']
    },
    variant: {
      control: 'select',
      options: ['1', '2', '4', '5', '6', '8', '9']
    }
  },
  decorators: [(Story) => <div className="bg-background">{Story()}</div>],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroSectionsBlockType>;

export const Defaults: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsMockData.data,
    image: imgMockData
  }
};

// Story name corresponds to variant number:
export const One: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsMockData.data,
    image: imgMockData
  }
};

export const OneWithList: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsListMockData.data,
    image: imgMockData
  }
};

export const Four: Story = {
  args: {
    imagePosition: 'right',
    variant: '4',
    content: heroSectionsMockData.data,
    image: imgMockData
  }
};

export const Five: Story = {
  args: {
    imagePosition: 'right',
    variant: '5',
    content: heroSectionsMockData.data
  }
};

export const Six: Story = {
  args: {
    variant: '6',
    imagePosition: 'right',
    content: heroSections6_9MockData.data,
    image: imgMockData
  }
};

export const Eight: Story = {
  args: {
    variant: '8',
    imagePosition: 'right',
    content: heroSections6_9MockData.data
  }
};

export const Nine: Story = {
  args: {
    variant: '9',
    imagePosition: 'right',
    content: heroSections6_9MockData.data
  }
};

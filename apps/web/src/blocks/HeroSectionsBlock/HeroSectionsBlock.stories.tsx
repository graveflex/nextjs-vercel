import type { Meta, StoryObj } from '@storybook/react';
import heroSectionsMockData, {
  heroSectionsWithFormMockData,
  imgMockData,
  videoMockData
} from './HeroSectionsMockData';

import type { HeroSectionsBlockType } from '.';
import HeroSectionsBlock from '.';

const meta: Meta<HeroSectionsBlockType> = {
  title: 'blocks/HeroSectionsBlock',
  component: HeroSectionsBlock,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    imagePosition: {
      control: 'select',
      options: ['left', 'right']
    },
    variant: {
      control: 'select',
      options: ['1', '2', '3']
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
    media: imgMockData
  }
};

// Story name corresponds to variant number:
export const One: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};

export const OneWithVideo: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsMockData.data,
    media: videoMockData
  }
};

export const OneWithForm: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsWithFormMockData.data,
    media: imgMockData
  }
};

export const Two: Story = {
  args: {
    variant: '2',
    imagePosition: 'right',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};

export const Three: Story = {
  args: {
    variant: '3',
    imagePosition: 'right',
    content: heroSectionsMockData.data
  }
};

export const ThreeWithVideo: Story = {
  args: {
    variant: '3',
    imagePosition: 'right',
    content: heroSectionsMockData.data,
    media: videoMockData
  }
};

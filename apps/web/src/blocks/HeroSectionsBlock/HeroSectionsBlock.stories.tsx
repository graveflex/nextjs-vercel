import type { Meta, StoryObj } from '@storybook/react';
import heroSectionsMockData, {
  heroSections4_5MockData,
  heroSections6_9MockData,
  heroSectionsListMockData,
  imgMockData,
  emailSignupFormMockData
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

export const OneWithList: Story = {
  args: {
    imagePosition: 'right',
    variant: '1',
    content: heroSectionsListMockData.data,
    media: imgMockData
  }
};

export const Four: Story = {
  args: {
    imagePosition: 'right',
    variant: '4',
    content: heroSections4_5MockData.data,
    media: imgMockData,
    form: emailSignupFormMockData
  }
};

export const Six: Story = {
  args: {
    variant: '6',
    imagePosition: 'right',
    content: heroSections6_9MockData.data,
    media: imgMockData
  }
};

export const Nine: Story = {
  args: {
    variant: '9',
    imagePosition: 'right',
    content: heroSections6_9MockData.data
  }
};

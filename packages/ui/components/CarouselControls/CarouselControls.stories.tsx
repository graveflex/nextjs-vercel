import type { Meta, StoryObj } from '@storybook/react';

import type { CarouselControlsType } from '.';
import CarouselControls from '.';

const meta: Meta<CarouselControlsType> = {
  title: 'ui/CarouselControls',
  component: CarouselControls,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CarouselControlsType>;

export const Defaults: Story = {
  args: {
    isNextButtonEnabled: true,
    isPreviousButtonEnabled: false,
    slideNext: () => {},
    slidePrevious: () => {}
  }
};

export const WithDots: Story = {
  args: {
    activeDotIndex: 1,
    carouselLength: 5,
    isNextButtonEnabled: true,
    isPreviousButtonEnabled: false,
    showDots: true,
    slideNext: () => {},
    slidePrevious: () => {}
  }
};

export const WithMargin: Story = {
  args: {
    activeDotIndex: 1,
    carouselLength: 5,
    isNextButtonEnabled: true,
    isPreviousButtonEnabled: false,
    showDots: true,
    hasMargin: true,
    slideNext: () => {},
    slidePrevious: () => {}
  }
};

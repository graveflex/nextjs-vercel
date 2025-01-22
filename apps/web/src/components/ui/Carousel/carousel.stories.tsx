import type { Meta, StoryObj } from '@storybook/react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@mono/web/components/ui/Carousel';

const arrayKeys = ['one', 'two', 'three', 'four', 'five'];

/**
 * A carousel with motion and swipe built using Embla.
 */
const meta: Meta<typeof Carousel> = {
  title: 'ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'w-full max-w-xs'
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {arrayKeys.map((item) => {
          return (
            <CarouselItem key={item}>
              <div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
                <span className="text-4xl font-semibold">{item}</span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the carousel.
 */
export const Default: Story = {};

/**
 * Use the `basis` utility class to change the size of the carousel.
 */
export const Size: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-12 w-full max-w-xs">
      <CarouselContent>
        {arrayKeys.map((item) => (
          <CarouselItem key={item} className="basis-1/3">
            <div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
              <span className="text-4xl font-semibold">{item}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    className: 'mx-12 w-full max-w-xs'
  }
};

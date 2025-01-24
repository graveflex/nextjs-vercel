import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { WrapperProps } from '.';
import Wrapper from '.';

const meta: Meta<WrapperProps> = {
  title: 'ui/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: (Story) => <div>{Story()}</div>
};

const sharedArgs: Partial<WrapperProps> = {
  children: <div />
};

export default meta;
type Story = StoryObj<WrapperProps>;

export const CenterSmContent: Story = {
  args: {
    ...sharedArgs,
    contentWidth: 'full',
    backgroundColor: 'blue20'
  }
};

export const CenterXxlContent: Story = {
  args: {
    ...sharedArgs,
    backgroundColor: 'blue20',
    contentWidth: 'full'
  }
};

export const MaxContent: Story = {
  args: {
    backgroundColor: 'blue20',
    ...sharedArgs
  }
};

export const MaxContentNoGutter: Story = {
  args: {
    ...sharedArgs,
    backgroundColor: 'blue20',
    gutter: false
  }
};

export const BackgroundImage: Story = {
  args: {
    ...sharedArgs,
    contentWidth: 'full',
    backgroundImage: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447
    }
  }
};

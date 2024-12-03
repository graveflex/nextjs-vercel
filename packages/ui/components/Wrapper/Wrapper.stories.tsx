import { faker } from '@faker-js/faker';
import styled from '@refract-ui/sc';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { WrapperProps } from '.';
import Wrapper from '.';

const Content = styled.div`
  background: rgba(255, 0, 0, 0.3);
  align-self: stretch;
  justify-self: stretch;
`;

const StoryContainer = styled.div`
  min-height: 50svh;
  display: grid;
`;

const meta: Meta<WrapperProps> = {
  title: 'ui/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: (Story) => <StoryContainer>{Story()}</StoryContainer>
};

const sharedArgs: Partial<WrapperProps> = {
  children: <Content />
};

export default meta;
type Story = StoryObj<WrapperProps>;

export const CenterSmContent: Story = {
  args: {
    ...sharedArgs,
    contentWidth: 'sm',
    backgroundColor: 'blue20'
  }
};

export const CenterXxlContent: Story = {
  args: {
    ...sharedArgs,
    backgroundColor: 'blue20',
    contentWidth: 'xxl'
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
    contentWidth: 'sm',
    backgroundImage: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.url({ width: 640, height: 447 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447
    }
  }
};

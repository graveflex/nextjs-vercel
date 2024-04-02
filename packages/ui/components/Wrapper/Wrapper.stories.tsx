import React from 'react';
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

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

const imgUrl = faker.image.urlLoremFlickr({
  category: 'abstract',
  width: 1440,
  height: 1440
});

export const BackgroundImage: Story = {
  args: {
    ...sharedArgs,
    contentWidth: 'sm',
    backgroundImage: imgUrl
  }
};

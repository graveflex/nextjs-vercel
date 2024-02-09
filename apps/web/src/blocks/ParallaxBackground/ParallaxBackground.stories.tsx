import React from 'react';
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import type { ParallaxBackgroundType } from '.';
import ParallaxBackground from '.';

const Container = styled.div`
  min-height: 300vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const meta: Meta<ParallaxBackgroundType> = {
  title: 'blocks/ParallaxBackground',
  component: ParallaxBackground,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [(Fn) => <Container>{Fn()}</Container>]
};

export default meta;
type Story = StoryObj<ParallaxBackgroundType>;

export const Defaults: Story = {
  args: {
    content: faker.lorem.text(),
    background: {
      id: 1,
      alt: 'Background Image',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(1200),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};

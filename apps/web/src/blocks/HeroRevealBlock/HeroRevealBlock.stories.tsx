import React from 'react';
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import bgImgUrl from './img/blue.svg';
import pdImgUrl from './img/product-detail.png';

import type { HeroRevealBlockType } from '.';
import HeroRevealBlock from '.';

const Container = styled.div`
  min-height: 200vh;
  width: 100%;
`;

const meta: Meta<HeroRevealBlockType> = {
  title: 'blocks/HeroRevealBlock',
  component: HeroRevealBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [(Fn) => <Container>{Fn()}</Container>]
};

export default meta;
type Story = StoryObj<HeroRevealBlockType>;

export const Defaults: Story = {
  args: {
    title: 'A Love Supreme',
    body: [
      {
        children: [
          {
            text: 'Immortal beings, rejoice! Unicorn Blood is a powerful concoction, stylized, and scrutinized to be the best all-Americana espresso we can bestow upon the planet.'
          }
        ]
      }
    ],
    background: {
      id: 1,
      alt: 'Background Image',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: bgImgUrl.src,
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    },
    productDetail: {
      id: 1,
      alt: 'Product Detail',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: pdImgUrl.src,
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};

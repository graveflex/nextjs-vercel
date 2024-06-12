import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { CardGridBlockType } from '.';
import CardGridBlock from '.';

const meta: Meta<CardGridBlockType> = {
  title: 'blocks/CardGridBlock',
  component: CardGridBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CardGridBlockType>;

export const Defaults: Story = {
  args: {
    cards: [
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 1',
          subHead: 'Subhead 1',
          image: {
            id: 1,
            alt: 'Myopic Logo',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.abstract(1200),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231,
            additionalProps: {
              objectFit: 'fill',
              isRounded: false,
              aspectRatio: '16/9'
            }
          },
          ctas: [
            {
              cta: {
                label: 'Action 1',
                externalHref: '/'
              }
            }
          ]
        }
      }
    ]
  }
};

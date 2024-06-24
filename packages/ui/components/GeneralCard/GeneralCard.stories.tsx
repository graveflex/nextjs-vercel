import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { GeneralCardType } from '.';
import GeneralCard from '.';

const meta: Meta<GeneralCardType> = {
  title: 'ui/GeneralCard',
  component: GeneralCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  tags: ['autodocs']
};

const image = {
  id: 1,
  alt: 'Card Image',
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
    aspectRatio: '16/9'
  }
};

export default meta;
type Story = StoryObj<GeneralCardType>;

export const BasicCard: Story = {
  args: {
    // @ts-expect-error image is not required
    image,
    eyebrow: 'Eyebrow',
    headline: 'General Card',
    subHead: faker.lorem.paragraph(3),
    ctas: [
      {
        cta: {
          link: {
            label: 'Action 1',
            externalHref: '/learn-more'
          }
        }
      }
    ]
  }
};

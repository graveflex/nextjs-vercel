import { faker } from '@faker-js/faker';
import type { CTAType } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { IconGridBlockType } from '.';
import IconGridBlock from '.';

const meta: Meta<IconGridBlockType> = {
  title: 'blocks/IconGridBlock',
  component: IconGridBlock,
  parameters: {
    layout: 'fullScreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<IconGridBlockType>;

const image = {
  id: 1,
  alt: 'Pictogram',
  updatedAt: '2024-01-05T20:29:44.749Z',
  createdAt: '2024-01-05T20:29:44.749Z',
  url: faker.image.urlLoremFlickr(),
  filename: 'Logo.svg',
  mimeType: 'image/svg+xml',
  filesize: 7144,
  width: 70,
  height: 70
};

const largeImage = {
  id: 1,
  alt: 'Pictogram',
  updatedAt: '2024-01-05T20:29:44.749Z',
  createdAt: '2024-01-05T20:29:44.749Z',
  url: faker.image.urlLoremFlickr(),
  filename: 'Logo.svg',
  mimeType: 'image/svg+xml',
  filesize: 7144,
  width: 220,
  height: 123
};

const card = {
  image,
  content: genRichText([
    { type: 'heading', tag: 'h3', text: faker.lorem.words(2) },
    {
      type: 'paragraph',
      text: faker.lorem.paragraph(3)
    }
  ])
};

const ctaCard = {
  image: largeImage,
  content: genRichText([
    { type: 'heading', tag: 'h3', text: faker.lorem.words(2) },
    {
      type: 'paragraph',
      text: faker.lorem.paragraph(3)
    }
  ]),
  cta: {
    link: {
      label: 'Learn More'
    },
    variant: 'link' as CTAType['variant'],
    color: 'darkTheme' as CTAType['color']
  }
};

export const HorizontalPictogram: Story = {
  args: {
    layout: 'horizontal',
    items: [card, card, card]
  }
};

export const CtaLargeImage: Story = {
  args: {
    layout: 'horizontal',
    items: [ctaCard, ctaCard, ctaCard]
  }
};

export const VerticalPictogram: Story = {
  args: {
    layout: 'vertical',
    items: [card, card, card]
  }
};

export const SixUpGrid: Story = {
  args: {
    layout: 'horizontal',
    items: [card, card, card, card, card, card]
  }
};

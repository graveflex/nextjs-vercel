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
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 1',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      },
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 2',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 2',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      },
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 3',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 3',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      }
    ]
  }
};

export const FourCards: Story = {
  args: {
    cards: [
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 1',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 1',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      },
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 2',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 2',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      },
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 3',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 3',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      },
      {
        card: {
          eyebrow: 'Eyebrow',
          headline: 'Card 3',
          subHead: faker.lorem.paragraph(3),
          image: {
            id: 1,
            alt: 'Card Image',
            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 1200, height: 1200 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 412,
            height: 231
          },
          ctas: [
            {
              cta: {
                link: {
                  label: 'Action 4',
                  externalHref: '/'
                }
              }
            }
          ]
        }
      }
    ]
  }
};

import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { TextImageBlockType } from '.';
import TextImageBlock from '.';

const meta: Meta<TextImageBlockType> = {
  title: 'blocks/TextImageBlock',
  component: TextImageBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TextImageBlockType>;

export const LeftImageButton: Story = {
  args: {
    blockConfig: {
      theme: 'light',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    items: [
      {
        cta: {
          link: {
            label: 'Button 1',
            externalHref: '/'
          }
        }
      },
      {
        cta: {
          link: {
            label: 'Button 2',
            externalHref: '/'
          }
        }
      }
    ],
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 726,
      height: 484
    }
  }
};

export const RightImageButton: Story = {
  args: {
    blockConfig: {
      theme: 'dark',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgRight',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    items: [
      {
        cta: {
          link: {
            label: 'Button 1',
            externalHref: '/'
          }
        }
      },
      {
        cta: {
          link: {
            label: 'Button 2',
            externalHref: '/'
          }
        }
      }
    ],
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 726,
      height: 484
    }
  }
};

export const LeftImage: Story = {
  args: {
    blockConfig: {
      theme: 'light',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 726,
      height: 484
    }
  }
};

export const RightImage: Story = {
  args: {
    blockConfig: {
      theme: 'dark',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgRight',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 726,
      height: 484
    }
  }
};

export const LeftImageForm: Story = {
  args: {
    blockConfig: {
      theme: 'light',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    form: {
      cta: {
        link: {
          label: 'Take Action'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    },
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.urlLoremFlickr({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 726,
      height: 484
    }
  }
};

export const LeftImageVideo: Story = {
  args: {
    blockConfig: {
      theme: 'light',
      hidden: false,
      contentWidth: 'xl'
    },
    layout: 'imgLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) }
      ])
    },
    items: [
      {
        cta: {
          link: {
            label: 'Button 1',
            externalHref: '/'
          }
        }
      },
      {
        cta: {
          link: {
            label: 'Button 2',
            externalHref: '/'
          }
        }
      }
    ],
    video: {
      id: 1,
      updatedAt: '2021-09-01T00:00:00.000Z',
      createdAt: '2021-09-01T00:00:00.000Z',
      url: 'https://dn720409.ca.archive.org/0/items/tv-static-1080hd-60fps/tv%20static%201080hd%2060fps.mp4',
      mimeType: 'video/mp4',
      title: 'Video Title'
    }
  }
};

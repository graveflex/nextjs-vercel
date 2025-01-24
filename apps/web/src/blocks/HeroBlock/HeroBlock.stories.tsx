import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeroBlockProps } from '.';
import HeroBlock from '.';

const meta: Meta<HeroBlockProps> = {
  title: 'blocks/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'fullScreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroBlockProps>;

export const Defaults: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xl'
    },
    layout: 'contentLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    form: {
      cta: {
        link: {
          label: 'Submit'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.url({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447
    }
  }
};

export const ContentRight: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xl'
    },
    layout: 'contentRight',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    form: {
      cta: {
        link: {
          label: 'Submit'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.url({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447
    }
  }
};

export const ContentCenter: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xl'
    },
    layout: 'contentCenter',
    contentAlign: 'center',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    form: {
      cta: {
        link: {
          label: 'Submit'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    }
  }
};

export const FullBleed: Story = {
  args: {
    layout: 'contentLeft',
    contentAlign: 'center',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    form: {
      cta: {
        link: {
          label: 'Submit'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.url({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 720,
      height: 471
    }
  }
};

export const BackgroundImage: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xl',
      backgroundImage: {
        id: 1,
        alt: 'Myopic Logo',
        updatedAt: '2024-01-05T20:29:44.749Z',
        createdAt: '2024-01-05T20:29:44.749Z',
        url: faker.image.url({ category: 'abstract', width: 1200 }),
        filename: 'Logo.svg',
        mimeType: 'image/svg+xml',
        filesize: 7144,
        width: 640,
        height: 447
      }
    },
    layout: 'contentLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    form: {
      cta: {
        link: {
          label: 'Submit'
        }
      },
      textinput: {
        placeholder: 'Email address',
        label: 'Email'
      }
    }
  }
};

export const CTANoForm: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xl'
    },
    layout: 'contentLeft',
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    eyebrow: 'SOME TAGLINE',
    cta: {
      link: {
        label: 'Submit'
      }
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.url({ category: 'abstract', width: 1200 }),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447
    }
  }
};

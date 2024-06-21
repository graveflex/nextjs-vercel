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
      contentWidth: 'xxl'
    },
    layout: 'contentLeft',
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
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
      url: faker.image.abstract(640, 447),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447,
      imageProps: {
        fill: false
      }
    }
  }
};

export const ContentRight: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xxl'
    },
    layout: 'contentRight',
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
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
      url: faker.image.abstract(640, 447),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447,
      imageProps: {
        fill: false
      }
    }
  }
};

export const ContentCenter: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xxl'
    },
    layout: 'contentCenter',
    contentAlign: 'center',
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
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
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3),
          format: 'center'
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
      url: faker.image.abstract(720, 471),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 720,
      height: 471,
      imageProps: {
        fill: true
      }
    }
  }
};

export const BackgroundImage: Story = {
  args: {
    blockConfig: {
      contentWidth: 'xxl',
      backgroundImage: {
        id: 1,
        alt: 'Myopic Logo',
        updatedAt: '2024-01-05T20:29:44.749Z',
        createdAt: '2024-01-05T20:29:44.749Z',
        url: faker.image.abstract(640, 447),
        filename: 'Logo.svg',
        mimeType: 'image/svg+xml',
        filesize: 7144,
        width: 640,
        height: 447
      }
    },
    layout: 'contentLeft',
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
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
      contentWidth: 'xxl'
    },
    layout: 'contentLeft',
    title: 'This is a Heading',
    subTitle: {
      ...genRichText([
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
      url: faker.image.abstract(640, 447),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 640,
      height: 447,
      imageProps: {
        fill: false
      }
    }
  }
};

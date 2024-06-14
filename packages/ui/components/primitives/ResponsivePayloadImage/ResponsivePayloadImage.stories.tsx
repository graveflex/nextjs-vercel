import { faker } from '@faker-js/faker';
import type { Image } from '@mono/types/payload-types';
import multipleImages from '@mono/ui/utils/multipleImages';
import type { Meta, StoryObj } from '@storybook/react';

import type { ResponsivePayloadWrapperProps } from '.';
import ResponsivePayloadImage from '.';

const meta: Meta<ResponsivePayloadWrapperProps> = {
  title: 'ui/ResponsivePayloadImage',
  component: ResponsivePayloadImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ResponsivePayloadWrapperProps>;

const mobileImage: Image = {
  id: 17,
  alt: 'Students',
  filename: 'module0.jpg',
  mimeType: 'image/jpeg',
  filesize: 3664901,
  width: 450,
  height: 800,
  createdAt: '2023-09-13T16:32:11.202Z',
  updatedAt: '2023-09-13T16:32:11.202Z',
  url: faker.image.abstract(450, 800),
  imageProps: {
    fill: true
  },
  additionalProps: {
    objectFit: 'fill',
    isRounded: false
  }
};

const desktopImage: Image = {
  id: 17,
  alt: 'Students',
  filename: 'module0.jpg',
  mimeType: 'image/jpeg',
  filesize: 3664901,
  width: 800,
  height: 450,
  createdAt: '2023-09-13T16:32:11.202Z',
  updatedAt: '2023-09-13T16:32:11.202Z',
  url: faker.image.abstract(800, 450),
  imageProps: {
    fill: true
  },
  additionalProps: {
    objectFit: 'fill',
    isRounded: false
  }
};

const responsiveImage = multipleImages(desktopImage, mobileImage, 'desktop');

export const Defaults: Story = {
  args: {
    image: {
      id: 17,
      alt: 'Students',
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 800,
      height: 450,
      sizes: {
        thumbnail: {
          width: 300,
          height: 211,
          mimeType: 'image/jpeg',
          filesize: 13968,
          filename: 'module0-300x211.jpg',
          url: faker.image.abstract(300, 211)
        },
        mobile: {
          width: 1024,
          height: 722,
          mimeType: 'image/jpeg',
          filesize: 101228,
          filename: 'module0-1024x722.jpg',
          url: faker.image.abstract(1024, 722)
        },
        desktop: {
          width: 2048,
          height: 1445,
          mimeType: 'image/jpeg',
          filesize: 376199,
          filename: 'module0-2048x1445.jpg',
          url: faker.image.abstract(2048, 1445)
        },
        ultrawide: {
          width: 4096,
          height: 2891,
          mimeType: 'image/jpeg',
          filesize: 1557423,
          url: faker.image.abstract(4096, 2891)
        }
      },
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z',
      url: faker.image.abstract(800, 450),
      imageProps: {
        fill: false
      },
      additionalProps: {
        isRounded: true,
        aspectRatio: '16/9',
        objectFit: 'cover'
      }
    }
  }
};

export const NoSizes: Story = {
  args: {
    image: {
      id: 17,
      alt: 'Students',
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 800,
      height: 450,
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z',
      url: faker.image.abstract(800, 450)
    }
  }
};

export const NoSizesNoAlt: Story = {
  args: {
    image: {
      id: 17,
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 1000,
      height: 1000,
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z',
      url: faker.image.abstract(1000, 1000)
    }
  }
};

export const NoAlt: Story = {
  args: {
    image: {
      id: 18,
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 800,
      height: 450,
      sizes: {
        thumbnail: {
          width: 300,
          height: 211,
          mimeType: 'image/jpeg',
          filesize: 13968,
          filename: 'module0-300x211.jpg',
          url: faker.image.abstract(300, 211)
        },
        mobile: {
          width: 1024,
          height: 722,
          mimeType: 'image/jpeg',
          filesize: 101228,
          filename: 'module0-1024x722.jpg',
          url: faker.image.abstract(1024, 722)
        },
        desktop: {
          width: 2048,
          height: 1445,
          mimeType: 'image/jpeg',
          filesize: 376199,
          filename: 'module0-2048x1445.jpg',
          url: faker.image.abstract(2048, 1445)
        },
        ultrawide: {
          width: 4096,
          height: 2891,
          mimeType: 'image/jpeg',
          filesize: 1557423,
          url: faker.image.abstract(4096, 2891)
        }
      },
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z',
      url: faker.image.abstract(800, 450)
    }
  }
};

export const Null: Story = {
  args: {
    image: {
      id: 19,
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 800,
      height: 450,
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z'
    }
  }
};

export const SrcSet: Story = {
  args: {
    image: {
      id: 2,
      alt: 'test',
      updatedAt: '2024-01-09T21:42:47.363Z',
      createdAt: '2024-01-09T21:42:47.363Z',
      url: 'http://localhost:3000/images/small-image-2-1024x768.jpg',
      filename: 'small-image-2-1024x768.jpg',
      mimeType: 'image/jpeg',
      filesize: 77483,
      width: 1024,
      height: 768,
      sizes: {
        thumbnail: {
          url: 'http://localhost:3000/images/small-image-2-1024x768-300x225.jpg',
          width: 300,
          height: 225,
          mimeType: 'image/jpeg',
          filesize: 14412,
          filename: 'small-image-2-1024x768-300x225.jpg'
        },

        mobile: {
          url: 'http://localhost:3000/images/small-image-2-1024x768-768x576.jpg',
          width: 768,
          height: 576,
          mimeType: 'image/jpeg',
          filesize: 54046,
          filename: 'small-image-2-1024x768-768x576.jpg'
        },

        tablet: {
          url: 'http://localhost:3000/images/small-image-2-1024x768-1024x768.jpg',
          width: 1024,
          height: 768,
          mimeType: 'image/jpeg',
          filesize: 77509,
          filename: 'small-image-2-1024x768-1024x768.jpg'
        },

        desktop: {
          url: 'http://localhost:3000/images/small-image-2-1024x768-2048x1536.jpg',
          width: 2048,
          height: 1536,
          mimeType: 'image/jpeg',
          filesize: 191938,
          filename: 'small-image-2-1024x768-2048x1536.jpg'
        },

        ultrawide: {
          url: 'http://localhost:3000/images/small-image-2-1024x768-4096x3072.jpg',
          width: 4096,
          height: 3072,
          mimeType: 'image/jpeg',
          filesize: 519951,
          filename: 'small-image-2-1024x768-4096x3072.jpg'
        }
      }
    }
  }
};

export const MultipleAspectRatios: Story = {
  args: {
    image: {
      id: 2,
      alt: 'test',
      updatedAt: '2024-01-09T21:42:47.363Z',
      createdAt: '2024-01-09T21:42:47.363Z',
      url: faker.image.abstract(600),
      filename: 'small-image-2-1024x768.jpg',
      mimeType: 'image/jpeg',
      filesize: 77483,
      width: 600,
      height: 700,
      imageProps: {
        fill: true,
        priority: false,
        quality: 75
      },
      additionalProps: {
        objectFit: 'contain',
        isRounded: false,
        aspectRatio: '6/7'
      },
      sizes: {
        tablet: {
          url: faker.image.abstract(300),
          width: 300,
          height: 200,
          mimeType: 'image/jpeg',
          filesize: 77509,
          filename: 'small-image-2-1024x768-1024x768.jpg'
        }
      }
    }
  }
};

export const MobileImage: Story = {
  args: {
    image: responsiveImage
  }
};

import { faker } from '@faker-js/faker';
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
  updatedAt: '2024-01-05T20:29:44.749Z',
  createdAt: '2024-01-05T20:29:44.749Z',
  url: faker.image.abstract(726),
  filename: 'Logo.svg',
  mimeType: 'image/svg+xml',
  filesize: 7144,
  width: 400,
  height: 224,
  additionalProps: {
    objectFit: 'fill',
    isRounded: false,
    aspectRatio: 'initial'
  }
};

export default meta;
type Story = StoryObj<GeneralCardType>;

export const StoriesCard: Story = {
  args: {
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(726),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 400,
      height: 224,
      additionalProps: {
        objectFit: 'fill',
        isRounded: false,
        aspectRatio: 'initial'
      }
    },
    headline: '[Header] Fusce sagittis euismod',
    subHead:
      '[Subhead] Donec a eros non ligula bibendum tincidunt quis at turpis. Vestibulum nunc.',
    authors: [
      {
        createdAt: '2024-04-26T15:44:35.773Z',
        updatedAt: '2024-04-26T15:44:35.773Z',
        fullName: faker.person.fullName(),
        jobTitle: 'Director of Marketing',
        id: 2
      },
      {
        createdAt: '2024-04-26T15:44:35.773Z',
        updatedAt: '2024-04-26T15:44:35.773Z',
        fullName: faker.person.fullName(),
        jobTitle: 'Director of Marketing',
        id: 2
      }
    ],
    tags: [
      {
        createdAt: '2024-04-26T15:43:10.991Z',
        id: 1,
        label: 'Thought-piece',
        updatedAt: '2024-04-26T15:43:10.991Z'
      },
      {
        createdAt: '2024-04-26T15:43:10.991Z',
        id: 2,
        label: 'Education',
        updatedAt: '2024-04-26T15:43:10.991Z'
      }
    ],
    ctas: [
      {
        cta: {
          label: 'Read More',
          externalHref: '/read-more'
        }
      }
    ]
  }
};

export const CarouselStoryCard: Story = {
  args: {
    ...StoriesCard.args,
    isSans: true,
    image: undefined,
    eyebrow: 'Featured Story'
  }
};

export const BasicCard: Story = {
  args: {
    // @ts-expect-error image is not required
    image,
    headline: 'E-Town Grants',
    subHead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ctas: [
      {
        cta: {
          label: 'Action 1',
          externalHref: '/learn-more'
        }
      }
    ]
  }
};

export const EventCard: Story = {
  args: {
    ...StoriesCard.args,
    address: {
      cta: {
        externalHref: '/address',
        label: '123 Main St.'
      }
    },
    authors: [],
    date: '2024-01-05T20:29:44.749Z',
    ctas: [
      {
        cta: {
          label: 'Register to Attend',
          externalHref: '/register',
          icon: {
            name: 'LinkOut'
          }
        }
      }
    ]
  }
};

export const CarouselEventCard: Story = {
  args: {
    ...EventCard.args,
    image: undefined,
    isSans: true,
    eyebrow: 'Event Type'
  }
};

export const ContactCard: Story = {
  args: {
    ...StoriesCard.args,
    headline: 'Contact <Depatment>',
    subHead:
      '[Subhead] Donec a eros non ligula bibendum tincidunt quis at turpis. Vestibulum nunc.',
    tags: [],
    authors: [],
    ctas: [
      {
        cta: {
          label: 'Email',
          externalHref: '/contact',
          icon: {
            name: 'PersonBust'
          }
        }
      },
      {
        cta: {
          label: 'Call 123.456.7890',
          externalHref: '/contact',
          variant: 'link',
          icon: {
            name: 'Person'
          }
        }
      }
    ]
  }
};

export const StaffCard: Story = {
  args: {
    ...StoriesCard.args,
    headline: 'John Doe',
    subHead: '',
    authors: [],
    iconItem: [
      {
        text: 'Associate Director Job Title',
        icon: {
          name: 'PersonBust'
        }
      }
    ],
    ctas: [
      {
        cta: {
          label: 'View Full Bio',
          externalHref: '/contact'
        }
      }
    ]
  }
};

export const BoardMemberCard: Story = {
  args: {
    image: {
      id: 1,
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(726),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 400,
      height: 224,
      additionalProps: {
        objectFit: 'fill',
        isRounded: false,
        aspectRatio: 'initial'
      }
    },
    headline: 'Firstname M Lastname'
  }
};

export const SmallCtaCard: Story = {
  args: {
    headline: 'About our Now! Fund',
    subHead:
      '[Subhead] Donec a eros non ligula bibendum tincidunt quis at turpis.',
    ctas: [
      {
        cta: {
          label: 'Action 1',
          externalHref: '/read-more',
          variant: 'rounded-outline'
        }
      }
    ]
  }
};

export const TruncatedSans: Story = {
  args: {
    headline: 'EVENT NAME',
    truncated: true,
    isSans: true,
    eyebrow: 'Event Type',
    date: '2024-01-05T20:29:44.749Z',
    address: {
      cta: {
        externalHref: '/address',
        label: '123 Main St.'
      }
    },
    ctas: [
      {
        cta: {
          label: 'Register to Attend',
          externalHref: '/register'
        }
      }
    ]
  }
};

export const MultipleButtons: Story = {
  args: {
    ...StoriesCard.args,
    ctas: [
      {
        cta: {
          label: 'Read Story',
          externalHref: '/read-more',
          variant: 'rounded-outline'
        }
      },
      {
        cta: {
          label: 'Contact Us',
          externalHref: '/learn-more',
          variant: 'link'
        }
      }
    ]
  }
};

export const LongTitle: Story = {
  args: {
    ...StoriesCard.args,
    headline:
      '[Header] Fusce sagittis euismod. Donec a eros non ligula bibendum tincidunt quis at turpis.',
    subHead:
      '[Subhead] Donec a eros non ligula bibendum tincidunt quis at turpis. Donec a eros non ligula bibendum tincidunt quis at turpis. Donec a eros non ligula bibendum tincidunt quis at turpis.'
  }
};

export const NoTags: Story = {
  args: {
    ...StoriesCard.args,
    tags: []
  }
};

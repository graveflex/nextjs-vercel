import { faker } from '@faker-js/faker';
import type { Image } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { BlogDetailType } from '.';
import BlogDetail from '.';

const meta: Meta<BlogDetailType> = {
  title: 'ui/BlogDetail',
  component: BlogDetail,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BlogDetailType>;

const defaultImage = {
  id: 1,
  alt: 'Generic Logo',
  updatedAt: '2024-01-05T20:29:44.749Z',
  createdAt: '2024-01-05T20:29:44.749Z',
  url: faker.image.urlLoremFlickr({ category: 'city' }),
  filename: 'Logo.svg',
  mimeType: 'image/svg+xml',
  filesize: 7144,
  width: 654,
  height: 368,
  imageProps: {
    fill: true
  },
  additionalProps: {
    objectFit: 'cover',
    isRounded: false,
    aspectRatio: '16/9'
  }
};

export const Defaults: Story = {
  args: {
    postData: {
      authors: [
        {
          createdAt: '2024-04-30T17:45:33.819Z',
          updatedAt: '2024-04-30T17:45:33.819Z',
          fullName: faker.person.fullName(),
          id: 2,
          jobTitle: 'Copy Writer 2'
        }
      ],
      content: [
        {
          content: {
            ...genRichText([
              { type: 'heading', tag: 'h1', text: faker.lorem.paragraph(3) },
              { type: 'paragraph', text: faker.lorem.paragraph(40) },
              { type: 'paragraph', text: faker.lorem.paragraph(80) }
            ])
          }
        }
      ],
      thumbnail: defaultImage as Image,
      coverImage: defaultImage as Image,
      updatedAt: '2024-04-30T17:43:20.599Z',
      createdAt: '2024-04-30T17:47:26.382Z',
      date: '2024-04-30T12:00:00.000Z',
      id: 12,
      slug: 'blog-post-11',
      subTitle: 'SUBTITLE of blog post, this will show on the card',
      tags: [
        { id: 1, label: 'tag1', updatedAt: '', createdAt: '' },
        { id: 2, label: 'tag2', updatedAt: '', createdAt: '' },
        { id: 3, label: 'tag3', updatedAt: '', createdAt: '' },
        { id: 4, label: 'tag4', updatedAt: '', createdAt: '' },
        { id: 5, label: 'tag5', updatedAt: '', createdAt: '' },
        { id: 6, label: 'tag6', updatedAt: '', createdAt: '' }
      ],
      title: 'BLOG POST 11'
    }
  }
};

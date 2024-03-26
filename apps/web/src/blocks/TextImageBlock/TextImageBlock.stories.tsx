import { faker } from '@faker-js/faker';
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

export const Defaults: Story = {
  args: {
    blockConfig: {
      layout: 'imgLeft'
    },
    title: 'TextImageBlock',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Okay new editor without any ',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              },
              {
                mode: 'normal',
                text: 'bold',
                type: 'text',
                style: '',
                detail: 0,
                format: 1,
                version: 1
              },
              {
                mode: 'normal',
                text: " OH it's bold nice.",
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'h1',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Oh neat',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'ol',
            type: 'list',
            start: 1,
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'listitem',
                value: 1,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'so neat cool',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              }
            ],
            listType: 'number',
            direction: 'ltr'
          },
          {
            tag: 'ul',
            type: 'list',
            start: 1,
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'listitem',
                value: 1,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'and markdown works',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 2,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'I like this ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              }
            ],
            listType: 'bullet',
            direction: 'ltr'
          }
        ]
      }
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(1200),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17,
      imageProps: {
        fill: true
      },
      additionalProps: {
        isRounded: true,
        aspectRatio: '16/9',
        objectFit: 'cover'
      }
    }
  }
};

export const RightSide: Story = {
  args: {
    ...Defaults.args,
    blockConfig: {
      layout: 'imgRight'
    }
  }
};

export const NoBlockConfig: Story = {
  args: {
    ...Defaults.args,
    blockConfig: {},
    cta: {
      label: 'Test label',
      href: '/'
    }
  }
};

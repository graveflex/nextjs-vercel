import { faker } from '@faker-js/faker';
import type { Form } from '@mono/types/payload-types';
import type { RichTextType } from '@mono/web/components/RichText';
import type { HeroSectionsBlockType } from '.';

const imgUrl = faker.image.url();

const heroSectionsMockData: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Hero Section',
              type: 'eyebrow',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

export const heroSectionsListMockData: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Hero Section',
              type: 'eyebrow',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
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
                  text: 'Benefit driven feature title',
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
                  text: 'Benefit driven feature title',
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
              value: 3,
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: 'Benefit driven feature title',
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
      ],
      direction: 'ltr'
    }
  }
};

export const heroSections4_5MockData: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Hero Section',
              type: 'eyebrow',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

export const heroSections6_9MockData: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Hero Section',
              type: 'eyebrow',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

export const imgMockData: HeroSectionsBlockType['media'] = {
  relationTo: 'images',
  value: {
    id: 1,
    alt: 'Faker Image',
    imageProps: {
      priority: false,
      quality: 75
    },
    updatedAt: '2025-02-11T19:37:08.365Z',
    createdAt: '2025-02-11T19:37:08.365Z',
    url: imgUrl,
    thumbnailURL: imgUrl,
    filename: 'faker-image.png',
    mimeType: 'image/png',
    filesize: 524540,
    width: 800,
    height: 535,
    focalX: 50,
    focalY: 50,
    sizes: {
      blur: {
        url: faker.image.url(),
        width: 10,
        height: 7,
        mimeType: 'image/png',
        filesize: 306,
        filename: 'faker-image.png'
      },
      thumbnail: {
        url: imgUrl,
        width: 300,
        height: 201,
        mimeType: 'image/png',
        filesize: 173014,
        filename: 'faker-image.png'
      },
      mobile: {
        url: imgUrl,
        width: 768,
        height: 514,
        mimeType: 'image/png',
        filesize: 1128827,
        filename: 'faker-image.png'
      },
      tablet: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null
      },
      desktop: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null
      },
      ultrawide: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null
      }
    }
  }
};

export const emailSignupFormMockData: Form = {
  id: 2,
  title: 'Email Signup',
  fields: [
    {
      id: '67b4c1c616c28e7b485d12f9',
      name: 'email',
      width: 50,
      required: true,
      blockName: 'Your email',
      blockType: 'email'
    }
  ],
  submitButtonLabel: 'Sign up',
  confirmationType: 'message',
  confirmationMessage: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          tag: 'h3',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Thanks for signing up!',
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
      direction: 'ltr'
    }
  },
  redirect: {
    url: 'https://www.google.com'
  },
  emails: [],
  updatedAt: '2025-02-18T19:56:51.171Z',
  createdAt: '2025-02-18T17:22:48.027Z'
};

export default heroSectionsMockData;

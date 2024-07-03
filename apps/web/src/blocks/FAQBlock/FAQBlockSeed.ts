import { faker } from '@faker-js/faker';
import type { FAQBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

export const faqBlockSchema = {
  id: '6669d7bd6d58e03f8e7c107b',
  blockName: 'FAQ Block',
  blockType: 'faqBlock',
  blockConfig: {
    contentWidth: 'xl'
  },
  header: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h2',
        text: 'Frequently Asked Questions'
      }
    ])
  },
  items: [
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    },
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    },
    {
      title: faker.lorem.sentence(),
      content: {
        ...genRichText([
          {
            type: 'paragraph',
            text: faker.lorem.paragraph()
          }
        ])
      }
    }
  ]
} as FAQBlockT;

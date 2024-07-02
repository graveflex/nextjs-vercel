import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';

export const sectionHeaderBlockSchema = {
  id: '6669d7bd6d58e03f8e7c1076',
  blockType: 'sectionHeaderBlock',
  eyebrow: 'SOME TAGLINE',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Test Section Header Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.paragraph(2)
      }
    ])
  },
  alignment: 'center',
  cta: {
    link: {
      type: 'external',
      label: 'Read More',
      externalHref: '/blog'
    }
  }
};

import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';

export const heroBlockSchema = {
  id: '6669d7bd6d58e03f8e7c1078',
  blockType: 'heroBlock',
  layout: 'contentLeft',
  eyebrow: 'SOME TAGLINE',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Test Hero Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      }
    ])
  }
};

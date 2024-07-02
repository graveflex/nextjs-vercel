import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';

export const imageTextBlockSchema = {
  id: '6669d7bd6d58e03f8e7c1079',
  blockType: 'textImageBlock',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h2',
        text: 'Test Image Text Block'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      }
    ])
  }
};

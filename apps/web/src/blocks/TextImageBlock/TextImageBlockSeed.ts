import { faker } from '@faker-js/faker';
import type { TextImageBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

import imageFn from '../../../bin/seed_images';

export const imageTextBlockSchema = async (
  layout: string,
  blockName: string
) => {
  const images = await imageFn({ count: 1 });
  return {
    id: '6669d7bd6d58e03f8e7c1079',
    blockType: 'textImageBlock',
    blockName,
    layout,
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
    },
    image: images[0].id
  } as TextImageBlockT;
};

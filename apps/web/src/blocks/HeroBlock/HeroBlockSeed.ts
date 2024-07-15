import { faker } from '@faker-js/faker';
import type { HeroBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

import imageFn from '../../../bin/seed_images';

interface blockProps {
  blockName: string;
  blockConfig: HeroBlockT['blockConfig'];
  layout?: HeroBlockT['layout'];
  cta?: HeroBlockT['cta'];
  form?: HeroBlockT['form'];
}

export const heroBlockSchema = async ({
  blockConfig,
  blockName,
  layout
}: blockProps) => {
  const images = await imageFn();
  return {
    id: '6669d7bd6d58e03f8e7c1078',
    blockType: 'heroBlock',
    eyebrow: 'SOME TAGLINE',
    blockName,
    blockConfig,
    layout,
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
    },
    image: images[0].id
  } as HeroBlockT;
};

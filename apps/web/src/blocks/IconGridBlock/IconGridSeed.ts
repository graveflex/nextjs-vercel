import { faker } from '@faker-js/faker';
import type { IconGridBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

import imageFn from '../../../bin/seed_images';

interface blockProps {
  blockName: string;
  blockConfig: IconGridBlockT['blockConfig'];
}

export const iconGridBlockSchema = async ({
  blockConfig,
  blockName
}: blockProps) => {
  const images = await imageFn();
  return {
    id: '6669d7bd6d58e03f8e7c1078',
    blockType: 'iconGridBlock',
    blockName,
    blockConfig,
    layout: 'horizontal',
    items: [
      {
        id: '6669d7bd6d58e03f8e7c1078',
        image: images[0].id,
        content: {
          ...genRichText([{ type: 'paragraph', text: faker.lorem.sentence() }])
        }
      },
      {
        id: '6669d7bd6d58e03f8e7c1078',
        image: images[0].id,
        content: {
          ...genRichText([{ type: 'paragraph', text: faker.lorem.sentence() }])
        }
      },
      {
        id: '6669d7bd6d58e03f8e7c1078',
        image: images[0].id,
        content: {
          ...genRichText([{ type: 'paragraph', text: faker.lorem.sentence() }])
        }
      }
    ]
  } as IconGridBlockT;
};

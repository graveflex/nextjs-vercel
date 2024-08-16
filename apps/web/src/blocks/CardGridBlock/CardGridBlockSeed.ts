import { faker } from '@faker-js/faker';
import type { CardGridBlockT } from '@mono/types/payload-types';

import imageFn from '../../../bin/seed_images';

export const cardGridBlockSchema = async () => {
  const images = await imageFn();
  return {
    id: '6669d7bd6d58e03f8e7c107a',
    blockName: 'Card Grid Block',
    blockType: 'cardGridBlock',
    blockConfig: {
      contentWidth: 'xxl'
    },
    cards: [
      {
        id: '6669d7bd6d58e03f8e7c107b',
        card: {
          image: images[3].id,
          headline: 'Card 1',
          subHead: faker.lorem.sentence()
        }
      },
      {
        id: '6669d7bd6d58e03f8e7c10xx',
        card: {
          image: images[4].id,
          headline: 'Card 2',
          subHead: faker.lorem.sentence()
        }
      },
      {
        id: '6669d7bd6d58e03f8e7c1xxx',
        card: {
          image: images[0].id,
          headline: 'Card 3',
          subHead: faker.lorem.sentence()
        }
      }
    ]
  } as CardGridBlockT;
};

import { faker } from '@faker-js/faker';
import type { HeroSectionsBlockT } from '@mono/types/payload-types';

export const HeroSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'HeroSectionsBlock',
    blockType: 'heroSectionsBlock',
    title: faker.lorem.words(5)
  } as HeroSectionsBlockT;
};

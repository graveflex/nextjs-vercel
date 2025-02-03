import { faker } from '@faker-js/faker';
import type { CtaSectionsBlockT } from '@mono/types/payload-types';

export const CtaSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'CtaSectionsBlock',
    blockType: 'ctaSectionsBlock',
    title: faker.lorem.words(5)
  } as CtaSectionsBlockT;
};

import { faker } from '@faker-js/faker';
import type { CtaSectionsT } from '@mono/types/payload-types';

export const CtaSectionsSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'CtaSections',
    blockType: 'ctaSections',
    title: faker.lorem.words(5)
  } as CtaSectionsT;
};

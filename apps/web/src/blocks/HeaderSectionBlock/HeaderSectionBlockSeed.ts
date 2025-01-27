import { faker } from '@faker-js/faker';
import type { HeaderSectionBlockT } from '@mono/types/payload-types';

export const HeaderSectionBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'HeaderSectionBlock',
    blockType: 'headerSectionBlock',
    title: faker.lorem.words(5)
  } as HeaderSectionBlockT;
};

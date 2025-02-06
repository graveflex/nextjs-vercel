import { faker } from '@faker-js/faker';
import type { FourOhFourBlockT } from '@mono/types/payload-types';

export const FourOhFourBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'FourOhFourBlock',
    blockType: 'fourOhFourBlock',
    variant: '1'
  } as FourOhFourBlockT;
};

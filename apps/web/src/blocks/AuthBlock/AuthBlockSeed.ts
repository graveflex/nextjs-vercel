import { faker } from '@faker-js/faker';
import type { AuthBlockT } from '@mono/types/payload-types';

export const AuthBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'AuthBlock',
    blockType: 'authBlock'
  } as AuthBlockT;
};

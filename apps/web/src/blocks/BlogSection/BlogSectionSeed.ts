import { faker } from '@faker-js/faker';
import type { BlogSectionT } from '@mono/types/payload-types';

export const BlogSectionSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'BlogSection',
    blockType: 'blogSection',
    variant: false
  } as BlogSectionT;
};

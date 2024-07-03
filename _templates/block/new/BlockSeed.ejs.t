---
to: <%= app_name %>/blocks/<%= name %>/<%= name %>Seed.ts
---

import { faker } from '@faker-js/faker';
import type { <%= name %>T } from '@mono/types/payload-types';

export const <%= name %>Schema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: '<%= name %>',
    blockType: '<%= h.changeCase.lcFirst(name) %>',
    title: faker.lorem.words(3)
  } as <%= name %>T;
};

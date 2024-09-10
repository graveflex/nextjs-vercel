import type { CollectionConfig } from 'payload';

import { invalidateCache } from '@mono/web/hooks/invalidateCache';

const Tags: CollectionConfig = {
  slug: 'tags',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'label'
  },
  fields: [
    {
      name: 'label',
      label: 'Tag Label',
      type: 'text',
      localized: true,
      required: true
    }
  ],
  hooks: {
    afterChange: [invalidateCache]
  }
};

export default Tags;

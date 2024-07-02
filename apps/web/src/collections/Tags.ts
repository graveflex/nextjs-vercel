import type { CollectionConfig } from 'payload';

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
  ]
};

export default Tags;

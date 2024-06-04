import type { CollectionConfig } from 'payload/types';

const Files: CollectionConfig = {
  slug: 'files',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false
    }
  ],
  upload: {
    staticDir: 'files',
    mimeTypes: ['application/pdf']
  }
};

export default Files;

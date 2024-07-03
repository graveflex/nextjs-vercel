import type { CollectionConfig } from 'payload';

const Videos: CollectionConfig = {
  slug: 'videos',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title'
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description'
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date'
    }
  ],
  upload: {
    staticDir: 'videos',
    mimeTypes: ['video/mp4', 'video/webm', 'video/ogg']
  }
};

export default Videos;

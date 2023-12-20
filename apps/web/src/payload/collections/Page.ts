import type { CollectionConfig } from 'payload/types';

import { schemas as BlockSchemas } from '../blocks';

const Page: CollectionConfig = {
  slug: 'page',
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'path']
  },
  versions: { drafts: true },
  labels: { singular: 'Page', plural: 'Pages' },
  typescript: { interface: 'Page' },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true
    },
    {
      name: 'layout',
      label: 'Blocks',
      type: 'blocks',
      minRows: 1,
      blocks: Object.values(BlockSchemas)
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar'
      }
    }
  ]
};

export default Page;

import { Block } from 'payload/types';

const Schema: Block = {
  slug: 'ImageWithContent',
  labels: {
    singular: 'ImageWithContent',
    plural: 'ImageWithContents'
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'content',
      type: 'textarea'
    },
    {
      name: 'direction',
      type: 'select',
      options: [
        {
          label: 'Right',
          value: 'right'
        },
        {
          label: 'Left',
          value: 'left'
        }
      ]
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true
    }
  ]
};

export default Schema;

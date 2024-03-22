import type { CollectionConfig } from 'payload/types';

const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: false
    },

    {
      name: 'imageProps',
      label: 'Image Properties',
      type: 'group',
      fields: [
        {
          name: 'fill',
          label: 'Fill Container',
          type: 'checkbox',
          defaultValue: false
        },
        {
          name: 'priority',
          label: 'Load Priority',
          type: 'checkbox',
          defaultValue: false
        },
        {
          name: 'quality',
          label: 'Image Quality',
          type: 'number',
          required: false,
          defaultValue: 75
        },
        {
          name: 'styles',
          label: 'Styles',
          type: 'code',
          required: false,
          defaultValue: `{
              objectFit: 'cover',
            }`
        },
        {
          name: 'isBorderRadius',
          label: 'Border Radius',
          type: 'checkbox',
          defaultValue: false
        },
        {
          name: 'aspectRatio',
          label: 'Aspect Ratio',
          type: 'select',
          options: [
            {
              label: '6:7',
              value: '6/7'
            },
            {
              label: '7:6',
              value: '7/6'
            },
            {
              label: '1:1',
              value: '1/1'
            },
            {
              label: '3:2',
              value: '3/2'
            },
            {
              label: '16:9',
              value: '16/9'
            },
            {
              label: 'Initial',
              value: 'initial'
            }
          ],
          defaultValue: 'initial'
        }
      ]
    }
  ],
  upload: {
    staticURL: '/images',
    staticDir: 'images',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        position: 'centre'
      },
      {
        name: 'mobile',
        width: 768,
        position: 'centre'
      },
      {
        name: 'tablet',
        width: 1024,
        position: 'center'
      },
      {
        name: 'desktop',
        width: 2048,
        position: 'centre'
      },
      {
        name: 'ultrawide',
        width: 4096,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  }
};

export default Images;

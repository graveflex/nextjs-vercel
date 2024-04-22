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
          defaultValue: false,
          required: false
        },
        {
          name: 'priority',
          label: 'Load Priority',
          type: 'checkbox',
          defaultValue: false,
          required: false
        },
        {
          name: 'quality',
          label: 'Image Quality',
          type: 'number',
          defaultValue: 75,
          required: false
        }
      ]
    },
    {
      name: 'additionalProps',
      label: 'Additional Properties',
      type: 'group',
      fields: [
        {
          name: 'style',
          label: 'Style',
          type: 'code',
          required: false
        },
        {
          name: 'objectFit',
          label: 'Object Fit',
          type: 'select',
          options: [
            {
              label: 'Cover',
              value: 'cover'
            },
            {
              label: 'Contain',
              value: 'contain'
            },
            {
              label: 'Fill',
              value: 'fill'
            },
            {
              label: 'Scale Down',
              value: 'scale-down'
            }
          ],
          defaultValue: 'cover',
          required: false
        },
        {
          name: 'isRounded',
          label: 'Border Radius',
          type: 'checkbox',
          defaultValue: false,
          required: false
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
          defaultValue: 'initial',
          required: false
        }
      ]
    }
  ],
  upload: {
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

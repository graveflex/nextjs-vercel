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
      localized: true,
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
          required: false,
          admin: {
            description:
              'How the image should be resized to fit its container. "Cover": will make sure the image covers the container, cropping the image if needed. "Contain": will maintain the aspect ratio, will not crop but asset will be "letterboxed" if the container is a different aspect ratio than asset. "Fill": The entire asset will completely fill the container. Asset will be stretched to fit. "Scale Down": The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.'
          }
        },
        {
          name: 'isRounded',
          label: 'Has rounded corners?',
          type: 'checkbox',
          defaultValue: false,
          required: false,
          admin: {
            description:
              'If this is checked, the image will have slightly rounded corners.'
          }
        },
        {
          name: 'aspectRatio',
          label: 'Aspect Ratio',
          type: 'select',
          options: [
            {
              label: '1:1',
              value: '1/1'
            },
            {
              label: '3:2',
              value: '3/2'
            },
            {
              label: '4:3',
              value: '4/3'
            },
            {
              label: '6:7',
              value: '6/7'
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

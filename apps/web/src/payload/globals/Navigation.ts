import { GlobalConfig } from 'payload/types';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media'
    },
    {
      name: 'headerItems',
      type: 'array',
      maxRows: 6,
      fields: [
        {
          name: 'type',
          type: 'select',
          hasMany: false,
          admin: {
            isClearable: true
          },
          options: [
            {
              label: 'Button',
              value: 'button'
            },
            {
              label: 'Link',
              value: 'link'
            }
          ]
        },
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'url',
          type: 'text',
          defaultValue: '/',
          required: true
        }
      ],
      admin: {
        components: {
          RowLabel: ({ data }) => {
            return data?.title;
          }
        }
      }
    },
    {
      name: 'footerItems',
      type: 'array',
      required: true,
      maxRows: 1,
      fields: [
        {
          name: 'links',
          type: 'array',
          maxRows: 5,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/',
              required: true
            }
          ],
          admin: {
            components: {
              RowLabel: ({ data }) => {
                return data?.title;
              }
            }
          }
        }
      ]
    }
  ]
};

export default Navigation;

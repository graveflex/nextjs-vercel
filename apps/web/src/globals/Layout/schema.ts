import type { GlobalConfig } from 'payload/types';

const Layout: GlobalConfig = {
  slug: 'layout',
  typescript: {
    interface: 'Layout'
  },
  fields: [
    {
      label: 'Logo',
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media'
    },
    {
      label: 'Header Items',
      name: 'headerItems',
      type: 'array',
      maxRows: 6,
      interfaceName: 'HeaderMenuItem',
      fields: [
        {
          label: 'Link',
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
          label: 'Title',
          name: 'title',
          type: 'text',
          required: true
        },
        {
          label: 'URL',
          name: 'url',
          type: 'text',
          defaultValue: '/',
          required: true
        }
      ],
      admin: {
        components: {
          RowLabel: ({ data }) => data.title
        }
      }
    },
    {
      label: 'Footer Items',
      name: 'footerItems',
      type: 'array',
      interfaceName: 'FooterMenuItem',
      maxRows: 6,
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text',
          required: true
        },
        {
          label: 'URL',
          name: 'url',
          type: 'text',
          defaultValue: '/',
          required: true
        }
      ],
      admin: {
        components: {
          RowLabel: ({ data }) => data.title
        }
      }
    }
  ]
};

export default Layout;

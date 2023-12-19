import { GlobalConfig } from 'payload/types';

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    // {
    //   name: 'logo',
    //   type: 'upload',
    //   required: true,
    //   relationTo: 'cms_media'
    // },
    {
      name: 'links',
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
    }
  ]
};

export default Header;

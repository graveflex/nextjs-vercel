import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'items',
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

export default Footer;

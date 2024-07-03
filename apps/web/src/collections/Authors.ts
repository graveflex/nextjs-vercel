import type { CollectionConfig, FieldHook } from 'payload';

const formatSlug: FieldHook = async ({ value, data }) => {
  return data?.fullName?.replace(/ /g, '-').toLowerCase() ?? value;
};

const Authors: CollectionConfig = {
  slug: 'authors',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'jobTitle', 'slug']
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeChange: [formatSlug]
      },
      admin: {
        readOnly: true
      }
    },
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      required: true
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'images',
      required: false
    },
    {
      name: 'jobTitle',
      label: 'Job Title',
      localized: true,
      type: 'text',
      required: true
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'richText',
      localized: true,
      required: false
    }
  ]
};

export default Authors;

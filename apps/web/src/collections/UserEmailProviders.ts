import type { CollectionConfig } from 'payload';

const UserEmailProviders: CollectionConfig = {
  slug: 'userEmailProviders',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users'
    }
  ]
};

export default UserEmailProviders;

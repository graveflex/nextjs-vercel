import {
  isAdmin,
  isAdminFieldLevel,
  isAdminOrSelf
} from '@mono/web/payload/utils/access';
import type { CollectionConfig } from 'payload';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // This property controls how deeply "populated"
    // relationship docs are that are stored in the req.user.
    // It should be kept to as low as possible, which
    // keeps performance fast.
    depth: 0
  },
  admin: {
    useAsTitle: 'email'
  },
  access: {
    // Only admins can create users
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true
        },
        {
          name: 'lastName',
          type: 'text',
          required: true
        }
      ]
    },
    {
      name: 'roles',
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
      options: [
        {
          label: 'User',
          value: 'user'
        },
        {
          label: 'Admin',
          value: 'admin'
        }
      ]
    },
    {
      name: 'accounts',
      type: 'array',
      fields: [
        {
          name: 'provider',
          type: 'text',
          label: 'Account Provider' // <-- Add label to provider field
        }
      ]
    }
  ]
};

export default Users;

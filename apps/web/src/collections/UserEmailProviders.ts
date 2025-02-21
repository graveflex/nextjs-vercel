import type { CollectionConfig } from 'payload';
import { v4 as uuidv4 } from 'uuid';

const UserEmailProviders: CollectionConfig = {
  slug: 'userEmailProviders',
  auth: {
    verify: {
      generateEmailHTML: ({ req, token, user }) => {
        // Use the token provided to allow your user to verify their account
        const url = `https://yourfrontend.com/verify?token=${token}`;

        return `Hey ${user.email}, verify your email by clicking here: ${url}`;
      }
    }
  },
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
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create') {
          const email = data.email;
          const existingAuthjsUserResp = await req.payload.find({
            collection: 'users',
            where: { email: { equals: email } },
            limit: 1
          });

          let authjsUser = existingAuthjsUserResp.docs[0];
          if (!authjsUser) {
            authjsUser = await req.payload.create({
              collection: 'users',
              data: {
                id: uuidv4(),
                email
              }
            });
          }

          data.user = authjsUser?.id;
        }

        return data;
      }
    ]
  }
};

export default UserEmailProviders;

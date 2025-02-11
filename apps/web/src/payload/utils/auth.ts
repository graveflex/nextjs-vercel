// Types
import type { User } from '@mono/types/payload-types';
import type { BasicCredentials } from '@mono/web/payload/auth.config';

export const authUser = async (credentials: BasicCredentials) => {
  const { getPayload } = require('payload');
  const config = require('@payload-config');
  const payload = await getPayload({ config });

  let user = await payload.find({
    collection: 'users', // required
    where: {
      email: {
        equals: credentials.username
      }
    }
  });

  if (user.docs.length === 0) {
    // Create the first user as an Admin
    user = await payload.create({
      collection: 'users',
      data: {
        id: `${credentials.username}_1`,
        email: credentials.username,
        password: credentials.password,
        roles: ['user']
      }
    });
  } else {
    user = user.docs[0];
  }

  console.log('🍤 ~ authUser ~ user:', user);
  return user;
};

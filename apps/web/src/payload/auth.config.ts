// Types
import type { NextAuthConfig } from 'next-auth';
import type { User } from 'next-auth';
export type BasicCredentials = Partial<
  Record<'username' | 'password', unknown>
>;
// {
//   csrfToken: string;
//   username: string;
//   password: string;
// };

import Credentials from 'next-auth/providers/credentials';
// Providers
import GitHub from 'next-auth/providers/github';

// Helper functions
import { authUser } from '@mono/web/payload/utils/auth';

// const signIn = async (credentials: BasicCredentials) => {
//   let user = null;

//   try {
//     const { getPayload } = require('payload');
//     const config = require('@payload-config');
//     const payload = await getPayload({ config });

//     user = await payload.login({
//       collection: 'users', // required
//       data: {
//         // required
//         email: credentials.email,
//         password: credentials.password
//       },
//       depth: 2,
//       locale: 'en',
//       overrideAccess: true,
//       fallbackLocale: false,
//       showHiddenFields: true
//     });
//   } catch (_error) {
//     console.error('Error in auth.config.ts: signIn', _error);
//     // no op
//   }
//   return user;
// };

// const createUser = async (credentials: BasicCredentials) => {
//   try {
//     const { getPayload } = require('payload');
//     const config = require('@payload-config');
//     const payload = await getPayload({ config });
//     await payload.create({
//       collection: 'users',
//       data: {
//         // required
//         id: '1',
//         email: credentials.email,
//         password: credentials.password
//       },
//       overrideAccess: true
//     });
//   } catch (_error) {
//     console.error('Error in auth.config.ts: createUser', _error);
//     // no op
//   }
// };

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub,
    Credentials({
      id: 'username-login',
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (
        credentials: BasicCredentials
      ): Promise<User | null> => {
        // Check for valid credentials;
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        // Handle logic in the authUser function;
        return await authUser(credentials);
      }
    })
  ]
};

// Types
import type { NextAuthConfig } from 'next-auth';
import type { User } from 'next-auth';
export type BasicCredentials = Partial<
  Record<'username' | 'password', unknown>
>;

import Credentials from 'next-auth/providers/credentials';
// Providers
import GitHub from 'next-auth/providers/github';

// Helper functions
import { authUser } from '@mono/web/payload/utils/auth';

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

import type { User as PayloadUser } from '@mono/types/payload-types';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/authSession';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { cookies } from 'next/headers';
import type { PayloadAuthjsUser } from 'payload-authjs';

declare module 'next-auth' {
  interface User extends PayloadAuthjsUser<PayloadUser> {}
}

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (creds) => {
        if (creds.email && creds.password) {
          const user = await createPayloadAuthSessionWithEmailCreds(creds);
          return user as PayloadAuthjsUser<PayloadUser>;
        }

        return null;
      }
    })
  ],
  events: {
    signIn: async ({ user, account }) => {
      if (user.id) {
        if (account?.provider) {
          const cookieStore = await cookies();
          cookieStore.set('auth-provider', account?.provider, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          });
        }
        return;
      }
    }
  },
  pages: {
    signIn: '/login'
  }
};

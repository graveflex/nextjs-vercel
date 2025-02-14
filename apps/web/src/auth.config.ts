import type { User as PayloadUser } from '@mono/types/payload-types';
import config from '@payload-config';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import github from 'next-auth/providers/github';
import { cookies } from 'next/headers';
import { getPayload } from 'payload';
import type { PayloadAuthjsUser } from 'payload-authjs';

declare module 'next-auth' {
  interface User extends PayloadAuthjsUser<PayloadUser> {}
}

export const authConfig: NextAuthConfig = {
  providers: [
    github,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (creds, req) => {
        const payload = await getPayload({ config });

        const account = await payload.login({
          collection: 'userEmailProviders',
          data: {
            email: creds.email as string,
            password: creds.password as string
          },
          req
        });

        if (!account.user || !account.token) {
          return null;
        }

        // manually set payload session cookie
        const cookieStore = await cookies();
        const cookieName = `${payload.config.cookiePrefix}-token`;
        cookieStore.set(cookieName, account.token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        });

        return account.user.user as PayloadAuthjsUser<PayloadUser>;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
};

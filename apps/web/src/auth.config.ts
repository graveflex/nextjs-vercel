import type { User as PayloadUser } from '@mono/types/payload-types';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/authSession';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import github from 'next-auth/providers/github';
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
      authorize: async (creds) => {
        if (creds.email && creds.password) {
          const user = await createPayloadAuthSessionWithEmailCreds(creds);
          return user as PayloadAuthjsUser<PayloadUser>;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
};

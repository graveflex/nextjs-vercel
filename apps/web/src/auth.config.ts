import type { User as PayloadUser } from '@mono/types/payload-types';
import {
  EmailRequiredError,
  InvalidLoginError,
  LockedUserError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';
import type { SignInEventType } from '@mono/web/lib/auth/events';
import { signInEvent, signOutEvent } from '@mono/web/lib/auth/events';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/auth/session/server';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { unstable_rethrow } from 'next/navigation';
import type { PayloadAuthjsUser } from 'payload-authjs';

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          if (!email) {
            throw new EmailRequiredError();
          }
          if (!password) {
            throw new PasswordRequiredError();
          }
          const user =
            await createPayloadAuthSessionWithEmailCreds(credentials);
          if (!user) {
            throw new InvalidLoginError();
          }

          return user as PayloadAuthjsUser<PayloadUser>;
        } catch (error) {
          unstable_rethrow(error);

          // Type guard to ensure error is of type Error with code property
          if (error instanceof Error && 'code' in error) {
            switch (error.code) {
              case 'invalid-credentials':
                throw new InvalidLoginError();
              case 'email-required':
                throw new EmailRequiredError();
              case 'password-required':
                throw new PasswordRequiredError();
              case 'locked-user':
                throw new LockedUserError();
              default:
                throw new Error('unknown-error');
            }
          }

          throw new Error('unknown-error');
        }
      }
    })
  ],
  events: {
    signIn: async (event: SignInEventType) => {
      await signInEvent(event);
    },
    signOut: async () => {
      await signOutEvent();
    }
  },
  pages: {
    signIn: '/login'
  }
};

import type { User as PayloadUser } from '@mono/types/payload-types';
// Types
import type { NextAuthConfig } from 'next-auth';
import type { PayloadAuthjsUser } from 'payload-authjs';

// Libraries

import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { redirect, unstable_rethrow } from 'next/navigation';
import { ZodError } from 'zod';

// Constants
import { SIGNIN_URL, SIGNUP_URL } from '@mono/web/lib/constants';
import { signInSchema } from '@mono/web/lib/zod';

import {
  EmailRequiredError,
  InvalidLoginError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';
// Helpers
import { signInEvent, signOutEvent } from '@mono/web/lib/auth/events';

import { th } from '@faker-js/faker';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/auth/session';

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
          switch (error.code) {
            case 'invalid-credentials':
              throw new InvalidLoginError();
            case 'email-required':
              throw new EmailRequiredError();
            case 'password-required':
              throw new PasswordRequiredError();
            default:
              throw new Error('unknown-error');
          }
        }
      }
    })
  ],
  events: {
    signIn: async (event) => {
      await signInEvent(event);
    },
    signOut: async (event) => {
      await signOutEvent(event);
    }
  },
  pages: {
    signIn: '/login'
  }
};

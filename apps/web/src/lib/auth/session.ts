// Single point of entry for all auth session related functions

// Types
type Creds = Partial<Record<'email' | 'password', unknown>>;

// Libraries
import { cookies } from 'next/headers';

// Helpers
import {
  EmailRequiredError,
  InvalidLoginError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';

const createPayloadAuthSessionWithEmailCreds = async ({
  email,
  password
}: Creds) => {
  if (typeof email !== 'string') {
    throw new EmailRequiredError();
  }
  if (typeof password !== 'string') {
    throw new PasswordRequiredError();
  }

  const { getPayload } = require('payload');
  const config = require('@payload-config');
  const payload = await getPayload({ config });

  const account = await payload.login({
    collection: 'userEmailProviders',
    data: {
      email,
      password
    }
  });

  if (account.token) {
    const cookieStore = await cookies();
    const cookieName = `${payload.config.cookiePrefix}-token`;
    cookieStore.set(cookieName, account.token, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    });
    return account.user.user;
  }

  throw new InvalidLoginError();
};

export { createPayloadAuthSessionWithEmailCreds };
export type { Creds };

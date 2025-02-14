import config from '@payload-config';
import { cookies } from 'next/headers';
import { getPayload } from 'payload';

type Creds = Partial<Record<'email' | 'password', unknown>>;

export const createPayloadAuthSessionWithEmailCreds = async ({
  email,
  password
}: Creds) => {
  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error('Authentication failure');
  }

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

  throw new Error('Authentication failure');
};

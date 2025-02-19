// Single Point of Entry for all auth event related information

// Types

import { deleteCookie, setCookie } from 'cookies-next/server';
// Libraries
import { cookies } from 'next/headers';

// Constants
import { PAYLOAD_USER_TYPE_COOKIE_NAME } from '@mono/web/lib/constants';

export const signInEvent = async (event) => {
  const { user, account } = event;

  setCookie(PAYLOAD_USER_TYPE_COOKIE_NAME, 'users', { cookies });
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
};

export const signOutEvent = () => {
  deleteCookie(PAYLOAD_USER_TYPE_COOKIE_NAME, { cookies });
};

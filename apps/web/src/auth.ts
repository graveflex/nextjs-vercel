import { PAYLOAD_USER_TYPE_COOKIE_NAME } from '@mono/web/lib/constants';
import payloadConfig from '@payload-config';
import { deleteCookie, setCookie } from 'cookies-next/server';
import NextAuth from 'next-auth';
import { cookies } from 'next/headers';
import { getPayload } from 'payload';
import { withPayload } from 'payload-authjs';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth(
  withPayload(authConfig, {
    payloadConfig,
    events: {
      signIn: () => {
        setCookie(PAYLOAD_USER_TYPE_COOKIE_NAME, 'users', { cookies });
      },
      signOut: () => {
        deleteCookie(PAYLOAD_USER_TYPE_COOKIE_NAME, { cookies });
      }
    }
  })
);

export const providerMap = authConfig.providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    }
    return { id: provider.id, name: provider.name };
  })
  .filter((provider) => provider.id !== 'credentials');

export const signUp = async (formData: FormData) => {
  // TODO: validate form data w/ zod
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const payload = await getPayload({ config: payloadConfig });

  const existingEmailProviderAccount = await payload.find({
    collection: 'userEmailProviders',
    where: { email: { equals: email } },
    limit: 1
  });

  if (existingEmailProviderAccount.docs.length) {
    throw new Error('User already exists');
  }

  const account = await payload.create({
    collection: 'userEmailProviders',
    data: {
      email: email,
      password: password
    }
  });

  await signIn('credentials', formData);
  return account.user;
};

export const sendPasswordResetEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;

  const payload = await getPayload({ config: payloadConfig });

  const existingEmailProviderAccount = await payload.find({
    collection: 'userEmailProviders',
    where: { email: { equals: email } },
    limit: 1
  });

  if (existingEmailProviderAccount.docs.length) {
    await payload.forgotPassword({
      collection: 'userEmailProviders',
      data: {
        email
      }
    });
  }

  return {
    message: 'Check your email!'
  };
};

import payloadConfig from '@payload-config';
import NextAuth from 'next-auth';
import { cookies } from 'next/headers';
import { getPayload } from 'payload';
import { withPayload } from 'payload-authjs';
import { v4 as uuidv4 } from 'uuid';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth(
  withPayload(authConfig, { payloadConfig })
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

  const existingUserResp = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1
  });

  let user = existingUserResp.docs[0];
  if (!user) {
    user = await payload.create({
      collection: 'users',
      data: {
        id: uuidv4(),
        email
      }
    });
  }

  await payload.create({
    collection: 'userEmailProviders',
    data: {
      email: email,
      password: password,
      user: user.id
    }
  });

  const account = await payload.login({
    collection: 'userEmailProviders',
    data: {
      email: email as string,
      password: password as string
    }
  });

  if (account.token) {
    const cookieStore = await cookies();
    const cookieName = `${payload.config.cookiePrefix}-token`;
    cookieStore.set(cookieName, account.token, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    });

    return user;
  }

  throw new Error('Failed to sign up');
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

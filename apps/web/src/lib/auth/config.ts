// All AuthConfig related information is now in this file;

import { signIn } from '@mono/web/auth';
// Libraries
import { getPayload } from 'payload';
import { ZodError } from 'zod';

import { authConfig } from '@mono/web/auth.config';
import { SIGNUP_URL } from '@mono/web/lib/constants';
import { signInSchema } from '@mono/web/lib/zod';
// Constants
import payloadConfig from '@payload-config';

// Types

// Functions

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

  const zodTest = { email, password };
  try {
    signInSchema.parse(zodTest);
  } catch (error) {
    if (error instanceof ZodError) {
      if (error.errors[0].path[0] === 'email') {
        throw new Error('invalid-email');
      }
      if (error.errors[0].path[0] === 'password') {
        throw new Error('invalid-password');
      }
    }
  }

  const payload = await getPayload({ config: payloadConfig });

  const existingEmailProviderAccount = await payload.find({
    collection: 'userEmailProviders',
    where: { email: { equals: email } },
    limit: 1
  });

  if (existingEmailProviderAccount.docs.length) {
    throw new Error('email-exists');
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

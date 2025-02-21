import { signIn as nextAuthSignIn } from '@mono/web/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

function getErrorMessage(err: typeof AuthError | Error | unknown) {
  if (err instanceof AuthError) {
    return { errorCode: err.cause?.err?.message ?? 'unknown-error' };
  }

  if (err instanceof Error) {
    return { errorCode: err.message ?? 'unknown-error' };
  }

  return 'unknown-error';
}

export async function signIn(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignIn('credentials', formData);
  } catch (err) {
    return getErrorMessage(err)
  }

  return redirect('/account');
}

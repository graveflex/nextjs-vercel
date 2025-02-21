import { signIn as nextAuthSignIn } from '@mono/web/auth';
import { redirect } from 'next/navigation';

export async function signIn(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignIn('credentials', formData);
  } catch (err) {
    const errorCode = err instanceof Error ? err.message : 'unknown-error';
    return { errorCode };
  }

  return redirect('/account');
}

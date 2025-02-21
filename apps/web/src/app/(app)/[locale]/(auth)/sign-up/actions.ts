import { signUp as nextAuthSignUp } from '@mono/web/lib/auth/config';
import { redirect } from 'next/navigation';

export async function signUp(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignUp(formData);
  } catch (err) {
    const errorCode = err instanceof Error ? err.message : 'unknown-error';
    return { errorCode };
  }

  return redirect('/account?created=true');
}

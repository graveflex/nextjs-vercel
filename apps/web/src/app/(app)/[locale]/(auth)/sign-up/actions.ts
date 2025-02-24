import { signUp as nextAuthSignUp } from '@mono/web/lib/auth/config';
import { getErrorMessage } from '@mono/web/lib/auth/errors';
import { redirect } from 'next/navigation';

export async function signUp(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignUp(formData);
  } catch (err) {
    return getErrorMessage(err);
  }

  return redirect('/account?created=true');
}

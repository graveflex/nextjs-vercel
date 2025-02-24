import { signIn as nextAuthSignIn } from '@mono/web/auth';
import { getErrorMessage } from '@mono/web/lib/auth/errors';

export async function signIn(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignIn('credentials', formData);
    return { success: true, errorCode: '' };
  } catch (err) {
    return getErrorMessage(err);
  }
}

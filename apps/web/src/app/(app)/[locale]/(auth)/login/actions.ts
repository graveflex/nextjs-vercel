import { signIn as nextAuthSignIn } from '@mono/web/auth';
import { getErrorMessage } from '@mono/web/lib/auth/errors';

export async function signIn(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignIn('credentials', formData);
    return { success: true, errorCode: '' };
  } catch (err) {
    if (err instanceof Error && err.message === 'NEXT_REDIRECT') {
      return { success: true };
    }
    return getErrorMessage(err);
  }
}

import { resetPassword as handleResetPassword } from '@mono/web/lib/auth/config';
import { getErrorMessage } from '@mono/web/lib/auth/errors';

export async function resetPassword(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await handleResetPassword(formData);
    // Todo: Find a better way to handle this
    throw new Error('password-reset');
  } catch (err) {
    return getErrorMessage(err);
  }
}

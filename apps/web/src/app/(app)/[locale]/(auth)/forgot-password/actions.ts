import { sendPasswordResetEmail } from '@mono/web/lib/auth/config';
import { getErrorMessage } from '@mono/web/lib/auth/errors';

export async function forgotPassword(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await sendPasswordResetEmail(formData);
    // Todo: Find a better way to handle this
    throw new Error('email-sent');
  } catch (err) {
    return getErrorMessage(err);
  }
}

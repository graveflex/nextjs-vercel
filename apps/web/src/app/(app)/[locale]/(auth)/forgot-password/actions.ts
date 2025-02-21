import { sendPasswordResetEmail } from '@mono/web/lib/auth/config';
import { getErrorMessage } from '@mono/web/lib/auth/errors';

export async function forgotPassword(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await sendPasswordResetEmail(formData);
    throw new Error('email-sent');
  } catch (err) {
    const test = getErrorMessage(err);
    console.log('🍤 ~ forgotPassword ~ test:', test);
    return test;
  }
}

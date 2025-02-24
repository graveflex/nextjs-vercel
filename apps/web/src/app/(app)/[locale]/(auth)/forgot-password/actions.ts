import { sendPasswordResetEmail } from '@mono/web/lib/auth/config';
import { getErrorCode } from '@mono/web/lib/auth/errors';
import { email } from 'node_modules/payload/dist/fields/validations';

export async function forgotPassword(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await sendPasswordResetEmail(formData);
    return {
      success: true,
      errorCode: '',
      email: formData.get('email') as string
    };
  } catch (err) {
    return {
      errorCode: getErrorCode(err),
      email: formData.get('email') as string,
      success: false
    };
  }
}

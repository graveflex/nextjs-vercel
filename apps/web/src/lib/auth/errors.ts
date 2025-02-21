// Single point of entry for all auth Errors

import { AuthError } from 'next-auth';
import { CredentialsSignin } from 'next-auth';

export class EmailRequiredError extends CredentialsSignin {
  code = 'email-required';
}
export class PasswordRequiredError extends CredentialsSignin {
  code = 'email-required';
}
export class InvalidLoginError extends CredentialsSignin {
  code = 'invalid-credentials';
}
export class LockedUserError extends CredentialsSignin {
  code = 'locked-user';
}

export function getErrorMessage(err: typeof AuthError | Error | unknown) {
  if (err instanceof AuthError) {
    return { errorCode: err.cause?.err?.message ?? 'unknown-error' };
  }

  if (err instanceof Error) {
    return { errorCode: err.message ?? 'unknown-error' };
  }

  return 'unknown-error';
}

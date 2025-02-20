// Single point of entry for all auth Errors

// Libraries
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

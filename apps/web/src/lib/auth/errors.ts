// Single point of entry for all auth Errors

// Libraries
import { CredentialsSignin } from 'next-auth';

class EmailRequiredError extends CredentialsSignin {
  code = 'email-required';
}
class PasswordRequiredError extends CredentialsSignin {
  code = 'email-required';
}
class InvalidLoginError extends CredentialsSignin {
  code = 'invalid-credentials';
}

export { EmailRequiredError, PasswordRequiredError, InvalidLoginError };

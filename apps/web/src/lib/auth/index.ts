// Single point of entry for all auth related functions

// Session
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/auth/session';
// Session
import type { Creds } from '@mono/web/lib/auth/session';

// Config
import {
  providerMap,
  sendPasswordResetEmail,
  signUp
} from '@mono/web/lib/auth/config';

// Events
import { signInEvent, signOutEvent } from '@mono/web/lib/auth/events';

// Errors
import {
  EmailRequiredError,
  InvalidLoginError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';

// Exports
export {
  // Session
  createPayloadAuthSessionWithEmailCreds,
  // Config
  providerMap,
  signUp,
  sendPasswordResetEmail,
  // Events
  signInEvent,
  signOutEvent,
  // Errors
  EmailRequiredError,
  PasswordRequiredError,
  InvalidLoginError
};

export type { Creds };

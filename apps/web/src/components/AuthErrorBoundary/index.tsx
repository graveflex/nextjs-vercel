'use client';

import { Alert } from '../ui/Alert';

import { Separator } from '@mono/web/components/ui/Separator';

const Errors = {
  'email-exists': {
    variant: 'destructive',
    title: 'Email already exists',
    description: 'The email you entered is already associated with an account.'
  },
  'invalid-email': {
    variant: 'destructive',
    title: 'Invalid email',
    description: 'The email you entered is invalid.'
  },
  'invalid-password': {
    variant: 'destructive',
    title: 'Invalid password',
    description:
      'The password you entered is invalid. Please make sure it is at least 8 characters long.'
  },
  'invalid-credentials': {
    variant: 'destructive',
    title: 'Invalid credentials',
    description: 'The email or password you entered is incorrect.'
  },
  'email-required': {
    variant: 'destructive',
    title: 'Email required',
    description: 'Please enter your email address.'
  },
  'password-required': {
    variant: 'destructive',
    title: 'Password required',
    description: 'Please enter your password.'
  },
  'unknown-error': {
    variant: 'destructive',
    title: 'Unknown error',
    description: 'An unknown error occurred. Please try again.'
  },
  'locked-user': {
    variant: 'destructive',
    title: 'Account locked',
    description: 'Your account has been locked. Please contact support.'
  }
} as const;

type ErrorKeys = keyof typeof Errors;
type AuthErrorBoundaryProps = {
  error: string;
};

export default function AuthErrorBoundary({ error }: AuthErrorBoundaryProps) {
  const isValidError = (err: string): err is ErrorKeys => {
    return err in Errors;
  };
  if (error && isValidError(error)) {
    const { variant, title, description } = Errors[error];
    return (
      <>
        <Alert variant={variant}>
          <h1 className="text-sm font-semibold [&+div]:text-xs">{title}</h1>
          <p className="text-sm opacity-90 mt-2">{description}</p>
        </Alert>
        {/* Separator */}
        <div className="w-full relative">
          <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Or */}
          </div>
          <Separator />
        </div>
      </>
    );
  }

  return null;
}

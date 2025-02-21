'use client';

import AuthErrorBoundary from '@mono/web/components/AuthErrorBoundary';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import Link from 'next/link';
import { useActionState } from 'react';

const initialState = {
  errorCode: ''
};

interface ForgotPasswordFormProps {
  forgotPassword: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ errorCode: string }>;
}

function ForgotPasswordForm({ forgotPassword }: ForgotPasswordFormProps) {
  const [message, formAction, pending] = useActionState(
    forgotPassword,
    initialState
  );

  return (
    <form className="w-full max-w-sm space-y-6 m-auto" action={formAction}>
      <AuthErrorBoundary error={message?.errorCode || ''} />

      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email address. If we have find an account matching your
          email, we will send you a secure sign-in link to the specified email
          address.
        </p>
      </div>

      {/* Email and password inputs */}
      <div className="space-y-4">
        <Input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          disabled={pending}
        />
      </div>

      {/* Sign-in button */}
      <Button className="w-full">Submit</Button>

      {/* Sign-up link */}
      <p className="text-sm text-center text-muted-foreground">
        Don't have an account?{' '}
        <Link className="underline text-foreground" href="/sign-up">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;

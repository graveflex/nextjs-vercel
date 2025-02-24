'use client';

import AuthErrorBoundary from '@mono/web/components/AuthErrorBoundary';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import Link from 'next/link';
import { useActionState } from 'react';

const initialState = {
  errorCode: '',
  success: false
};

interface SignInFormProps {
  signIn: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ errorCode: string; success?: boolean }>;
}

function SignInForm({ signIn }: SignInFormProps) {
  const [message, formAction, pending] = useActionState(signIn, initialState);

  if (message?.success) {
    // Redirect to account page?
  }

  return (
    <form className="w-full max-w-sm space-y-6 m-auto" action={formAction}>
      <AuthErrorBoundary error={message?.errorCode || ''} />

      {/* Redirect */}
      <Input id="redirect" name="redirect" type="hidden" value="true" />
      <Input
        id="redirectTo"
        name="redirectTo"
        type="hidden"
        value="/account?logged-in=true"
      />

      {/* Email and password inputs */}
      <div className="space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          disabled={pending}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          disabled={pending}
        />
      </div>

      {/* Keep signed in and forgot password */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="keep-signed-in" />
          <Label htmlFor="keep-signed-in">Keep me signed in</Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-muted-foreground hover:text-foreground underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Sign-in button */}
      <Button className="w-full">Sign in</Button>

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

export default SignInForm;

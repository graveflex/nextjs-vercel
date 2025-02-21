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

interface SignUpFormProps {
  signUp: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ errorCode: string }>;
}

function SignUpForm({ signUp }: SignUpFormProps) {
  const [message, formAction, pending] = useActionState(signUp, initialState);

  return (
    <form className="w-full max-w-sm space-y-6 m-auto" action={formAction}>
      <AuthErrorBoundary error={message?.errorCode || ''} />

      {/* Sign-up form fields */}
      <div className="space-y-4 mb-6">
        {/* Email input */}
        <Input
          id="redirectTo"
          name="redirectTo"
          type="hidden"
          value="/account?created=true"
        />

        {/* Email input */}
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          disabled={pending}
        />

        {/* Password input */}
        <div className="space-y-2">
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            disabled={pending}
          />
          <p className="text-sm text-muted-foreground">Minimum 8 characters.</p>
        </div>
        {/* Terms and conditions checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm font-normal">
            I agree to the{' '}
            <Link href="#" className="underline text-foreground">
              Terms & Conditions
            </Link>
          </Label>
        </div>
      </div>

      {/* Sign-up button and sign-in link */}
      <div className="flex flex-col space-y-4">
        <Button type="submit" className="w-full" disabled={pending}>
          Sign up
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          Already have account?{' '}
          <Link className="underline text-foreground" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;

import { sendPasswordResetEmail } from '@mono/web/auth';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import Image from 'next/image';
import Link from 'next/link';

async function ForgotPassword() {
  return (
    <div className="md:flex min-h-screen bg-background">
      {/* Left side: Sign-in form */}
      <div className="md:w-1/2 md:flex items-center justify-center px-6 py-24 relative">
        {/* Logo */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0">
          <div className="w-8 h-8 bg-accent-foreground" />
        </div>

        {/* Sign-in form container */}
        <form
          className="w-full max-w-sm space-y-6 m-auto"
          action={async (formData) => {
            'use server';
            // TODO: handle validation + success message
            await sendPasswordResetEmail(formData);
          }}
        >
          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-muted-foreground text-sm">
              Enter your email address. If we have find an account matching your
              email, we will send you a secure sign-in link to the specified
              email address.
            </p>
          </div>

          {/* Email and password inputs */}
          <div className="space-y-4">
            <Input placeholder="Email" />
          </div>

          {/* Keep signed in and forgot password */}
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="keep-signed-in" />
              <Label htmlFor="keep-signed-in">Keep me signed in</Label>
            </div>
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Sign In
            </Link>
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
      </div>

      {/* Right side: Image */}
      <Image
        src="https://ui.shadcn.com/placeholder.svg"
        alt="Image"
        width="1800"
        height="1800"
        className="max-w-[50%] object-cover md:block hidden"
      />
    </div>
  );
}

export default ForgotPassword;

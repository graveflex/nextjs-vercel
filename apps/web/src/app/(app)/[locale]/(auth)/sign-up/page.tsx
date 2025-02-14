import { signUp } from '@mono/web/auth';
import OAuthProviderList from '@mono/web/components/OAuthProviderList';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Separator } from '@mono/web/components/ui/Separator';
import Image from 'next/image';
import Link from 'next/link';

interface SignUpProps {
  searchParams: Promise<{ callbackUrl?: string }>;
}

async function SignUp({ searchParams }: SignUpProps) {
  const { callbackUrl } = await searchParams;
  return (
    <div className="md:flex min-h-screen bg-background">
      {/* Left side - Sign-up form */}
      <div className="md:w-1/2 md:flex items-center justify-center px-6 py-24 relative">
        {/* Logo */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0">
          <div className="h-8 w-8 bg-accent-foreground" />
        </div>

        <div className="w-full max-w-sm space-y-6 m-auto">
          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Create an account
            </h1>
            <p className="text-muted-foreground text-sm">
              Let's get started. Fill in the details below to create your
              account.
            </p>
          </div>

          <OAuthProviderList callbackUrl={callbackUrl} />

          {/* Separator */}
          <div className="w-full relative">
            <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Or
            </div>
            <Separator />
          </div>

          <form
            className="w-full max-w-sm space-y-6 m-auto"
            action={async (formData) => {
              'use server';
              // TODO: handle validation + success message
              await signUp(formData);
            }}
          >
            {/* Sign-up form fields */}
            <div className="space-y-4 mb-6">
              {/* Email input */}
              <Input id="email" name="email" placeholder="Email" type="email" />

              {/* Password input */}
              <div className="space-y-2">
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 8 characters.
                </p>
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
              <Button type="submit" className="w-full">
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
        </div>
      </div>

      {/* Right side - Image */}
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

export default SignUp;

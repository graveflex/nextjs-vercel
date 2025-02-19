import { signIn } from '@mono/web/auth';
import AuthErrorBoundary from '@mono/web/components/AuthErrorBoundary';
import OAuthProviderList from '@mono/web/components/OAuthProviderList';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Separator } from '@mono/web/components/ui/Separator';
import { SIGNIN_URL } from '@mono/web/lib/constants';
import Link from 'next/link';
import { redirect, unstable_rethrow } from 'next/navigation';

interface SignInProps {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
    email?: string;
  }>;
}

async function SignIn({ searchParams }: SignInProps) {
  const { callbackUrl, email, error } = await searchParams;
  return (
    <>
      {/* Sign-in form container */}
      <div className="w-full max-w-sm space-y-6 m-auto">
        <AuthErrorBoundary error={error || ''} />

        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-muted-foreground text-sm">
            Log in to unlock tailored content and stay connected with your
            community.
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
            try {
              await signIn('credentials', formData);
            } catch (error) {
              unstable_rethrow(error);
              const email = formData.get('email');
              if (email) {
                redirect(`${SIGNIN_URL}?error=${error.code}&email=${email}`);
              } else {
                redirect(`${SIGNIN_URL}?error=${error.code}`);
              }
            }
          }}
        >
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
            {email ? (
              <Input name="email" placeholder="Email" defaultValue={email} />
            ) : (
              <Input name="email" placeholder="Email" />
            )}
            <Input name="password" type="password" placeholder="Password" />
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
      </div>
    </>
  );
}

export default SignIn;

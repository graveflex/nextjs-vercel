import { signIn } from '@mono/web/auth';
import OAuthProviderList from '@mono/web/components/OAuthProviderList';
import { Button } from '@mono/web/components/ui/Button';
import { Checkbox } from '@mono/web/components/ui/Checkbox';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
import { Separator } from '@mono/web/components/ui/Separator';
import Link from 'next/link';

interface SignInProps {
  searchParams: Promise<{ callbackUrl?: string }>;
}

async function SignIn({ searchParams }: SignInProps) {
  const { callbackUrl } = await searchParams;
  return (
    <>
      {/* Sign-in form container */}
      <div className="w-full max-w-sm space-y-6 m-auto">
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
            await signIn('credentials', formData);
          }}
        >
          {/* Email and password inputs */}
          <div className="space-y-4">
            <Input name="email" placeholder="Email" />
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

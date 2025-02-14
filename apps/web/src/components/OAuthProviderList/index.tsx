import { providerMap, signIn } from '@mono/web/auth';
import { Button } from '@mono/web/components/ui/Button';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

interface OAuthProviderListProps {
  callbackUrl?: string;
}

function OAuthProviderList(props: OAuthProviderListProps) {
  return Object.values(providerMap).map((provider) => (
    <form
      key={provider.id}
      action={async () => {
        'use server';
        try {
          await signIn(provider.id, {
            redirectTo: props.callbackUrl ?? ''
          });
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            return redirect(`/oauth-error?error=${error.type}`);
          }

          // Otherwise if a redirects happens Next.js can handle it
          // so you can just re-thrown the error and let Next.js handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_772_376)">
            <path
              d="M8 6.54543V9.64361H12.3054C12.1164 10.64 11.549 11.4836 10.6981 12.0509L13.2945 14.0655C14.8072 12.6692 15.68 10.6182 15.68 8.18187C15.68 7.61461 15.6291 7.0691 15.5345 6.54551L8 6.54543Z"
              fill="#4285F4"
            />
            <path
              d="M3.51625 9.52267L2.93067 9.97093L0.85791 11.5854C2.17427 14.1963 4.87225 16 7.9995 16C10.1594 16 11.9703 15.2873 13.294 14.0655L10.6976 12.0509C9.98492 12.5309 9.07582 12.8218 7.9995 12.8218C5.91951 12.8218 4.15229 11.4182 3.51952 9.52729L3.51625 9.52267Z"
              fill="#34A853"
            />
            <path
              d="M0.858119 4.41455C0.312695 5.49087 0 6.70543 0 7.99996C0 9.29448 0.312695 10.509 0.858119 11.5854C0.858119 11.5926 3.51998 9.51991 3.51998 9.51991C3.35998 9.03991 3.26541 8.53085 3.26541 7.99987C3.26541 7.46889 3.35998 6.95984 3.51998 6.47984L0.858119 4.41455Z"
              fill="#FBBC05"
            />
            <path
              d="M7.99966 3.18545C9.17786 3.18545 10.2251 3.59271 11.0615 4.37818L13.3524 2.0873C11.9633 0.792777 10.1597 0 7.99966 0C4.87242 0 2.17427 1.79636 0.85791 4.41455L3.51969 6.48001C4.15238 4.58908 5.91968 3.18545 7.99966 3.18545Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_772_376">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Sign in with {provider.name}</span>
      </Button>
    </form>
  ));
}

export default OAuthProviderList;

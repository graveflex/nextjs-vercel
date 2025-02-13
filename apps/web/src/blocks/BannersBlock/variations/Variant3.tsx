import { Button } from '@mono/web/components/ui/Button';
import Link from 'next/link';

export default function Variant3() {
  return (
    <aside
      role="alert"
      aria-label="Cookie consent banner"
      className="bg-accent-foreground py-4"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <p
          className="text-sm text-background max-w-xl text-center md:text-left"
          id="cookie-consent-description"
        >
          We use cookies to enhance your experience. By clicking "Accept," you
          consent to the use of all cookies. Learn more in our{' '}
          <Link href="#" className="underline" aria-label="View cookie policy">
            cookie policy
          </Link>
          .
        </p>
        <div
          className="flex w-full md:w-auto gap-2 flex-col md:flex-row"
          aria-describedby="cookie-consent-description"
        >
          <Button
            // onClick={() => {
            //   /* Add accept handler */
            // }}
            className="order-1 md:order-2 w-full md:w-auto bg-accent text-accent-foreground hover:text-accent hover:bg-foreground border-background border-1"
            aria-label="Accept all cookies"
          >
            Accept all
          </Button>
          <Button
            // onClick={() => {
            //   /* Add reject handler */
            // }}
            className="order-2 md:order-1 w-full md:w-auto bg-accent-foreground text-background hover:text-accent-foreground hover:bg-background "
            variant="outline"
            aria-label="Reject all cookies"
          >
            Reject all
          </Button>
        </div>
      </div>
    </aside>
  );
}

import { ChevronsRight, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Variant4() {
  return (
    <aside
      role="banner"
      aria-label="Product update announcement"
      className="flex justify-center items-center h-screen" // you can remove classes here - it's just for the wrapper
    >
      <Link
        href="#"
        className="flex px-4 py-1.5 border border-border bg-background gap-2 items-center rounded-full hover:bg-muted w-fit"
        aria-label="Learn more about new Pro Blocks update"
      >
        <Rocket className="size-4 shrink-0" aria-hidden="true" />
        <span className="text-sm" id="update-description">
          <span className="font-semibold">New update </span>
          <span className="text-muted-foreground">
            · 100+ Pro Blocks are now available
          </span>
        </span>
        <ChevronsRight
          className="size-4 text-muted-foreground shrink-0"
          aria-hidden="true"
        />
      </Link>
    </aside>
  );
}

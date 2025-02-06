import { ChevronsRight, X } from 'lucide-react';
import Link from 'next/link';

export default function Variant6() {
  return (
    <aside
      role="banner"
      aria-label="Product announcement"
      className="fixed top-16 left-0 right-0 mx-auto px-6"
    >
      <div className="flex items-center bg-zinc-950 pl-4 pr-6 py-3 md:py-4 relative rounded-xl shadow-lg max-w-5xl mx-auto">
        <Link
          href="#"
          className="flex items-center justify-start gap-2 w-full cursor-pointer"
          aria-label="Learn more about shadcn/ui kit Pro blocks"
        >
          <span className="text-sm text-white hover:underline">
            <span className="font-semibold">New update</span> · Pro blocks are
            now available in shadcn/ui kit for Figma!
          </span>
          <ChevronsRight
            className="hidden md:block w-4 h-4 text-white"
            aria-hidden="true"
          />
        </Link>
        <button
          type="button"
          // onClick={() => {
          //   /* Add close handler */
          // }}
          className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10"
          aria-label="Close announcement"
        >
          <X className="size-4 text-white" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </aside>
  );
}

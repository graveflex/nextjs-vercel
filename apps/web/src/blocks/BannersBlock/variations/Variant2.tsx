import { ChevronsRight, X } from 'lucide-react';

export default function Variant2() {
  return (
    <aside
      role="banner"
      aria-label="Promotion announcement"
      className="flex items-center bg-accent-foreground px-6 py-3 relative"
    >
      <a
        href="#null"
        className="flex items-center justify-start gap-2 w-full cursor-pointer"
        aria-label="Learn more about shadcn/ui kit Pro blocks"
      >
        <span className="text-sm text-background hover:underline">
          <span className="font-semibold">New update</span> · Pro blocks are now
          available in shadcn/ui kit for Figma!
        </span>
        <ChevronsRight className="hidden md:block w-4 h-4 text-background" />
      </a>
      <button
        type="button"
        // onClick={() => {
        //   /* Add close handler */
        // }}
        className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10"
        aria-label="Close announcement"
      >
        <X className="size-4 text-background" />
        <span className="sr-only">Close</span>
      </button>
    </aside>
  );
}

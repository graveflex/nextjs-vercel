import { ChevronRight, File, Home, Newspaper } from 'lucide-react';
import Link from 'next/link';

interface ActionLinkProps {
  label: string;
  href: string;
  description?: string;
  icon: React.ReactNode;
}

const ActionLink = ({
  label,
  href,
  description,
  icon: Icon
}: ActionLinkProps) => (
  <Link
    href={href}
    className="group flex gap-5 flex-col md:flex-row items-center hover:bg-foreground/5 p-3 rounded-lg transition-colors"
  >
    <div className="bg-background flex items-center justify-center border border-border rounded-md w-10 h-10 shadow-sm text-foreground">
      {Icon}
    </div>
    <div className="flex flex-col flex-1 text-center md:text-left gap-2 md:gap-0">
      <span className="text-foreground underline font-medium">{label}</span>
      {description && (
        <span className="text-muted-foreground">{description}</span>
      )}
    </div>
    <ChevronRight className="size-5 hidden md:block transition-transform group-hover:translate-x-1 text-foreground" />
  </Link>
);

const ACTIONS: ActionLinkProps[] = [
  {
    label: 'Go back to homepage',
    href: '/',
    description: 'Return to our main page to start fresh',
    icon: <Home className="size-5" />
  },
  {
    label: 'Read our documentation',
    href: '/docs',
    description: 'Learn more about our features and capabilities',
    icon: <File className="size-5" />
  },
  {
    label: 'Explore our blog',
    href: '/blog',
    description: 'Check out our latest articles and updates',
    icon: <Newspaper className="size-5" />
  }
];

export default function Variant3() {
  return (
    <section
      className="bg-background py-16 lg:py-24 flex flex-col items-center justify-center relative overflow-hidden min-h-screen"
      aria-labelledby="error-title"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5 text-center md:text-left">
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-label="Error code"
            >
              404
            </p>
            <h1
              id="error-title"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Page not found
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Sorry, we couldn't find the page you're looking for. Here are some
              helpful links instead:
            </p>
          </div>
        </div>

        <div className="flex-1 w-full p-3 md:p-6 bg-primary-foreground rounded-xl flex flex-col gap-3">
          {ACTIONS.map((action) => (
            <ActionLink key={action.label} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}

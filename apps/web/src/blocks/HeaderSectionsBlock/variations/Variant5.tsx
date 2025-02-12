import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@mono/web/components/ui/Breadcrumb';

export default function Variant5() {
  return (
    <section
      className="bg-background pt-4 pb-16 lg:pb-24"
      aria-labelledby="page-heading"
    >
      <div className="container px-6 flex flex-col gap-8 lg:gap-16 relative z-10 mx-auto">
        {/* Breadcrumb Navigation */}
        <Breadcrumb aria-label="Page navigation">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Header Sections</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Header Section Five</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Content */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-xl">
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Category Tag */}
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Header section
            </p>
            {/* Main Title */}
            <h1
              id="page-heading"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Short engaging headline
            </h1>
            {/* Section Description */}
            <p
              className="text-muted-foreground text-base lg:text-lg"
              aria-label="page description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              hendrerit ex vitae sodales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

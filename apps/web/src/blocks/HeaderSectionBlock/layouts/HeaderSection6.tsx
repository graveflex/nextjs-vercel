import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@mono/web/components/ui/Breadcrumb';

import React from 'react';
import type { HeaderSectionBlockType } from './../index';

function HeaderSection6({ title }: HeaderSectionBlockType) {
  return (
    <section
      className="bg-zinc-950 pt-4 pb-16 lg:pb-24"
      aria-labelledby="page-heading"
    >
      <div className="container px-6 flex flex-col gap-8 lg:gap-16 relative z-10 mx-auto">
        {/* Breadcrumb Navigation */}
        <Breadcrumb aria-label="Page navigation">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-white/80">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/50" />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-white/80">
                Header Sections
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/50" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white/90">
                Header Section Six
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Content */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-xl">
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Category Tag */}
            <p
              className="text-white/80 text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Header section
            </p>
            {/* Main Title */}
            <h1
              id="page-heading"
              className="text-white text-3xl md:text-5xl font-bold"
            >
              {title}
            </h1>
            {/* Section Description */}
            <p className="text-white/80 text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              hendrerit ex vitae sodales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection6;

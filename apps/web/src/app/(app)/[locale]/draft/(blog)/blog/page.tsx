import BlogIndex from '@mono/web/app/(app)/[locale]/(blog)/blog/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function (props: React.ComponentProps<typeof BlogIndex>) {
  return (
    <BlogIndex
      {...{
        ...props,
        params: {
          ...props.params,
          draft: true
        }
      }}
    />
  );
}

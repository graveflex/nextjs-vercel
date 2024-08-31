import type React from 'react';
import BlogDetail from '@mono/web/app/(app)/[locale]/(blog)/blog/[...slug]/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function (props: React.ComponentProps<typeof BlogDetail>) {
  return (
    <BlogDetail
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

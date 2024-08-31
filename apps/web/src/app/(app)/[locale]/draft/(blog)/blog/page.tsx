import BlogIndex, { type BlogLayoutProps } from '@mono/web/app/(app)/[locale]/(blog)/blog/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function (props: BlogLayoutProps) {
  return <BlogIndex {...props} draft={true} />;
}


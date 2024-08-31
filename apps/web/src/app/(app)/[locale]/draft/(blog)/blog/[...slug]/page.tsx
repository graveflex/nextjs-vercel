import BlogDetail, { type BlogLayoutProps } from '@mono/web/app/(app)/[locale]/(blog)/blog/[...slug]/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function (props: BlogLayoutProps) {
  return <BlogDetail {...props} draft={true} />;
}

import CatchallPage, {
  type RootLayoutProps
} from '@mono/web/app/(app)/[locale]/[[...slug]]/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (props: RootLayoutProps) {
  return <CatchallPage {...props} draft={true} />;
}

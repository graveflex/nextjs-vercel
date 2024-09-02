import PageClient from '../page.client';
import Providers from '../providers';

export default async function RefractWithoutDataPage() {
  return (
    <Providers>
      <PageClient heading="This page contains no styles and pulls NO data from the API" />
    </Providers>
  );
}

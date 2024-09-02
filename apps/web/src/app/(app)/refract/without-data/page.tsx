import PageClient from '../page.client';

export default async function RefractWithoutDataPage() {
  return (
    <PageClient heading="This page contains no styles and pulls NO data from the API" />
  );
}

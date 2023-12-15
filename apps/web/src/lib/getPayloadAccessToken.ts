import { cookies } from 'next/headers';

function getPayloadAccessToken() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get('payload-token')?.value;

  return accessToken || null;
}

export default getPayloadAccessToken;

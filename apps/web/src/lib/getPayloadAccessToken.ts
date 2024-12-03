import { cookies } from 'next/headers';

async function getPayloadAccessToken() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('payload-token')?.value;

  return accessToken || null;
}

export default getPayloadAccessToken;

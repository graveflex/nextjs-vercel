import { WEB_URL } from '@mono/settings';
import getPayloadAccessToken from './getPayloadAccessToken';

export async function redirectApi(path: string | string[]) {
  const payloadAccessToken = getPayloadAccessToken();

  // compress into string if array
  if (Array.isArray(path)) {
    path = path.join('/');
  }

  // make url friendly
  const q = `depth=1`;

  const url = `${WEB_URL}/api/redirects?${q}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `JWT ${payloadAccessToken}`
      }
    });
    const data = await res.json();

    const { docs } = data;

    if (data && data.errors) {
      throw new Error('Database error');
    }

    const redirectPath =
      docs?.[0]?.to?.url ||
      docs?.[0]?.to?.reference?.value?.path ||
      docs?.[0]?.to?.reference?.value?.slug;

    if (!redirectPath) {
      throw new Error('No redirect found');
    }

    return redirectPath;
  } catch (err) {
    return { error: 'Unable to gather redirect path.' };
  }
}

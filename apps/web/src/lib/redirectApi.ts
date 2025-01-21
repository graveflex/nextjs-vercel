import getPayloadAccessToken from './getPayloadAccessToken';

export async function redirectApi(path: string | string[]) {
  const payloadAccessToken = await getPayloadAccessToken();

  // make url friendly
  const q = `depth=1&where[from][equals]=${path}`;

  const url = `/api/redirects?${q}`;

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
    let subPath;
    switch (docs?.[0]?.to?.reference?.relationTo) {
      case 'posts':
        subPath = 'blog/';
        break;
      default:
        subPath = '';
    }

    const redirectPath =
      docs?.[0]?.to?.url ||
      docs?.[0]?.to?.reference?.value?.path ||
      docs?.[0]?.to?.reference?.value?.slug;

    if (!redirectPath) {
      throw new Error('No redirect found');
    }

    return `${subPath}${redirectPath}`;
  } catch (_err) {
    return { error: 'Unable to gather redirect path.' };
  }
}

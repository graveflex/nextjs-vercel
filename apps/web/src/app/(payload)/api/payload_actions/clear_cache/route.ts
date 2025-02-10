import { parse } from 'url';
import { API_KEY, CACHE_TAGS } from '@mono/web/lib/constants';
import { revalidatePath, revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  let response = new Response('Hello, world!');

  try {
    const { query } = parse(request.url || '', true);

    if (query.key !== API_KEY) {
      return new Response(JSON.stringify({ error: 'Invalid API key' }), {
        status: 401
      });
    }

    revalidatePath('/', 'layout');

    for (const tag of CACHE_TAGS) {
      revalidateTag(tag);
    }

    response = new Response(JSON.stringify({ success: 'Cache cleared' }));
  } catch (err) {
    console.error(err);
    response = new Response(
      JSON.stringify({ error: 'Failed to clear cache' }),
      {
        status: 500
      }
    );
  }

  return response;
}

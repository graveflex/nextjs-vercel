// Libraries
import { parse } from 'url';

import config from '@payload-config';
import { getPayload } from 'payload';

// Types
import type { NextRequest } from 'next/server';

// ENVs
import { API_KEY } from '@mono/web/lib/constants';

export async function POST(request: NextRequest) {
  let response = new Response('Hello, world!');

  try {
    const { query } = parse(request.url || '', true);

    if (query.key !== API_KEY) {
      return new Response(JSON.stringify({ error: 'Invalid API key' }), {
        status: 401
      });
    }

    const payload = await getPayload({ config });
    const results = await payload.jobs.run();

    response = new Response(JSON.stringify({ success: 'Queue Ran', results }));
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

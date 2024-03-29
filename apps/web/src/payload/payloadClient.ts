import dotenv from 'dotenv';
import { getPayload, type Payload } from 'payload/dist/payload';

import config from '../../payload.config';

dotenv.config({ path: `${__dirname}/../../../.env` });

if (!process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET environment variable is missing');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 *
 * Source: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js
 */

declare global {
  // eslint-disable-next-line
  var payload: {
    client: Payload | null;
    promise: Promise<Payload> | null;
  };
}

let cached: {
  client: Payload | null;
  promise: Promise<Payload> | null;
} = global.payload;

if (!cached) {
  global.payload = { client: null, promise: null };
  cached = global.payload;
}

const getPayloadClient = async (): Promise<Payload> => {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      secret: process.env.PAYLOAD_SECRET || '',
      config
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};

export default getPayloadClient;

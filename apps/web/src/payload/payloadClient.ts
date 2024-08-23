import configPromise from '@payload-config';
import { getPayload, type Payload } from 'payload';

if (!process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET environment variable is missing');
}

const getPayloadClient = (): Promise<Payload> => {
  return getPayload({ config: configPromise });
};

export default getPayloadClient;

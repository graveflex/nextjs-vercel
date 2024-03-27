import getPayloadClient from '@mono/web/payload/payloadClient';
import type { Payload } from 'payload';

async function fetchPayloadData<T>(
  fn: (arg0: Payload) => Promise<T>
): Promise<T | { error: string }> {
  try {
    const payload = await getPayloadClient();
    const resp: T = await fn(payload);
    return resp;
  } catch (err) {
    return { error: err as string };
  }
}

export default fetchPayloadData;

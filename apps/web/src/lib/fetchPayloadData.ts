import type { Payload } from 'payload';
import payload from 'payload';

// standardize fetching and error handling
async function fetchPayloadData<T>(
  fn: (arg0: Payload) => Promise<T>
): Promise<T | { error: string }> {
  try {
    const resp: T = await fn(payload);
    return resp;
  } catch (err) {
    return { error: err };
  }
}

export default fetchPayloadData;

import { type Payload } from 'payload/dist/payload';

declare global {
  // eslint-disable-next-line
  var payload: {
    client: Payload | null;
    promise: Promise<Payload> | null;
  };
}

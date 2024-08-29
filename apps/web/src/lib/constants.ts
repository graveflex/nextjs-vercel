import { NEXT_PORT } from '@mono/settings';

export const WEB_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${NEXT_PORT}`;

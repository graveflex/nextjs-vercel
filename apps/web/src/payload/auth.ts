import { authConfig } from '@mono/web/payload/auth.config'; // ⚠ Import the config from a separate file
import payloadConfig from '@payload-config';
import NextAuth from 'next-auth';
import { withPayload } from 'payload-authjs';

export const { handlers, signIn, signOut, auth } = NextAuth(
  withPayload(authConfig, {
    payloadConfig
  })
);

import createMiddleware from 'next-intl/middleware';
import { LOCALES } from '@mono/web/lib/constants';
import { routing } from '@mono/web/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    `/(en-US|es-US)/:path*`
  ]
};

import { routing } from '@mono/web/i18n/routing';
import { LOCALES } from '@mono/web/lib/constants';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|admin|_next|_vercel(?!/insights/script\\.js)|.*\\..*).*)']
};

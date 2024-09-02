import createMiddleware from 'next-intl/middleware';
import { DEFAULT_LOCALE, LOCALES } from '@mono/web/lib/constants';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // do not redirect for deafult locale
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|admin|_next|_vercel(?!/insights/script\\.js)|.*\\..*).*)'
  ]
};

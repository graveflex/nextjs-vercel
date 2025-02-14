export const LOCAL_DOMAIN = 'localhost';
export const PROJECT_NAME = process.env.PROJECT_NAME;
export const AUTO_LOGIN = process.env.AUTO_LOGIN === 'true';

export const NEXT_PORT = process.env.NEXT_PORT;
export const NEXT_PUBLIC_PORT = process.env.NEXT_PUBLIC_PORT;
export const DOCS_PORT = process.env.DOCS_PORT;

export const BLOB_ENDPOINT_URL = process.env.BLOB_ENDPOINT_URL;
export const BLOB_STORE_ID = process.env.BLOB_STORE_ID;

export const NODE_ENV = process.env.NODE_ENV;

export const DEFAULT_LOCALE = 'en-US' as const;
export const FALLBACK_LOCALE = 'en' as const;
export const LOCALE_SETTINGS = [
  {
    label: 'US English',
    code: DEFAULT_LOCALE
  },
  {
    label: 'US Spanish',
    code: 'es-US' as const
  }
];
export const LOCALES = LOCALE_SETTINGS.map(({ code }) => code);
export type LanguageLocale = (typeof LOCALES)[number];

export const WEB_URL = process.env.SERVER_URL
  ? `https://${process.env.SERVER_URL}`
  : `http://localhost:${NEXT_PUBLIC_PORT}`;

export const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY ?? 'NO ENV API KEY FOUND';

export const CACHE_TAGS = ['blocks', 'global-nav', 'global-cache-key'];

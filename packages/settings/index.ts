import { getPostgresUrl, getWebUrl } from './utils';

export const LOCAL_DOMAIN = 'localhost';
export const PROJECT_NAME = process.env.PROJECT_NAME;

export const NEXT_PORT = process.env.NEXT_PORT;
export const DOCS_PORT = process.env.DOCS_PORT;
export const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;

export const POSTGRES_URL = getPostgresUrl();

export const LOCAL = process.env.LOCAL as 'true' | 'false';
const FORCE_WEB_URL = process.env.FORCE_WEB_URL;

export const WEB_URL = getWebUrl({
  projectName: PROJECT_NAME,
  localDomain: LOCAL_DOMAIN,
  appName: 'web',
  localPort: NEXT_PORT,
  local: LOCAL,
  forceUrl: FORCE_WEB_URL
});

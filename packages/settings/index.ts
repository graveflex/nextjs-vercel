import { getWebUrl } from './utils';

export const LOCAL_DOMAIN = 'localhost';
export const PROJECT_NAME = process.env.PROJECT_NAME;

export const NEXT_PORT = process.env.NEXT_PORT;
export const DOCS_PORT = process.env.DOCS_PORT;

export const BLOB_ENDPOINT_URL = process.env.BLOB_ENDPOINT_URL;
export const BLOB_STORE_ID = process.env.BLOB_STORE_ID;

export const LOCAL = process.env.LOCAL === 'true';
const FORCE_WEB_URL = process.env.FORCE_WEB_URL;

export const WEB_URL = getWebUrl({
  projectName: PROJECT_NAME,
  localDomain: LOCAL_DOMAIN,
  appName: 'web',
  localPort: NEXT_PORT,
  local: LOCAL,
  forceUrl: FORCE_WEB_URL
});

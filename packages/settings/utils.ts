export type GetUrl = {
  projectName?: string;
  localDomain?: string;
  appName: 'web';
  localPort?: string;
  local?: boolean;
  forceUrl?: string;
};

const ORG = 'graveflex';

const slugify = (str: string) => {
  const slug = str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9-]/g, '-') // Replace any non-alphanumeric characters with hyphens
    .replace(/-+/g, '-') // Replace any consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, '') // Remove any leading or trailing hyphens
    .replace(/\//g, '-'); // replace forward slashes with hyphens
  return slug;
};

export const getWebUrl = ({
  projectName,
  localDomain,
  appName,
  localPort,
  local,
  forceUrl
}: GetUrl) => {
  if (forceUrl) {
    return forceUrl;
  }

  if (local) {
    return `http://${localDomain}:${localPort}`;
  }

  const BRANCH = process.env.VERCEL_GIT_COMMIT_REF || 'main';

  if (BRANCH === 'main') {
    return `https://${projectName}-${appName}.vercel.app`;
  }

  const VERCEL_URL = process.env.VERCEL_URL || '';

  if (VERCEL_URL) {
    return `https://${VERCEL_URL}`;
  }

  return `https://${projectName}-${appName}-git-${slugify(
    BRANCH
  )}-${ORG}.vercel.app`;
};

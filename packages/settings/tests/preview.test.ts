import { vi } from 'vitest';

import { LOCAL_DOMAIN, NEXT_PORT, PROJECT_NAME } from '../index';
import { getWebUrl } from '../utils';

describe.skip('preview urls', () => {
  const vercelUrl = 'nextjs-vercel-monorepo-test-graveflex.vercel.app';
  vi.stubEnv('VERCEL_URL', vercelUrl);
  vi.stubEnv('IS_PREVIEW', 'true');
  console.log('@--> process', process.env.IS_PREVIEW);
  it('Returns Web URL when VERCEL_URL is specified', () => {
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      localDomain: LOCAL_DOMAIN,
      appName: 'web',
      localPort: NEXT_PORT,
      local: 'true'
    });
    expect(result).toEqual(vercelUrl);
  });
});

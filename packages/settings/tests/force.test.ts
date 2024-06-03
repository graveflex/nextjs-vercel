// @vitest-environment ../environments/local.ts

import { describe, expect, it } from 'vitest';

import { LOCAL_DOMAIN, NEXT_PORT, PROJECT_NAME } from '../index';
import { getWebUrl } from '../utils';

describe('local urls', () => {
  it('Returns Web url', () => {
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      localDomain: LOCAL_DOMAIN,
      appName: 'web',
      localPort: NEXT_PORT,
      local: true,
      forceUrl: 'https://google.com'
    });
    expect(result).toEqual('https://google.com');
  });
});

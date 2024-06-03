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
      local: true
    });
    expect(result).toEqual(`http://localhost:${NEXT_PORT}`);
  });

  it('Returns Web url for the main branch', () => {
    process.env.VERCEL_GIT_COMMIT_REF = 'main';
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: false
    });
    expect(result).toEqual(`https://${PROJECT_NAME}-web.vercel.app`);
  });

  it('Returns Web url for when VERCEL_GIT_COMMIT_REF is not defined', () => {
    delete process.env.VERCEL_GIT_COMMIT_REF;
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: false
    });
    expect(result).toEqual(`https://${PROJECT_NAME}-web.vercel.app`);
  });

  it('Returns Web url for a non-main branch', () => {
    const branchName = 'feature-branch';
    process.env.VERCEL_GIT_COMMIT_REF = branchName;
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: false
    });
    expect(result).toEqual(
      `https://${PROJECT_NAME}-web-git-${branchName}-graveflex.vercel.app`
    );
  });
});

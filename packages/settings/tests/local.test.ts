// @vitest-environment ../environments/local.ts

import { LOCAL_DOMAIN, NEXT_PORT, PROJECT_NAME } from '../index';
import { getWebUrl } from '../utils';

describe('local urls', () => {
  it('Should add sslmode=require in production environment when LOCAL is false', async () => {
    process.env.NODE_ENV = 'production';
    process.env.LOCAL = 'false';
    process.env.POSTGRES_URL = 'postgres://localhost:5432/next-payload';

    const { getPostgresUrl } = await import('../utils');
    const POSTGRES_URL = getPostgresUrl();

    const expectedUrl =
      'postgres://localhost:5432/next-payload?sslmode=require';
    expect(POSTGRES_URL).toEqual(expectedUrl);
  });

  it('Returns Web url', () => {
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      localDomain: LOCAL_DOMAIN,
      appName: 'web',
      localPort: NEXT_PORT,
      local: 'true'
    });
    expect(result).toEqual(`http://localhost:${NEXT_PORT}`);
  });

  it('Returns Web url for the main branch', () => {
    process.env.VERCEL_GIT_COMMIT_REF = 'main';
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: 'false'
    });
    expect(result).toEqual(`https://${PROJECT_NAME}-web.vercel.app`);
  });

  it('Returns Web url for when VERCEL_GIT_COMMIT_REF is not defined', () => {
    delete process.env.VERCEL_GIT_COMMIT_REF;
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: 'false'
    });
    expect(result).toEqual(`https://${PROJECT_NAME}-web.vercel.app`);
  });

  it('Returns Web url for a non-main branch', () => {
    const branchName = 'feature-branch';
    process.env.VERCEL_GIT_COMMIT_REF = branchName;
    const result = getWebUrl({
      projectName: PROJECT_NAME,
      appName: 'web',
      local: 'false'
    });
    expect(result).toEqual(
      `https://${PROJECT_NAME}-web-git-${branchName}-graveflex.vercel.app`
    );
  });
});

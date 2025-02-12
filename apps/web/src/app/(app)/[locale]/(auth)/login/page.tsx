import config from '@payload-config';
import { headers } from 'next/headers';
import { getPayload } from 'payload';
import { WEB_URL } from '@mono/web/lib/constants';
import type React from 'react';
import Wrapper from '@mono/web/components/Wrapper';
import styles from './Auth.module.css';

async function AuthPage() {
  const requestHeaders = await headers();
  const payload = await getPayload({ config });
  const resp = await payload.auth({ headers: requestHeaders });

  const { user } = resp;

  const isAdmin = user?.roles?.includes('admin');

  const CustomBlock = () => {
    if (user) {
      return (
        <div>
          <h2>Welcome, {user.email}!</h2>
          <h3>
            You are {isAdmin ? 'an' : 'not an'} <b>admin</b>
          </h3>
          {isAdmin ? (
            <a href={`${WEB_URL}/admin/logout`}>Logout</a>
          ) : (
            <a href="/api/auth/signout">Sign Out</a>
          )}
        </div>
      );
    }
    return <a href="/api/auth/signin">Sign In</a>;
  };

  return (
    <Wrapper>
      <div>
        <h1>Auth Page</h1>
        <pre className={styles.pre}>{JSON.stringify(user)}</pre>
        <CustomBlock />
      </div>
    </Wrapper>
  );
}

export default AuthPage;

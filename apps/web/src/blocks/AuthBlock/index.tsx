// Types
import type { AuthBlockT as PayloadType } from '@mono/types/payload-types';

/*
import { auth } from '@mono/web/payload/auth';
import config from '@payload-config';
import { headers } from 'next/headers';
import { getPayload } from 'payload';
*/

// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

// Styles
import styles from './Auth.module.css';

// Helpers
// import { WEB_URL } from '@mono/web/lib/constants';

export type AuthBlockType = Omit<PayloadType, 'blockType'>;

function AuthBlock({ wrapper }: AuthBlockType) {
  /*
  const requestHeaders = await headers();
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: requestHeaders });

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
  */

  return (
    <Wrapper {...wrapper}>
      <div>
        <h1>AuthBlock</h1>
        {/* 
          <pre className={styles.pre}>{JSON.stringify(user)}</pre>
          <CustomBlock /> 
        */}
      </div>
    </Wrapper>
  );
}

export default AuthBlock;

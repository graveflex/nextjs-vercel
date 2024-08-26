import configPromise from '@payload-config';
import { RootLayout } from '@payloadcms/next/layouts';
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type React from 'react';
import { importMap } from './admin/importMap.js';

import '@payloadcms/next/css';
import './custom.scss';

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout config={configPromise} importMap={importMap}>
    {children}
  </RootLayout>
);

export default Layout;

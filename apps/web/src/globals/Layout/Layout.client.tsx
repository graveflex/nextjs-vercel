import type { Nav as NavT } from '@mono/types/payload-types';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/web/components/Header';
import React from 'react';
import type { PropsWithChildren } from 'react';

export interface LayoutType extends PropsWithChildren<NavT> {}

function Layout({
  children,
  footer,
  showHeader = true
}: LayoutType & { showHeader?: boolean }) {
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      <Footer {...footer?.footerItems} />
    </>
  );
}

export default Layout;

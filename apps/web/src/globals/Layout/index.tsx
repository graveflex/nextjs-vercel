'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { expandedDoc } from '@web/lib/isExpandedDoc';
import type {
  Image as ImageT,
  MenuItems,
  Nav
} from '@web/payload/payload-types';

const Header = styled.header`
  padding: 1.625rem 2rem;
  height: 96px;
  border: red solid 1px;
  display: flex;
  justify-content: space-between;
`;
const Footer = styled.footer``;

const LogoWrapper = styled.div`
  width: 200px;
  position: relative;
  height: 100%;
`;
const Logo = styled(Image)``;

export type LayoutType = PropsWithChildren<Nav>;

function Menu(menuItems: MenuItems | undefined) {
  if (!menuItems) {
    return null;
  }
  return (
    <nav>
      {menuItems.map(({ label, slug, type, id }) => (
        <Link href={slug} key={id}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

function Layout({ children, header, footer }: LayoutType) {
  const logo = expandedDoc<ImageT>(header?.logo);
  const HeaderMenu = useMemo(() => Menu(header?.main), [header?.main]);
  return (
    <>
      <Header>
        {logo?.url && (
          <LogoWrapper>
            <Image src={logo?.url} alt={logo?.alt || 'Logo'} fill />
          </LogoWrapper>
        )}
        {HeaderMenu}
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

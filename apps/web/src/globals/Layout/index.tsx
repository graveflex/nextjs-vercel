'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
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

const Logo = styled(ResponsivePayloadImage)`
  width: 200px;
`;

const MenuLink = styled(Link)``;

export type LayoutType = PropsWithChildren<Nav>;

function Menu(menuItems: MenuItems | undefined) {
  if (!menuItems?.length) {
    return null;
  }
  return (
    <nav>
      {menuItems?.map(({ label, slug, type, id }) => (
        <MenuLink href={slug} key={id} className={type || 'link'}>
          {label}
        </MenuLink>
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
        {logo?.url && <Logo image={logo} imageProps={{ loading: 'eager' }} />}
        {HeaderMenu}
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

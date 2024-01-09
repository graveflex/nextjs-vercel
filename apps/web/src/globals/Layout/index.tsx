'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import ResponsivePayloadImage from '@web/components/ResponsivePayloadImage';
import expandedDoc from '@web/lib/isExpandedDoc';
import type {
  Image as ImageT,
  MenuItems,
  Nav as NavT
} from '@web/payload/payload-types';

const Header = styled.header`
  padding: 1.625rem 2rem;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.footer`
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Logo = styled(ResponsivePayloadImage)`
  width: 200px;
  height: 100%;
`;

const MenuLink = styled(Link)`
  ${({ theme: { box } }) => box.t('menuLink')};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }

  &.button {
    ${({ theme }) => css`
      color: ${theme.colors.black};
      background: ${theme.themeColors.primary};
      padding: 0.625rem 1.5rem;
      border-radius: 62px;
    `};
  }
`;

const Copyright = styled.p`
  opacity: 66%;
  ${({ theme: { box } }) => box.t('menuLink')};
`;

function Menu(menuItems: MenuItems | undefined) {
  if (!menuItems?.length) {
    return null;
  }
  return (
    <Nav>
      {menuItems?.map(({ label, slug, type, id }) => (
        <MenuLink href={slug} key={id} className={type || 'link'}>
          {label}
        </MenuLink>
      ))}
    </Nav>
  );
}

export type LayoutType = PropsWithChildren<NavT>;

function Layout({ children, header, footer }: LayoutType) {
  // eslint-disable-next-line no-console
  console.log('@--> header', header);
  // eslint-disable-next-line no-console
  console.log('@--> footer', footer);
  const logo = expandedDoc<ImageT>(header?.logo);
  const HeaderMenu = useMemo(() => Menu(header?.main), [header?.main]);
  const FooterMenu = useMemo(
    () => Menu(footer?.secondary),
    [footer?.secondary]
  );
  return (
    <>
      <Header>
        {logo?.url && <Logo image={logo} imageProps={{ loading: 'eager' }} />}
        {HeaderMenu}
      </Header>
      <main>{children}</main>
      <Footer>
        {FooterMenu}
        {footer?.copyright && <Copyright>{footer.copyright}</Copyright>}
      </Footer>
    </>
  );
}

export default Layout;

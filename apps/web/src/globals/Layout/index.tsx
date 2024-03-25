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
  padding: 1.625rem 1rem;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { mq } }) => mq.md`
    padding: 1.625rem 2rem;
  `};
`;

const Footer = styled.footer`
  padding: 0.75rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  nav {
    flex-direction: column;
  }

  ${({ theme: { mq } }) => mq.md`
    flex-direction: row;

    nav {
      flex-direction: row;
    }
  `};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${({ theme: { mq } }) => mq.md`
    gap: 1.75rem;
  `};
`;

const Logo = styled(ResponsivePayloadImage)`
  width: 0;
  img {
    object-fit: contain;
  }
  ${({ theme: { mq } }) => mq.md`
    display: block;
    width: 200px;
    height: 100%;
  `}
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
  const logo = expandedDoc<ImageT>(header?.logo);
  const HeaderMenu = useMemo(() => Menu(header?.main), [header?.main]);
  const FooterMenu = useMemo(
    () => Menu(footer?.secondary),
    [footer?.secondary]
  );

  const imageProps = {
    fill: true,
    priority: true
  };

  return (
    <>
      <Header>
        {logo?.url && <Logo image={logo} imageProps={imageProps} />}
        {HeaderMenu}
      </Header>
      <main>{children}</main>
      <Footer className="footer">
        {FooterMenu}
        {footer?.copyright && <Copyright>{footer.copyright}</Copyright>}
      </Footer>
    </>
  );
}

export default Layout;

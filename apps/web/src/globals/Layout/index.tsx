'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import Link from 'next/link';
import type * as themeList from '@mono/theme/src/theme';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import type { PayloadImageProps } from '@mono/ui/components/primitives/types/ResponsivePayloadImage';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import type { MenuItems, Nav as NavT } from '@mono/web/payload/payload-types';
import styled, { css } from '@refract-ui/sc';
import s from 'styled-components';

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

const Logo = s(ResponsivePayloadImage)`
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

const MenuLink = styled({ t: 'menuLink' })(Link)`
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }

  &.button {
    ${({ theme }) => css`
      color: ${theme.allColors.fg};
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

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
}

function Layout({ children, header, footer, theme }: LayoutType) {
  const logo = header?.logo as PayloadImageProps;
  const HeaderMenu = useMemo(() => Menu(header?.main), [header?.main]);
  const FooterMenu = useMemo(
    () => Menu(footer?.secondary),
    [footer?.secondary]
  );
  return (
    <MaybeThemed theme={theme}>
      <Header>
        {logo?.url && <Logo {...logo} />}
        {HeaderMenu}
      </Header>
      <main>{children}</main>
      <Footer className="footer">
        {FooterMenu}
        {footer?.copyright && <Copyright>{footer.copyright}</Copyright>}
      </Footer>
    </MaybeThemed>
  );
}

export default Layout;

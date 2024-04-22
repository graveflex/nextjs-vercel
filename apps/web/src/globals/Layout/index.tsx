'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import Link from 'next/link';
import type * as themeList from '@mono/theme/src/theme';
import { containerStyles } from '@mono/theme/src/ThemeProvider';
import type { MenuItems, Nav as NavT } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import styled, { css } from '@refract-ui/sc';
import s from 'styled-components';

const Header = styled.header`
  padding: 0.5rem 1rem;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { mq } }) => mq.md`
    padding: 0.5rem 2rem;
  `};
`;

const Footer = styled.footer`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
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
  width: 40px;
  height: 100%;

  img {
    object-fit: contain;
    object-position: left center;
  }

  ${({ theme: { mq } }) => mq.md`
    display: block;
    width: 200px;
    height: 100%;
  `}
`;

const MenuLink = styled({ t: 'menuLink' })(Link)`
  text-decoration: none;

  ${({ theme: { box } }) => css`
    ${box.c('fg')};

    &:hover,
    &:active,
    &:focus {
      ${box.c('plainHover')};
    }
  `}


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
  const logo = header?.logo;
  const HeaderMenu = useMemo(() => Menu(header?.main), [header?.main]);
  const FooterMenu = useMemo(
    () => Menu(footer?.secondary),
    [footer?.secondary]
  );

  return (
    <MaybeThemed theme={theme} style={containerStyles}>
      <Header>
        <Logo image={logo} />
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

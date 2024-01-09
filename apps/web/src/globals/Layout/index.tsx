'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { css, styled } from 'styled-components';

import Button from 'ui/components/Button';

import type {
  HeaderMenuItem,
  Layout as LayoutType,
  Media
} from '@web/payload/payload-types';
import isExpandedDoc from '../../lib/isExpandedDoc';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem;
  ${({
    theme: {
      mq: { lg }
    }
  }) => lg`
    flex-direction: row;
    gap: unset;
  `}
`;

const Footer = styled.footer`
  ${Header}
`;

const MenuLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const baseMenuItemStyles = css`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
  && {
    font-size: 17px;
    font-style: normal;
    text-decoration: none;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.17px;
    margin: 0;
    padding: 0;
  }
`;

export const MenuLink = styled(Link)`
  ${baseMenuItemStyles}
`;

export const MenuText = styled.p`
  ${baseMenuItemStyles}
`;

function MenuLinks({ links }: { links?: HeaderMenuItem }) {
  return (
    <MenuLinksContainer>
      {links?.map((link) =>
        link?.type === 'button' ? (
          <Button key={`FooterLink-${link?.id}`}>{link?.title}</Button>
        ) : (
          <MenuLink key={`MenuLink-${link?.id}`} href={link?.url}>
            {link?.title}
          </MenuLink>
        )
      )}
    </MenuLinksContainer>
  );
}

function Layout({
  logo,
  footerItems,
  headerItems,
  children
}: PropsWithChildren<LayoutType>) {
  return (
    <>
      <Header>
        {isExpandedDoc<Media>(logo) ? (
          <Image width={193} height={17} src={logo?.url || ''} alt="Logo" />
        ) : (
          <div />
        )}
        <MenuLinks links={headerItems} />
      </Header>
      {children}
      <Footer>
        <MenuLinks links={footerItems} />
        <MenuText>{new Date().getFullYear()} All rights reserved</MenuText>
      </Footer>
    </>
  );
}

export default Layout;

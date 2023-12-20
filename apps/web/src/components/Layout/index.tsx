'use client';

import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { css, styled } from 'styled-components';

import Button from 'ui/components/Button';

import { Navigation } from '@web/payload/payload-types';

export interface LayoutType {
  navigation: Navigation | { error: string };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  ${({
    theme: {
      mq: { lg }
    }
  }) => lg`
    flex-direction: row;
    gap: unset;
  `}
`;

const MenuLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.allColors.plainBg};
  `}
  font-size: 17px;
  font-style: normal;
  text-decoration: none;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.17px;
`;

export type MenuLinksType = {
  links:
    | {
        title: string;
        url: string;
        type?: 'button' | 'link' | null | undefined;
        id?: string | null | undefined;
      }[]
    | undefined
    | null;
};

function MenuLinks({ links }: MenuLinksType) {
  return (
    <MenuLinksContainer>
      {links?.map((link) =>
        link?.type === 'button' ? (
          <Button key={`FooterLink-${link?.title}`}>{link?.title}</Button>
        ) : (
          <MenuLink href={link?.url} key="MenuLink">
            {link?.title}
          </MenuLink>
        )
      )}
    </MenuLinksContainer>
  );
}

function Layout({ navigation, children }: PropsWithChildren<LayoutType>) {
  if (navigation && 'error' in navigation) {
    return null;
  }
  return (
    <>
      <Wrapper>
        {typeof navigation?.logo === 'object' && (
          <Image
            width={193}
            height={17}
            src={navigation?.logo?.url as string}
            alt="Logo"
          />
        )}

        <MenuLinks links={navigation?.headerItems || []} />
      </Wrapper>
      {children}
      <Wrapper>
        {navigation?.footerItems?.map((linkSet) => (
          <MenuLinks key={`FooterLinks-${linkSet?.id}`} links={linkSet.links} />
        ))}

        <MenuLink>{new Date().getFullYear()} All rights reserved</MenuLink>
      </Wrapper>
    </>
  );
}

export default Layout;

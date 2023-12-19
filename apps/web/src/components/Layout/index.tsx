// import React from 'react';
// import { type PropsWithChildren } from 'react';

// import Client from '@web/components/Layout/Client';
// import fetchPayloadData from '@web/lib/fetchPayloadData';

// interface ILayout {}

// const Layout = async ({ children }: PropsWithChildren<ILayout>) => {
//   const navigation = await fetchPayloadData((client) =>
//     client.findGlobal({ slug: 'navigation' })
//   );
//   return <Client navigation={navigation}>{children}</Client>;
// };

// export default Layout;

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
  links: {
    title: string;
    url: string;
    type?: 'button' | 'link' | null | undefined;
    id?: string | null | undefined;
  }[];
};

function MenuLinks({ links }: MenuLinksType) {
  return (
    <MenuLinksContainer>
      {links?.map((link) =>
        link?.type === 'button' ? (
          <Button key="MenuLink">{link?.title}</Button>
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
  return (
    <>
      <Wrapper>
        {navigation?.logo && (
          <Image width={193} height={17} src="/public/Logo.png" alt="Logo" />
        )}

        <MenuLinks links={navigation?.headerItems || []} />
      </Wrapper>
      {children}
      <Wrapper>
        {navigation?.footerItems?.map((linkSet) => (
          <MenuLinks key="FooterLink" links={linkSet?.links || []} />
        ))}

        <MenuLink>{new Date().getFullYear()} All rights reserved</MenuLink>
      </Wrapper>
    </>
  );
}

export default Layout;

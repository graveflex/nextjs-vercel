'use client';

import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { css, styled } from 'styled-components';

import Button from 'ui/components/Button';

interface IClient {
  navigation: object;
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

function Client({ navigation, children }: PropsWithChildren<IClient>) {
  const imageSrc: string =
    'https://public-bucket-haseeb-gfx.s3.amazonaws.com/Logo+(1).png';
  return (
    <>
      <Wrapper>
        <Image width={193} height={17} src={imageSrc} alt="Logo" />
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

export default Client;

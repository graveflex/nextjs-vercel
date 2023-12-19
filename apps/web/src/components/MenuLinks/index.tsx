'use client';

import React from 'react';
import { css, styled } from 'styled-components';

import Button from 'ui/components/Button';

const Container = styled.div`
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

// TODO: this is probably not its own styled-components
// and its types should be derived from the payload types

function MenuLinks({ links }: MenuLinksType) {
  return (
    <Container>
      {links?.map((link) =>
        link?.type === 'button' ? (
          <Button key="MenuLink">{link?.title}</Button>
        ) : (
          <MenuLink href={link?.url} key="MenuLink">
            {link?.title}
          </MenuLink>
        )
      )}
    </Container>
  );
}

export default MenuLinks;

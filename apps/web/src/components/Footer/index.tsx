'use client';

import React from 'react';
import { styled } from 'styled-components';

import { type Footer as FooterType } from 'web/src/payload/payload-types';

import MenuLinks, { MenuLink } from '../MenuLinks';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
  ${({
    theme: {
      mq: { md }
    }
  }) => md`
    flex-direction: row;
    gap: unset;
  `}
`;

// TODO: let's initialize the `Layout` using a component
// generator/plop

function Footer({ footerItems }: FooterType) {
  return (
    <Container>
      {footerItems?.map((linkSet) => (
        <MenuLinks key="FooterLink" links={linkSet?.links || []} />
      ))}

      <MenuLink>{new Date().getFullYear()} All rights reserved</MenuLink>
    </Container>
  );
}

export default Footer;

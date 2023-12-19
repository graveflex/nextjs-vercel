'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { type Header as HeaderType } from 'web/src/payload/payload-types';

import MenuLinks from '../MenuLinks';

const Container = styled.div`
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

function Header({ links }: HeaderType) {
  const imageSrc: string =
    'https://public-bucket-haseeb-gfx.s3.amazonaws.com/Logo+(1).png';
  return (
    <Container>
      <Image width={193} height={17} src={imageSrc} alt="Logo" />
      <MenuLinks links={links || []} />
    </Container>
  );
}

export default Header;

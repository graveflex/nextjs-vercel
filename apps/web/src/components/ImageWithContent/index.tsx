'use client';

import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

type Directions = 'right' | 'left';

const Container = styled.div<{ direction: Directions }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    text-align: center;
  }
  ${({
    theme: {
      mq: { lg }
    },
    direction
  }) => lg`
    justify-content: center;
    flex-direction: row;
  align-items: flex-start;
  gap: 84px;
  flex: 1;
  * {
    text-align: left;
  }
  ${
    direction === 'right' &&
    css`
      flex-direction: row-reverse;
    `
  }
    `}
`;

const ContentWrapper = styled.div`
  max-width: 410px;
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 16px;
  }
`;

const Header = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  font-size: 48px;
`;

// TODO: Shouldn't this be derived from the Payload Schema?
export type ImageWithContentType = {
  title: string;
  content: string;
  direction: Directions;
};

function ImageWithContent({ title, content, direction }: ImageWithContentType) {
  return (
    <Container direction={direction}>
      <ContentWrapper>
        <Header>{title}</Header>
        <p>{content}</p>
      </ContentWrapper>

      <ImageWrapper>
        <Image
          width="501"
          height="410"
          alt="Image with content"
          src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </ImageWrapper>
    </Container>
  );
}

export default ImageWithContent;

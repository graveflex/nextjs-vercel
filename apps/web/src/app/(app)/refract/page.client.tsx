'use client';

import styled from '@refract-ui/sc';
import Image from 'next/image';

const Container = styled.div`
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
`;

const H2 = styled.h2`
  font-family: sans-serif;
  color: #444;
`;

const P = styled.p`
  font-family: sans-serif;
  color: #666;
`;

const Img = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #666;
`;

interface StyledPageProps {
  heading: string;
  body?: string;
  imageSrc?: string;
}

export default function StyledPage({ heading, body, imageSrc }: StyledPageProps) {
  return (
    <Container>
      {imageSrc && (<Img
        loading="eager"
        width={500}
        height={500}
        alt="Demo image"
        src={imageSrc}
      />)}
      <H2>{heading}</H2>
      {body && <P>{body}</P>}
    </Container>
  );
}

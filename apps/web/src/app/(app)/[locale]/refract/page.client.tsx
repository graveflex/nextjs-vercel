'use client';

import type { Image as PayloadImage } from '@mono/types/payload-types';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
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

const RespImg = styled(ResponsivePayloadImage)`
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
  payloadImg?: PayloadImage;
}

export default function StyledPage({
  heading,
  body,
  imageSrc,
  payloadImg
}: StyledPageProps) {
  return (
    <Container>
      {payloadImg && (
        <RespImg
          loading="eager"
          image={payloadImg}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 640px"
          alt="Demo image"
          width={500}
          height={500}
        />
      )}
      {imageSrc && (
        <Img
          loading="eager"
          width={500}
          height={500}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 640px"
          alt="Demo image"
          src={imageSrc}
        />
      )}
      <H2>{heading}</H2>
      {body && <P>{body}</P>}
    </Container>
  );
}

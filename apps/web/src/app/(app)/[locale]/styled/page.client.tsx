'use client';

import styled from 'styled-components';

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

interface StyledPageProps {
  heading: string;
  body?: string;
}

export default function StyledPage({ heading, body }: StyledPageProps) {
  return (
    <Container>
      <H2>{heading}</H2>
      {body && <P>{body}</P>}
    </Container>
  );
}

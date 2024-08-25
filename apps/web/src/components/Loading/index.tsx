'use client';

import s from '@refract-ui/sc';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Container = s.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-self: stretch;
  justify-self: stretch;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <Container>
      <RotatingLines />
    </Container>
  );
}

export default Loading;

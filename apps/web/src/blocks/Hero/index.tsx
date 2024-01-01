'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export type HeroType = {
  placeholder?: string;
};

function Hero({ placeholder = 'placeholder' }) {
  return <Container>{placeholder}</Container>;
}

export default Hero;

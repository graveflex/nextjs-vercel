'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export type LayoutType = {
  placeholder?: string;
};

function Layout({ placeholder = 'placeholder' }) {
  return <Container>{placeholder}</Container>;
}

export default Layout;

---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export type <%= name %>Type = {
  placeholder?: string;
};

function <%= name %>({ placeholder = 'placeholder' }) {
  return <Container>{placeholder}</Container>;
}

export default <%= name %>;

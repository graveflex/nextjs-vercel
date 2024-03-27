---
to: <%= app_name %>/<%= path %>/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import styled from '@refract-ui/sc';

const Container = styled.div``;

export type <%= name %>Type = {
  placeholder?: string;
};

function <%= name %>({ placeholder = 'placeholder' }: <%= name %>Type){
  return <Container>{placeholder}</Container>;
}

export default <%= name %>;

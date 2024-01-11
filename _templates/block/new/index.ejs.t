---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import styled from 'styled-components';

import type { <%= name %>T as PayloadType } from '@web/payload/payload-types';

export type <%= name %>Type = Pick<PayloadType, 'title'>;

const Wrapper = styled.section``;

function <%= name %>({ title }: <%= name %>Type) {
  return (
    <Wrapper>
      <h1><%= name %></h1>
      <pre>{JSON.stringify({ title })}</pre>
    </Wrapper>
  );
}

export default <%= name %>;

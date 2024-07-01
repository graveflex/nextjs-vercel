---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import type { <%= name %>T as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import styled from '@refract-ui/sc';

export type <%= name %>Type = Omit<PayloadType, 'blockType'>;

const Section = styled.div``;

function <%= name %>({ title, blockConfig, ...props }: <%= name %>Type) {
  return (
    <Wrapper{...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <Section>
        <h1><%= name %></h1>
        <pre>{JSON.stringify({ title, ...props }, null, 2)}</pre>
      </Section>
    </Wrapper>
  );
}

export default <%= name %>;

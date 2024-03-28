---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import styled from '@refract-ui/sc';

import Wrapper from '@mono/web/components/Wrapper';
import type { <%= name %>T as PayloadType } from '@mono/web/payload/payload-types';

export type <%= name %>Type = Pick<PayloadType, 'title'>;

const Section = styled(Wrapper)``;

function <%= name %>({ title, ...props }: <%= name %>Type) {
  return (
    <Section>
      <h1><%= name %></h1>
      <pre>{JSON.stringify({ title, ...props }, null, 2)}</pre>
    </Section>
  );
}

export default <%= name %>;

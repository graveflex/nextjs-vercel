---
to: <%= app_name %>/<%= path %>/<%= name %>/index.tsx
---
'use client';

import React from 'react';
import styled from 'styled-components';
<%= isPayloadBlock && `import { Page } from '@web/payload/payload-types';` %>

const Container = styled.div``;

<%= isPayloadBlock ? `export type ExtractBlockType<T, BlockType> = T extends { blockType: BlockType }
  ? T
  : never;
export type <%= name %>Type = ExtractBlockType<
  NonNullable<Page['layout']>[number],
  'ImageWithContent'
>;` : `export type <%= name %>Type = {
  placeholder?: string;
};
` %>

function <%= name %>({ placeholder = 'placeholder' }: <%= name %>Type) {
  return <Container>{placeholder}</Container>;
}

export default <%= name %>;

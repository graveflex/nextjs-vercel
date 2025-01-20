---
to: packages/ui/<%= path %>/<%= name %>/index.tsx
---
import React from 'react';

export type <%= name%>Type = {
  placeholder?: string;
};

function <%= name %>({ placeholder = 'placeholder' }) {
  return <div>{placeholder}</div>;
}

export default <%= name %>;

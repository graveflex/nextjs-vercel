---
to: <%= app_name %>/blocks/<%= name %>/index.tsx
---
// Types
import type { <%= name %>T as PayloadType } from '@mono/types/payload-types';

// Libraries
import React from 'react';
import dynamic from 'next/dynamic';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type <%= name %>Type = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const Variants = {
  <%_ for (variant of Array.from({length: variants || 1}, (_, i) => i + 1)) { -%>
  "<%= variant %>": dynamic(() => import('./variations/Variant<%= variant %>'), { ...defaultOpts }),
  <%_ } -%>
};


function <%= name %>({ variant, ...props }: <%= name %>Type) {
  const VariantComponent = Variants[variant];

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent />
    </Wrapper>
  );
}

export default <%= name %>;

import React from 'react';
import dynamic from 'next/dynamic';

import type * as Blocks from '@web/blocks';
import type { Page } from '@web/payload/payload-types';

interface IRenderBlocks {
  blocks: Layout[];
}

export type ExtractArray<A> = A extends (infer T)[] ? T : never;

export type Layout = ExtractArray<Required<Page>['layout']>;

export type Block<T extends string> = Extract<Layout, { blockType: T }>;

function RenderBlocks({ blocks }: IRenderBlocks) {
  return blocks?.map((blockProps: Layout) => {
    const { blockType } = blockProps;

    const BlockComponent = dynamic(() =>
      import(`@web/blocks/${blockType}`).catch(() => {
        return function Component() {
          return <div>Component not found: {blockType}</div>;
        };
      })
    ) as (typeof Blocks)[keyof typeof Blocks];
    return <BlockComponent key={blockType} {...blockProps} />;
  });
}

export default RenderBlocks;

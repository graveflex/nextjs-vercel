import React from 'react';
import dynamic from 'next/dynamic';

import { Layout } from 'ui/types/extract';

import * as Blocks from '@web/components';

interface IRenderBlocks {
  blocks: Layout[];
}

function RenderBlocks({ blocks }: IRenderBlocks) {
  return blocks?.map((blockProps: Layout) => {
    const { blockType } = blockProps;

    const BlockComponent = dynamic(() =>
      import(`@web/components/${blockType}`).catch(() => {
        return function Block() {
          return <div>Component not found: {blockType}</div>;
        };
      })
    ) as (typeof Blocks)[keyof typeof Blocks];

    return <BlockComponent key={blockType} {...blockProps} />;
  });
}

export default RenderBlocks;

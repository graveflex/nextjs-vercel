import React from 'react';
import dynamic from 'next/dynamic';

import { Layout } from 'ui/types/extract';

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
    );

    return (
      <React.Fragment key={blockType}>
        <BlockComponent {...blockProps} />
      </React.Fragment>
    );
  });
}

export default RenderBlocks;

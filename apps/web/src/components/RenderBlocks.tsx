import React from 'react';

// TODO: we don't want to import this since I don't think the code
// splitting works like we're assuming
import * as Blocks from '@web/components/';
// import { Layout } from 'ui/types/extract';

// NOTE: don't we want more than just the `layout` stuff here?
interface IRenderBlocks {
  blocks: any[];
}

// TODO: remove unnecessary div.
function RenderBlocks({ blocks }: IRenderBlocks) {
  return (
    <div className="render-blocks-component">
      {blocks?.map((blockProps: any) => {
        const { blockType } = blockProps;
        const BlockComponent = Blocks[
          blockType
        ] as (typeof Blocks)[keyof typeof Blocks];

        if (BlockComponent) {
          return <BlockComponent key="Block" {...blockProps} />;
        }
        return null;
      })}
    </div>
  );
}

export default RenderBlocks;

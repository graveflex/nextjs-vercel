import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';

import type { Page } from '@web/payload/payload-types';

interface IRenderBlocks {
  blocks: Layout[];
}

export type ExtractArray<A> = A extends (infer T)[] ? T : never;

export type Layout = ExtractArray<Required<Page>['layout']>;

function ComponentNotFound({ blockType }: { blockType: string }) {
  return <div>Component not found: {blockType}</div>;
}

function RenderBlocks({ blocks }: IRenderBlocks) {
  return (
    <div>
      {blocks?.map((blockProps: Layout) => {
        const { blockType } = blockProps;

        const BlockComponent = dynamic(() =>
          import(`@web/blocks/${blockType}`).catch(() => (
            <ComponentNotFound blockType={blockType} />
          ))
        ) as ComponentType<typeof blockProps>;

        return <BlockComponent key={blockType} {...blockProps} />;
      })}
    </div>
  );
}

export default RenderBlocks;

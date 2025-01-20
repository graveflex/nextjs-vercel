import type { MarkdownBlockT } from '@mono/types/payload-types';
import MarkdownBlock from '@mono/web/blocks/MarkdownBlock';
import React from 'react';

export default function NotFoundC({
  markdownData
}: {
  markdownData: MarkdownBlockT;
}) {
  /* Any block can be used to get the types for the blockConfig */
  const blockConfig: MarkdownBlockT['blockConfig'] = {
    contentWidth: 'md'
  };

  return (
    <div>
      <MarkdownBlock blockConfig={blockConfig} {...markdownData} />
    </div>
  );
}

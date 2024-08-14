import type { IframeBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

interface blockProps {
  blockName: string;
  blockConfig: IframeBlockT['blockConfig'];
}

export const iFrameBlockSchema = async ({
  blockConfig,
  blockName
}: blockProps) => {
  return {
    id: '6669d7bd6d58e03f8e7c1078',
    blockType: 'iframeBlock',
    blockName,
    blockConfig,
    title: {
      ...genRichText([
        {
          type: 'heading',
          tag: 'h1',
          text: 'Test iFrame Block'
        }
      ])
    },
    iframe: 'https://www.youtube.com/embed/6JYIGclVQdw'
  } as IframeBlockT;
};

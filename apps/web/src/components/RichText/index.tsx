import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import { cn } from '@mono/web/lib/utils';
import type {
  DefaultNodeTypes,
  SerializedBlockNode
} from '@payloadcms/richtext-lexical';
import {
  type JSXConvertersFunction,
  RichText as LexicalRichText
} from '@payloadcms/richtext-lexical/react';
import React from 'react';
import styles from './RichText.module.css';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

export type RichTextType = {
  data?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  className?: string;
};

function RichText({ className, data }: RichTextType) {
  return (
    data && (
      <div
        className={cn('rich-text-container w-full rich-text-global', className)}
      >
        <LexicalRichText
          data={data}
          className={styles.richtext}
          converters={jsxConverters}
        />
      </div>
    )
  );
}

export default RichText;

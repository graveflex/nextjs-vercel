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

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  eyebrow: ({ node }) => {
    return <span className={cn(styles.eyebrow, 'eyebrow')}>{node?.text}</span>;
  }
});

function RichText({ className, data }: RichTextType) {
  return (
    data && (
      <LexicalRichText
        data={data}
        className={cn(
          'lexical rich-text-container',
          styles.richtext,
          className
        )}
        converters={jsxConverters}
      />
    )
  );
}

export default RichText;

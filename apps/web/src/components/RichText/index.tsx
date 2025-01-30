import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import { cn } from '@mono/web/lib/utils';
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';
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
        className={cn(
          'rich-text-container rich-text-global',
          styles.richtext,
          className
        )}
      >
        <LexicalRichText data={data} className="rich-text" />
      </div>
    )
  );
}

export default RichText;

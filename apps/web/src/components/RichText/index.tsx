import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import {
  type DefaultNodeTypes,
  SerializedBlockNode,
  SerializedHeadingNode,
  SerializedLinkNode,
  SerializedListItemNode,
  SerializedListNode
} from '@payloadcms/richtext-lexical';
import {
  type JSXConvertersFunction,
  RichText as LexicalRichText,
  LinkJSXConverter
} from '@payloadcms/richtext-lexical/react';
import React from 'react';
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
};

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  heading: ({ node }) => {
    switch (node?.tag) {
      case 'h1':
        return (
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h1>
        );
      case 'h2':
        return (
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h2>
        );
      case 'h3':
        return (
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h3>
        );
      case 'h4':
        return (
          <h4 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h4>
        );
      case 'h5':
        return (
          <h5 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h5>
        );
      case 'h6':
        return (
          <h6 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h6>
        );
      default:
        return (
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {node?.children
              ?.map((child) => ('text' in child ? child.text : ''))
              .join('')}
          </h1>
        );
    }
  },
  paragraph: ({ node }) => {
    return (
      <p className="text-base md:text-lg leading-7 [&:not(:first-child)]:mt-6 text-primary-foreground">
        {node?.children
          ?.map((child) => ('text' in child ? child.text : ''))
          .join('')}
      </p>
    );
  }
});

function RichText({ data }: RichTextType) {
  return data && <LexicalRichText data={data} converters={jsxConverters} />;
}

export default RichText;

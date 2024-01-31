/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import type { BaseText } from 'slate';
import { Text } from 'slate';

type ExtendedText = BaseText & {
  bold: true | undefined;
  italic: true | undefined;
  code: true | undefined;
  underline: true | undefined;
  strikethrough: true | undefined;
};

type TextNodeTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'blockquote'
  | 'ul'
  | 'ol'
  | 'li'
  | 'indent';

type TextNode = {
  type?: TextNodeTypes;
  children: (ExtendedText | TextNode | LinkNode)[];
};

type LinkNode = {
  type?: 'link';
  children: (ExtendedText | TextNode)[];
  url?: string;
  newTab?: boolean;
  linkType?: string;
};

export type SerializedText = (ExtendedText | TextNode | LinkNode)[];

const serializeSlateText = (children: SerializedText) => {
  return children?.map((node, i: number) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );
      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }
      if (node.code) {
        text = <code key={i}>{text}</code>;
      }
      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }
      if (node.underline) {
        text = <u key={i}>{text}</u>;
      }
      if (node.strikethrough) {
        text = <s key={i}>{text}</s>;
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    if (node.type === 'link') {
      return (
        <a href={escapeHTML(node.url)} key={i}>
          {serializeSlateText(node.children)}
        </a>
      );
    }

    switch (node.type) {
      case 'h1':
        return <h1 key={i}>{serializeSlateText(node.children)}</h1>;
      case 'h2':
        return <h2 key={i}>{serializeSlateText(node.children)}</h2>;
      case 'h3':
        return <h3 key={i}>{serializeSlateText(node.children)}</h3>;
      case 'h4':
        return <h4 key={i}>{serializeSlateText(node.children)}</h4>;
      case 'h5':
        return <h5 key={i}>{serializeSlateText(node.children)}</h5>;
      case 'h6':
        return <h6 key={i}>{serializeSlateText(node.children)}</h6>;
      case 'blockquote':
        return (
          <blockquote key={i}>{serializeSlateText(node.children)}</blockquote>
        );
      case 'ul':
        return <ul key={i}>{serializeSlateText(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serializeSlateText(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serializeSlateText(node.children)}</li>;
      case 'indent':
        return <span key={i}>{serializeSlateText(node.children)}</span>;
      default:
        return <p key={i}>{serializeSlateText(node.children)}</p>;
    }
  });
};

export default serializeSlateText;

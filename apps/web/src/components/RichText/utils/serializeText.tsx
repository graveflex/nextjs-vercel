import React from 'react';
import get from 'lodash/get';

import type { PayloadRichTextT } from '@web/primitives/primatives';

type TextNodeTypes =
  | 'heading'
  | 'blockquote'
  | 'paragraph'
  | 'list'
  | 'ul'
  | 'ol'
  | 'li'
  | 'listitem'
  | 'code'
  | 'link'
  | 'quote'
  | 'indent';

type BaseText = {
  mode: string;
  text: string;
  format: 0 | 1 | 2 | 3 | 4;
  children: BaseText[];
};

type TextNode = {
  tag?: string;
  type?: TextNodeTypes;
  children?: BaseText[];
};

const serializeText = (content: PayloadRichTextT) => {
  const root = get(content, 'content.root');

  if (!root || !root.children) {
    return null;
  }

  const renderText = (text: BaseText, index: number) => {
    if (text.format === 1) {
      return <strong key={index}>{text.text}</strong>;
    }
    if (text.format === 2) {
      return <em key={index}>{text.text}</em>;
    }
    if (text.format === 3) {
      return <u key={index}>{text.text}</u>;
    }
    if (text.format === 4) {
      return <s key={index}>{text.text}</s>;
    }
    return <span key={index}>{text.text}</span>;
  };

  const renderNode = (node: TextNode, index: number) => {
    if (!node.children) {
      return null;
    }
    switch (node.type) {
      case 'heading':
        return React.createElement(
          `${node.tag}`,
          { key: index },
          node.children.map((text, i) => renderText(text, i))
        );
      case 'paragraph':
        return (
          <p key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </p>
        );
      case 'list':
        return node.tag === 'ol' ? (
          <ol key={index}>
            {node.children.map((listItem, i) => renderNode(listItem, i))}
          </ol>
        ) : (
          <ul key={index}>
            {node.children.map((listItem, i) => renderNode(listItem, i))}
          </ul>
        );
      case 'listitem':
        return (
          <li key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </li>
        );
      case 'link':
        return (
          <a key={index} href={node.tag}>
            {node.children.map((text, i) => renderText(text, i))}
          </a>
        );
      case 'quote':
        return (
          <blockquote key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return root.children.map((node, index) =>
    renderNode(node as TextNode, index)
  );
};

export default serializeText;

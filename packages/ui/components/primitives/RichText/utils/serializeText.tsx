import React from 'react';

import type {
  PayloadRichTextProps,
  SerializedLexicalNode
} from '../../../../primitives/PayloadRichText';
import type { PayloadImageProps } from '../../../../primitives/ResponsivePayloadImage';
import ResponsivePayloadImage from '../../ResponsivePayloadImage';

const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 3;
const IS_UNDERLINE = 4;
const IS_CODE = 5;
const IS_SUBSCRIPT = 6;
const IS_SUPERSCRIPT = 7;
const IS_HIGHLIGHT = 8;

function serializeText(content: PayloadRichTextProps) {
  const root = content?.content?.root ?? {};

  if (!root || !root.children) {
    return null;
  }

  const renderText = (text: SerializedLexicalNode, index: number) => {
    if (text.format === IS_BOLD) {
      return <strong key={index}>{text.text}</strong>;
    }
    if (text.format === IS_ITALIC) {
      return <em key={index}>{text.text}</em>;
    }
    if (text.format === IS_STRIKETHROUGH) {
      return <s key={index}>{text.text}</s>;
    }
    if (text.format === IS_UNDERLINE) {
      return <u key={index}>{text.text}</u>;
    }
    if (text.format === IS_CODE) {
      return <code key={index}>{text.text}</code>;
    }
    if (text.format === IS_SUBSCRIPT) {
      return <sub key={index}>{text.text}</sub>;
    }
    if (text.format === IS_SUPERSCRIPT) {
      return <sup key={index}>{text.text}</sup>;
    }
    if (text.format === IS_HIGHLIGHT) {
      return <mark key={index}>{text.text}</mark>;
    }
    return <span key={index}>{text.text}</span>;
  };

  const renderNode = (node: SerializedLexicalNode, index: number) => {
    switch (node.type) {
      case 'heading':
        if (!node?.children) {
          return null;
        }
        return React.createElement(
          `${node?.tag}`,
          { key: index },
          node.children.map((text, i) => renderText(text, i))
        );
      case 'paragraph':
        if (!node?.children) {
          return null;
        }
        return (
          <p key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </p>
        );
      case 'list':
        if (!node?.children) {
          return null;
        }
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
        if (!node?.children) {
          return null;
        }
        return (
          <li key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </li>
        );
      case 'link':
        if (!node?.children) {
          return null;
        }
        return (
          <a key={index} href={node.tag}>
            {node.children.map((text, i) => renderText(text, i))}
          </a>
        );
      case 'quote':
        if (!node?.children) {
          return null;
        }
        return (
          <blockquote key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </blockquote>
        );
      case 'upload':
        if (node?.value && typeof node?.value !== 'string') {
          const img = {
            ...node.value
          } as PayloadImageProps;

          return <ResponsivePayloadImage key={index} {...img} />;
        }
        return null;
      default:
        return null;
    }
  };

  return root.children.map((node: SerializedLexicalNode, index: number) =>
    renderNode(node, index)
  );
}

export default serializeText;

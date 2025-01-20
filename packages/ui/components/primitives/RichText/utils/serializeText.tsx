import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import React from 'react';

import type { PayloadRichTextProps, SerializedPayloadNode } from '..';
import ResponsivePayloadImage from '../../ResponsivePayloadImage';

const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 4;
const IS_UNDERLINE = 8;
const IS_CODE = 16;
const IS_SUBSCRIPT = 32;
const IS_SUPERSCRIPT = 64;

function serializeText(content: PayloadRichTextProps) {
  const { root } = content ?? {};
  if (!root || !root.children) {
    return null;
  }

  function renderText(text: SerializedPayloadNode, index: number) {
    let element: React.ReactNode = text.text;
    if (typeof text.format === 'number') {
      if (text.format === undefined) {
        return null;
      }
      if (text.format & IS_BOLD) {
        element = <strong key={`bold-${index}`}>{element}</strong>;
      }
      if (text.format & IS_ITALIC) {
        element = <em key={`italic-${index}`}>{element}</em>;
      }
      if (text.format & IS_STRIKETHROUGH) {
        element = <s key={`strikethrough-${index}`}>{element}</s>;
      }
      if (text.format & IS_UNDERLINE) {
        element = <u key={`underline-${index}`}>{element}</u>;
      }
      if (text.format & IS_CODE) {
        element = <code key={`code-${index}`}>{element}</code>;
      }
      if (text.format & IS_SUBSCRIPT) {
        element = <sub key={`sub-${index}`}>{element}</sub>;
      }
      if (text.format & IS_SUPERSCRIPT) {
        element = <sup key={`sup-${index}`}>{element}</sup>;
      }
    }
    if (typeof text.format !== 'number') {
      if (text.type === 'link') {
        const { fields } = text;
        const type = fields?.type;
        switch (type) {
          case 'internal':
            element = (
              <a
                href={fields?.internalUrl?.slug}
                target={fields?.newTab ? '_blank' : ''}
                key={`link-${index}`}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
            break;
          case 'external':
            element = (
              <a
                href={fields?.externalUrl}
                target={fields?.newTab ? '_blank' : ''}
                key={`link-${index}`}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
            break;
          case 'email':
            element = (
              <a
                href={`mailto:${fields?.emailUrl}`}
                key={`link-${index}`}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
            break;
          case 'phone':
            element = (
              <a
                href={`tel:${fields?.phoneUrl}`}
                key={`link-${index}`}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
            break;
          case 'file':
            element = (
              <a
                href={fields?.file?.url}
                key={`link-${index}`}
                target={fields?.newTab ? '_blank' : ''}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
            break;
          default:
            element = (
              <a
                href={fields?.internalUrl?.slug}
                key={`link-${index}`}
                rel="noreferrer"
              >
                {text?.children?.[0]?.text}
              </a>
            );
        }
      }
    }
    return element;
  }

  function renderNode(node: SerializedPayloadNode, index: number) {
    switch (node.type) {
      case 'heading':
        if (!node?.children) {
          return null;
        }
        if (node?.format === 'center') {
          return React.createElement(
            `${node?.tag}`,
            { key: index, style: { textAlign: 'center' } },
            node.children.map((text, i) => renderText(text, i))
          );
        }
        if (node?.format === 'right') {
          return React.createElement(
            `${node?.tag}`,
            { key: index, style: { textAlign: 'right' } },
            node.children.map((text, i) => renderText(text, i))
          );
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
        if (node?.format === 'center') {
          return (
            <p key={index} style={{ textAlign: 'center' }}>
              {node.children.map((text, i) => renderText(text, i))}
            </p>
          );
        }
        if (node?.format === 'right') {
          return (
            <p key={index} style={{ textAlign: 'right' }}>
              {node.children.map((text, i) => renderText(text, i))}
            </p>
          );
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
      case 'quote':
        if (!node?.children) {
          return null;
        }
        return (
          <blockquote key={index}>
            {node.children.map((text, i) => renderText(text, i))}
          </blockquote>
        );
      case 'horizontalrule':
        return (
          <React.Fragment key={index}>
            <br />
          </React.Fragment>
        );
      case 'upload':
        if (
          node?.value &&
          typeof node.value === 'object' &&
          node.value !== null &&
          'id' in node.value &&
          typeof node.value.id === 'number' &&
          'updatedAt' in node.value &&
          typeof node.value.updatedAt === 'string' &&
          'createdAt' in node.value &&
          typeof node.value.createdAt === 'string' &&
          'width' in node.value &&
          typeof node.value.width === 'number' &&
          'height' in node.value &&
          typeof node.value.height === 'number' &&
          'sizes' in node.value &&
          typeof node.value.sizes === 'object'
        ) {
          const img: PayloadImageProps = {
            ...node.value,
            id: node.value.id,
            updatedAt: node.value.updatedAt,
            createdAt: node.value.createdAt,
            width: node.value.width,
            height: node.value.height,
            sizes: node.value.sizes
          };
          return (
            <ResponsivePayloadImage key={index} image={img} sizes="100%" />
          );
        }
        return null;
      default:
        return null;
    }
  }

  return root.children.map((node: SerializedPayloadNode, index: number) =>
    renderNode(node, index)
  );
}

export default serializeText;

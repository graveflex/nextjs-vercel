'use client';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext.js';
import type { PluginComponent } from '@payloadcms/richtext-lexical';
import {
  $createTextNode,
  $getSelection,
  $insertNodes,
  $isRangeSelection,
  COMMAND_PRIORITY_NORMAL
} from '@payloadcms/richtext-lexical/lexical';
import { $setBlocksType } from '@payloadcms/richtext-lexical/lexical/selection';
import { mergeRegister } from '@payloadcms/richtext-lexical/lexical/utils';

import { useEffect } from 'react';

import {
  $createEyebrowNode,
  $isEyebrowNode,
  INSERT_INLINE_EYEBROW_COMMAND
} from '../eyebrow/EyebrowNode';

export const EyebrowPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregisterCommand = editor.registerCommand(
      INSERT_INLINE_EYEBROW_COMMAND,
      () => {
        editor.update(() => {
          const selection = $getSelection();

          // Updates the DOM with the new Eyebrow node
          // and also updates the RichText state:
          if ($isRangeSelection(selection)) {
            const nodes = selection.getNodes();
            const selectedText = selection.getTextContent();
            const eyebrowNode = $createEyebrowNode(selectedText);

            if (nodes.some((node) => $isEyebrowNode(node))) {
              nodes.forEach((node) => {
                const text = node.getTextContent();
                if ($isEyebrowNode(node)) {
                  if (text === selectedText) {
                    node.replace($createTextNode(selectedText));
                  } else {
                    const newNode = $createTextNode(
                      `${text.replace(selectedText, '')}`
                    );
                    node.replace(newNode);
                  }
                }
              });
            } else {
              $insertNodes([eyebrowNode]);
            }
          }
        });

        return true;
      },
      COMMAND_PRIORITY_NORMAL
    );

    return () => {
      unregisterCommand();
    };
  }, [editor]);

  return null;
};

'use client';

import {
  createClientFeature,
  toolbarFormatGroupWithItems
} from '@payloadcms/richtext-lexical/client';

import type { ToolbarGroup } from '@payloadcms/richtext-lexical';

import { EyebrowPlugin } from '../plugins';
import {
  $isEyebrowNode,
  EyebrowNode,
  INSERT_INLINE_EYEBROW_COMMAND
} from './EyebrowNode';
import { EyebrowIcon } from './icons/Eyebrow';

import {
  $getSelection,
  $isRangeSelection
} from '@payloadcms/richtext-lexical/lexical';

const toolbarGroups: ToolbarGroup[] = [
  toolbarFormatGroupWithItems([
    {
      ChildComponent: EyebrowIcon,
      isActive: ({ editor }) => {
        const isActive = editor.getEditorState().read(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const nodes = selection.getNodes();

            return nodes.some((node) => $isEyebrowNode(node));
          }
          return false;
        });
        return isActive;
      },
      key: 'eyebrow',
      onSelect: ({ editor }) => {
        editor.dispatchCommand(INSERT_INLINE_EYEBROW_COMMAND, undefined);
      },
      order: 7
    }
  ])
];

export const EyebrowFeatureClient = createClientFeature({
  plugins: [
    {
      Component: EyebrowPlugin,
      position: 'normal'
    }
  ],
  nodes: [EyebrowNode],
  toolbarFixed: {
    groups: toolbarGroups
  },
  toolbarInline: {
    groups: toolbarGroups
  }
});

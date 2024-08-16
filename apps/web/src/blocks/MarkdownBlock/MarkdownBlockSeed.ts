import { faker } from '@faker-js/faker';
import type { MarkdownBlockT } from '@mono/types/payload-types';
import genRichText from '@mono/ui/utils/genRichText';

export const markdownBlockSchema = {
  id: '6669d7bd6d58e03f8e7c1077',
  blockName: 'Markdown Hero Block',
  blockType: 'markdownBlock',
  content: {
    ...genRichText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Welcome to the Kitchen Sink (h1)'
      },
      {
        type: 'paragraph',
        text: faker.lorem.sentence()
      },
      {
        type: 'heading',
        tag: 'h2',
        text: 'Welcome to the Kitchen Sink (h2)'
      },
      {
        type: 'heading',
        tag: 'h3',
        format: 'center',
        text: 'Welcome to the Kitchen Sink (h3 - center)'
      },
      {
        type: 'heading',
        tag: 'h4',
        format: 'right',
        text: 'Welcome to the Kitchen Sink (h4 - right)'
      },
      {
        type: 'heading',
        tag: 'h5',
        format: 'strikethrough',
        text: 'Welcome to the Kitchen Sink (h5 - strikethrough)'
      },
      {
        type: 'heading',
        tag: 'h6',
        text: 'Welcome to the Kitchen Sink (h6)'
      },
      {
        type: 'paragraph',
        format: 'bold',
        text: faker.lorem.sentence()
      },
      {
        type: 'paragraph',
        format: 'italic',
        text: faker.lorem.sentence()
      },
      {
        type: 'paragraph',
        format: 'underline',
        text: faker.lorem.sentence()
      }
    ])
  },
  maxWidth: null
} as MarkdownBlockT;

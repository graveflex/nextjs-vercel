import type { Block } from 'payload';

export const Embed: Block = {
  slug: 'embed',
  fields: [
    {
      type: 'text',
      name: 'embedUrl',
      required: true
    },
    {
      type: 'text',
      name: 'embedTitle',
      required: false
    }
  ]
};

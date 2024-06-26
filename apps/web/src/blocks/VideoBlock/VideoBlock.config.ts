import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload/types';

const VideoBlock: Block = {
  slug: 'videoBlock',
  interfaceName: 'VideoBlockT',
  fields: [
    BlockConfig(),
    {
      name: 'video',
      label: 'Video',
      type: 'upload',
      relationTo: 'videos',
      required: false
    },
    {
      name: 'caption',
      label: 'Video Caption',
      type: 'text',
      admin: {
        description: 'Optional caption will display below the video'
      }
    }
  ]
};

export default VideoBlock;

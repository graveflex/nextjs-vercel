import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

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
      name: 'videoURL',
      label: 'Video Static URL',
      type: 'text',
      admin: {
        description:
          'A direct link to a video file, to be used for videos larger than 4.5MB'
      }
    },
    {
      name: 'embedURL',
      label: 'Embed URL',
      type: 'text',
      admin: {
        description: 'A URL from a video hosting service like YouTube or Vimeo'
      }
    },
    {
      name: 'caption',
      label: 'Video Caption',
      type: 'text',
      admin: {
        description: 'Optional caption will display below the video'
      }
    },
    {
      type: 'checkbox',
      name: 'fullBleedMobile',
      label: 'Full Bleed Mobile',
      defaultValue: false,
      admin: {
        description:
          'Makes video taller & overflow off page on mobile. Also hides video controls.'
      }
    }
  ]
};

export default VideoBlock;

import type { Meta, StoryObj } from '@storybook/react';

import type { VideoProps } from '.';
import Video from '.';

const meta: Meta<VideoProps> = {
  title: 'ui/Video',
  component: Video,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<VideoProps>;

export const Defaults: Story = {
  args: {
    video: {
      id: 1,
      updatedAt: '2021-09-01T00:00:00.000Z',
      createdAt: '2021-09-01T00:00:00.000Z',
      url: 'https://dn720409.ca.archive.org/0/items/tv-static-1080hd-60fps/tv%20static%201080hd%2060fps.mp4',
      mimeType: 'video/mp4',
      title: 'Video Title'
    }
  }
};

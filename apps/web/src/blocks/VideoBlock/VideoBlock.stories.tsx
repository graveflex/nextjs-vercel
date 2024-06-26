import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { VideoBlockType } from '.';
import VideoBlock from '.';

const meta: Meta<VideoBlockType> = {
  title: 'blocks/VideoBlock',
  component: VideoBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<VideoBlockType>;

export const Defaults: Story = {
  args: {
    video: {
      id: 1,
      updatedAt: '2021-09-01T00:00:00.000Z',
      createdAt: '2021-09-01T00:00:00.000Z',
      url: 'https://youtu.be/RWbgBH3tpso?si=af449Pw6n7zPb1u3',
      mimeType: 'video/mp4',
      title: 'Video Title'
    }
  }
};

export const WithCaption: Story = {
  args: {
    video: {
      id: 1,
      updatedAt: '2021-09-01T00:00:00.000Z',
      createdAt: '2021-09-01T00:00:00.000Z',
      url: 'https://youtu.be/RWbgBH3tpso?si=af449Pw6n7zPb1u3',
      mimeType: 'video/mp4',
      title: 'Video Title'
    },
    caption: faker.lorem.sentence()
  }
};

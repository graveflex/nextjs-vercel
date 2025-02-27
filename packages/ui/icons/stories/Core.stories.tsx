import type { StoryObj } from '@storybook/react';
import type React from 'react';

import coreIcons from '../core';

import IconStoryWrapper from './util/IconStoryWrapper';

type T = typeof IconStoryWrapper;

interface Meta {
  title: string;
  component: React.FC<T>;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'icons/Core',
  component: (props) => (
    <IconStoryWrapper icons={coreIcons} group="core" {...props} />
  )
};

export default meta;
type Story = StoryObj<T>;

export const Defaults: Story = {
  args: {
    color: '#131923',
    size: '25'
  },
  async play({ mount }) {
    await mount();
  }
};

export const Medium: Story = {
  args: {
    ...Defaults.args,
    size: '30'
  },
  async play({ mount }) {
    await mount();
  }
};

export const Large: Story = {
  args: {
    ...Defaults.args,
    size: '35'
  },
  async play({ mount }) {
    await mount();
  }
};

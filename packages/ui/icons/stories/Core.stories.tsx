import React from 'react';
import type { StoryObj } from '@storybook/react';

import coreIcons from '../core/index';

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
  }
};

export const Medium: Story = {
  args: {
    ...Defaults.args,
    size: '30'
  }
};

export const Large: Story = {
  args: {
    ...Defaults.args,
    size: '35'
  }
};

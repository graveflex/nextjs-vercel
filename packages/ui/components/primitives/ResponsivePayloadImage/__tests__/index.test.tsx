import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../ResponsivePayloadImage.stories';

const { Defaults, NoSizes, NoSizesNoAlt, NoAlt, Null } = composeStories(
  stories,
  projectAnnotations
);

describe('ResponsivePayloadImage', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('returns default url if no `sizes`', () => {
    render(<NoSizes />);
    render(<NoSizesNoAlt />);
  });

  it('returns null if missing alt', () => {
    render(<NoAlt />);
  });

  it('returns null and throws console if no sizes or url', () => {
    render(<Null />);
  });
});

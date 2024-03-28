import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../HeroBlock.stories';

const { Defaults, MissingProps } = composeStories(stories, projectAnnotations);

describe('HeroBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('component mounts missing optional props', () => {
    render(<MissingProps />);
  });
});

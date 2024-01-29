import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

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

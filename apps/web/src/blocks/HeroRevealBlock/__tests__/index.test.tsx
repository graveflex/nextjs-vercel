import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../HeroRevealBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('HeroRevealBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

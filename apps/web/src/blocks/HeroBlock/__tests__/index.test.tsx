import projectAnnotations from '@mono/web/lib/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../HeroBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('HeroBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

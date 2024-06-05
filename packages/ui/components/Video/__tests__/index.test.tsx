import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../Video.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Video', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

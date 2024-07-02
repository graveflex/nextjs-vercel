import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../FormBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('FormBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../IconGridBlock.stories';

const { HorizontalPictogram } = composeStories(stories, projectAnnotations);

describe('IconGridBlock', () => {
  it('component mounts', () => {
    render(<HorizontalPictogram />);
  });
});

import projectAnnotations from '@mono/web/lib/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../IconGridBlock.stories';

const { HorizontalPictogram } = composeStories(stories, projectAnnotations);

describe('IconGridBlock', () => {
  it('component mounts', () => {
    render(<HorizontalPictogram />);
  });
});

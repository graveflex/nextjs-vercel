import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../RenderIcon.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('RenderIcon', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

import React from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import projectAnnotations from '../../utils/testSetup';
import * as stories from '../stories/Core.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Pagination', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

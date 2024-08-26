import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import projectAnnotations from '../../utils/testSetup';
import * as stories from '../stories/Core.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Icons: ', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

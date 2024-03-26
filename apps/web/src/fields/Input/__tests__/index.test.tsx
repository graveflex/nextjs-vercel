import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from '../Input.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Input', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../Button.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Button', () => {
  it('Component mounts', () => {
    render(<Defaults />);
  });
});

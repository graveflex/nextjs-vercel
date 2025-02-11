import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../AuthBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('AuthBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../PayloadDate.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('PayloadDate', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

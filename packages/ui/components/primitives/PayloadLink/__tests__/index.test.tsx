import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../PayloadLink.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('PayloadLink', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

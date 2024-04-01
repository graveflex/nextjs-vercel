import React from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import projectAnnotations from '@ui/utils/testSetup';
import * as stories from '../PayloadLink.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('PayloadLink', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

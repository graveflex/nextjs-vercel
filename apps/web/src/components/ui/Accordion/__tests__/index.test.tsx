import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../accordion.stories';

const { Default } = composeStories(stories, projectAnnotations);

describe('Accordion', () => {
  it('component mounts', () => {
    render(<Default />);
  });
});

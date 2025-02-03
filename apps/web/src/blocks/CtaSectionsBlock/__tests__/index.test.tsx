import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../CtaSectionsBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('CtaSectionsBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

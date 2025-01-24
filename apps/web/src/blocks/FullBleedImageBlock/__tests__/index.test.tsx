import projectAnnotations from '@mono/web/lib/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../FullBleedImageBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('FullBleedImageBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from '../RichText.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('RichText', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

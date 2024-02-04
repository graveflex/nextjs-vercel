import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../Wrapper.stories';

const { Defaults, BlockConfig } = composeStories(stories, projectAnnotations);

describe('Wrapper', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('component mounts with optional blockConfig', () => {
    render(<BlockConfig />);
  });
});

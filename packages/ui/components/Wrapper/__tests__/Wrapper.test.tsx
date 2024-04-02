import React from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import projectAnnotations from '../../../utils/testSetup';
import * as stories from '../Wrapper.stories';

const {
  CenterSmContent,
  CenterXxlContent,
  MaxContent,
  MaxContentNoGutter,
  BackgroundImage
} = composeStories(stories, projectAnnotations);

describe('Wrapper', () => {
  it('center sm content', () => {
    render(<CenterSmContent />);
  });

  it('center xxl content', () => {
    render(<CenterXxlContent />);
  });

  it('max content', () => {
    render(<MaxContent />);
  });

  it('max content no gutter', () => {
    render(<MaxContentNoGutter />);
  });

  it('background image', () => {
    render(<BackgroundImage />);
  });
});

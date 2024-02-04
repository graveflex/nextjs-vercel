import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../RichText.stories';

const { Defaults, NoChildren } = composeStories(stories, projectAnnotations);

describe('RichText', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('component returns null on empty arrays', () => {
    render(<NoChildren />);
  });
});

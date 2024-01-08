import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../Layout.stories';

const { Defaults, MissingMenu } = composeStories(stories, projectAnnotations);

describe('Layout', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('component mounts without menus', () => {
    render(<MissingMenu />);
  });
});

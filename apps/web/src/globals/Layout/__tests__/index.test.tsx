import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

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

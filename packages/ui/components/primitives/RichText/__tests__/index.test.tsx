import React from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import projectAnnotations from '../../../../utils/testSetup';
import * as stories from '../RichText.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('RichText', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

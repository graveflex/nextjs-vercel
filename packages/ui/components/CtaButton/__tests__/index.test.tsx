import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../CtaButton.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('CtaButton', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

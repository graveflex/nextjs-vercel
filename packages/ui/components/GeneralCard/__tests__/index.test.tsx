import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../GeneralCard.stories';

const { BasicCard } = composeStories(stories, projectAnnotations);

describe('BasicCard', () => {
  it('component mounts', () => {
    render(<BasicCard />);
  });
});

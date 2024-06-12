import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../GeneralCard.stories';

const { StoriesCard } = composeStories(stories, projectAnnotations);

describe('GeneralCard', () => {
  it('component mounts', () => {
    render(<StoriesCard />);
  });
});

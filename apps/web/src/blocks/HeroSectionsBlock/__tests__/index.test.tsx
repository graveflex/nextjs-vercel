import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../HeroSectionsBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('HeroSectionsBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

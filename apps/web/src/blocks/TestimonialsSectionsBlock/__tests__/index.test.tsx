import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../TestimonialsSectionsBlock.stories';

const { Variant1 } = composeStories(stories, projectAnnotations);

describe('TestimonialsSectionsBlock', () => {
  it('component mounts', () => {
    render(<Variant1 />);
  });
});

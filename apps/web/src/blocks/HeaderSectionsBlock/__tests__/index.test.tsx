import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../HeaderSectionsBlock.stories';

const { Variant1 } = composeStories(stories, projectAnnotations);

describe('HeaderSectionsBlock', () => {
  it('component mounts', () => {
    render(<Variant1 />);
  });
});

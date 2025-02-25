import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from '../ContactSectionsBlock.stories';

const { Variant1 } = composeStories(stories, projectAnnotations);

describe('ContactSectionsBlock', () => {
  it('component mounts', () => {
    render(<Variant1 />);
  });
});

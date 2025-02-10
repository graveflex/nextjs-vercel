---
to: <%= app_name %>/blocks/<%= name %>/__tests__/index.test.tsx
---
import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../<%= name %>.stories';

const { Variant1 } = composeStories(stories, projectAnnotations);

describe('<%= name %>', () => {
  it('component mounts', () => {
    render(<Variant1 />);
  });
});

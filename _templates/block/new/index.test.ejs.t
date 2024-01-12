---
to: <%= app_name %>/blocks/<%= name %>/__tests__/index.test.tsx
---
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../<%= name %>.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('<%= name %>', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

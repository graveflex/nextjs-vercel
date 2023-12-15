---
to: <%= app_name %>/<%= path %>/<%= name %>/__tests__/index.test.tsx
---
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import projectAnnotations from '<%= app_name === `apps/web/src` ? `ui` : `@ui` %>/utils/testSetup';
import * as stories from '../<%= name %>.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('<%= name %>', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
});

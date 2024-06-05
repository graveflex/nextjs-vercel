import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from '../Button.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Button', () => {
  it('Component mounts', () => {
    render(<Defaults />);
    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.type).toEqual('button');
  });
});

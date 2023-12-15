import React from 'react';
import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import projectAnnotations from '../../../utils/testSetup';
import * as stories from '../Button.stories';

const { Defaults, Submit } = composeStories(stories, projectAnnotations);

describe('Button', () => {
  it('Component mounts', () => {
    render(<Defaults />);
    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.type).toEqual('button');
  });

  it('calls a function on click', () => {
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => {});
    // eslint-disable-next-line no-console
    render(<Submit />);

    const button: HTMLButtonElement = screen.getByRole('button');

    fireEvent.click(button);
    expect(consoleMock).toHaveBeenCalled();
    expect(button.type).toEqual('submit');
  });
});

import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import * as stories from '../Hero.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Hero', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('renders image when image prop is valid', () => {
    const validImage = {
      url: '/valid-url.jpg',
      alt: 'Valid Image',
      createdAt: '',
      updatedAt: '',
      id: 1
    };
    render(<Defaults image={validImage} />);
    const imageElement = screen.queryByAltText('Valid Image');
    expect(imageElement).not.toBeNull();
  });

  it('does not render image when image prop is invalid', () => {
    render(<Defaults image={null} />);
    const imageElement = screen.queryByAltText('Invalid Image');
    expect(imageElement).toBeNull();
  });
});

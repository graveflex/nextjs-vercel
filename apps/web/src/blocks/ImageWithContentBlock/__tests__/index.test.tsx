import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import '@testing-library/jest-dom';
import 'jest-styled-components';

import * as stories from '../ImageWithContentBlock.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('ImageWithContentBlock', () => {
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
    render(<Defaults image={undefined} />);
    const imageElement = screen.queryByAltText('Invalid Image');
    expect(imageElement).toBeNull();
  });

  it('renders with default direction', () => {
    const { container } = render(<Defaults direction={null} />);
    expect(container.firstChild).toHaveStyle('flex-direction: column;');
  });

  it('renders with right direction', () => {
    const { container } = render(<Defaults direction="right" />);
    const { firstChild } = container;

    expect(firstChild).toHaveAttribute('direction', 'right');
  });
});

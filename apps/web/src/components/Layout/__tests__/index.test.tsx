import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import { Navigation } from '@web/payload/payload-types';
import * as stories from '../Layout.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Layout', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });
  it('renders nothing if navigation has an error', () => {
    const navigationWithError = { error: 'Error message' };
    render(<Defaults navigation={navigationWithError} />);
    expect(screen.queryByText('Error message')).toBeNull();
  });

  it('renders logo image', () => {
    const navigationWithLogo = {
      logo: {
        url: '/public/Logo.png',
        id: 1,
        updatedAt: '',
        createdAt: ''
      }
    };
    render(<Defaults navigation={navigationWithLogo as Navigation} />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).not.toBeNull();
  });

  it('renders header items if navigation has headerItems', () => {
    const navigationWithHeaderItems = {
      id: 1,
      logo: 1,
      headerItems: [
        { title: 'Home', url: '/', type: 'link' },
        { title: 'Get started', url: '/', type: 'button' }
      ],
      footerItems: []
    };
    render(<Defaults navigation={navigationWithHeaderItems as Navigation} />);
    const headerLink = screen.getByText('Home');
    expect(headerLink).not.toBeNull();
  });

  it('renders footer items with links', () => {
    const navigationWithFooterItems = {
      footerItems: [
        { id: '1', links: [{ title: 'Footer Link 1', url: '/footer-link-1' }] },
        { id: '2', links: [{ title: 'Footer Link 2', url: '/footer-link-2' }] }
      ]
    };
    render(<Defaults navigation={navigationWithFooterItems as Navigation} />);
    expect(screen.getByText('Footer Link 1')).not.toBeNull();
    expect(screen.getByText('Footer Link 2')).not.toBeNull();
  });

  it('renders footer items with links', () => {
    const navigationWithFooterItems = {
      id: 1,
      logo: 2,
      footerItems: []
    };
    render(<Defaults navigation={navigationWithFooterItems as Navigation} />);
    expect(screen.queryByText('Footer Link 1')).toBeNull();
    expect(screen.queryByText('Footer Link 2')).toBeNull();
  });
});

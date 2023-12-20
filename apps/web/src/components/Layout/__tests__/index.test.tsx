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

  it('renders logo image if navigation has a logo', () => {
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
        { links: [{ title: 'Contact', url: '/contact' }] },
        { links: [{ title: 'About Us', url: '/about' }] }
      ]
    };
    render(<Defaults navigation={navigationWithFooterItems as Navigation} />);
    expect(screen.getByText('Contact')).not.toBeNull();
    expect(screen.getByText('About Us')).not.toBeNull();
  });

  it('does not render footer items when footerItems is empty', () => {
    const navigationWithEmptyFooterItems = { id: 1, logo: 2, footerItems: [] };
    render(
      <Defaults navigation={navigationWithEmptyFooterItems as Navigation} />
    );
    expect(screen.queryByText('Contact')).toBeNull();
    expect(screen.queryByText('About Us')).toBeNull();
  });
});

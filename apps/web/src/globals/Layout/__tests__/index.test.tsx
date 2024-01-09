import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import projectAnnotations from 'ui/utils/testSetup';

import type { Layout } from '@web/payload/payload-types';
import * as stories from '../Layout.stories';

const { Defaults } = composeStories(stories, projectAnnotations);

describe('Layout', () => {
  it('component mounts', () => {
    render(<Defaults />);
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
    render(<Defaults {...navigationWithLogo} />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).not.toBeNull();
  });

  it('empty object for logo', () => {
    const navigationWithLogo = {
      id: 1,
      logo: {}
    };
    render(<Defaults {...(navigationWithLogo as Layout)} />);
    const logoImage = screen.queryByAltText('Logo');
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
    render(<Defaults {...(navigationWithHeaderItems as Layout)} />);
    const headerLink = screen.getByText('Home');
    expect(headerLink).not.toBeNull();
  });

  it('renders footer items with links', () => {
    const navigationWithFooterItems = {
      footerItems: [
        { title: 'Footer Link 1', url: '/' },
        { title: 'Footer Link 2', url: '/' }
      ]
    };
    render(<Defaults {...navigationWithFooterItems} />);
    expect(screen.getByText('Footer Link 1')).not.toBeNull();
    expect(screen.getByText('Footer Link 2')).not.toBeNull();
  });

  it('renders footer items with links', () => {
    const navigationWithFooterItems = {
      id: 1,
      logo: 2,
      footerItems: []
    };
    render(<Defaults {...navigationWithFooterItems} />);
    expect(screen.queryByText('Footer Link 1')).toBeNull();
    expect(screen.queryByText('Footer Link 2')).toBeNull();
  });
});

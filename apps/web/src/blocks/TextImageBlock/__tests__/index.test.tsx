import React from 'react';
import projectAnnotations from '@mono/ui/utils/testSetup';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from '../TextImageBlock.stories';

const { Defaults, RightSide, NoBlockConfig } = composeStories(
  stories,
  projectAnnotations
);

describe('TextImageBlock', () => {
  it('component mounts', () => {
    render(<Defaults />);
  });

  it('mounts with other blockOptions', () => {
    render(<RightSide />);
  });

  it('mounts without blockConfig. add button', () => {
    render(<NoBlockConfig />);
  });
});

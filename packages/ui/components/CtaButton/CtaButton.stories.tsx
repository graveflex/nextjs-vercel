import type { Meta, StoryObj } from '@storybook/react';

import type { CtaButtonType } from '.';
import CtaButton from '.';

const meta: Meta<CtaButtonType> = {
  title: 'ui/CtaButton',
  component: CtaButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CtaButtonType>;

export const Defaults: Story = {
  args: {
    cta: {
      link: {
        type: 'external',
        externalHref: '/',
        label: 'Click me',
        icon: { name: 'ArrowRight', color: 'currentColor' }
      }
    }
  }
};

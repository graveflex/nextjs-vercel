import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import Wrapper from '.';

const meta = {
  title: 'components/Wrapper',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => {
    return (
      <div className="min-w-full min-h-svh bg-gray-300 grid content-center justify-items-center">
        <Wrapper {...args} className="bg-pink-500">
          <div className="min-w-full min-h-50 bg-cyan-500" />
        </Wrapper>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const ContentWidthFull: Story = {
  args: {
    contentWidth: 'full'
  }
};

export const ContentWidthXs: Story = {
  args: {
    contentWidth: 'xs'
  }
};

export const ContentWidthMd: Story = {
  args: {
    contentWidth: 'md'
  }
};

export const ContentWidthLg: Story = {
  args: {
    contentWidth: 'lg'
  }
};

export const ContentWidthXl: Story = {
  args: {
    contentWidth: 'xl'
  }
};

export const ContentWidthXxl: Story = {
  args: {
    contentWidth: 'xxl'
  }
};

export const PaddingNone: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-0',
      paddingBottom: 'pb-0'
    }
  }
};

export const PaddingXs: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-2',
      paddingBottom: 'pb-2'
    }
  }
};

export const PaddingSm: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-4',
      paddingBottom: 'pb-4'
    }
  }
};

export const PaddingMd: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-6',
      paddingBottom: 'pb-6'
    }
  }
};

export const PaddingLg: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-8',
      paddingBottom: 'pb-8'
    }
  }
};

export const PaddingXl: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-10',
      paddingBottom: 'pb-10'
    }
  }
};

export const PaddingXxl: Story = {
  args: {
    paddingXs: {
      paddingTop: 'pt-16',
      paddingBottom: 'pb-16'
    }
  }
};

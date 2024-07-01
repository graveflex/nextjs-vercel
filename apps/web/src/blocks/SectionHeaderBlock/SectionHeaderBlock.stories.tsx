import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { SectionHeaderBlockType } from '.';
import SectionHeaderBlock from '.';

const meta: Meta<SectionHeaderBlockType> = {
  title: 'blocks/SectionHeaderBlock',
  component: SectionHeaderBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SectionHeaderBlockType>;

export const Defaults: Story = {
  args: {
    eyebrow: faker.lorem.words(2),
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'center'
  }
};

export const CenterCTA: Story = {
  args: {
    eyebrow: faker.lorem.words(2),
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'center',
    cta: {
      link: {
        label: 'Learn More'
      }
    }
  }
};

export const LeftCTA: Story = {
  args: {
    eyebrow: faker.lorem.words(2),
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'left',
    cta: {
      link: {
        label: 'Learn More'
      }
    }
  }
};

export const RightCTA: Story = {
  args: {
    eyebrow: faker.lorem.words(2),
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'right',
    cta: {
      link: {
        label: 'Learn More'
      }
    }
  }
};

export const NoEyebrow: Story = {
  args: {
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'left',
    cta: {
      link: {
        label: 'Learn More'
      }
    }
  }
};

export const NoEyebrowNoCta: Story = {
  args: {
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(3) },
        {
          type: 'paragraph',
          text: faker.lorem.paragraph(3)
        }
      ])
    },
    alignment: 'center'
  }
};

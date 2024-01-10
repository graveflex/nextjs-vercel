import type { Preview } from '@storybook/react';
import { vi } from 'vitest';

/* eslint-disable */
// @ts-ignore
import projectAnnotations from '../../../apps/docs/.storybook/preview';

vi.mock('next/font/local', async () => {
  return {
    default: () => ({
      style: { fontFamily: 'xxx' },
      className: 'yyy'
    })
  };
});

export default projectAnnotations as Preview;

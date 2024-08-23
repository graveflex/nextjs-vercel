// eslint-disable-next-line
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from '../../apps/docs/.storybook/preview';

import { vi } from 'vitest';

import '@testing-library/jest-dom';
import 'vitest-canvas-mock';

setProjectAnnotations(globalStorybookConfig);

vi.mock('next/font/local', async () => {
  return {
    default: () => ({
      style: { fontFamily: 'xxx' },
      className: 'yyy'
    })
  };
});

vi.mock('next/navigation', async () => {
  return {
    useRouter: () => ({
      push: () => null
    }),
    usePathname: () => 'pathname',
    useSearchParams: () => ({
      get: () => ''
    })
  };
});

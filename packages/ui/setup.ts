import { setProjectAnnotations } from '@storybook/react';
import { vi } from 'vitest';

import '@testing-library/jest-dom';
import 'vitest-canvas-mock';

// eslint-disable-next-line
import * as globalStorybookConfig from '../../apps/web/.storybook/preview';

setProjectAnnotations(globalStorybookConfig);

export default globalStorybookConfig;

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

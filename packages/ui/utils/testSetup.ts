import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from 'docs/.storybook/preview';
import { vi } from 'vitest';

import 'vitest-canvas-mock';
import '@testing-library/jest-dom';

setProjectAnnotations(projectAnnotations);

vi.mock('next/font/local', async () => {
  return {
    default: () => ({
      style: { fontFamily: 'xxx' },
      className: 'yyy'
    })
  };
});

export default projectAnnotations;

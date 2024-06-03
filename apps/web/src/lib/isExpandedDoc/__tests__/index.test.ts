import { describe, expect, it } from 'vitest';

import expandedDoc from '..';

describe('isExpandedDoc', () => {
  it('asserts null if the doc is not an object', () => {
    const resp = expandedDoc<object>(false);
    expect(resp).toBe(null);
  });
});

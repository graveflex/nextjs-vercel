import * as migration_20250220_180507 from './20250220_180507';

export const migrations = [
  {
    up: migration_20250220_180507.up,
    down: migration_20250220_180507.down,
    name: '20250220_180507'
  },
];

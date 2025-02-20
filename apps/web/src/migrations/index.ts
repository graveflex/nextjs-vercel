import * as migration_20250220_192333 from './20250220_192333';

export const migrations = [
  {
    up: migration_20250220_192333.up,
    down: migration_20250220_192333.down,
    name: '20250220_192333'
  },
];

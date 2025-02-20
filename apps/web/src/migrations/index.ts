import * as migration_20250220_190504 from './20250220_190504';

export const migrations = [
  {
    up: migration_20250220_190504.up,
    down: migration_20250220_190504.down,
    name: '20250220_190504'
  },
];

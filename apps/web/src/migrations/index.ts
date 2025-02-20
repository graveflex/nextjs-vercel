import * as migration_20250220_193842 from './20250220_193842';

export const migrations = [
  {
    up: migration_20250220_193842.up,
    down: migration_20250220_193842.down,
    name: '20250220_193842'
  },
];

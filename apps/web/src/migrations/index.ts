import * as migration_20250220_185712 from './20250220_185712';

export const migrations = [
  {
    up: migration_20250220_185712.up,
    down: migration_20250220_185712.down,
    name: '20250220_185712'
  },
];

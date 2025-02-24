import * as migration_20250221_193808 from './20250221_193808';

export const migrations = [
  {
    up: migration_20250221_193808.up,
    down: migration_20250221_193808.down,
    name: '20250221_193808'
  },
];

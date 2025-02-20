import * as migration_20250220_200633 from './20250220_200633';

export const migrations = [
  {
    up: migration_20250220_200633.up,
    down: migration_20250220_200633.down,
    name: '20250220_200633'
  },
];

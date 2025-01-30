import * as migration_20250130_202521 from './20250130_202521';

export const migrations = [
  {
    up: migration_20250130_202521.up,
    down: migration_20250130_202521.down,
    name: '20250130_202521'
  },
];

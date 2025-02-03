import * as migration_20250203_213144 from './20250203_213144';

export const migrations = [
  {
    up: migration_20250203_213144.up,
    down: migration_20250203_213144.down,
    name: '20250203_213144'
  },
];

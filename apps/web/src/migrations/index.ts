import * as migration_20250128_221903 from './20250128_221903';

export const migrations = [
  {
    up: migration_20250128_221903.up,
    down: migration_20250128_221903.down,
    name: '20250128_221903'
  },
];

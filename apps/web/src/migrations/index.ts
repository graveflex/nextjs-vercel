import * as migration_20250213_213232 from './20250213_213232';

export const migrations = [
  {
    up: migration_20250213_213232.up,
    down: migration_20250213_213232.down,
    name: '20250213_213232'
  },
];

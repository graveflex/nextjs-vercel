import * as migration_20250213_160618 from './20250213_160618';

export const migrations = [
  {
    up: migration_20250213_160618.up,
    down: migration_20250213_160618.down,
    name: '20250213_160618'
  },
];

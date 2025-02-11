import * as migration_20250211_163029 from './20250211_163029';

export const migrations = [
  {
    up: migration_20250211_163029.up,
    down: migration_20250211_163029.down,
    name: '20250211_163029'
  },
];

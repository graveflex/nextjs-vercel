import * as migration_20250211_192436 from './20250211_192436';

export const migrations = [
  {
    up: migration_20250211_192436.up,
    down: migration_20250211_192436.down,
    name: '20250211_192436'
  },
];

import * as migration_20250211_195344 from './20250211_195344';

export const migrations = [
  {
    up: migration_20250211_195344.up,
    down: migration_20250211_195344.down,
    name: '20250211_195344'
  },
];

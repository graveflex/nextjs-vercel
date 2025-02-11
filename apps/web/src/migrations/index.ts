import * as migration_20240909_211129 from './20240909_211129';
import * as migration_20250207_201018 from './20250207_201018';
import * as migration_20250210_213415 from './20250210_213415';
import * as migration_20250211_222845 from './20250211_222845';

export const migrations = [
  {
    up: migration_20240909_211129.up,
    down: migration_20240909_211129.down,
    name: '20240909_211129',
  },
  {
    up: migration_20250207_201018.up,
    down: migration_20250207_201018.down,
    name: '20250207_201018',
  },
  {
    up: migration_20250210_213415.up,
    down: migration_20250210_213415.down,
    name: '20250210_213415',
  },
  {
    up: migration_20250211_222845.up,
    down: migration_20250211_222845.down,
    name: '20250211_222845'
  },
];

import * as migration_20240909_211129 from './20240909_211129';
import * as migration_20250207_201018 from './20250207_201018';

export const migrations = [
  {
    up: migration_20240909_211129.up,
    down: migration_20240909_211129.down,
    name: '20240909_211129',
  },
  {
    up: migration_20250207_201018.up,
    down: migration_20250207_201018.down,
    name: '20250207_201018'
  },
];

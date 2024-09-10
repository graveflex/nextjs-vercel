import * as migration_20240909_211129 from './20240909_211129';

export const migrations = [
  {
    up: migration_20240909_211129.up,
    down: migration_20240909_211129.down,
    name: '20240909_211129'
  },
];

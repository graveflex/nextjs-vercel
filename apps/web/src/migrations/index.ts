import * as migration_20250224_173221 from './20250224_173221';

export const migrations = [
  {
    up: migration_20250224_173221.up,
    down: migration_20250224_173221.down,
    name: '20250224_173221'
  },
];

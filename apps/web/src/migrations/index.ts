import * as migration_20250129_202716 from './20250129_202716';

export const migrations = [
  {
    up: migration_20250129_202716.up,
    down: migration_20250129_202716.down,
    name: '20250129_202716'
  },
];

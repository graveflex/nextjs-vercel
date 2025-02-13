import * as migration_20250213_202141 from './20250213_202141';

export const migrations = [
  {
    up: migration_20250213_202141.up,
    down: migration_20250213_202141.down,
    name: '20250213_202141'
  },
];

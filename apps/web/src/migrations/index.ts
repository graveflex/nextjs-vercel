import * as migration_20250212_201316 from './20250212_201316';

export const migrations = [
  {
    up: migration_20250212_201316.up,
    down: migration_20250212_201316.down,
    name: '20250212_201316'
  },
];

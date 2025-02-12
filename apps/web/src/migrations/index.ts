import * as migration_20250212_163505 from './20250212_163505';

export const migrations = [
  {
    up: migration_20250212_163505.up,
    down: migration_20250212_163505.down,
    name: '20250212_163505'
  },
];

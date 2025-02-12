import * as migration_20250212_172421 from './20250212_172421';

export const migrations = [
  {
    up: migration_20250212_172421.up,
    down: migration_20250212_172421.down,
    name: '20250212_172421'
  },
];
